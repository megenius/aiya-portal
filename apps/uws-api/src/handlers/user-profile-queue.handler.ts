import { Logger } from "~/utils/logger";
import { LineUser } from "~/types/line.types";
import { UserProfileMessage, SocialPlatform } from "~/types/app.types";
import { FileService } from "~/services/file.service";
import { WorkerEnv } from "~/types/worker-configuration";

const log = new Logger("UserProfileQueue");

class ProfilePictureHandler {
  private readonly log = new Logger("ProfilePictureHandler");

  constructor(
    private readonly bucket: R2Bucket,
    private readonly fileService: FileService,
    private readonly channelId: string,
    private readonly platform: SocialPlatform
  ) {}

  async handleProfilePicture(
    userId: string,
    pictureUrl: string
  ): Promise<string | null> {
    if (!pictureUrl) return null;

    try {
      const { content, size, mimeType } =
        await this.downloadPicture(pictureUrl);
      const contentKey = await this.storePicture(content, userId);

      // Log the file to D1
      await this.fileService.createFile({
        message_id: crypto.randomUUID(), 
        user_id: userId,
        channel_id: this.channelId,
        content_type: "profile",
        content_key: contentKey,
        provider: this.platform,
        size,
        mime_type: mimeType,
        metadata: {
          originalUrl: pictureUrl,
        },
      });

      this.log.debug("Profile picture handled successfully", {
        userId,
        contentKey,
      });

      return contentKey;
    } catch (error) {
      this.log.error("Failed to handle profile picture", {
        userId,
        error: error instanceof Error ? error.message : "Unknown error",
      });
      return null;
    }
  }

  private async downloadPicture(url: string): Promise<{
    content: ArrayBuffer;
    size: number;
    mimeType: string;
  }> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to download profile picture: ${response.statusText}`
      );
    }

    const mimeType = response.headers.get("content-type") ?? "image/jpeg";
    const size = parseInt(response.headers.get("content-length") ?? "0", 10);
    const content = await response.arrayBuffer();

    return { content, size, mimeType };
  }

  private async storePicture(
    content: ArrayBuffer,
    userId: string
  ): Promise<string> {
    const timestamp = Date.now();
    const contentKey = `${this.platform}/profiles/${userId}.jpg`;

    await this.bucket.put(contentKey, content, {
      customMetadata: {
        userId,
        type: "profile",
        platform: this.platform,
        timestamp: timestamp.toString(),
      },
    });

    return contentKey;
  }
}

export async function handleUserProfileQueue(
  batch: MessageBatch<UserProfileMessage>,
  env: WorkerEnv
) {
  const messages = batch.messages.map((message) => message.body);

  // Group messages by provider and platform
  const groupedMessages = messages.reduce(
    (acc, msg) => {
      const key = `${msg.providerId}-${msg.platform}`;
      if (!acc[key]) {
        acc[key] = {
          channelToken: msg.channelToken,
          platform: msg.platform,
          providerId: msg.providerId,
          users: new Set<string>(),
        };
      }
      acc[key].users.add(msg.userId);
      return acc;
    },
    {} as Record<
      string,
      {
        channelToken: string;
        platform: SocialPlatform;
        providerId: string;
        users: Set<string>;
      }
    >
  );

  // Process each group
  for (const data of Object.values(groupedMessages)) {
    try {
      const id = env.CHANNEL_DURABLE.idFromName(data.providerId);
      const channelDO = env.CHANNEL_DURABLE.get(id);

      // Initialize profile picture handler
      const pictureHandler = new ProfilePictureHandler(
        env.CONTENT_BUCKET,
        new FileService(env.DB),
        data.providerId,
        data.platform
      );

      // Process users in chunks to avoid rate limits
      const userChunks = chunkArray(Array.from(data.users), 5);

      for (const chunk of userChunks) {
        const profiles = await Promise.allSettled(
          chunk.map((userId) =>
            fetchUserProfile(userId, data.channelToken, data.platform)
          )
        );

        // Store successful profile fetches
        for (let i = 0; i < profiles.length; i++) {
          const result = profiles[i];
          const userId = chunk[i];

          if (result.status === "fulfilled") {
            try {
              // Handle profile picture if exists
              if (result.value.pictureUrl) {
                const storedPictureKey =
                  await pictureHandler.handleProfilePicture(
                    userId,
                    result.value.pictureUrl
                  );
                if (storedPictureKey) {
                  result.value.pictureUrl = storedPictureKey;
                }
              }

              await channelDO.upsertUser(result.value);
              log.debug("Updated user profile", {
                userId,
                providerId: data.providerId,
                platform: data.platform,
              });
            } catch (error) {
              log.error("Failed to store user profile", {
                userId,
                providerId: data.providerId,
                platform: data.platform,
                error,
              });
            }
          } else {
            log.error("Failed to fetch user profile", {
              userId,
              providerId: data.providerId,
              platform: data.platform,
              error: result.reason,
            });
          }
        }

        // Add delay between chunks
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    } catch (error) {
      log.error(`Error processing provider ${data.providerId}:`, error);
    }
  }
}

async function fetchUserProfile(
  userId: string,
  channelToken: string,
  platform: SocialPlatform
): Promise<LineUser> {
  switch (platform) {
    case "line":
      return fetchLineUserProfile(userId, channelToken);
    case "facebook":
      return fetchFacebookUserProfile(userId, channelToken);
    case "instagram":
      return fetchInstagramUserProfile(userId, channelToken);
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
}

async function fetchLineUserProfile(
  userId: string,
  channelToken: string
): Promise<LineUser> {
  const response = await fetch(`https://api.line.me/v2/bot/profile/${userId}`, {
    headers: {
      Authorization: `Bearer ${channelToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Profile fetch failed: ${response.statusText}`);
  }

  const profile = await response.json<{
    userId: string;
    displayName: string;
    pictureUrl: string;
    statusMessage: string;
    language: string;
  }>();

  return {
    userId: profile.userId,
    displayName: profile.displayName,
    pictureUrl: profile.pictureUrl,
    statusMessage: profile.statusMessage,
    language: profile.language,
    updatedAt: Date.now(),
  };
}

async function fetchFacebookUserProfile(
  userId: string,
  channelToken: string
): Promise<LineUser> {
  const response = await fetch(
    `https://graph.facebook.com/${userId}?fields=name,picture,locale&access_token=${channelToken}`
  );

  if (!response.ok) {
    throw new Error(`Facebook profile fetch failed: ${response.statusText}`);
  }

  const profile = await response.json();
  return {
    userId,
    displayName: profile.name,
    pictureUrl: profile.picture?.data?.url,
    language: profile.locale,
    updatedAt: Date.now(),
  };
}

async function fetchInstagramUserProfile(
  userId: string,
  channelToken: string
): Promise<LineUser> {
  const response = await fetch(
    `https://graph.instagram.com/${userId}?fields=username&access_token=${channelToken}`
  );

  if (!response.ok) {
    throw new Error(`Instagram profile fetch failed: ${response.statusText}`);
  }

  const profile = await response.json();
  return {
    userId,
    displayName: profile.username,
    updatedAt: Date.now(),
  };
}

function chunkArray<T>(array: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
}

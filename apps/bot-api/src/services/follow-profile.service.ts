import axios, { AxiosError } from 'axios';

interface FacebookProfile {
    id: string;
    name: string;
    picture?: {
        data?: {
            url?: string;
        };
    };
}

export interface LineProfile {
    userId: string;
    displayName: string;
    pictureUrl?: string;
}

// ✅ ใช้ร่วมกัน
function handleAxiosError(error: unknown, platform: string, id: string): never {
    if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data || error.message;
        console.error(`${platform} API error [${status}] for ID ${id}:`, message);

        if (status === 403 || status === 401) {
            throw new Error(`${platform} token invalid or expired`);
        } else if (status === 404) {
            throw new Error(`${platform} user not found: ${id}`);
        }
    }

    throw new Error(`Unknown error fetching ${platform} profile`);
}

export async function getFacebookFollowerProfileGraphApi(
    socialId: string,
    channelToken: string
): Promise<LineProfile> {
    const url = `https://graph.facebook.com/${socialId}?fields=id,name,picture&access_token=${channelToken}`;

    try {
        const response = await axios.get<FacebookProfile>(url);
        const fbData = response.data;

        return {
            userId: `U${fbData.id}`,
            displayName: fbData.name || "Unknown",
            pictureUrl: fbData.picture?.data?.url || "",
        };
    } catch (error) {
        handleAxiosError(error, "Facebook", socialId);
    }
}

export async function getLineFollowerProfileMessagingApi(
    socialId: string,
    channelToken: string
): Promise<LineProfile> {
    const url = `https://api.line.me/v2/bot/profile/${socialId}`;
    const headers = {
        'Authorization': `Bearer ${channelToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    try {
        const response = await axios.get<LineProfile>(url, { headers });
        const lineData = response.data;

        return {
            userId: lineData.userId,
            displayName: lineData.displayName || "Unknown",
            pictureUrl: lineData.pictureUrl || "",
        };
    } catch (error) {
        handleAxiosError(error, "LINE", socialId);
    }
}

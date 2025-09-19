import {
  createItem,
  readItem,
  readItems,
  updateItem,
  aggregate,
} from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

// Get campaigns list with user stats
export const getCampaigns = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const { liff_id } = c.get("jwtPayload");
      const directus = c.get("directAdmin");

      // Get campaigns that belong to this LIFF page
      const campaigns = await directus.request(
        readItems("campaigns", {
          fields: ["*"],
          filter: {
            status: { _eq: "published" },
            // Filter by page association through pages_liff_campaigns
            // _and: [
            //   {
            //     id: {
            //       _in: {
            //         _query: {
            //           collection: "pages_liff_campaigns",
            //           field: ["campaigns_id"],
            //           filter: {
            //             pages_liff_id: { _eq: liff_id },
            //           },
            //         },
            //       },
            //     },
            //   },
            // ],
          },
          sort: ["-date_created"],
        })
      );

      // Get user registration status for each campaign
      const campaignsWithStats = await Promise.all(
        campaigns.map(async (campaign) => {
          // Get user registration
          const registrations = await directus.request(
            readItems("user_campaign_registrations", {
              filter: {
                campaign: { _eq: campaign.id },
                user: { _eq: userId },
              },
              limit: 1,
            })
          );

          const registration = registrations[0];

          // Get user credits
          const userCredits = await directus.request(
            readItems("user_reward_credits", {
              filter: {
                campaign_id: { _eq: campaign.id },
                user_id: { _eq: userId },
              },
              limit: 1,
            })
          );

          const credits = userCredits[0];

          // Determine registration status
          let registrationStatus = "not_started";
          if (registration) {
            if (registration.registered_at) {
              registrationStatus = "registered";
            } else if (registration.has_agreed_pdpa) {
              registrationStatus = "form_pending";
            } else {
              registrationStatus = "pdpa_pending";
            }
          }

          return {
            ...campaign,
            user_stats: {
              registration_status: registrationStatus,
              total_credits: credits?.total_earned || 0,
              is_registered: !!registration?.registered_at,
              has_agreed_pdpa: !!registration?.has_agreed_pdpa,
            },
          };
        })
      );

      return c.json({ data: campaignsWithStats });
    } catch (error) {
      console.error("Error getting campaigns:", error);
      return c.json({ error: "Failed to get campaigns" }, 500);
    }
  }
);

// Get single campaign with user stats
export const getCampaign = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      console.log("ddd");
      const { id: userId } = c.get("jwtPayload");
      const campaignId = c.req.param("id");
      const directus = c.get("directAdmin");

      // Get campaign
      if (!campaignId) {
        return c.json({ error: "Campaign ID is required" }, 400);
      }

      const campaign = await directus.request(
        readItem("campaigns", campaignId as string, {
          fields: ["*"],
        })
      );

      if (!campaign) {
        return c.json({ error: "Campaign not found" }, 404);
      }

      // Get user registration
      const registrations = await directus.request(
        readItems("user_campaign_registrations", {
          filter: {
            campaign: { _eq: campaignId },
            user: { _eq: userId },
          },
          limit: 1,
        })
      );

      const registration = registrations[0];

      // Get user credits
      const userCredits = await directus.request(
        readItems("user_reward_credits", {
          filter: {
            campaign_id: { _eq: campaignId },
            user_id: { _eq: userId },
          },
          limit: 1,
        })
      );

      const credits = userCredits[0];

      // Determine registration status
      let registrationStatus = "not_started";
      if (registration) {
        if (registration.registered_at) {
          registrationStatus = "registered";
        } else if (registration.has_agreed_pdpa) {
          registrationStatus = "form_pending";
        } else {
          registrationStatus = "pdpa_pending";
        }
      }

      const campaignWithStats = {
        ...campaign,
        user_stats: {
          registration_status: registrationStatus,
          total_credits: credits?.total_earned || 0,
          is_registered: !!registration?.registered_at,
          has_agreed_pdpa: !!registration?.has_agreed_pdpa,
        },
      };

      return c.json({ data: campaignWithStats });
    } catch (error) {
      console.error("Error getting campaign:", error);
      return c.json({ error: "Failed to get campaign" }, 500);
    }
  }
);

// PDPA consent
export const consentPDPA = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const campaignId = c.req.param("id");
      if (!campaignId) {
        return c.json({ error: "Campaign ID is required" }, 400);
      }
      const { has_agreed_pdpa, pdpa_agreed_at } = await c.req.json();
      const directus = c.get("directAdmin");

      // Check if registration already exists
      const existingRegistrations = await directus.request(
        readItems("user_campaign_registrations", {
          filter: {
            campaign: { _eq: campaignId },
            user: { _eq: userId },
          },
          limit: 1,
        })
      );

      let registration;
      if (existingRegistrations.length > 0) {
        // Update existing registration
        registration = await directus.request(
          updateItem(
            "user_campaign_registrations",
            existingRegistrations[0].id,
            {
              has_agreed_pdpa,
              pdpa_agreed_at,
            }
          )
        );
      } else {
        // Create new registration
        registration = await directus.request(
          createItem("user_campaign_registrations", {
            campaign: campaignId,
            user: userId,
            has_agreed_pdpa,
            pdpa_agreed_at,
          })
        );
      }

      return c.json({
        success: true,
        data: {
          registration_id: registration.id,
          next_step: "registration_form",
        },
      });
    } catch (error) {
      console.error("Error consenting PDPA:", error);
      return c.json({ error: "Failed to consent PDPA" }, 500);
    }
  }
);

// Register campaign
export const registerCampaign = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const { id: campaignId } = c.req.param();
      const { registration_data, has_agreed_pdpa, pdpa_agreed_at } =
        await c.req.json();
      const directus = c.get("directAdmin");

      // Get existing registration
      const existingRegistrations = await directus.request(
        readItems("user_campaign_registrations", {
          filter: {
            campaign: { _eq: campaignId },
            user: { _eq: userId },
          },
          limit: 1,
        })
      );

      let registration = existingRegistrations[0];

      // If no registration exists yet, create one now
      if (!registration) {
        registration = await directus.request(
          createItem("user_campaign_registrations", {
            campaign: campaignId,
            user: userId,
          })
        );
      }

      // Prepare fields to update in one go
      const nowIso = new Date().toISOString();
      const updatePayload: Record<string, any> = {
        registration_data,
        registered_at: nowIso,
      };

      // If PDPA values are provided, store them as part of this request
      if (typeof has_agreed_pdpa !== "undefined") {
        updatePayload.has_agreed_pdpa = !!has_agreed_pdpa;
        if (has_agreed_pdpa) {
          updatePayload.pdpa_agreed_at = pdpa_agreed_at || nowIso;
        }
      }

      const updatedRegistration = await directus.request(
        updateItem(
          "user_campaign_registrations",
          registration.id,
          updatePayload
        )
      );

      return c.json({
        success: true,
        data: {
          registration_id: updatedRegistration.id,
          status: "registered",
        },
      });
    } catch (error) {
      console.error("Error registering campaign:", error);
      return c.json({ error: "Failed to register campaign" }, 500);
    }
  }
);

// Get campaign missions with user progress
export const getCampaignMissions = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const { id: campaignId } = c.req.param();
      const directus = c.get("directAdmin");
      const nowIso = new Date().toISOString();

      // Get missions for campaign (filter by time window if start_date/end_date exist)
      const missions = await directus.request(
        readItems("campaign_missions", {
          filter: {
            campaign: { _eq: campaignId },
            _and: [
              {
                _or: [
                  { start_date: { _null: true } },
                  { start_date: { _lte: nowIso } },
                ],
              },
              {
                _or: [
                  { end_date: { _null: true } },
                  { end_date: { _gte: nowIso } },
                ],
              },
            ],
          },
          sort: ["sort"],
        })
      );

      // Get user submissions for these missions
      const missionIds = missions.map((m) => m.id);
      const userSubmissions =
        missionIds.length > 0
          ? await directus.request(
              readItems("user_mission_submissions", {
                filter: {
                  mission_id: { _in: missionIds },
                  user_id: { _eq: userId },
                },
                sort: ["-submitted_at"],
              })
            )
          : [];

      // Group submissions by mission (normalize mission_id to string)
      const submissionsByMission = (userSubmissions as any[]).reduce(
        (acc, submission) => {
          const mid =
            typeof submission.mission_id === "object"
              ? submission.mission_id?.id
              : submission.mission_id;
          if (!mid) return acc;
          if (!acc[mid]) {
            acc[mid] = [];
          }
          acc[mid].push(submission);
          return acc;
        },
        {} as Record<string, any[]>
      );

      // Add user progress to missions (augment fields used by frontend)
      const missionsWithProgress = missions.map((mission) => {
        const submissions = submissionsByMission[mission.id] || [];
        const lastSubmission = submissions[0]; // Most recent first due to sort
        let freq = (mission as any)?.frequency
          ? String((mission as any).frequency).toUpperCase()
          : "";
        if (freq !== "ONCE" && freq !== "MULTIPLE") {
          freq = "ONCE";
        }
        const has_started = submissions.length > 0;
        const is_completed = freq === "ONCE" ? submissions.length > 0 : false;
        const published = (mission as any)?.status === "published";
        const startOk = !(mission as any)?.start_date
          ? true
          : new Date((mission as any).start_date) <= new Date(nowIso);
        const endOk = !(mission as any)?.end_date
          ? true
          : new Date((mission as any).end_date) >= new Date(nowIso);
        const is_available = published && startOk && endOk;

        return {
          ...mission,
          user_progress: {
            completed_count: submissions.length,
            can_submit: freq === "MULTIPLE" || submissions.length === 0,
            last_submission_at: lastSubmission?.submitted_at || null,
            // additional fields expected by app
            is_completed,
            has_started,
            is_available,
            submitted_at: lastSubmission?.submitted_at || null,
          },
          user_submissions: submissions,
        };
      });

      return c.json({ data: missionsWithProgress });
    } catch (error) {
      console.error("Error getting campaign missions:", error);
      return c.json({ error: "Failed to get campaign missions" }, 500);
    }
  }
);

// Submit mission
export const submitMission = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const { missionId } = c.req.param();
      const { submission_data } = await c.req.json();
      const directus = c.get("directAdmin");
      const now = new Date();

      // Get mission details
      const mission = await directus.request(
        readItem("campaign_missions", missionId, {
          fields: ["*", { campaign: ["id"] }],
        })
      );

      if (!mission) {
        return c.json({ error: "Mission not found" }, 404);
      }

      // Prevent submission if mission is not available (status/time window)
      const published = (mission as any)?.status === "published";
      const startOk = !(mission as any)?.start_date
        ? true
        : new Date((mission as any).start_date) <= now;
      const endOk = !(mission as any)?.end_date
        ? true
        : new Date((mission as any).end_date) >= now;
      if (!published || !startOk || !endOk) {
        return c.json({ error: "Mission is not available" }, 403);
      }

      // Check if user can submit (for ONCE missions)
      let freqSubmit = (mission as any)?.frequency
        ? String((mission as any).frequency).toUpperCase()
        : "";
      if (freqSubmit !== "ONCE" && freqSubmit !== "MULTIPLE") {
        freqSubmit = "ONCE";
      }
      if (freqSubmit === "ONCE") {
        const existingSubmissions = await directus.request(
          readItems("user_mission_submissions", {
            filter: {
              mission_id: { _eq: missionId },
              user_id: { _eq: userId },
            },
            limit: 1,
          })
        );

        if (existingSubmissions.length > 0) {
          return c.json({ error: "Mission can only be completed once" }, 400);
        }
      }

      // Create submission
      const submission = await directus.request(
        createItem("user_mission_submissions", {
          mission_id: missionId,
          user_id: userId,
          submission_data,
          submitted_at: new Date().toISOString(),
        })
      );

      // Resolve campaign id from mission relation
      const missionCampaignId =
        typeof mission.campaign === "object"
          ? mission.campaign?.id
          : (mission.campaign as any);
      if (!missionCampaignId) {
        return c.json({ error: "Mission campaign is missing" }, 400);
      }

      // Create credit transaction (link to submission; amount is derived later from mission.reward_credits)
      const transaction = await directus.request(
        createItem("reward_credit_transactions", {
          campaign_id: missionCampaignId,
          user_id: userId,
          related_submission_id: submission.id,
        })
      );

      // Update user total credits
      const existingCredits = await directus.request(
        readItems("user_reward_credits", {
          filter: {
            campaign_id: { _eq: missionCampaignId },
            user_id: { _eq: userId },
          },
          limit: 1,
        })
      );

      let newTotalCredits;
      if (existingCredits.length > 0) {
        const currentTotal = existingCredits[0].total_earned || 0;
        newTotalCredits = currentTotal + mission.reward_credits;

        await directus.request(
          updateItem("user_reward_credits", existingCredits[0].id, {
            total_earned: newTotalCredits,
          })
        );
      } else {
        newTotalCredits = mission.reward_credits;

        await directus.request(
          createItem("user_reward_credits", {
            campaign_id: missionCampaignId,
            user_id: userId,
            total_earned: newTotalCredits,
          })
        );
      }

      return c.json({
        success: true,
        data: {
          submission_id: submission.id,
          credits_earned: mission.reward_credits,
          new_total_credits: newTotalCredits,
          transaction_id: transaction.id,
        },
      });
    } catch (error) {
      console.error("Error submitting mission:", error);
      return c.json({ error: "Failed to submit mission" }, 500);
    }
  }
);

// Get campaign credits and transactions
export const getCampaignCredits = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const { id: campaignId } = c.req.param();
      const directus = c.get("directAdmin");

      // Get user credits
      const userCredits = await directus.request(
        readItems("user_reward_credits", {
          filter: {
            campaign_id: { _eq: campaignId },
            user_id: { _eq: userId },
          },
          limit: 1,
        })
      );

      const credits = userCredits[0];

      // Get transactions first
      const transactions = await directus.request(
        readItems("reward_credit_transactions", {
          fields: ["*"],
          filter: {
            campaign_id: { _eq: campaignId },
            user_id: { _eq: userId },
          },
          sort: ["-date_created"],
        })
      );

      // Build transactions by following related_submission_id -> submission -> mission
      const submissionIds = Array.from(
        new Set(
          (transactions as any[])
            .map((t) =>
              typeof t.related_submission_id === "object"
                ? t.related_submission_id?.id
                : t.related_submission_id
            )
            .filter(Boolean)
        )
      ) as string[];

      const submissions = submissionIds.length
        ? await directus.request(
            readItems("user_mission_submissions", {
              fields: ["id", "mission_id", "submitted_at"],
              filter: { id: { _in: submissionIds } },
            })
          )
        : [];

      const subById = new Map<string, any>(
        (submissions as any[]).map((s) => [s.id, s])
      );

      const missionIds = Array.from(
        new Set(
          (submissions as any[])
            .map((s) =>
              typeof s.mission_id === "object" ? s.mission_id?.id : s.mission_id
            )
            .filter(Boolean)
        )
      ) as string[];

      const missionDetails = missionIds.length
        ? await directus.request(
            readItems("campaign_missions", {
              fields: ["id", "title", "reward_credits"],
              filter: { id: { _in: missionIds } },
            })
          )
        : [];
      const missionMap = new Map<string, any>(
        (missionDetails as any[]).map((m) => [m.id, m])
      );

      const formattedTransactions = (transactions as any[]).map((t) => {
        const subId =
          typeof t.related_submission_id === "object"
            ? t.related_submission_id?.id
            : t.related_submission_id;
        const submission = subById.get(subId);
        const missionId = submission
          ? typeof submission.mission_id === "object"
            ? submission.mission_id?.id
            : submission.mission_id
          : undefined;
        const mission = missionId ? missionMap.get(missionId) : undefined;
        const title = mission?.title || "";
        const amount = mission?.reward_credits || 0;
        return {
          id: t.id,
          mission_id: missionId,
          mission_title: title,
          amount,
          type: "mission_reward" as const,
          description: title,
          created_at: t.date_created,
        };
      });

      const current_balance = formattedTransactions.reduce(
        (sum, t) => sum + (t.amount || 0),
        0
      );
      const total_earned = formattedTransactions
        .filter((t) => (t.amount || 0) > 0)
        .reduce((sum, t) => sum + (t.amount || 0), 0);

      return c.json({
        data: {
          total_earned,
          current_balance,
          transactions: formattedTransactions,
        },
      });
    } catch (error) {
      console.error("Error getting campaign credits:", error);
      return c.json({ error: "Failed to get campaign credits" }, 500);
    }
  }
);

// Get campaign submissions history
export const getCampaignSubmissions = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const { id: campaignId } = c.req.param();
      const directus = c.get("directAdmin");

      // Get submissions for this campaign
      const submissions = await directus.request(
        readItems("user_mission_submissions", {
          fields: ["*"],
          filter: {
            user_id: { _eq: userId },
          },
          sort: ["-submitted_at"],
        })
      );

      // Fetch mission details for submissions
      const subMissionIds = Array.from(
        new Set(
          (submissions as any[])
            .map((s) =>
              typeof s.mission_id === "object" ? s.mission_id?.id : s.mission_id
            )
            .filter(Boolean)
        )
      );

      const subMissionDetails = subMissionIds.length
        ? await directus.request(
            readItems("campaign_missions", {
              fields: ["id", "title", "campaign", "reward_credits"],
              filter: {
                id: { _in: subMissionIds as string[] },
                campaign: { _eq: campaignId },
              },
            })
          )
        : [];
      const subMissionMap = new Map<string, any>(
        (subMissionDetails as any[]).map((m) => [m.id, m])
      );

      const formattedSubmissions = (submissions as any[])
        .filter((s) => {
          const mid =
            typeof s.mission_id === "object" ? s.mission_id?.id : s.mission_id;
          return subMissionMap.has(mid);
        })
        .map((submission) => {
          const missionId =
            typeof submission.mission_id === "object"
              ? submission.mission_id?.id
              : submission.mission_id;
          const mission = subMissionMap.get(missionId);
          return {
            id: submission.id,
            mission_id: missionId,
            mission_title: mission?.title,
            submission_data: submission.submission_data,
            credits_earned: mission?.reward_credits,
            submitted_at: submission.submitted_at,
          };
        });

      return c.json({ data: formattedSubmissions });
    } catch (error) {
      console.error("Error getting campaign submissions:", error);
      return c.json({ error: "Failed to get campaign submissions" }, 500);
    }
  }
);

// Get single mission with user progress
export const getMission = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const { missionId } = c.req.param();
      const directus = c.get("directAdmin");

      // Get mission
      const mission = await directus.request(
        readItem("campaign_missions", missionId, {
          fields: [
            "*",
            {
              campaign: ["id", "title"],
            },
          ],
        })
      );

      if (!mission) {
        return c.json({ error: "Mission not found" }, 404);
      }

      // Get user submissions for this mission
      const userSubmissions = await directus.request(
        readItems("user_mission_submissions", {
          filter: {
            mission_id: { _eq: missionId },
            user_id: { _eq: userId },
          },
          sort: ["-submitted_at"],
        })
      );

      const lastSubmission = userSubmissions[0];

      let freqGet = (mission as any)?.frequency
        ? String((mission as any).frequency).toUpperCase()
        : "";
      if (freqGet !== "ONCE" && freqGet !== "MULTIPLE") {
        freqGet = "ONCE";
      }
      const missionWithProgress = {
        ...mission,
        user_progress: {
          completed_count: userSubmissions.length,
          can_submit: freqGet === "MULTIPLE" || userSubmissions.length === 0,
          last_submission_at: lastSubmission?.submitted_at || null,
          // additional fields expected by app
          is_completed: freqGet === "ONCE" ? userSubmissions.length > 0 : false,
          has_started: userSubmissions.length > 0,
          is_available: (() => {
            const published = (mission as any)?.status === "published";
            const now = new Date();
            const startOk = !(mission as any)?.start_date
              ? true
              : new Date((mission as any).start_date) <= now;
            const endOk = !(mission as any)?.end_date
              ? true
              : new Date((mission as any).end_date) >= now;
            return published && startOk && endOk;
          })(),
          submitted_at: lastSubmission?.submitted_at || null,
        },
        user_submissions: userSubmissions,
      };

      return c.json({ data: missionWithProgress });
    } catch (error) {
      console.error("Error getting mission:", error);
      return c.json({ error: "Failed to get mission" }, 500);
    }
  }
);

// Get campaign ranking (top users by total earned credits)
export const getCampaignRanking = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const campaignId = c.req.param("id");
      const jwt: any = c.get("jwtPayload") as any;
      const currentUserId = jwt?.id as string | undefined;
      const liff_id = jwt?.liff_id as string | undefined;
      const directus = c.get("directAdmin");

      const limit = Number(c.req.query("limit") || 50);
      const offset = Number(c.req.query("offset") || 0);

      // Fetch users who earned credits for this campaign
      const creditsRows = (await directus.request(
        readItems("user_reward_credits", {
          fields: ["user_id", "total_earned"],
          filter: { campaign_id: { _eq: campaignId } },
        })
      )) as any[];

      // Fetch users who registered for this campaign (include zero-credit users)
      const registrationRows = (await directus.request(
        readItems("user_campaign_registrations", {
          fields: ["user", "registered_at"],
          filter: { campaign: { _eq: campaignId } },
        })
      )) as any[];

      // Build candidate user id set
      const userIds = new Set<string>();
      for (const r of creditsRows) {
        if (r?.user_id) userIds.add(String(r.user_id));
      }
      for (const r of registrationRows) {
        if (r?.user) userIds.add(String(r.user));
      }
      const userIdList = Array.from(userIds);

      // Fetch profiles for these users (scoped to the same liff page if provided)
      const profiles = userIdList.length
        ? await directus.request(
            readItems("profiles", {
              fields: ["id", "display_name", "picture_url", "liff_id"],
              filter: {
                id: { _in: userIdList },
                ...(liff_id ? { liff_id: { _eq: liff_id } } : {}),
              },
            })
          )
        : [];
      const profileMap = new Map<string, any>(
        (profiles as any[]).map((p) => [p.id, p])
      );

      // Build credits map (default 0)
      const creditsMap = new Map<string, number>();
      for (const row of creditsRows) {
        if (!row?.user_id) continue;
        creditsMap.set(String(row.user_id), Number(row.total_earned || 0));
      }

      // Build items from profiles to guarantee liff_id scoping
      let items = (profiles as any[]).map((p) => ({
        id: p.id as string,
        name: p.display_name || "",
        displayName: p.display_name || "",
        pictureUrl: p.picture_url || null,
        credits: creditsMap.get(String(p.id)) || 0,
      }));

      // Sort by credits desc, then name asc for stability
      items.sort((a, b) => {
        if (b.credits !== a.credits)
          return Number(b.credits) - Number(a.credits);
        return String(a.name || "").localeCompare(String(b.name || ""));
      });

      // Apply pagination and rank
      const totalAll = items.length;
      const paged = items.slice(offset, offset + limit).map((it, idx) => ({
        ...it,
        rank: offset + idx + 1,
      }));

      // Get current user's credits and rank
      let me: any = null;
      if (currentUserId) {
        const meProfileArr = await directus.request(
          readItems("profiles", {
            fields: ["id", "display_name", "picture_url", "liff_id"],
            filter: {
              id: { _eq: currentUserId },
              ...(liff_id ? { liff_id: { _eq: liff_id } } : {}),
            },
            limit: 1,
          })
        );
        const mp = (meProfileArr as any[])[0];
        if (mp) {
          const meCredits = creditsMap.get(String(currentUserId)) || 0;
          // Compute rank within filtered items
          const meRank =
            items.findIndex((u) => String(u.id) === String(currentUserId)) +
              1 || null;
          me = {
            id: String(currentUserId),
            name: mp?.display_name || "",
            displayName: mp?.display_name || "",
            pictureUrl: mp?.picture_url || null,
            credits: meCredits,
            rank: meRank || undefined,
          };
        }
      }

      // Total is number of filtered users in current liff
      const total = Number(totalAll);

      return c.json({ data: { items: paged, me, total } });
    } catch (error) {
      console.error("Error getting campaign ranking:", error);
      return c.json({ error: "Failed to get campaign ranking" }, 500);
    }
  }
);

// Upload file for missions
export const uploadFile = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const formData = await c.req.formData();
      const file = formData.get("file") as File;

      if (!file) {
        return c.json({ error: "No file provided" }, 400);
      }

      // Validate file type (images only for now)
      if (!file.type.startsWith("image/")) {
        return c.json({ error: "Only image files are allowed" }, 400);
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        return c.json({ error: "File size too large (max 10MB)" }, 400);
      }

      // Upload to Directus Files
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);

      const uploadResponse = await fetch(`${c.env.DIRECTUS_URL}/files`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${c.get("token")}`,
        },
        body: uploadFormData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload file to Directus");
      }

      const uploadResult = (await uploadResponse.json()) as any;

      return c.json({
        data: {
          file_id: uploadResult.data.id,
          url: `${c.env.DIRECTUS_URL}/assets/${uploadResult.data.id}`,
          mime_type: file.type,
          size: file.size,
        },
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      return c.json({ error: "Failed to upload file" }, 500);
    }
  }
);

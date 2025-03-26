import {
  createItem,
  deleteItem,
  readItem,
  readItems,
  updateItem,
} from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { nanoid } from "nanoid";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

// getProfiles
export const getProfiles = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { status, q } = c.req.query();

    const filters: any = {};
    if (status) filters.status = { _eq: status };
    if (q) filters.name = { _icontains: q };

    const profiles = await directus.request(
      readItems("profiles", {
        filter: filters,
      })
    );

    if (profiles.length === 0) {
      return c.json(null);
    }

    if (profiles.length === 1) {
      return c.json(profiles[0]);
    }

    return c.json(profiles);
  }
);

// getProfilesByUserId
export const getProfilesByUserId = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { userId } = c.req.param();

    const filters: any = {};
    if (userId) filters.user_id = { _eq: userId };

    const profiles = await directus.request(
      readItems("profiles", {
        filter: filters,
      })
    );

    if (profiles.length === 0) {
      return c.json(null);
    }

    if (profiles.length === 1) {
      return c.json(profiles[0]);
    }

    return c.json(profiles);
  }
);

// getProfilesByType
export const getProfilesByType = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { profileType } = c.req.param();

    const filters: any = {};
    if (profileType) filters.profile_type = { _eq: profileType };

    const profiles = await directus.request(
      readItems("profiles", {
        filter: filters,
      })
    );

    if (profiles.length === 0) {
      return c.json(null);
    }

    if (profiles.length === 1) {
      return c.json(profiles[0]);
    }

    return c.json(profiles);
  }
);

// getProfile
export const getProfile = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param();
    const directus = c.get("directAdmin");
    const profile = await directus.request(readItem("profiles", id));

    if (!profile) {
      return c.json(null);
    }

    return c.json(profile);
  }
);

// createProfile
export const createProfile = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const profileData = await c.req.json();
    const directus = c.get("directAdmin");

    console.log("Creating profile with data:", profileData);

    // Extract liff_id and uid from profileData
    const { liff_id, uid, referrer_id } = profileData; // เพิ่มการรับค่า referrer_id

    if (!liff_id || !uid) {
      return c.json({ error: "liff_id and uid are required" }, 400);
    }

    // Generate hash using Web Crypto API
    const hashString = `${liff_id}${uid}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(hashString);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    // Convert buffer to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // Format ID as UAxxx where xxx is 32 characters from the hash
    const id = `UA${hashHex.substring(0, 32)}`;

    console.log("Generated ID:", id);
    console.log("Referrer ID:", referrer_id); // Log referrer ID

    // เพิ่มข้อมูลเก็บประวัติการ referral หากมี referrer_id
    if (referrer_id) {
      try {
        // ตรวจสอบว่า referrer_id มีอยู่จริงไหม
        const referrer = await directus.request(readItem("profiles", referrer_id)).catch(() => null);
        if (referrer) {
          console.log("Found referrer:", referrer);
          
          // บันทึกประวัติการ referral ลงในตาราง profile_referrals (ถ้ามี)
          await directus.request(
            createItem("referrals", {
              referrer_id: referrer_id,
              referred_id: id,
              status: "completed",
            })
          ).catch(error => {
            console.error("Error creating referral record:", error);
            // ไม่ return error เพื่อให้การสร้าง profile ยังดำเนินต่อไปได้
          });
        } else {
          console.log("Referrer not found:", referrer_id);
        }
      } catch (error) {
        console.error("Error processing referrer:", error);
        // ไม่ return error เพื่อให้การสร้าง profile ยังดำเนินต่อไปได้
      }
    }

    const profile = await directus
      .request(createItem("profiles", { id, ...profileData }))
      .catch((error) => {
        console.error("Error creating profile:", error);
        return c.json({ error: "Failed to create profile" }, 500);
      });

    return c.json(profile);
  }
);

// updateProfile
export const updateProfile = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param();
    const profileData = await c.req.json();
    const directus = c.get("directAdmin");

    const profile = await directus.request(
      updateItem("profiles", id, profileData)
    );

    return c.json(profile);
  }
);

// deleteProfile
export const deleteProfile = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param();
    const directus = c.get("directAdmin");

    await directus.request(deleteItem("profiles", id));

    return c.json({ success: true });
  }
);

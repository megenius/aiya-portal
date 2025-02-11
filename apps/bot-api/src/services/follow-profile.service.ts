import axios from 'axios';

interface FacebookProfile {
    id: string;
    name: string;
    picture?: {
        data?: {
            url?: string;
        };
    };
}

interface LineProfile {
    userId: string;
    displayName: string;
    pictureUrl?: string;
}

export async function getFacebookFollowerProfileGraphApi(
    socialId: string,
    channelToken: string
): Promise<LineProfile> {
    const url = `https://graph.facebook.com/${socialId}?fields=id,name,picture&access_token=${channelToken}`;

    try {
        const response = await axios.get<FacebookProfile>(url);
        const fbData = response.data;

        const formattedProfile: LineProfile = {
            userId: `U${fbData.id}`, // Ensure consistency with Line profile
            displayName: fbData.name || "Unknown",
            pictureUrl: fbData.picture?.data?.url || "",
        };

        return formattedProfile;
    } catch (error) {
        console.error(`❌ Error fetching Facebook profile (ID: ${socialId}):`, error);
        throw error;
    }
}

export async function getLineFollowerProfileMessagingApi(
    socialId: string,
    channelToken: string
): Promise<LineProfile> {
    const headers = {
        'Authorization': `Bearer ${channelToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const url = `https://api.line.me/v2/bot/profile/${socialId}`;

    try {
        const response = await axios.get<LineProfile>(url, { headers });
        const lineData = response.data;

        return {
            userId: lineData.userId,
            displayName: lineData.displayName || "Unknown",
            pictureUrl: lineData.pictureUrl || "",
        };
    } catch (error) {
        console.error(`❌ Error fetching LINE profile (ID: ${socialId}):`, error);
        throw error;
    }
}

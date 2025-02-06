import axios from 'axios';


interface FacebookProfile {
    id: string;
    name: string;
    picture: {
        data: {
            url: string;
        };
    };
}

interface FormattedProfile {
    userId: string;
    displayName: string;
    pictureUrl: string;
}

export async function getFacebookFollowerProfileGraphApi(
    socialId: string,
    channelToken: string
): Promise<FormattedProfile> {
    const url = `https://graph.facebook.com/${socialId}?fields=id,name,picture&access_token=${channelToken}`;
    try {
        const response = await axios.get<FacebookProfile>(url);
        const fbData = response.data;

        const formattedProfile: FormattedProfile = {
            userId: `${socialId}`,
            displayName: fbData.name || "Unknown",
            pictureUrl: fbData.picture?.data?.url || "",
        };

        return formattedProfile;
    } catch (error) {
        console.error("Error fetching Facebook profile:", error);
        throw error;
    }
}


export async function getLineFollowerProfileMessagingApi(socialId: string, channelToken: string): Promise<any> {
    const headers = {
        'Authorization': `Bearer ${channelToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const url = `https://api.line.me/v2/bot/profile/${socialId}`;
    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching LINE profile:', error);
        throw error;
    }
}

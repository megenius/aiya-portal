import axios from 'axios';

export async function getFacebookFollowerProfileGraphApi(socialId: string, channelToken: string): Promise<any> {
    const url = `https://graph.facebook.com/${socialId}?fields=id,name,email,picture&access_token=${channelToken}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching Facebook profile:', error);
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

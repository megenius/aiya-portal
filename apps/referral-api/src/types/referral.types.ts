export interface ReferralPayload {
  referrer_id: string;
  program_type: 'friend_get_friend' | 'affiliate';
  referral_code?: string;
}

export interface ConversionPayload {
  referred_id: string;
  subscription_id: string;
}
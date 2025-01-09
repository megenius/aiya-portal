import { createItems, readItems, updateItem, readSingleton } from '@directus/sdk';
import { ConversionPayload, ReferralPayload } from '~/types/referral.types';
import { ClientType } from '~/utils/directus';
import { CommissionService } from './commission.service';

export class ReferralService {
  constructor(private directus: ClientType) {}

  async createReferral(data: ReferralPayload) {
    try {
      const referral = await this.directus.request(
        createItems('referrals', [{
          referrer_id: data.referrer_id,
          program_type: data.program_type,
          status: 'pending',
          referral_code: data.referral_code || this.generateReferralCode(),
          created_at: new Date().toISOString()
        }])
      );
      return referral;
    } catch (error) {
      console.error('Failed to create referral:', error);
      throw error;
    }
  }

  async convertReferral(referralCode: string, data: ConversionPayload) {
    try {
      const referral = await this.directus.request(
        readItems('referrals', {
          filter: {
            referral_code: { _eq: referralCode },
            status: { _eq: 'pending' }
          },
          limit: 1
        })
      );

      if (!referral.length) {
        throw new Error('Invalid or expired referral code');
      }

      const updatedReferral = await this.directus.request(
        updateItem('referrals', referral[0].id, {
          referred_id: data.referred_id,
          subscription_id: data.subscription_id,
          status: 'converted',
          converted_at: new Date().toISOString()
        })
      );

      await this.processCommission(updatedReferral);
      return updatedReferral;
    } catch (error) {
      console.error('Failed to convert referral:', error);
      throw error;
    }
  }

  private async processCommission(referral: any) {
    const commissionService = new CommissionService(this.directus);
    await commissionService.calculateAndCreateCommission(referral);
  }

  private generateReferralCode(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }
}

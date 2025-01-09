import { DirectusClient, readItems } from "@directus/sdk";
import { ClientType } from "~/utils/directus";

export class CommissionService {
  constructor(private directus: ClientType) {}

  async calculateAndCreateCommission(referral: any) {
    try {
      const [affiliate, subscription, rules] = await Promise.all([
        this.getAffiliate(referral.referrer_id),
        this.getSubscription(referral.subscription_id),
        this.getCommissionRules()
      ]);

      const commissionAmount = this.calculateCommissionAmount(
        referral.program_type,
        subscription.amount,
        affiliate?.tier,
        rules
      );

      await this.createCommissionPayment({
        affiliate_id: affiliate?.id,
        referral_id: referral.id,
        amount: commissionAmount,
        payment_type: 'first_payment',
        status: 'pending'
      });

      await this.updateAffiliateStats(affiliate?.id);
    } catch (error) {
      console.error('Failed to process commission:', error);
      throw error;
    }
  }

  private async getAffiliate(userId: string) {
    return this.directus.request(
      readItems('affiliates', {
        filter: { user_id: { _eq: userId } },
        limit: 1
      })
    ).then(res => res[0]);
  }

  private async getSubscription(subscriptionId: string) {
    return this.directus.request(
      readItems('subscriptions', {
        filter: { id: { _eq: subscriptionId } },
        limit: 1
      })
    ).then(res => res[0]);
  }

  private async getCommissionRules() {
    return this.directus.request(
      readSingleton('commission_rules')
    );
  }

  private calculateCommissionAmount(
    programType: string,
    subscriptionAmount: number,
    affiliateTier: string,
    rules: any
  ): number {
    if (programType === 'friend_get_friend') {
      return rules.friend_referral_amount;
    }

    const rate = rules.tiers[affiliateTier]?.first_payment_rate || rules.tiers.starter.first_payment_rate;
    return (subscriptionAmount * rate) / 100;
  }

  private async createCommissionPayment(data: any) {
    return this.directus.request(
      createItems('commission_payments', [{
        ...data,
        created_at: new Date().toISOString()
      }])
    );
  }

  private async updateAffiliateStats(affiliateId: string) {
    // Update total earnings and check for tier upgrade
    const [totalEarnings, referralCount] = await Promise.all([
      this.calculateTotalEarnings(affiliateId),
      this.countReferrals(affiliateId)
    ]);

    const newTier = this.calculateNewTier(referralCount);

    return this.directus.request(
      updateItem('affiliates', affiliateId, {
        total_earnings: totalEarnings,
        tier: newTier,
        updated_at: new Date().toISOString()
      })
    );
  }
}

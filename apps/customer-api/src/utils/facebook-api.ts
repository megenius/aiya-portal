import _ = require("lodash");

interface CampaignInsights {
  frequency: number;
  reach: number;
  conversions: number;
  purchase_roas: number;
  spend: number;
  cpc: number;
  cpm: number;
  cpp: number;
  ctr: number;
  actions: Array<{ action_type: string; value: string }>;
}

export interface Campaign {
  id: string;
  name: string;
  objective: string;
  status: string;
  lifetime_budget: number;
  daily_budget: number;
  start_time: string;
  end_time: string;
  created_time: string;
  insights: CampaignInsights;
}

interface AdSetInsights {
  impressions: number;
  reach: number;
  clicks: number;
  spend: number;
  cpc: number;
  ctr: number;
}

interface AdSet {
  id: string;
  campaign: {
    id: string;
  };
  account_id: string;
  name: string;
  daily_budget: string;
  lifetime_budget: string;
  budget_remaining: string;
  created_time: string;
  start_time: string;
  status: string;
}

interface AdInsights {
  impressions: number;
  reach: number;
  clicks: number;
  spend: number;
  cpc: number;
  ctr: number;
  actions: Array<{ action_type: string; value: string }>;
}

interface Ad {
  id: string;
  name: string;
  adset_id: string;
  campaign_id: string;
  status: string;
  creative: {
    id: string;
  };
  insights: {
    data: AdInsights[];
  };
  created_time: string;
}

interface PaginatedResponse<T> {
  data: T[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

abstract class FacebookAdsBase {
  protected adAccountId: string;
  protected accessToken: string;
  protected apiUrl: string;
  private readonly PAGE_SIZE = 100;

  constructor(adAccountId: string, accessToken: string, apiUrl: string) {
    this.adAccountId = adAccountId;
    this.accessToken = accessToken;
    this.apiUrl = apiUrl;
  }

  protected async fetchData<T>(
    endpoint: string,
    params: Record<string, string> = {}
  ): Promise<PaginatedResponse<T>> {
    const url = new URL(endpoint);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    // Always set the limit to PAGE_SIZE
    url.searchParams.set("limit", this.PAGE_SIZE.toString());

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  protected async fetchAllPages<T>(
    endpoint: string,
    params: Record<string, string> = {},
    maxItems?: number,
    callback?: (data: T[], totalFetched: number) => void
  ): Promise<T[]> {
    let allData: T[] = [];
    let nextUrl: string | undefined =
      `${this.apiUrl}/${this.adAccountId}/${endpoint}`;

    while (nextUrl && (!maxItems || allData.length < maxItems)) {
      const response: PaginatedResponse<T> = await this.fetchData<T>(
        nextUrl,
        params
      );

      const newItems = maxItems
        ? response.data.slice(0, maxItems - allData.length)
        : response.data;

      allData = allData.concat(newItems);
      console.log(`Fetched ${newItems.length} items. Total: ${allData.length}`);

      // Call the callback function if provided
      if (callback) {
        await callback(newItems, allData.length);
      }

      if (newItems.length < this.PAGE_SIZE || !response.paging?.next) {
        console.log("No more pages to fetch.");
        break;
      }

      nextUrl = response.paging.next;
    }

    console.log(`Finished fetching. Total items: ${allData.length}`);
    return allData;
  }
}

class CampaignApi extends FacebookAdsBase {
  async countTotalCampaigns(): Promise<number> {
    const campaigns = await this.fetchAllPages<{ id: string }>("campaigns", {
      fields: "id",
    });
    return campaigns.length;
  }

  async countCampaignsWithLimit(limit: number): Promise<number> {
    const campaigns = await this.fetchAllPages<{ id: string }>("campaigns", {
      fields: "id",
      limit: limit.toString(),
    });
    return Math.min(campaigns.length, limit);
  }

  async getCampaignInfo(
    callback?: (data: Campaign[], totalFetched: number) => void
  ): Promise<Campaign[]> {
    const fields = [
      "id",
      "name",
      "objective",
      "status",
      "lifetime_budget",
      "daily_budget",
      "start_time",
      "created_time",
      "insights{frequency,reach,conversions,purchase_roas,spend,cpc,cpm,cpp,ctr,actions}",
    ].join(",");

    return this.fetchAllPages<Campaign>(
      "campaigns",
      { fields },
      undefined,
      callback
    );
  }
}

class AdSetApi extends FacebookAdsBase {
  async countTotalAdSets(): Promise<number> {
    const adSets = await this.fetchAllPages<{ id: string }>("adsets", {
      fields: "id",
    });
    return adSets.length;
  }

  async countAdSetsWithLimit(limit: number): Promise<number> {
    const adSets = await this.fetchAllPages<{ id: string }>("adsets", {
      fields: "id",
      limit: limit.toString(),
    });
    return Math.min(adSets.length, limit);
  }

  async getAdSetInfo(
    callback?: (data: AdSet[], totalFetched: number) => void
  ): Promise<AdSet[]> {
    const fields = [
      "id",
      "account_id",
      "campaign",
      "name",
      "daily_budget",
      "lifetime_budget",
      "budget_remaining",
      "start_time",
      "created_time",
      "status",
    ].join(",");

    return this.fetchAllPages<AdSet>("adsets", { fields }, undefined, callback);
  }
}

class AdApi extends FacebookAdsBase {
  async countTotalAds(): Promise<number> {
    const ads = await this.fetchAllPages<{ id: string }>("ads", {
      fields: "id",
    });
    return ads.length;
  }

  async countAdsWithLimit(limit: number): Promise<number> {
    const ads = await this.fetchAllPages<{ id: string }>("ads", {
      fields: "id",
      limit: limit.toString(),
    });
    return Math.min(ads.length, limit);
  }

  async getAdInfo(
    callback?: (data: Ad[], totalFetched: number) => void
  ): Promise<Ad[]> {
    const fields = [
      "id",
      "name",
      "account_id",
      "campaign_id",
      "adset_id",
      "creative",
      "status",
      "created_time",
      "insights{frequency,impressions,clicks,reach,conversions,purchase_roas,spend,cpc,cpm,cpp,ctr,actions}",
    ].join(",");

    return this.fetchAllPages<Ad>("ads", { fields }, undefined, callback);
  }
}

export class AdAccountApi extends FacebookAdsBase {
  async countTotalAds(): Promise<number> {
    let url: string | undefined = `${this.apiUrl}/${this.adAccountId}`;

    const ads_volume = await this.fetchData<{ id: string }>(url, {
      fields: "ads_volume",
    })
      .then((response) => {
        return _.get(
          response,
          "ads_volume.data.0.ads_running_or_in_review_count",
          0
        );
      })
      .catch((error) => {
        console.error("Error fetching ad account data", error);
        return 0;
      });
    return ads_volume;
  }
}

export { CampaignApi, AdSetApi, AdApi };

import { FacebookAdAccount, FacebookAdCampaign } from "~/@types/app";

interface Action {
  action_type: string;
  value: number;
}

interface PurchaseROAS {
  action_type: string;
  value: number;
}

interface FacebookData {
  frequency: number;
  reach: number;
  purchase_roas: PurchaseROAS[];
  spend: number;
  cpc: number;
  cpm: number;
  cpp: number;
  ctr: number;
  actions: Action[];
  date_start: string;
  date_stop: string;
}

abstract class FacebookDataExtractor<
  T extends FacebookAdAccount | FacebookAdCampaign,
> {
  protected entity: T;
  protected data: FacebookData;

  constructor(entity: T, data: FacebookData) {
    this.entity = entity;
    this.data = this.validateAndConvertData(data);
  }

  private validateAndConvertData(data: any): FacebookData {
    const requiredFields: (keyof FacebookData)[] = [
      "frequency",
      "reach",
      "purchase_roas",
      "spend",
      "cpc",
      "cpm",
      "cpp",
      "ctr",
      "actions",
      "date_start",
      "date_stop",
    ];
    for (const field of requiredFields) {
      if (!(field in data)) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    return {
      ...data,
      frequency: Number(data.frequency),
      reach: Number(data.reach),
      spend: Number(data.spend),
      cpc: Number(data.cpc),
      cpm: Number(data.cpm),
      cpp: Number(data.cpp),
      ctr: Number(data.ctr),
      purchase_roas: data.purchase_roas.map((roas: any) => ({
        ...roas,
        value: Number(roas.value),
      })),
      actions: data.actions.map((action: any) => ({
        ...action,
        value: Number(action.value),
      })),
    };
  }

  protected getAction(actionType: string): number | undefined {
    const action = this.data.actions.find((a) => a.action_type === actionType);
    return action ? action.value : undefined;
  }

  protected formatPercentage(value: number): string {
    return `${(value * 100).toFixed(2)}%`;
  }

  public abstract extractMetrics(): Record<string, string | number | undefined>;

  public extractActions(actionTypes?: string[]): Record<string, number> {
    const typesToExtract = actionTypes || [
      "onsite_conversion.purchase",
      "onsite_conversion.initiate_checkout",
      "lead",
      "video_view",
      "link_click",
      "post_engagement",
      "page_engagement",
    ];

    return typesToExtract.reduce(
      (acc, actionType) => {
        const value = this.getAction(actionType);
        if (value !== undefined) {
          acc[actionType] = value;
        }
        return acc;
      },
      {} as Record<string, number>
    );
  }

  public calculateConversionRate(actionType: string): number | undefined {
    const actionValue = this.getAction(actionType);
    if (actionValue === undefined) return undefined;

    const reach = this.data.reach;
    if (reach === 0) return undefined;

    return actionValue / reach;
  }

  public calculateCostPerAction(actionType: string): number | undefined {
    const actionValue = this.getAction(actionType);
    if (actionValue === undefined) return undefined;

    const spend = this.data.spend;

    if (actionValue === 0) return undefined;

    return spend / actionValue;
  }

  public abstract getSummary(): string;

  protected static async fetchData(
    url: string,
    accessToken: string
  ): Promise<FacebookData> {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();

    if (!data || data.length === 0) {
      throw new Error("No data returned from Facebook API");
    }

    return data[0];
  }
}

export class AdDataExtractor extends FacebookDataExtractor<FacebookAdAccount> {
  constructor(adAccount: FacebookAdAccount, adData: FacebookData) {
    super(adAccount, adData);
  }

  public extractMetrics(): Record<string, string | number | undefined> {
    const purchaseROAS = this.data.purchase_roas.find(
      (roas) => roas.action_type === "omni_purchase"
    );

    return {
      ad_account_id: this.entity.ad_account_id as string,
      date_range: `${this.data.date_start} to ${this.data.date_stop}`,
      reach: this.data.reach,
      frequency: this.data.frequency,
      spend: this.data.spend,
      cpc: this.data.cpc,
      cpm: this.data.cpm,
      cpp: this.data.cpp,
      ctr: this.data.ctr,
      roas: purchaseROAS ? purchaseROAS.value : undefined,
      purchase: this.getAction("omni_purchase"),
    };
  }

  public getSummary(): string {
    const metrics = this.extractMetrics();
    const actions = this.extractActions();

    let summary = "Ad Account Summary:\n\n";

    summary += "Ad Account Information:\n";
    summary += `ID: ${metrics.ad_account_id}\n\n`;

    summary += "Key Metrics:\n";
    Object.entries(metrics).forEach(([key, value]) => {
      const displayKey = key
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      if (typeof value === "number") {
        summary += `${displayKey}: ${value.toFixed(2)}\n`;
      } else {
        summary += `${displayKey}: ${value}\n`;
      }
    });

    summary += "\nKey Actions:\n";
    Object.entries(actions).forEach(([key, value]) => {
      summary += `${key}: ${value}\n`;
      const conversionRate = this.calculateConversionRate(key);
      summary += `  Conversion Rate: ${conversionRate !== undefined ? this.formatPercentage(conversionRate) : "N/A"}\n`;
      const costPerAction = this.calculateCostPerAction(key);
      summary += `  Cost per Action: ${costPerAction !== undefined ? costPerAction.toFixed(2) : "N/A"}\n`;
    });

    return summary;
  }

  static async fetchAndCreate(
    c: any,
    adAccount: FacebookAdAccount
  ): Promise<AdDataExtractor> {
    const FB_API_URL = c.env["FB_API_URL"];
    const url = new URL(`${FB_API_URL}/${adAccount.ad_account_id}/insights`);

    url.searchParams.append(
      "fields",
      "frequency,reach,conversions,purchase_roas,spend,cpc,cpm,cpp,ctr,actions"
    );
    url.searchParams.append("date_preset", "last_7d");
    url.searchParams.append("level", "account");

    const data = await FacebookDataExtractor.fetchData(
      url.toString(),
      adAccount.access_token as string
    );
    return new AdDataExtractor(adAccount, data);
  }
}

export class CampaignDataExtractor extends FacebookDataExtractor<FacebookAdCampaign> {
  constructor(campaign: FacebookAdCampaign, campaignData: FacebookData) {
    super(campaign, campaignData);
  }

  public extractMetrics(): Record<string, string | number | undefined> {
    const purchaseROAS = this.data.purchase_roas.find(
      (roas) => roas.action_type === "omni_purchase"
    );

    return {
      campaign_id: this.entity.id,
      campaign_name: this.entity.name as string,
      date_range: `${this.data.date_start} to ${this.data.date_stop}`,
      reach: this.data.reach,
      frequency: this.data.frequency,
      spend: this.data.spend,
      cpc: this.data.cpc,
      cpm: this.data.cpm,
      cpp: this.data.cpp,
      ctr: this.data.ctr,
      roas: purchaseROAS ? purchaseROAS.value : undefined,
      purchase: this.getAction("omni_purchase"),
    };
  }

  public getSummary(): string {
    const metrics = this.extractMetrics();
    const actions = this.extractActions();

    let summary = "Campaign Summary:\n\n";

    summary += "Campaign Information:\n";
    summary += `ID: ${metrics.campaign_id}\n`;
    summary += `Name: ${metrics.campaign_name}\n\n`;

    summary += "Key Metrics:\n";
    Object.entries(metrics).forEach(([key, value]) => {
      const displayKey = key
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      if (typeof value === "number") {
        summary += `${displayKey}: ${value.toFixed(2)}\n`;
      } else {
        summary += `${displayKey}: ${value}\n`;
      }
    });

    summary += "\nKey Actions:\n";
    Object.entries(actions).forEach(([key, value]) => {
      summary += `${key}: ${value}\n`;
      const conversionRate = this.calculateConversionRate(key);
      summary += `  Conversion Rate: ${conversionRate !== undefined ? this.formatPercentage(conversionRate) : "N/A"}\n`;
      const costPerAction = this.calculateCostPerAction(key);
      summary += `  Cost per Action: ${costPerAction !== undefined ? costPerAction.toFixed(2) : "N/A"}\n`;
    });

    return summary;
  }

  static async fetchAndCreate(
    c: any,
    campaign: FacebookAdCampaign
  ): Promise<CampaignDataExtractor> {
    const FB_API_URL = c.env["FB_API_URL"];
    const url = new URL(`${FB_API_URL}/${campaign.id}/insights`);

    url.searchParams.append(
      "fields",
      "frequency,reach,conversions,purchase_roas,spend,cpc,cpm,cpp,ctr,actions"
    );
    url.searchParams.append("date_preset", "last_7d");
    url.searchParams.append("level", "campaign");

    const data = await FacebookDataExtractor.fetchData(
      url.toString(),
      campaign.access_token as string
    );
    return new CampaignDataExtractor(campaign, data);
  }
}

// Usage examples
async function main(c: any) {
  try {
    const adAccount: FacebookAdAccount = c.get("adAccount");
    const adExtractor = await AdDataExtractor.fetchAndCreate(c, adAccount);
    console.log(adExtractor.getSummary());

    const campaign: FacebookAdCampaign = c.get("campaign");
    const campaignExtractor = await CampaignDataExtractor.fetchAndCreate(
      c,
      campaign
    );
    console.log(campaignExtractor.getSummary());
  } catch (error) {
    console.error(
      "Error:",
      error instanceof Error ? error.message : String(error)
    );
  }
}
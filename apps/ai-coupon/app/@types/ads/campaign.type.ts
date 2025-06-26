export interface CampaignResult {
  data: Campaign[];
  total: number;
  cursors: Cursors;
}

export interface Campaign {
  id: string;
  name: string;
  status: string;
  start_time: string;
  spend: string;
  impressions: string;
  clicks: string;
  cpc: string;
  cpm: string;
  cpp: string;
  ctr: string;
  reach: string;
  date_start: string;
  date_stop: string;
  roas: any;
  purchase: any;
  purchase_value: any;
}

export interface Cursors {
  before: string;
  after: string;
}

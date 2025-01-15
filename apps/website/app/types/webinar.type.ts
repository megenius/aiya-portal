export type Webinar = {
  id: number;
  status: string;
  sort: any;
  user_created: string;
  date_created: string;
  user_updated: any;
  date_updated: any;
  content: Content;
  name: string;
  start_date: string;
  end_date: string;
  cover: string;
  og_image: string;
  metadata: any;
  tags: Array<string>;
  register_link: string;
};

type Content = {
  speakersTitle: string;
  speakers: Speaker[];
  specialOffersTitle: string;
  specialOffers: string[];
  topicsTitle: string;
  topics: string[];
  targetAudienceTitle: string;
  targetAudience: string[];
};

export interface Speaker {
  name: string;
  title: string;
  expertise: string;
}

export interface SpecialOffer {
  type: string;
  value: number;
  currency: string;
  condition: string;
}

interface Speaker {
  name: string;
  title: string;
  expertise: string;
  credentials: string;
}

interface WebinarContent {
  speakersTitle: string;
  speakers: Speaker[];
  topicsTitle: string;
  topics: string[];
  targetAudienceTitle: string;
  targetAudience: string[];
  specialOffersTitle: string;
  specialOffers: string[];
}

export interface Webinar {
  name: string;
  start_date: Date;
  end_date: Date;
  register_link: string;
  tags?: string[];
  content: WebinarContent;
  description: string;
  cover: string;
  og_image: string;
}

// components/WebinarCard/types.ts
export interface SpeakerSectionProps {
  speakers: Speaker[];
  title: string;
}

export interface ListSectionProps {
  title: string;
  items: string[];
}

export interface TagsSectionProps {
  tags: string[];
}

export interface WebinarCardProps {
  webinar: Webinar;
}
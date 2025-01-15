import React, { useMemo } from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { th } from 'date-fns/locale'; 
import { ListSectionProps, SpeakerSectionProps, TagsSectionProps, WebinarCardProps } from '~/types/webinar.type';

const SpeakerSection: React.FC<SpeakerSectionProps> = React.memo(({ speakers, title }) => (
  <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
    <p className="text-indigo-800 font-semibold mb-2">{title}</p>
    {speakers?.map((speaker, index) => (
      <div key={`${speaker.name}-${index}`} className="mb-2">
        <p className="text-indigo-800">{speaker.name}</p>
        <p className="text-gray-600">{speaker.title} - {speaker.expertise}</p>
      </div>
    ))}
  </div>
));

const ListSection: React.FC<ListSectionProps> = React.memo(({ title, items }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-indigo-800 mb-3">{title}</h2>
    <ul className="space-y-2 text-gray-600">
      {items?.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-start">
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
));

const TagsSection: React.FC<TagsSectionProps> = React.memo(({ tags }) => (
  <div className="mt-6 flex flex-wrap gap-2 justify-center">
    {tags?.map((tag, index) => (
      <span 
        key={`${tag}-${index}`} 
        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
      >
        #{tag}
      </span>
    ))}
  </div>
));

export const WebinarCard: React.FC<WebinarCardProps> = ({ webinar }) => {
  const formattedDate = useMemo(() => 
    format(webinar.start_date, 'PPP', { locale: th }),
    [webinar.start_date]
  );

  const formattedTimeRange = useMemo(() => {
    const startTime = format(webinar.start_date, 'HH:mm', { locale: th });
    const endTime = format(webinar.end_date, 'HH:mm', { locale: th });
    return `${startTime} - ${endTime}น.`;
  }, [webinar.start_date, webinar.end_date]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-indigo-800 mb-2">
          {webinar.name}
        </h1>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>{formattedTimeRange}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Live Webinar ผ่านระบบออนไลน์</span>
          </div>
        </div>
      </div>

      <SpeakerSection 
        speakers={webinar.content.speakers} 
        title={webinar.content.speakersTitle} 
      />

      <ListSection 
        title={webinar.content.topicsTitle} 
        items={webinar.content.topics} 
      />

      <ListSection 
        title={webinar.content.targetAudienceTitle} 
        items={webinar.content.targetAudience} 
      />

      <ListSection 
        title={webinar.content.specialOffersTitle} 
        items={webinar.content.specialOffers} 
      />

      <div className="flex flex-col items-center gap-4">
        <a
          href={webinar.register_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          ลงทะเบียนเลย
          <ExternalLink className="w-5 h-5 ml-2" />
        </a>
        <p className="text-red-500 font-semibold">⚡️ ที่นั่งมีจำกัด ลงทะเบียนด่วน!</p>
      </div>

      <TagsSection tags={webinar.tags ?? []} />
    </div>
  );
};

export default WebinarCard;
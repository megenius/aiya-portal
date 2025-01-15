import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Webinar } from '~/types/webinar.type';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

const WebinarCard: React.FC<{ webinar: Webinar }> = ({
  webinar
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-indigo-800 mb-2">
          {webinar?.name}
        </h1>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{format(webinar?.start_date, 'PPP', { locale: th })}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>{format(webinar?.start_date, 'HH:mm', { locale: th })} - {format(webinar?.end_date, 'HH:mm', { locale: th })}น.</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Live Webinar ผ่านระบบออนไลน์</span>
          </div>
        </div>
      </div>

      <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
        <p className="text-indigo-800 font-semibold mb-2">{webinar?.content?.speakersTitle}</p>
        {webinar?.content?.speakers?.map(speaker => (
          <div className='mb-2'>
            <p className="text-indigo-800">{speaker.name}</p>
            <p className="text-gray-600">{speaker.title} - {speaker.expertise}</p>
          </div>
        ))
        }
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-indigo-800 mb-3">{webinar?.content?.topicsTitle}</h2>
        <ul className="space-y-2 text-gray-600">
          {webinar?.content?.topics.map(topic => (
            <li className="flex items-start">
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-indigo-800 mb-3">{webinar?.content?.targetAudienceTitle}</h2>
        <ul className="space-y-2 text-gray-600">
          {webinar?.content?.targetAudience?.map(audience => (
            <li className="flex items-start">
              <span>{audience}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-indigo-800 mb-3">{webinar?.content?.specialOffersTitle}</h2>
        <ul className="space-y-2 text-gray-600">
          {webinar?.content?.specialOffers?.map(offer => (
            <li className="flex items-start">
              <span>{offer}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Registration Button */}
      <div className="flex flex-col items-center gap-4">
        <a
          href={webinar?.register_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          ลงทะเบียนเลย
          <ExternalLink className="w-5 h-5 ml-2" />
        </a>
        <p className="text-red-500 font-semibold">⚡️ ที่นั่งมีจำกัด ลงทะเบียนด่วน!</p>
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {webinar.tags?.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
            #{tag}
          </span>
        ))}
      </div>
    </div >
  );
};

export default WebinarCard;
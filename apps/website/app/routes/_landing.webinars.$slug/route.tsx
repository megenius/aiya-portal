import React, { Suspense } from 'react';
import { MessageSquare, Users, Zap, BarChart3, ArrowRight, Check, Shield, Globe, Bot, Loader } from 'lucide-react';
import WebinarCard from './_components/WebinarCard';
import { Await, Meta, useLoaderData } from '@remix-run/react';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import { fetchWebinar } from '~/services/webinar.service';

export const meta: MetaFunction<typeof loader> = ({
  location,
  params,
  data,
}) => {
  const url = `https://aiya.me${location.pathname}${location.search}${location.hash}`;
  console.log("url", url);
  console.log("og:image", data?.webinar?.cover);
  
  
  // Basic meta tags
  const metaTags = [
      // Additional tags from webinar metadata if they exist
      ...(data?.webinar?.metadata || []),

    { title: data?.webinar?.name || 'Webinar' },
    { description: data?.webinar?.description || 'Join our webinar' },

    // Essential Open Graph tags
    { property: 'og:title', content: data?.webinar?.name },
    { property: 'og:description', content: data?.webinar?.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:image', content: data?.webinar?.cover },
  ];

  return metaTags;
}

export async function loader({
  params,
}: LoaderFunctionArgs) {
  const { slug } = params;
  const webinar = await fetchWebinar(slug as string);

  return {
    webinar
  };
}

export default function LandingPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className='pb-10'>
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white mb-8">
        <div className='relative z-10 max-w-7xl mx-auto lg:px-4 sm:px-6 lg:px-8 lg:py-12'>
          <img className="w-full" src={data.webinar.cover} alt={data?.webinar?.name} />
        </div>
      </div>

      <WebinarCard webinar={data.webinar} />
    </div>
  )
}
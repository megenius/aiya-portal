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
  const webinar = data?.webinar

  // Basic meta tags
  // const metaTags = [
  //   // Additional tags from webinar metadata if they exist
  //   ...(webinar?.metadata || []),

  //   { title: webinar?.name || 'Webinar' },
  //   { description: webinar?.description || 'Join our webinar' },

  //   // Essential Open Graph tags
  //   { property: 'og:title', content: webinar?.name },
  //   { property: 'og:description', content: webinar?.description },
  //   { property: 'og:type', content: 'website' },
  //   { property: 'og:url', content: url },
  //   { property: 'og:image', content: webinar?.cover },
  // ];


  const metaTags = [
    {
      "title": "AI-Powered Sales Growth: The Art of Smart Customer Segmentation"
    },
    {
      "name": "description",
      "content": "ห้ามพลาด! AI Sales Webinar สุดพิเศษ รับฟรี Voucher 300 บาท เรียนรู้การใช้ AI เพิ่มยอดขายธุรกิจ"
    },
    {
      "name": "keywords",
      "content": "AI sales, customer segmentation, digital marketing, business growth, AIYA.AI, RFM model, Thai SME, AI marketing"
    },
    {
      "property": "og:title",
      "content": "ห้ามพลาด! รับฟรี Voucher 300 บาท AI Sales Webinar สุดพิเศษ"
    },
    {
      "property": "og:description",
      "content": "เรียนรู้การใช้ AI วิเคราะห์และแบ่งกลุ่มลูกค้าอย่างแม่นยำกับ CEO AIYA.AI และ LINE Certified Coach"
    },
    {
      "property": 'og:image',
      "content": "https://aiya.me/images/8d5538df-4ec2-49c4-9de6-589e371ce620.webp" //webinar?.cover
    },
    {
      "property": 'og:type',
      "content": 'website'
    },
    {
      "property": 'og:url',
      "content": url
    },
  ]

  return metaTags;
}

export async function loader({
  params,
}: LoaderFunctionArgs) {
  const { slug } = params;
  const webinar = await fetchWebinar(slug as string);

  return {
    webinar,
  };
}

export default function LandingPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Await resolve={data.webinar}>
          {(webinar) => (
            <div className='pb-10'>
              <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white mb-8">
                <div className='relative z-10 max-w-7xl mx-auto lg:px-4 sm:px-6 lg:px-8 lg:py-12'>
                  <img className="w-full" src={webinar.cover} alt={webinar?.name} />
                </div>
              </div>

              <WebinarCard webinar={webinar} />
            </div>
          )}
        </Await>
      </Suspense>
      {/* <div className='pb-10'>
        <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white mb-8">
          <div className='relative z-10 max-w-7xl mx-auto lg:px-4 sm:px-6 lg:px-8 lg:py-12'>
            <img className="w-full" src={data.webinar.cover} alt={data?.webinar?.name} />
          </div>
        </div>

        <WebinarCard webinar={data.webinar} />
      </div> */}
    </>
  )
}
import React, { Suspense } from 'react';
import { Loader } from 'lucide-react';
import { Await, Meta, useLoaderData } from '@remix-run/react';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import WebinarCard from './_components/WebinarCard';
import { fetchWebinar } from '~/services/webinar.service';
import Alert from './_components/Alert';
import { Webinar } from '~/types/webinar.type';

interface LoaderData {
  webinar: Webinar;
  error?: string;
}

// Constants
const DEFAULT_META = {
  title: 'AI-Powered Sales Growth: The Art of Smart Customer Segmentation',
  description: 'ห้ามพลาด! AI Sales Webinar สุดพิเศษ รับฟรี Voucher 300 บาท เรียนรู้การใช้ AI เพิ่มยอดขายธุรกิจ',
  keywords: 'AI sales, customer segmentation, digital marketing, business growth, AIYA.AI, RFM model, Thai SME, AI marketing',
  ogTitle: 'ห้ามพลาด! รับฟรี Voucher 300 บาท AI Sales Webinar สุดพิเศษ',
  ogDescription: 'เรียนรู้การใช้ AI วิเคราะห์และแบ่งกลุ่มลูกค้าอย่างแม่นยำกับ CEO AIYA.AI และ LINE Certified Coach',
  ogImage: 'https://aiya.me/images/8d5538df-4ec2-49c4-9de6-589e371ce620.webp'
};

// Meta Function
export const meta: MetaFunction<typeof loader> = ({
  location,
  data,
}) => {
  const url = `https://aiya.me${location.pathname}${location.search}${location.hash}`;
  const webinar = data?.webinar;

  return [
    { title: webinar?.name || DEFAULT_META.title },
    { name: 'description', content: webinar?.description || DEFAULT_META.description },
    { name: 'keywords', content: DEFAULT_META.keywords },
    { property: 'og:title', content: webinar?.name || DEFAULT_META.ogTitle },
    { property: 'og:description', content: webinar?.description || DEFAULT_META.ogDescription },
    { property: 'og:image', content: webinar?.cover || DEFAULT_META.ogImage },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    ...(webinar?.metadata || [])
  ];
};

// Loader Function
export async function loader({
  params,
}: LoaderFunctionArgs): Promise<LoaderData> {
  try {
    const { slug } = params;
    if (!slug) throw new Error('Webinar slug is required');

    const webinar = await fetchWebinar(slug);
    if (!webinar) throw new Error('Webinar not found');

    return { webinar };
  } catch (error) {
    console.error('Webinar loader error:', error);
    return {
      webinar: null,
      error: error instanceof Error ? error.message : 'Failed to load webinar'
    };
  }
}

// Loading Component
const LoadingState = () => (
  <div className="flex items-center justify-center min-h-screen">
    <Loader className="w-8 h-8 animate-spin text-blue-500" />
  </div>
);

// Error Component
const ErrorState = ({ message }: { message: string }) => (
  <Alert variant="danger" className="max-w-2xl mx-auto mt-8">
    <p>{message}</p>
  </Alert>
);

// Main Component
export default function LandingPage() {
  const { webinar, error } = useLoaderData<typeof loader>();

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <Suspense fallback={<LoadingState />}>
      <Await resolve={webinar}>
        {(resolvedWebinar) => (
          <div className="pb-10">
            <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white mb-8">
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-12">
                {resolvedWebinar?.cover && (
                  <img
                    className="w-full rounded-lg shadow-lg"
                    src={resolvedWebinar.cover}
                    alt={resolvedWebinar.name || 'Webinar cover'}
                    loading="eager"
                  />
                )}
              </div>
            </div>

            {resolvedWebinar && <WebinarCard webinar={resolvedWebinar} />}
          </div>
        )}
      </Await>
    </Suspense>
  );
}
import React from 'react';
import { MessageSquare, Users, Zap, BarChart3, ArrowRight, Check, Shield, Globe, Bot } from 'lucide-react';
import WebinarCard from './_components/WebinarCard';
import { Meta } from '@remix-run/react';
import { MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'ห้ามพลาด! Business Webinar สุดพิเศษ "AI-Powered Customer Experience รับฟรี Voucher 3,000 บาท"',
    },
    {
      property: "og:title",
      content: 'ห้ามพลาด! Business Webinar สุดพิเศษ "AI-Powered Customer Experience รับฟรี Voucher 3,000 บาท"',
    },
    {
      property: "og:description",
      content: 'ห้ามพลาด! Business Webinar สุดพิเศษ "AI-Powered Customer Experience รับฟรี Voucher 3,000 บาท"',
    },
    {
      property: "og:image",
      content: '/images/event-cover.jpg',
    },
    {
      name: "description",
      content: 'ห้ามพลาด! Business Webinar สุดพิเศษ "AI-Powered Customer Experience รับฟรี Voucher 3,000 บาท"',
    }
  ]
}

export default function LandingPage() {
  return (
    <div className='pb-10'>
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className='relative z-10 max-w-7xl mx-auto lg:px-4 sm:px-6 lg:px-8 lg:py-12'>
          <img className="w-full" src="/images/event-cover.jpg" alt="AIYA Chatbot" />
        </div>
      </div>
      <WebinarCard />
    </div>
  );
}
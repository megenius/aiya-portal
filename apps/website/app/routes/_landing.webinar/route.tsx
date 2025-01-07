import React from 'react';
import { MessageSquare, Users, Zap, BarChart3, ArrowRight, Check, Shield, Globe, Bot } from 'lucide-react';
import WebinarCard from './_components/WebinarCard';

export default function LandingPage() {
  return (
    <div className='pb-10'>
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white m-10">
        <div className="mx-auto max-w-7xl">
          <div>
            <img className="w-full object-cover object-center" src="/images/event-cover.jpg" alt="AIYA Chatbot" />
          </div>
        </div>
      </div>
      <WebinarCard />
    </div>
  );
}
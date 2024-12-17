import React, { useState } from 'react';

const AiyaLandingPage = () => {
  const [activeFeature, setActiveFeature] = useState('multiChannel');

  const features = {
    multiChannel: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Multi-Channel Support",
      description: "เชื่อมต่อและจัดการแชทบอทได้หลายช่องทาง ทั้ง LINE, Facebook และอื่นๆ ในที่เดียว"
    },
    aiConfiguration: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "AI Configuration",
      description: "ปรับแต่งระบบปัญญาประดิษฐ์ได้อย่างละเอียด กำหนดชื่อผลิตภัณฑ์ คำอธิบาย และแนวทางการตอบคำถาม"
    },
    performanceAnalytics: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Performance Analytics",
      description: "ติดตามประสิทธิภาพแชทบอทด้วยข้อมูลเชิงลึก อัตราความสำเร็จ อัตราการใช้ฐานความรู้ และค่าความเชื่อมั่น"
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
              AIYA Chatbot
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              ระบบสนทนาอัตโนมัติอัจฉริยะ ช่วยจัดการการสื่อสารของคุณอย่างมืออาชีพ
            </p>
            <div className="mt-8 grid gap-3 w-full sm:inline-flex">
              <a href="#" className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4">
                เริ่มใช้งานฟรี
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-500 text-2xl">Chatbot</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            คุณสมบัติหลัก
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(features).map(([key, feature]) => (
            <div 
              key={key}
              onClick={() => setActiveFeature(key)}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                activeFeature === key 
                  ? 'bg-white shadow-lg border-2 border-blue-500' 
                  : 'bg-white/50 hover:bg-white hover:shadow-md'
              }`}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiyaLandingPage;
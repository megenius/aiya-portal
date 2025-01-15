import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

interface Webinar {
  name: string;
  content: string;
  cover: string;
}

const WebinarCard: React.FC<Webinar> = ({
  name,
  content,
  cover
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-indigo-800 mb-2">
          AI-Powered Customer Experience: ยกระดับธุรกิจบริการด้วย Generative AI
        </h1>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>9 มกราคม 2568</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>10:50 - 12:00 น.</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Live Webinar ผ่านระบบออนไลน์</span>
          </div>
        </div>
      </div>

      {/* Speaker Info */}
      <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
        <p className="text-indigo-800 font-semibold mb-2">วิทยากร</p>
        <p className="text-indigo-800">อัจฉริยะ ดาโรจน์ - CEO AIYA.AI</p>
        <p className="text-gray-600">ผู้บุกเบิก AI Solution</p>
      </div>

      {/* Key Topics */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-indigo-800 mb-3">เจาะลึกประเด็นเด็ด</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>ทำไม Generative AI ถึงเป็นเทรนด์ที่ธุรกิจบริการต้องปรับตัว</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>เคล็ดลับการใช้ AI สร้าง personalized experience ที่ลูกค้าประทับใจ</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Case Study จากองค์กรชั้นนำที่ประสบความสำเร็จ</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>เทคนิคการผสานการทำงานระหว่าง AI และทีมงาน เพื่อบริการที่เหนือความคาดหมาย</span>
          </li>
        </ul>
      </div>

      {/* Special Benefits */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-indigo-800 mb-3">สิทธิพิเศษสำหรับผู้เข้าร่วม</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Voucher มูลค่า 3,000 บาท</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>แนวทางการประยุกต์ใช้ AI สำหรับธุรกิจของคุณ</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>โอกาสในการ Q&A กับผู้เชี่ยวชาญตัวจริง</span>
          </li>
        </ul>
      </div>

      {/* Registration Button */}
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://bit.ly/aiya-webinar-2025"
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
      <div className="mt-6 flex flex-wrap gap-2">
        {['#AIYA', '#GenerativeAI', '#CustomerExperience', '#BusinessTransformation', '#AITechnology', '#Webinar'].map((tag) => (
          <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WebinarCard;
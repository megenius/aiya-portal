import React from 'react';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="text-center">
          {/* <div>
            <a className="flex-none text-xl font-semibold text-black" href="#" aria-label="aiya">AIYA</a>
          </div> */}
          {/* End Col */}
          <div className="mt-3">
            {/* <p className="text-gray-500">We're part of the <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="#">Htmlstream</a> family.</p> */}
            <p className="text-gray-500">
              © 2025 AIYA Digital Group Co., Ltd. All rights reserved.
            </p>
          </div>
          {/* Social Brands */}
          <div className="mt-3 space-x-2 flex justify-center">
            <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="https://www.facebook.com/aiyaclub" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="https://youtube.com/@aiyaclub" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
            </a>
          </div>
          {/* End Social Brands */}
        </div>
        {/* End Grid */}
      </footer>
      {/* ========== END FOOTER ========== */}

    </>
  );
};

export default Footer;
import React, { useEffect } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

interface ChatWidgetProps {
  title: string;
  greeting: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ title, greeting }) => {

  useEffect(() => {
    // Load the external script
    const script = document.createElement("script");
    script.src = "/assets/js/hs-textarea-autoheight.js";
    document.body.appendChild(script);

    // Wait for the script to load and then execute the auto-height functionality
    script.onload = () => {
      const textAreas = [
        "#hs-chat-widgets-help-topics-autoheight-textarea",
      ];
      window.textareaAutoHeight && window.textareaAutoHeight(textAreas);
    };

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='w-full max-w-sm mx-auto'>
      <div className='fixed bottom-4 end-10'>
        {/* Welcome Dropdown */}
        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
          {/* Dropdown */}
          <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full sm:w-96 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white overflow-hidden rounded-xl shadow-md sm:shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] sm:" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-chwcnd">
            <div className="h-[605px] relative">
              <Header title={title} />
              <Body greeting={greeting} />
              <Footer />
            </div>
          </div>
          {/* End Dropdown */}
          <button id="hs-pro-chwcnd" type="button" className="hs-dropdown-toggle flex justify-center items-center size-12 text-sm font-medium rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
            <svg className="hs-dropdown-open:block hidden shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            <svg className="hs-dropdown-open:hidden shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16"><path d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" /></svg>
          </button>
        </div>
        {/* End Welcome Dropdown */}
      </div>
    </div>
  );
};

export default ChatWidget;
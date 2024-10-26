import React from 'react';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="absolute bottom-0 inset-x-0 z-10 rounded-b-2xl bg-white border-t border-gray-200">
      <label htmlFor="hs-chat-widgets-help-topics-autoheight-textarea" className="sr-only">Message</label>
      <div className="pb-2 ps-2">
        <textarea id="hs-chat-widgets-help-topics-autoheight-textarea" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-none focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300" placeholder="Message Costa" rows={1} data-hs-default-height={46} defaultValue={""} />
        <div className="pe-4 flex justify-between items-center gap-x-1">
          {/* Button Group */}
          <div className="flex items-center gap-x-1">
            {/* Button */}
            <button type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
              <span className="sr-only">Attach file</span>
            </button>
            {/* End Button */}
            {/* Button */}
            <button type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 11v1a10 10 0 1 1-9-10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1={9} x2="9.01" y1={9} y2={9} /><line x1={15} x2="15.01" y1={9} y2={9} /><path d="M16 5h6" /><path d="M19 2v6" /></svg>
              <span className="sr-only">Add emoji</span>
            </button>
            {/* End Button */}
          </div>
          {/* End Button Group */}
          {/* Button Group */}
          <div className="flex items-center gap-x-1">
            {/* Button */}
            <button type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1={12} x2={12} y1={19} y2={22} /></svg>
              <span className="sr-only">Send voice message</span>
            </button>
            {/* End Button */}
            {/* Send Button */}
            <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <span className="sr-only">Send</span>
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
            </button>
            {/* End Send Button */}
          </div>
          {/* End Button Group */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
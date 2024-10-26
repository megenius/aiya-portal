import React from 'react';

interface BodyProps {
  greeting: string;
}

const Body: React.FC<BodyProps> = ({ greeting }) => {
  return (
    <>
      <div className="h-[469px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <div className="pt-2 pb-5 px-4">
          <div className="relative space-y-5">
            {/* List */}
            <div className="w-full space-y-5">
              <div className="max-w-md flex gap-x-2">
                <div className="shrink-0 mt-auto">
                  <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                </div>
                {/* Chat Bubble */}
                <div>
                  <p className="mb-1.5 ps-2.5 text-xs text-gray-400">Bot</p>
                  <div className="space-y-1">
                    {/* Message */}
                    <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                      <div className="order-1 bg-white shadow-sm inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                        <div className="text-sm text-gray-800">
                          {greeting}
                        </div>
                      </div>
                    </div>{/* End Message */}
                  </div>
                </div>
                {/* End Chat Bubble */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="max-w-md ms-auto text-end flex justify-end gap-x-2">
                {/* Chat Bubble */}
                <div>
                  <p className="mb-1.5 pe-2.5 text-xs text-gray-400">James</p>
                  <div className="space-y-1">
                    {/* Message */}
                    <div className="group flex justify-end gap-x-2" style={{ wordBreak: 'break-word' }}>
                      <div className="order-2 text-start bg-blue-100 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                        <div className="text-sm text-gray-800">
                          Hi there,
                          <span>
                            <span className="text-[11px] text-end text-blue-600 italic">12:44</span>
                            <svg className="inline-block shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" /></svg>
                          </span>
                        </div>
                      </div>
                      {/* More Dropdown */}
                      <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                        <div className="hs-dropdown [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button id="hs-pro-cht1cmd_2" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg>
                          </button>
                          {/* More Dropdown */}
                          <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-[8] bg-white rounded-xl shadow-lg before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht1cmd_2">
                            <div className="p-1">
                              <a className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="#">
                                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                                Edit
                              </a>
                              <a className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="#">
                                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="m10 7-3 3 3 3" /><path d="M17 13v-1a2 2 0 0 0-2-2H7" /></svg>
                                Reply
                              </a>
                              <a className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="#">
                                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1={10} x2={10} y1={11} y2={17} /><line x1={14} x2={14} y1={11} y2={17} /></svg>
                                Delete
                              </a>
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>
                      </div>
                      {/* End More Dropdown */}
                    </div>{/* End Message */}
                    {/* Message */}
                    <div className="group flex justify-end gap-x-2" style={{ wordBreak: 'break-word' }}>
                      <div className="order-2 text-start bg-blue-100 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                        <div className="text-sm text-gray-800">
                          Hi, I'd like to ask some questions. Can I use Preline UI on a client project?
                          <a className="group block mt-3 mb-1 focus:outline-none" href="https://preline.co/" target="_blank">
                            <span className="text-blue-600 underline">
                              https://preline.co/
                            </span>
                            <div className="p-2 ps-2.5 mt-2 relative cursor-default bg-blue-50 rounded-lg overflow-hidden group-focus:scale-[.98] transition before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:h-full before:bg-blue-600">
                              <p className="font-medium text-xs text-blue-600">Preline</p>
                              <p className="font-semibold text-xs text-gray-800">Preline UI, crafted with Tailwind CSS</p>
                              <p className="text-xs text-gray-800">Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.</p>
                              <img className="mt-1 rounded-md" src="https://preline.co/hero-image-2.jpg" alt="Website Preview Image" />
                            </div>
                          </a>
                          <span>
                            <span className="text-[11px] text-end text-blue-600 italic">11:27</span>
                          </span>
                        </div>
                      </div>
                      {/* More Dropdown */}
                      <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                        <div className="hs-dropdown [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button id="hs-pro-cht1cmd_1" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg>
                          </button>
                          {/* More Dropdown */}
                          <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-[8] bg-white rounded-xl shadow-lg before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht1cmd_1">
                            <div className="p-1">
                              <a className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="#">
                                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                                Edit
                              </a>
                              <a className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="#">
                                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="m10 7-3 3 3 3" /><path d="M17 13v-1a2 2 0 0 0-2-2H7" /></svg>
                                Reply
                              </a>
                              <a className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="#">
                                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1={10} x2={10} y1={11} y2={17} /><line x1={14} x2={14} y1={11} y2={17} /></svg>
                                Delete
                              </a>
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>
                      </div>
                      {/* End More Dropdown */}
                    </div>{/* End Message */}
                  </div>
                </div>
                {/* End Chat Bubble */}
                <div className="shrink-0 mt-auto">
                  <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
                </div>
              </div>
              {/* End Item */}

            </div>
            {/* End List */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;


import React from 'react';

interface SliderProps {

}

const Slider: React.FC<SliderProps> = () => {
  return (
    <div className="pt-4 sm:pt-6 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div
        data-hs-carousel='{
"loadingClasses": "opacity-0",
"isInfiniteLoop": true
}'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[40rem] bg-gray-100 rounded-xl dark:bg-neutral-800">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {/* Item */}
            <div className="hs-carousel-slide">
              {/* Slide */}
              <div className="h-[30rem] md:h-[40rem] relative">
                <img
                  className="absolute inset-0 size-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1713276753136-c386da1ec670?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hero Image"
                />
                <div className="relative z-10 text-center size-full max-w-lg mx-auto px-12 flex flex-col justify-center items-center">
                  <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
                    Fall favorites
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-white">
                    Our always-in-season staple, in brand new colors and your
                    favorite fits.
                  </p>
                  {/* Button Group */}
                  <div className="mt-5 md:mt-10">
                    <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
                      <a
                        className="text-sm md:text-base text-white underline underline-offset-4 hover:text-white/80 focus:outline-none focus:text-white/80"
                        href="../../../pro/shop/listing-grid-with-mini-categories.html"
                      >
                        Shop women's clothing
                      </a>
                    </div>
                  </div>
                  {/* End Button Group */}
                </div>
              </div>
              {/* End Slide */}
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="hs-carousel-slide">
              {/* Slide */}
              <div className="h-[30rem] md:h-[40rem] relative">
                <img
                  className="absolute inset-0 size-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1603139635700-04637d0d16bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hero Image"
                />
                <div className="relative z-10 text-center size-full max-w-lg mx-auto px-12 flex flex-col justify-center items-center">
                  <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
                    New styles
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-white">
                    From lightweight layers to the perfect pair of pants, new
                    seasonal favorites are here.
                  </p>
                  {/* Button Group */}
                  <div className="mt-5 md:mt-10">
                    <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
                      <a
                        className="text-sm md:text-base text-white underline underline-offset-4 hover:text-white/80 focus:outline-none focus:text-white/80"
                        href="../../../pro/shop/listing-grid.html"
                      >
                        Shop men
                      </a>
                      <a
                        className="text-sm md:text-base text-white underline underline-offset-4 hover:text-white/80 focus:outline-none focus:text-white/80"
                        href="../../../pro/shop/listing-grid-with-categories.html"
                      >
                        Shop women
                      </a>
                    </div>
                  </div>
                  {/* End Button Group */}
                </div>
              </div>
              {/* End Slide */}
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="hs-carousel-slide">
              {/* Slide */}
              <div className="h-[30rem] md:h-[40rem] relative">
                <img
                  className="absolute inset-0 size-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1684144064253-bb3b4c8fc700?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hero Image"
                />
                <div className="relative z-10 text-center size-full max-w-lg mx-auto px-12 flex flex-col justify-center items-center">
                  <p className="text-sm md:text-base uppercase text-white">
                    Summer sale
                  </p>
                  <h2 className="mt-2 font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
                    Up to 50% off
                  </h2>
                  {/* Button Group */}
                  <div className="mt-5 md:mt-10">
                    <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
                      <a
                        className="text-sm md:text-base text-white underline underline-offset-4 hover:text-white/80 focus:outline-none focus:text-white/80"
                        href="../../../pro/shop/listing-grid.html"
                      >
                        Shop men
                      </a>
                      <a
                        className="text-sm md:text-base text-white underline underline-offset-4 hover:text-white/80 focus:outline-none focus:text-white/80"
                        href="../../../pro/shop/listing-grid-with-categories.html"
                      >
                        Shop women
                      </a>
                    </div>
                  </div>
                  {/* End Button Group */}
                </div>
              </div>
              {/* End Slide */}
            </div>
            {/* End Item */}
          </div>
        </div>
        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 start-1 sm:start-4 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-sm hover:bg-gray-100 -translate-y-1/2 focus:outline-none"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 end-1 sm:end-4 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-sm hover:bg-gray-100 -translate-y-1/2 focus:outline-none"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </button>
        {/* Nav */}
        <div className="p-2 absolute bottom-0 inset-x-0 text-center">
          <div className="py-1 px-2 inline-flex justify-center items-center gap-2 bg-white rounded-full">
            <span className="hs-carousel-info text-xs text-gray-800">
              <span className="hs-carousel-info-current inline-block min-w-2 text-center">
                1
              </span>{" "}
              /{" "}
              <span className="hs-carousel-info-total inline-block min-w-2 text-center">
                3
              </span>
            </span>
          </div>
        </div>
        {/* End Nav */}
      </div>
    </div>
  );
};

export default Slider;
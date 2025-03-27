import { Loading } from '@repo/preline';
import React, { useEffect } from 'react';
import { useGetTerms } from '~/hooks/useGetTerms';
import { useLanguage } from '~/hooks/useLanguage';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  const { lang } = useLanguage()
  const { data, isLoading, refetch } = useGetTerms({lang})


  useEffect(() => {
    refetch()
  }, [lang])

  if (isLoading) {
    return <Loading />
  }


  return (
    <main id="content" className="pb-[40px] sm:pb-[64px] ">
      {/* End Breadcrumb */}
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">

        {/* Account Card */}
        <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Title */}
          <div className="flex justify-between gap-x-3 mb-4 xl:mb-8">
            <div>
              <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Terms and Conditions
              </h1>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
              </p>
            </div>
          </div>
          {/* End Title */}


          {data?.map((item, index) => (
            <div key={index} className="space-y-3">
              <a href={`/terms/${item.id}`} className='block'>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  {item.name}
                </h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
};

export default route;

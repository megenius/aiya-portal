import React, { useEffect, useState } from 'react';
import { FacebookAdAccount } from '~/@types/app';
import * as _ from 'lodash'
import { Loading } from '@repo/preline';
import { useSearchParams } from '@remix-run/react';
import AdDisplay from './AdDisplay';
import { useGetAds } from '~/hooks/adaccount/useGetAds';
import { useInfiniteScroll } from '~/hooks/useInfiniteScroll';
import { useScrollToTop } from '~/hooks/useScrollToTop';
import { ArrowUp } from 'lucide-react';
import { AdListSkeleton } from './AdItemSkeleton';

interface MainContentProps {
  adaccount: FacebookAdAccount
}

const MainContent: React.FC<MainContentProps> = ({ adaccount }) => {
  const [search, setSearch] = useSearchParams();
  const [searchValue, setSearchValue] = useState(search.get("q") || '');
  const { showButton, scrollToTop } = useScrollToTop(400);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
    refetch
  } = useGetAds({ variables: { id: adaccount.id as string, q: searchValue } });

  const { lastElementRef } = useInfiniteScroll({
    loading: isFetchingNextPage,
    hasMore: !!hasNextPage,
    onLoadMore: () => fetchNextPage(),
    enabled: !isLoading && status === 'success',
    rootMargin: '200px',
    delayInMs: 100
  });

  const handleSearch = () => {
    setSearch({ q: searchValue });
  };

  const ads = React.useMemo(() => {
    return data?.pages?.reduce((acc, page) => {
      return [...acc, ...page?.data];
    }, []) || [];
  }, [data]);

  useEffect(() => {
    refetch();
    return () => { }
  }, [search]);

  // Show skeleton for initial loading
  if (isLoading) {
    return (
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        <div className="mb-4 xl:mb-8">
          {/* Title skeleton */}
          <div className="h-6 bg-gray-200 dark:bg-neutral-700 rounded-sm w-32 mb-2" />
          <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded-sm w-48" />
        </div>
        
        {/* Search box skeleton */}
        <div className="mb-5">
          <div className="h-10 bg-gray-200 dark:bg-neutral-700 rounded-sm w-full" />
        </div>

        <AdListSkeleton />
      </div>
    );
  }

  return status === 'pending' ? (
    <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <AdListSkeleton />
    </div>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Title */}
        <div className="mb-4 xl:mb-8">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Ads
          </h1>
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            {search?.get("q") && (
              <>
                <span>Search results for </span>
                <span>
                  <strong>`{searchValue}`</strong>
                </span>
                <button
                  className="ml-2 text-sm text-blue-500 underline focus:outline-hidden focus:ring-3 focus:ring-blue-500 focus:ring-opacity-50"
                  onClick={() => {
                    setSearch({ q: '' });
                    setSearchValue('');
                  }}
                >Clear</button>
              </>
            )}
          </p>
        </div>
        <div className="space-y-5">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
              <svg
                className="shrink-0 size-4 text-gray-500 dark:text-neutral-400"
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
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <input
              type="text"
              className="py-2 px-3 ps-10 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
              placeholder="Search by name"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
          </div>
          <AdDisplay adaccount={adaccount} ads={ads} />
          
          {/* Infinite scroll trigger element */}
          <div 
            ref={lastElementRef}
            className="w-full py-4 flex justify-center"
          >
            {isFetchingNextPage && (
              <div className="w-full">
                <AdListSkeleton />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default MainContent;
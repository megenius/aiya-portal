import React, { useEffect, useMemo, useState } from 'react';
import { Bot, BotChannelStatus, FacebookAdAccount, WorkspaceChannel } from '~/@types/app';
import * as _ from 'lodash'
import { Loading } from '@repo/preline';
import { useSearchParams } from '@remix-run/react';
import AdDisplay from './AdDisplay';
import { useGetAds } from '~/hooks/adaccount/useGetAds';

interface MainContentProps {
  adaccount: FacebookAdAccount
}

const MainContent: React.FC<MainContentProps> = ({ adaccount }) => {
  const [search, setSearch] = useSearchParams()
  const [searchValue, setSearchValue] = useState(search.get("q") || '');

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

  const handleSearch = () => {
    setSearch({ q: searchValue });
  };

  const ads = React.useMemo(() => {
    return data?.pages?.reduce((acc, page) => {
      return [...acc, ...page.data];
    }, []) || [];
  }, [data]);

  useEffect(() => {
    refetch();
    console.log({ data });

    return () => { }
  }, [search]);

  if (isLoading) {
    return <Loading />
  }


  return status === 'pending' ? (
    <Loading />
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Title */}
        <div className="mb-4 xl:mb-8">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Ads
          </h1>
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            {/* Manage ads */}
          </p>
        </div>
        {/* End Title */}
        <div className="space-y-5">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
              <svg
                className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-400"
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
              placeholder="Search by name or ID"
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
          </div>
          <AdDisplay adaccount={adaccount} ads={ads} />
          <div>
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}
            </button>
          </div>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </div>
      </div>
    </>
  )
};

export default MainContent;
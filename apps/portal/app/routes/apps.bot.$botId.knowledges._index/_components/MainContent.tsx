import React, { useState } from 'react';
import { useBot } from '~/hooks/bot';
import { useBotKnowlegdes } from '~/hooks/bot/useBotKnowlegdes';
import { Bot } from '~/@types/app';
import { Loading } from '@repo/preline';
import TableFilter from './TableFilter';
import { useNavigate } from '@remix-run/react';

interface MainContentProps {
  bot: Bot
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  const { data: knowledges, isLoading } = useBotKnowlegdes(bot.id as string);
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleRowClick = (id: string) => {
    navigate("./" + id)
  }

  const filteredItems = React.useMemo(() => {
    if (!searchValue) return knowledges || [];

    const searchText = searchValue.toLowerCase().trim();

    return knowledges?.filter(item => {
      return item.name?.toLowerCase().includes(searchText);
    });
  }, [knowledges, searchValue]);

  if (isLoading || !knowledges) {
    return <Loading />;
  }

  return (
    <div className='md:py-2.5 px-4 sm:px-6 lg:px-8'>
      <div className="sm:pb-0 sm:pt-5 space-y-5">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <h1 className="text-lg md:text-xl font-semibold text-stone-800 dark:text-neutral-200">
              Knowledges ({knowledges?.length ?? 0})
            </h1>
          </div>
        </div>
        {/* End Header */}

        <TableFilter onChanged={handleSearchChange} />
        <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="min-w-full inline-block align-middle">
              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th scope="col" className="min-w-[250px] ">
                      <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Name
                      </div>
                    </th>
                    <th scope="col" className="min-w-48">
                      <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Total Intents
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {filteredItems?.map((item) => (
                    <tr key={item.id}>
                      <td className="size-px whitespace-nowrap pe-4 py-3 cursor-pointer">
                        <div className="w-full flex items-center gap-x-3" onClick={() => handleRowClick(item.id)}>
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              {item.name}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          {item.total_intent}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* End Table */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
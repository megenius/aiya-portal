import React, { useState } from 'react';
import { useBot } from '~/hooks/bot';
import { useBotKnowlegdes } from '~/hooks/bot/useBotKnowlegdes';
import { Bot } from '~/@types/app';
import { Loading } from '@repo/preline';
import TableFilter from './TableFilter';
import { useNavigate } from '@remix-run/react';
import BasicAddModal from '~/components/BasicAddModal';
import { useBotKnowledgeInsert } from '~/hooks/bot/useBotKnowledgeInsert';

interface MainContentProps {
  bot: Bot
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  const { data: knowledges, isLoading } = useBotKnowlegdes(bot.id as string);
  const insertBotKnowledge = useBotKnowledgeInsert();
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleRowClick = (id: string) => {
    navigate("./" + id)
  }

  const filteredItems = React.useMemo(() => {
    if (!searchValue) return knowledges?.map(item => {
      let no = 0
      try {
        no = Number(item.name?.split(".")[0])
      } catch (e) {

      }
      return {
        ...item,
        no
      }
    }).sort((a, b) => a.no - b.no) || [];

    const searchText = searchValue.toLowerCase().trim();

    return knowledges?.filter(item => {
      return item.name?.toLowerCase().includes(searchText);
    }).map(item => {
      let no = 0
      try {
        no = Number(item.name?.split(".")[0])
      } catch (e) {
      }
      return {
        ...item,
        no
      }
    }).sort((a, b) => a.no - b.no)
  }, [knowledges, searchValue]);

  if (isLoading || !knowledges) {
    return <Loading />;
  }

  return (
    <>
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
          <div className='flex justify-between'>
            <div className='flex-1'>
              <TableFilter onChanged={handleSearchChange} />
            </div>
            <div>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-hs-overlay={`#hs-add-knowledge`}
              >
                <svg className="hidden sm:block flex-shrink-0 size-3 me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z" />
                </svg>
                <span className="hidden sm:block">Add</span>Knowledge
              </button>
            </div>
          </div>

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
                          <div className="w-full flex items-center gap-x-3" onClick={() => handleRowClick(item.id as string)}>
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
      <BasicAddModal
        title='Add Knowledge'
        id='hs-add-knowledge'
        fields={[
          {
            name: 'name',
            label: 'Knowledge name',
            type: 'text',
            placeholder: 'My Knowledge',
            required: true
          },
        ]}
        onOk={(values) => {
          insertBotKnowledge.mutateAsync({
            variables: {
              bot_id: bot.id as string,
              data: {
                ...values,
                lang: 'th',
                intents: [],
                total_intent: 0,
                raw_data: []
              }
            }
          }).then((item) => {
            navigate(item.id ?? '')
          })
        }}
      />
    </>
  );
};

export default MainContent;
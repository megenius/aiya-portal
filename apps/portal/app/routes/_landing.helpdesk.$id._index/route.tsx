import { useParams } from '@remix-run/react';
import { Loading } from '@repo/preline';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useGetHelpDesk } from '~/hooks/useGetHelpDesk';
import MarkdownRenderer from './_components/MarkdownRenderer';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetHelpDesk({ id })

  if (isLoading) {
    return <Loading />
  }


  return (
    <main id="content" className="pb-[40px] sm:pb-[64px] ">
      {/* End Breadcrumb */}
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">

        {/* Account Card */}
        <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Title */}
          {/* <div className="flex justify-between gap-x-3 mb-4 xl:mb-8">
            <div>
              <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                {data.name}
              </h1>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
              </p>
            </div>
          </div> */}
          {/* End Title */}
          <MarkdownRenderer markdown={data.content} />
        </div>
      </div>
    </main>
  )
};

export default route;

const HelpDesk = ({ markdownContent }) => {
  return (
    <ReactMarkdown
      components={{

      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
};
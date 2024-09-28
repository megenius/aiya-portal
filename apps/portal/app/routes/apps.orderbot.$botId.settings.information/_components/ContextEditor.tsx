import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import { Orderbot } from '~/@types/app';
import SubmitButton from '~/components/SubmitButton';
import { useOrderbotUpdate } from '~/hooks/orderbot/useOrderbotUpdate';

interface ContextEditorProps {
  bot: Orderbot
}

const ContextEditor: React.FC<ContextEditorProps> = ({ bot }) => {
  const updateBot = useOrderbotUpdate()
  const [input, setInput] = React.useState(bot?.context as string)

  const handleSubmit = () => {
    updateBot.mutateAsync(
      {
        variables: {
          key: bot?.id as string,
          data: { context: input }
        }
      })
      .then(res => {
        toast.success("Success")
      })
  }

  return (
    <>
      {/* Bot Name */}
      <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
        {/* Grid */}
        <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
          <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
            <label
              htmlFor="hs-pro-dapsawn"
              className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
            >
              Context
            </label>
          </div>
          {/* End Col */}
          <div className="sm:col-span-8 xl:col-span-9 2xl:col-span-4">
            <div className='flex flex-col gap-y-2'>
              <textarea
                id="textarea-label"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                rows={20}
                defaultValue={input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder=''
              ></textarea>
              {input !== bot.context && (
                <div className="flex gap-x-3">
                  <SubmitButton
                    isSubmitting={updateBot.isPending}
                    onClick={() => {
                      handleSubmit();
                    }}
                  />
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    onClick={() => setInput(bot?.context as string)}
                  >
                    Cancel
                  </button>
                </div>
              )}
              {/* End Button Group */}
            </div>

          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </>
  );
};

export default ContextEditor;
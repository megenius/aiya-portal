import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import { Bot, Orderbot } from '~/@types/app';
import SubmitButton from '~/components/SubmitButton';
import { useOrderbotUpdate } from '~/hooks/orderbot/useOrderbotUpdate';

interface GuidelineEditorProps {
  bot: Orderbot
}

const GuidelineEditor: React.FC<GuidelineEditorProps> = ({ bot }) => {
  const updateBot = useOrderbotUpdate()
  const [input, setInput] = React.useState(bot?.guidelines as string)

  const handleSubmit = () => {
    updateBot.mutateAsync(
      {
        variables: {
          key: bot?.id as string,
          data: { guidelines: input }
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
              Guidelines
            </label>
          </div>
          {/* End Col */}
          <div className="sm:col-span-8 xl:col-span-9 2xl:col-span-4">
            <div className='flex flex-col gap-y-2'>
              <textarea
                id="textarea-label"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                rows={5}
                defaultValue={input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='End your answer by encourage customers to leave their phone number for further assistance.'
              ></textarea>
              {input !== bot.guidelines && (
                <div className="flex gap-x-3">
                  <SubmitButton
                    isSubmitting={updateBot.isPending}
                    onClick={() => {
                      handleSubmit();
                    }}
                  />
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    onClick={() => setInput(bot?.guidelines as string)}
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

export default GuidelineEditor;
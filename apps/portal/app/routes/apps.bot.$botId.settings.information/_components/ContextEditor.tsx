import React from 'react';
import { toast } from 'react-toastify';
import { Bot } from '~/@types/app';
import SubmitButton from '~/components/SubmitButton';
import { useBotUpdate } from '~/hooks/bot';

interface ContextEditorProps {
  bot: Bot
}

const MAX_LENGTH = 15000;

const ContextEditor: React.FC<ContextEditorProps> = ({ bot }) => {
  const updateBot = useBotUpdate();
  const [input, setInput] = React.useState(bot?.context as string || '');
  const inputLength = input.length;
  const isOverLimit = inputLength > MAX_LENGTH;

  const handleSubmit = () => {
    if (isOverLimit) return;
    updateBot.mutateAsync(
      {
        variables: {
          key: bot?.id as string,
          data: { context: input }
        }
      })
      .then(res => {
        toast.success("Success");
      });
  };

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
            <div className="flex flex-col gap-y-2 relative">
              <textarea
                id="textarea-label"
                className={`py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                  ${isOverLimit ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200'}
                `}
                rows={20}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder=""
                maxLength={MAX_LENGTH + 1000} // allow typing over limit for UX
                aria-invalid={isOverLimit}
              ></textarea>
              {/* Character Counter & Error */}
              <div className="flex justify-between mt-1">
                <div className="text-xs text-red-600 h-5">
                  {isOverLimit && (
                    <>สามารถใส่ Context ได้ไม่เกิน 15,000 ตัวอักษร</>
                  )}
                </div>
                <div className={`text-xs ${isOverLimit ? 'text-red-600' : 'text-gray-400'} select-none`}>
                  {inputLength.toLocaleString()}/{MAX_LENGTH.toLocaleString()}
                </div>
              </div>
              {input !== bot.context && (
                <div className="flex gap-x-3 mt-2">
                  <SubmitButton
                    isSubmitting={updateBot.isPending}
                    onClick={handleSubmit}
                    disabled={isOverLimit}
                  />
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    onClick={() => setInput(bot?.context as string || '')}
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
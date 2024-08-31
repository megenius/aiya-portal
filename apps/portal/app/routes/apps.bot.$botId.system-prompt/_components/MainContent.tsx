import React from 'react';
import { Bot } from '~/@types/app';
import { TailwindAdvancedEditor } from "@repo/editor";
import { useBotUpdate } from '~/hooks/bot';
import { toast } from 'react-toastify';

interface MainContentProps {
  bot: Bot
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  const updateBot = useBotUpdate()
  const [message, setMessage] = React.useState(bot.system_prompt_mobile as string)

  const handleSave = () => {
    updateBot.mutateAsync({
      variables: {
        key: bot.id as string,
        data: {
          system_prompt_mobile: message
        }
      }
    })
    toast.success('System prompt updated successfully')
  }

  return (
    <>
      {/* <TailwindAdvancedEditor /> */}
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
        {/* <label htmlFor="textarea-label" className="block text-sm font-medium mb-2">Mobile</label> */}
        <h2 className="inline-block text-lg font-semibold text-gray-800 dark:text-neutral-200">
          System Prompt
        </h2>
        <textarea
          id="textarea-label"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          rows={20}
          defaultValue={message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleSave}>Save</button>

      </div>


      {/* <div className="mt-4">
        <label htmlFor="textarea-label" className="block text-sm font-medium mb-2">Desktop</label>
        <textarea
          id="textarea-label"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          rows={15}
          defaultValue={bot.greeting_message as string}
        ></textarea>
      </div> */}
    </>
  );
};

export default MainContent;
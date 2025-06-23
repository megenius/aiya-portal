import React from 'react';
import { toast } from 'react-toastify';
import { Bot } from '~/@types/app';
import { useBotUpdate } from '~/hooks/bot';

interface MainContentProps {
  bot: Bot
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  const updateBot = useBotUpdate()
  const [greetingMessage, setGreetingMessage] = React.useState(bot.greeting_message_mobile as string)

  const handleSave = () => {
    updateBot.mutateAsync({
      variables: {
        key: bot.id as string,
        data: {
          greeting_message_mobile: greetingMessage,
          greeting_message: greetingMessage,
        }
      }
    })
    toast.success('Greeting message updated successfully')
  }

  return (
    <>
      {/* <TailwindAdvancedEditor /> */}

      <div className="">
        {/* <label htmlFor="textarea-label" className="block text-sm font-medium mb-2">Mobile</label> */}
        <textarea
          id="textarea-label"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          rows={15}
          defaultValue={greetingMessage}
          value={greetingMessage}
          onChange={(e) => setGreetingMessage(e.target.value)}
        ></textarea>
      </div>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleSave}>Save</button>

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
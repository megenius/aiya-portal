import React, { useEffect, useState, useRef, useCallback } from 'react';
// import { ChatToolbar, TextMessage } from "@repo/preline/chat";
import { ResponseElementType, ResponseElement } from '@repo/shared'
import { Bot, BotIntent, IntentResponse } from "~/@types/app";
import ChatBubble from './ChatBubble';
import ChatToolbar from './ChatToolbar';
import TextMessage from './chat/TextMessage';
import TextEditor from './chat/TextEditor';
import { useBotKnowledgeIntentResponseUpdate } from '~/hooks/bot/useBotKnowledgeIntentResponseUpdate';

interface ChatBubblesProps {
  bot: Bot;
  knowledgeId: string;
  intent: BotIntent;
  onUpdate?: (updatedIntent: BotIntent) => void;
}

const ChatBubbles: React.FC<ChatBubblesProps> = ({ intent, onUpdate, bot, knowledgeId }) => {
  const [messages, setMessages] = useState<ResponseElement[]>(intent.responses || []);

  const updateIntentReponse = useBotKnowledgeIntentResponseUpdate();

  const updateMessages = useCallback((newMessages: ResponseElement[]) => {
    setMessages(newMessages);
    onUpdate && onUpdate({ ...intent, responses: newMessages });
  }, [intent, onUpdate]);

  const handleMessageChange = useCallback((message: IntentResponse) => {
    setMessages(messages.map((msg) => msg.id === message.id ? message : msg))
    updateIntentReponse.mutateAsync({
      variables: {
        bot_id: bot.id as string,
        knowledge_id: knowledgeId,
        intent_id: intent.id,
        response: message,
      },
    }).then(() => {

    });
  }, [messages, updateIntentReponse, bot, intent]);

  const handleMessageDelete = useCallback((index: number) => {
    updateMessages(messages.filter((_, i) => i !== index));
  }, [messages, updateMessages]);

  const handleMessageDuplicate = useCallback((index: number) => {
    const newMessages = [...messages];
    newMessages.splice(index, 0, messages[index]);
    updateMessages(newMessages);
  }, [messages, updateMessages]);

  const renderResponseElement = useCallback((response: ResponseElement, index: number) => {
    if (typeof response === 'string' || response.type === ResponseElementType.Text) {
      const text = typeof response === 'string' ? response : response.payload?.text || '';
      return (
        <>
          <TextMessage
            response={response}
            onChanged={(message) => {
              console.log('onChanged', message);
            }}
            onDelete={() => handleMessageDelete(index)}
            onDuplicate={() => handleMessageDuplicate(index)}
          />
          <TextEditor
            response={response}
            onChanged={handleMessageChange}
            onDelete={(e) => {
            }} />
        </>
      );
    }
    return <div key={index}>Unsupported response type: {JSON.stringify(response)}</div>;
  }, [handleMessageChange, handleMessageDelete, handleMessageDuplicate]);

  useEffect(() => {
    setMessages(intent.responses || []);
  }, [intent]);

  useEffect(() => {
    setTimeout(() => {
      window.HSDropdown.autoInit();
    }, 500);
  }, [messages]);

  return (
    <>
      {messages.map((response, index) => (
        <ChatBubble key={index} bot={bot}>
          {renderResponseElement(response, index)}
        </ChatBubble>
      ))}
      <ChatBubble bot={bot}>
        <ChatToolbar modalKey={intent.id} />
      </ChatBubble>
    </>
  );
};

export default ChatBubbles;
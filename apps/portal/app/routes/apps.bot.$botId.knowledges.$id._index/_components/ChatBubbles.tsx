import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ChatToolbar, ResponseElement, ResponseElementType, TextMessage } from "@repo/preline/chat";
import { Bot, BotIntent } from "~/@types/app";
import ChatBubble from './ChatBubble';

interface ChatBubblesProps {
  intent: BotIntent;
  bot: Bot;
  onUpdate?: (updatedIntent: BotIntent) => void;
}

const ChatBubbles: React.FC<ChatBubblesProps> = ({ intent, onUpdate, bot }) => {
  const [messages, setMessages] = useState<ResponseElement[]>(intent.responses || []);

  const updateMessages = useCallback((newMessages: ResponseElement[]) => {
    setMessages(newMessages);
    onUpdate && onUpdate({ ...intent, responses: newMessages });
  }, [intent, onUpdate]);

  const handleMessageChange = useCallback((index: number, payload: { text: string }) => {
    updateMessages(
      messages.map((msg, i) => i === index ? payload.text as any : msg)
    );
  }, [messages, updateMessages]);

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
        <TextMessage
          key={index}
          index={index}
          text={text}
          onChanged={({ text }) => handleMessageChange(index, { text })}
          onDelete={() => handleMessageDelete(index)}
          onDuplicate={() => handleMessageDuplicate(index)}
        />
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
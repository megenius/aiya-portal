import React, { useEffect, useState, useRef, useCallback } from 'react';
// import { ChatToolbar, TextMessage } from "@repo/preline/chat";
import { ResponseElementType, ResponseElement } from '@repo/shared'
import { Bot, BotIntent, ImageMessageResponse, IntentResponse, TextMessageResponse } from "~/@types/app";
import ChatBubble from './ChatBubble';
import ChatToolbar from './ChatToolbar';
import TextMessage from './chat/TextMessage';
import TextEditor from './chat/TextEditor';
import { useBotKnowledgeIntentResponseUpdate } from '~/hooks/bot/useBotKnowledgeIntentResponseUpdate';
import { useBotKnowledgeIntentResponseDelete } from '~/hooks/bot/useBotKnowledgeIntentResponseDelete';
import { useBotKnowledgeIntentResponseInsert } from '~/hooks/bot/useBotKnowledgeIntentResponseInsert';
import { randomHexString } from '~/utils/random';
import { useBotKnowledgeIntentResponseDuplicate } from '~/hooks/bot/useBotKnowledgeIntentResponseDuplicate';
import ImageMessage from './chat/ImageMessage';
import ImageEditor from './chat/ImageEditor';

interface ChatBubblesProps {
  bot: Bot;
  knowledgeId: string;
  intent: BotIntent;
  onUpdate?: (updatedIntent: BotIntent) => void;
}

const ChatBubbles: React.FC<ChatBubblesProps> = ({ intent, onUpdate, bot, knowledgeId }) => {
  const [messages, setMessages] = useState<IntentResponse[]>(intent.responses || []);

  const insertIntentResponse = useBotKnowledgeIntentResponseInsert();
  const updateIntentReponse = useBotKnowledgeIntentResponseUpdate();
  const deleteIntentResponse = useBotKnowledgeIntentResponseDelete();
  const duplicateIntentResponse = useBotKnowledgeIntentResponseDuplicate();


  const handleMessageChange = useCallback((message: IntentResponse) => {
    setMessages(messages.map((msg) => msg.id === message.id ? message : msg))
    updateIntentReponse.mutateAsync({
      variables: {
        bot_id: bot.id as string,
        knowledge_id: knowledgeId,
        intent_id: intent.id,
        response: message,
      },
    })
  }, [messages, updateIntentReponse, bot, intent]);

  const handleMessageDelete = useCallback((responseId: string) => {
    setMessages(messages.filter((msg) => msg.id !== responseId));
    deleteIntentResponse.mutateAsync({
      variables: {
        bot_id: bot.id as string,
        knowledge_id: knowledgeId,
        intent_id: intent.id,
        response_id: responseId
      },
    });
  }, [messages, deleteIntentResponse, bot, intent]);

  const handleMessageDuplicate = useCallback((index: number) => {
    const message = messages[index];
    const newMessage = { ...message, id: randomHexString(8) };
    setMessages([...messages.slice(0, index + 1), newMessage, ...messages.slice(index + 1)]);
    duplicateIntentResponse.mutateAsync({
      variables: {
        bot_id: bot.id as string,
        knowledge_id: knowledgeId,
        intent_id: intent.id,
        response_id: message.id,
      },
    });

  }, [messages, insertIntentResponse, bot, intent]);

  const handleMessageInsert = (message: IntentResponse) => {
    setMessages([...messages, message]);

    insertIntentResponse.mutateAsync({
      variables: {
        bot_id: bot.id as string,
        knowledge_id: knowledgeId,
        intent_id: intent.id,
        response: [message],
      },
    });
  }

  const renderResponseElement = useCallback((response: IntentResponse, index: number) => {
    if (typeof response === 'string' || response.type === ResponseElementType.Text) {
      const item = response as TextMessageResponse;
      const text = typeof response === 'string' ? item : item.payload.text || '';
      return (
        <>
          <TextMessage
            response={item}
            onDelete={() => handleMessageDelete(item.id)}
            onDuplicate={() => handleMessageDuplicate(index)}
          />
          <TextEditor
            response={item}
            onChanged={handleMessageChange} />
        </>
      );
    } else if (response.type === ResponseElementType.Image) {
      const item = response as ImageMessageResponse;
      return (
        <>
          <ImageMessage key={index} response={item}
            onDelete={() => handleMessageDelete(item.id)}
            onDuplicate={() => handleMessageDuplicate(index)}
          />
          <ImageEditor response={item}
            onChanged={handleMessageChange} />
        </>
      )
    }


    return <div key={index}>Unsupported response type: {JSON.stringify(response)}</div>;
  }, [handleMessageChange, handleMessageDelete, handleMessageDuplicate, bot, knowledgeId, intent]);

  const handleOpenModal = (offcanvasId: string) => {
    const offcanvas = document.getElementById(`hs-offcanvas-${offcanvasId}`);
    console.log("offcanvas", offcanvas);

    if (offcanvas) {
      // Assuming you're using a library like HSOverlay
      // @ts-ignore
      window.HSOverlay.open(offcanvas);
    }
  }

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
        <ChatToolbar modalKey={intent.id}
          onAddText={() => handleOpenModal(`new-text-${intent.id}`)}
          onAddImage={() => handleOpenModal(`new-image-${intent.id}`)}
        />
      </ChatBubble>
      <TextEditor id={`new-text-${intent.id}`} response={{
        id: randomHexString(8),
        type: ResponseElementType.Text,
        payload: {
          text: ""
        }
      }}
        onChanged={handleMessageInsert}
        onDelete={(e) => { }}
      />

      <ImageEditor id={`new-image-${intent.id}`} response={{
        id: randomHexString(8),
        type: ResponseElementType.Image,
        payload: {
          url: "",
          alt: ""
        }
      }}
        onChanged={(e) => handleMessageInsert({ ...e, id: randomHexString(8) })}
        onDelete={(e) => { }}
      />
    </>
  );
};

export default ChatBubbles;
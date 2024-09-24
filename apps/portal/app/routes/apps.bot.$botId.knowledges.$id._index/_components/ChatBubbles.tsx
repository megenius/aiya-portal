import React, { useEffect, useState, useRef, useCallback } from 'react';
// import { ChatToolbar, TextMessage } from "@repo/preline/chat";
import { ResponseElementType, ResponseElement } from '@repo/shared'
import { Bot, BotIntent, IntentResponse } from "~/@types/app";
import ChatBubble from './ChatBubble';
import ChatToolbar from './ChatToolbar';
import TextMessage from './chat/TextMessage';
import TextEditor from './chat/TextEditor';
import { useBotKnowledgeIntentResponseUpdate } from '~/hooks/bot/useBotKnowledgeIntentResponseUpdate';
import { useBotKnowledgeIntentResponseDelete } from '~/hooks/bot/useBotKnowledgeIntentResponseDelete';
import { useBotKnowledgeIntentResponseInsert } from '~/hooks/bot/useBotKnowledgeIntentResponseInsert';
import { randomHexString } from '~/utils/random';
import { useBotKnowledgeIntentResponseDuplicate } from '~/hooks/bot/useBotKnowledgeIntentResponseDuplicate';

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

  const handleMessageInsert = useCallback((message: IntentResponse) => {
    setMessages([...messages, message]);
    insertIntentResponse.mutateAsync({
      variables: {
        bot_id: bot.id as string,
        knowledge_id: knowledgeId,
        intent_id: intent.id,
        response: [message],
      },
    });
  }, [messages, insertIntentResponse, bot, intent]);

  const renderResponseElement = useCallback((response: ResponseElement, index: number) => {
    if (typeof response === 'string' || response.type === ResponseElementType.Text) {
      const text = typeof response === 'string' ? response : response.payload?.text || '';
      return (
        <>
          <TextMessage
            response={response}
            onDelete={() => handleMessageDelete(response.id)}
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
          onAddText={() => handleOpenModal("new-text")} />
      </ChatBubble>
      <TextEditor id="new-text" response={{
        id: randomHexString(8),
        type: ResponseElementType.Text,
        payload: {
          text: ""
        }
      }}
        onChanged={handleMessageInsert}
        onDelete={(e) => { }}
      />
    </>
  );
};

export default ChatBubbles;
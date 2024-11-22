import React, { useState, useRef, useEffect, useCallback, useReducer } from 'react';
import { streamBotChat } from '~/services/bots';
import { format, isToday, isYesterday, isSameDay } from 'date-fns';

type Message = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
}

type ChatState = {
  messages: Message[];
  isStreaming: boolean;
  error: string | null;
}

type Action =
  | { type: 'ADD_USER_MESSAGE'; content: string }
  | { type: 'START_ASSISTANT_STREAM' }
  | { type: 'APPEND_TO_STREAM'; content: string }
  | { type: 'END_ASSISTANT_STREAM' }
  | { type: 'ADD_SYSTEM_MESSAGE'; content: string }
  | { type: 'SET_ERROR'; error: string | null }
  | { type: 'CLEAR_MESSAGES' };

function chatReducer(state: ChatState, action: Action): ChatState {
  switch (action.type) {
    case 'ADD_USER_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: crypto.randomUUID(),
            role: 'user',
            content: action.content,
            timestamp: new Date().toISOString()
          }
        ],
        error: null
      };

    case 'START_ASSISTANT_STREAM':
      return {
        ...state,
        isStreaming: true,
        messages: [
          ...state.messages,
          {
            id: crypto.randomUUID(),
            role: 'assistant',
            content: '',
            timestamp: new Date().toISOString()
          }
        ]
      };

    // case 'APPEND_TO_STREAM':
    //   return {
    //     ...state,
    //     messages: state.messages.map((msg, index) =>
    //       index === state.messages.length - 1
    //         ? { ...msg, content: msg.content + action.content }
    //         : msg
    //     )
    //   };

    case 'APPEND_TO_STREAM':
      return {
        ...state,
        messages: state.messages.map((msg, index) =>
          index === state.messages.length - 1
            ? { ...msg, content: action.content }
            : msg
        )
      };


    case 'END_ASSISTANT_STREAM':
      return {
        ...state,
        isStreaming: false
      };

    case 'ADD_SYSTEM_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: crypto.randomUUID(),
            role: 'system',
            content: action.content,
            timestamp: new Date().toISOString()
          }
        ]
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
        isStreaming: false
      };

    case 'CLEAR_MESSAGES':
      return {
        ...state,
        messages: [],
        error: null,
        isStreaming: false
      };

    default:
      return state;
  }
}
export default function ChatApp({ botId }: { botId: string }) {
  const initialState: ChatState = {
    messages: [],
    isStreaming: false,
    error: null
  };

  const [state, dispatch] = useReducer(chatReducer, initialState);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages, scrollToBottom]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        handleClearChat();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const formatMessageDate = (date: Date): string => {
    if (isToday(date)) {
      return format(date, 'h:mm a');
    } else if (isYesterday(date)) {
      return 'Yesterday';
    } else {
      return format(date, 'MMM d, yyyy');
    }
  };

  const groupMessagesByDate = (messages: Message[]): MessageGroup[] => {
    const groups: MessageGroup[] = [];
    let currentDate = '';
    let currentMessages: Message[] = [];

    messages.forEach((message) => {
      const messageDate = format(new Date(message.timestamp), 'yyyy-MM-dd');

      if (messageDate !== currentDate) {
        if (currentMessages.length > 0) {
          groups.push({
            date: currentDate,
            messages: currentMessages
          });
        }
        currentDate = messageDate;
        currentMessages = [message];
      } else {
        currentMessages.push(message);
      }
    });

    if (currentMessages.length > 0) {
      groups.push({
        date: currentDate,
        messages: currentMessages
      });
    }

    return groups;
  };

  const streamTextByChar = useCallback(async (text: string) => {
    dispatch({ type: 'SET_TYPING', isTyping: true });
    let currentText = '';
    const TYPING_SPEED = 20;

    for (let i = 0; i < text.length; i++) {
      if (abortControllerRef.current?.signal.aborted) {
        break;
      }
      await new Promise(resolve => setTimeout(resolve, TYPING_SPEED));
      currentText += text[i];
      dispatch({ type: 'UPDATE_LAST_ASSISTANT_MESSAGE', content: currentText });
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    dispatch({ type: 'SET_TYPING', isTyping: false });
  }, []);

  const handleClearChat = useCallback(() => {
    if (window.confirm('Are you sure you want to clear all messages?')) {
      dispatch({ type: 'CLEAR_MESSAGES' });
      inputRef.current?.focus();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    // Add user message
    dispatch({ type: 'ADD_USER_MESSAGE', content: trimmedInput });
    setInput('');

    try {
      // Start streaming
      dispatch({ type: 'START_ASSISTANT_STREAM' });

      const response = await streamBotChat(botId, {
        messages: [...state.messages, { role: 'user', content: trimmedInput }],
      });

      // Process the stream
      const textDecoder = new TextDecoder();
      let text: string = ''

      for await (const chunk of response.data) {
        if (abortControllerRef.current?.signal.aborted) {
          break;
        }

        if (typeof chunk === 'string') {
          text += chunk;
        } else if (chunk instanceof Buffer) {
          text += chunk.toString();
        } else if (chunk instanceof Uint8Array) {
          text += textDecoder.decode(chunk);
        } else {
          text += JSON.stringify(chunk);
        }

        dispatch({ type: 'APPEND_TO_STREAM', content: text });
      }


    } catch (error) {
      console.error('Error:', error);
      dispatch({
        type: 'SET_ERROR',
        error: error instanceof Error ? error.message : 'An error occurred while processing your message.'
      });
    } finally {
      dispatch({ type: 'END_ASSISTANT_STREAM' });
      abortControllerRef.current = null;
    }
  };


  const messageGroups = groupMessagesByDate(state.messages);


  return (
    <div className="max-w-4xl mx-auto bg-white border rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h3 className="font-semibold text-gray-800">Chat Assistant</h3>
        <button
          onClick={handleClearChat}
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        >
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
          Clear Chat
        </button>
      </div>

      {/* Messages Container */}
      <div className="p-4 h-[600px] overflow-y-auto bg-gray-50 space-y-4">
        {messageGroups.map((group, groupIndex) => {
          const groupDate = new Date(group.date);

          return (
            <div key={group.date} className="space-y-4">
              {/* Date Header */}
              <div className="text-center">
                <span className="px-3 py-1 text-xs font-medium text-gray-500 bg-white rounded-full inline-block">
                  {formatMessageDate(groupDate)}
                </span>
              </div>

              {/* Messages */}
              {group.messages.map((message, messageIndex) => {
                const isUser = message.role === 'user';
                const isSystem = message.role === 'system';
                const showAvatar = messageIndex === 0 ||
                  group.messages[messageIndex - 1]?.role !== message.role;

                return (
                  <div
                    key={message.id}
                    className={`flex gap-x-2 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {/* Assistant Avatar */}
                    {!isUser && showAvatar && (
                      <span className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm">
                        AI
                      </span>
                    )}

                    {/* Message Content */}
                    <div
                      className={`max-w-[85%] rounded-xl px-4 py-2 space-y-1 ${isUser
                        ? 'bg-blue-600 text-white'
                        : isSystem
                          ? 'bg-yellow-50 border border-yellow-200'
                          : 'bg-white shadow-sm'
                        }`}
                    >
                      <p className="text-sm whitespace-pre-wrap break-words">
                        {message.content}
                      </p>
                      <p className="text-xs opacity-70">
                        {format(new Date(message.timestamp), 'h:mm a')}
                      </p>
                    </div>

                    {/* User Avatar */}
                    {isUser && showAvatar && (
                      <span className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-sm">
                        You
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Typing Indicator */}
        {state.isTyping && (
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm">
              AI
            </span>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {state.error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-4 w-4 text-red-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
              <p className="ml-2 text-sm text-red-600">{state.error}</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-4 bg-white border-t">
        <form onSubmit={handleSubmit} className="flex gap-x-3">
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              placeholder="Type your message... (Press '/' to focus)"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white border"
            />
            {/* Optional: Add emoji picker or file upload button here */}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            {isLoading ? (
              <span className="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent text-white rounded-full" />
            ) : (
              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            )}
            Send
          </button>
        </form>
      </div>

      {/* Optional: Add a composer toolbar for rich text formatting */}
      {/* Optional: Add a file upload preview area */}
    </div>
  );
}
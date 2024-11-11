// ChatApp.tsx
import React, { useState, useRef, useEffect } from 'react';
import { streamBotChat } from '~/services/bots';

export default function ChatApp({ botId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const abortControllerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    // setIsLoading(true);

    try {
      const response = await streamBotChat(botId, {
        messages: [...messages, userMessage],
      });

      let assistantMessage = { role: 'assistant', content: '' };
      setMessages(prev => [...prev, assistantMessage]);

      // Handle the streaming response
      for await (const chunk of response.data) {
        // If chunk is already a string, use it directly
        // Otherwise, try to parse it as a string
        const text = typeof chunk === 'string'
          ? chunk
          : chunk instanceof Buffer
            ? chunk.toString()
            : JSON.stringify(chunk);

        // Update the assistant's message with the new chunk
        assistantMessage.content += text;
        setMessages(prev => [...prev.slice(0, -1), { ...assistantMessage }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'system',
        content: `Error: ${error.message || 'An error occurred while processing your message.'}`
      }]);
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  // Auto scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Chat header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-3 flex justify-between items-center">
          <h3 className="font-semibold text-gray-800">Chat Assistant</h3>
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to clear all messages?')) {
                setMessages([]);
              }
            }}
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          >
            Clear Chat
          </button>
        </div>
      </div>

      {/* Chat messages */}
      <div className="h-[600px] overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-xl p-4 ${message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : message.role === 'system'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-white shadow-sm'
                }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-xl p-4 shadow-sm max-w-[85%]">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat input */}
      <div className="bg-white border-t border-gray-200">
        <form onSubmit={handleSubmit} className="p-4">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              disabled={isLoading}
              className="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Type your message..."
              rows={1}
            />
            <div className="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21.7 12a.3.3 0 0 1-.3.3H3a.3.3 0 0 1-.3-.3c0-.2.1-.3.3-.3h18.4c.2 0 .3.1.3.3z" />
                      <path d="m12.7 3.3 9 8.7-9 8.7" />
                    </svg>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
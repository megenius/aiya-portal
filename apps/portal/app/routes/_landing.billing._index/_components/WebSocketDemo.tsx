import React, { useState, useEffect, useCallback } from 'react';

const WebSocketDemo = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('disconnected');

  // Initialize WebSocket connection
  useEffect(() => {
    // Replace with your WebSocket server URL
    const ws = new WebSocket('ws://localhost:4000/api/billing/counter/websocket');

    ws.onopen = () => {
      setStatus('connected');
      setMessages(prev => [...prev, { type: 'system', text: 'Connected to server' }]);
    };

    ws.onmessage = (event) => {
      setMessages(prev => [...prev, { type: 'received', text: event.data }]);
    };

    ws.onclose = () => {
      setStatus('disconnected');
      setMessages(prev => [...prev, { type: 'system', text: 'Disconnected from server' }]);
    };

    ws.onerror = (error) => {
      setStatus('error');
      setMessages(prev => [...prev, { type: 'error', text: 'WebSocket error occurred' }]);
      console.error('WebSocket error:', error);
    };

    setSocket(ws);

    // Cleanup on unmount
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  // Send message handler
  const sendMessage = useCallback(() => {
    if (socket && message && status === 'connected') {
      socket.send(message);
      setMessages(prev => [...prev, { type: 'sent', text: message }]);
      setMessage('');
    }
  }, [socket, message, status]);

  // Handle enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Card container */}
      <div className="bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        {/* Card header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              WebSocket Demo
            </h3>
            <span className={`inline-block w-3 h-3 rounded-full ${
              status === 'connected' ? 'bg-green-500' :
              status === 'error' ? 'bg-red-500' :
              'bg-gray-500'
            }`} />
          </div>
        </div>

        {/* Card body */}
        <div className="p-6">
          {/* Messages area */}
          <div className="h-96 overflow-y-auto mb-4 p-4 border border-gray-200 rounded-lg dark:border-gray-700">
            <div className="space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.type === 'sent' 
                      ? 'ml-auto bg-blue-500 text-white' 
                      : msg.type === 'received'
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                      : msg.type === 'error'
                      ? 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400'
                      : 'bg-gray-100 text-gray-600 italic text-sm dark:bg-gray-800 dark:text-gray-400'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </div>

          {/* Input area */}
          <div className="flex gap-2">
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              disabled={status !== 'connected'}
            />
            <button
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-lg border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm disabled:opacity-50 disabled:pointer-events-none dark:focus:ring-offset-gray-800"
              onClick={sendMessage}
              disabled={!message || status !== 'connected'}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSocketDemo;
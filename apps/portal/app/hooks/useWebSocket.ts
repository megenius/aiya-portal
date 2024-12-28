import { useState, useEffect, useCallback, useRef } from 'react';

type WebSocketStatus = 'CONNECTING' | 'OPEN' | 'CLOSING' | 'CLOSED' | 'RECONNECTING';

interface WebSocketOptions {
  onOpen?: (event: Event) => void;
  onClose?: (event: CloseEvent) => void;
  onMessage?: (data: any) => void;
  onError?: (event: Event) => void;
  reconnectAttempts?: number;
  reconnectInterval?: number;
  autoReconnect?: boolean;
  protocols?: string | string[];
}

interface WebSocketHookResult {
  status: WebSocketStatus;
  message: any;
  error: Event | null;
  sendMessage: (data: any) => boolean;
  reconnect: () => void;
  disconnect: () => void;
}

const useWebSocket = (
  url: string,
  options: WebSocketOptions = {}
): WebSocketHookResult => {
  const {
    reconnectAttempts = 5,
    reconnectInterval = 3000,
    autoReconnect = true,
    protocols,
    onOpen,
    onClose,
    onMessage,
    onError,
  } = options;

  const [status, setStatus] = useState<WebSocketStatus>('CONNECTING');
  const [message, setMessage] = useState<any>(null);
  const [error, setError] = useState<Event | null>(null);

  const webSocketRef = useRef<WebSocket | null>(null);
  const reconnectCountRef = useRef(0);
  const reconnectTimerRef = useRef<number>();

  // Helper function to create a new WebSocket instance
  const createWebSocket = useCallback(() => {
    const ws = new WebSocket(url, protocols);
    webSocketRef.current = ws;
    return ws;
  }, [url, protocols]);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (reconnectTimerRef.current) {
      window.clearTimeout(reconnectTimerRef.current);
    }
    if (webSocketRef.current) {
      webSocketRef.current.close();
    }
  }, []);

  // Reconnection logic
  const reconnect = useCallback(() => {
    cleanup();
    if (reconnectCountRef.current < reconnectAttempts) {
      setStatus('RECONNECTING');
      reconnectTimerRef.current = window.setTimeout(() => {
        reconnectCountRef.current += 1;
        initWebSocket();
      }, reconnectInterval);
    } else {
      setStatus('CLOSED');
      setError(new Event('Max reconnection attempts reached'));
    }
  }, [reconnectAttempts, reconnectInterval, cleanup]);

  // Message sending function
  const sendMessage = useCallback((data: any): boolean => {
    if (webSocketRef.current?.readyState === WebSocket.OPEN) {
      const message = typeof data === 'string' ? data : JSON.stringify(data);
      webSocketRef.current.send(message);
      return true;
    }
    return false;
  }, []);

  // Disconnect function
  const disconnect = useCallback(() => {
    cleanup();
    setStatus('CLOSED');
  }, [cleanup]);

  // Initialize WebSocket connection
  const initWebSocket = useCallback(() => {
    const ws = createWebSocket();

    ws.onopen = (event: Event) => {
      setStatus('OPEN');
      setError(null);
      reconnectCountRef.current = 0;
      onOpen?.(event);
    };

    ws.onclose = (event: CloseEvent) => {
      setStatus('CLOSED');
      onClose?.(event);
      
      if (autoReconnect && !event.wasClean) {
        reconnect();
      }
    };

    ws.onerror = (event: Event) => {
      setError(event);
      onError?.(event);
    };

    ws.onmessage = (event: MessageEvent) => {
      let parsedData;
      try {
        parsedData = JSON.parse(event.data);
      } catch {
        parsedData = event.data;
      }
      setMessage(parsedData);
      onMessage?.(parsedData);
    };

    return ws;
  }, [createWebSocket, autoReconnect, 
    // reconnect, onOpen, onClose, 
    // onMessage, onError
  ]);

  // Setup WebSocket connection
  useEffect(() => {
    const ws = initWebSocket();
    
    return () => {
      cleanup();
      ws.close();
    };
  }, [url, initWebSocket, cleanup]);

  return {
    status,
    message,
    error,
    sendMessage,
    reconnect,
    disconnect
  };
};

export default useWebSocket;

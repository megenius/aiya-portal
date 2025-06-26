// hooks/useInfiniteScroll.ts
import { useEffect, useRef, useCallback } from 'react';

interface UseInfiniteScrollOptions {
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void | Promise<any>;
  rootMargin?: string;
  threshold?: number;
  enabled?: boolean;
  delayInMs?: number;
}

export const useInfiniteScroll = ({
  loading,
  hasMore,
  onLoadMore,
  rootMargin = '200px',
  threshold = 0.1,
  enabled = true,
  delayInMs = 0
}: UseInfiniteScrollOptions) => {
  const observerRef = useRef<IntersectionObserver>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (!enabled) return;
      if (loading) return;
      
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            // Clear any existing timeout
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }

            // Set new timeout if delay is specified
            if (delayInMs > 0) {
              timeoutRef.current = setTimeout(() => {
                onLoadMore();
              }, delayInMs);
            } else {
              onLoadMore();
            }
          }
        },
        {
          root: null,
          rootMargin,
          threshold,
        }
      );

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [loading, hasMore, onLoadMore, rootMargin, threshold, enabled, delayInMs]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    lastElementRef,
    observerRef
  };
};
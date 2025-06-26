import { useCallback, useState, useRef } from "react";
/**
 * Custom hook for initializing Preline UI components with debouncing
 * @param {number} delay - The debounce delay in milliseconds (default: 100ms)
 * @returns {Object} An object containing the initialization functions and status
 */
export function usePrelineInit(delay = 500) {
  const [isInitialized, setIsInitialized] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Core initialization function
  const initializeCore = useCallback(async () => {
    try {
      const { 
        HSOverlay, 
        HSStaticMethods, 
        HSDropdown, 
        HSAccordion, 
        HSTogglePassword, 
        HSSelect 
      } = await import('preline/preline');

      // Initialize all Preline components
      HSStaticMethods.autoInit();
      HSOverlay.autoInit();
      HSDropdown.autoInit();
      HSAccordion.autoInit();
      HSTogglePassword.autoInit();
      HSSelect.autoInit();
      
      setIsInitialized(true);
      console.log("Preline components initialized successfully");
      return true;
    } catch (error) {
      console.error("Failed to initialize Preline components:", error);
      setIsInitialized(false);
      return false;
    }
  }, []);

  // Debounced initialize function
  const initialize = useCallback(async () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
    return new Promise<boolean>((resolve) => {
      timeoutRef.current = setTimeout(async () => {
        const result = await initializeCore();
        resolve(result);
      }, delay);
    });
  }, [initializeCore, delay]);

  // Immediate initialize without debouncing
  const initializeImmediate = useCallback(async () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    return initializeCore();
  }, [initializeCore]);

  // Clean up the timeout when the component unmounts
  const cancelPending = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  return {
    initialize,
    initializeImmediate,
    cancelPending,
    isInitialized
  };
}

import { useEffect, useState } from 'react';
import { CssLoader } from '../utils/css-loader';

/**
 * Hook to track if all stylesheets are loaded
 * @param retryCount Number of retries to attempt
 * @param delayBetweenRetries Delay between retries in milliseconds
 * @returns State indicating if stylesheets are loaded
 */
export function useStylesheetsLoaded(retryCount = 3, delayBetweenRetries = 500): boolean {
  const [isLoaded, setIsLoaded] = useState(
    typeof window === 'undefined' ? true : CssLoader.areCssStylesheetsLoaded()
  );

  useEffect(() => {
    if (typeof window === 'undefined' || isLoaded) return;

    const checkAndReload = async () => {
      const loaded = await CssLoader.ensureStylesheetsLoaded(retryCount, delayBetweenRetries);
      setIsLoaded(loaded);
    };

    checkAndReload();
  }, [retryCount, delayBetweenRetries]);

  return isLoaded;
}

"use client";

import { useEffect } from "react";
import { type IStaticMethods, HSOverlay, HSDropdown, HSAccordion, HSTogglePassword, HSSelect } from "preline/preline";
import { useLocation } from "@remix-run/react";
import { usePrelineInit } from "./hooks/usePrelineInit";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
    HSOverlay: typeof HSOverlay;
    HSDropdown: typeof HSDropdown;
    HSAccordion: typeof HSAccordion;
    HSTogglePassword: typeof HSTogglePassword;
    HSSelect: typeof HSSelect;
  }
}

export default function PrelineScript() {
  const location = useLocation();
  const { initialize, isInitialized } = usePrelineInit();

  useEffect(() => {
    // Create a flag to prevent initialization if component unmounts during async operation
    let isComponentMounted = true;
    
    const initializeComponents = async () => {
      if (isComponentMounted) {
        await initialize();
      }
    };
    
    // Small delay to ensure DOM is fully ready
    const timeoutId = setTimeout(initializeComponents, 500);
    
    // Cleanup function
    return () => {
      isComponentMounted = false;
      clearTimeout(timeoutId);
    };
  }, [location.pathname, initialize]);

  return null;
}
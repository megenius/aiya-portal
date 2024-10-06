"use client";

import { useEffect } from "react";

import { type IStaticMethods, HSOverlay, HSDropdown, HSAccordion, HSTogglePassword } from "preline/preline";
import { useLocation } from "@remix-run/react";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
    HSOverlay: typeof HSOverlay;
    HSDropdown: typeof HSDropdown;
    HSAccordion: typeof HSAccordion;
    HSTogglePassword: typeof HSTogglePassword;
  }
}

export default function PrelineScript() {

  const location = useLocation();

  useEffect(() => {
    async function initializePreline() {
      await import('preline/preline').then(({ HSStaticMethods, HSOverlay, HSTabs, HSDropdown, HSAccordion, HSTogglePassword }) => {
        setTimeout(() => {
          HSStaticMethods.autoInit();
          HSOverlay.autoInit();
          HSTabs.autoInit();
        }, 1000)
      });
    }

    initializePreline();
  }, [location.pathname]);


  return null;
}
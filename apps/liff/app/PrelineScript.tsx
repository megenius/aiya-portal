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
      await import('preline/preline').then(({ HSStaticMethods, HSOverlay, HSTabs }) => {
        HSStaticMethods.autoInit();
        HSOverlay.autoInit();
        HSTabs.autoInit();
      });
    }

    initializePreline();
  }, [location.pathname]);


  return null;
}
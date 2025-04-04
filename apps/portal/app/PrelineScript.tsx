"use client";

import { useEffect } from "react";

// import {IStaticMethods, HSOverlay, HSDropdown, HSAccordion } from "preline/preline";
import { type IStaticMethods, HSOverlay, HSDropdown, HSAccordion, HSTogglePassword, HSSelect } from "preline/preline";
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
      await import('preline/preline').then(({ HSOverlay, HSStaticMethods, HSDropdown, HSAccordion, HSTogglePassword, HSSelect }) => {
        setTimeout(() => {
          HSStaticMethods.autoInit();
          HSOverlay.autoInit();
          HSDropdown.autoInit()
          HSAccordion.autoInit()
          HSTogglePassword.autoInit()
          HSSelect.autoInit()
        }, 500)
      });
    }

    initializePreline();
  }, [location.pathname]);


  return null;
}
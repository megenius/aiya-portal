// app/components/DynamicFavicon.tsx
import { useEffect } from 'react';

interface DynamicFaviconProps {
  href: string;
}

export default function DynamicFavicon({ href }: DynamicFaviconProps) {
  useEffect(() => {
    if (href) {
      const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = href;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }, [href]);

  return null;
}
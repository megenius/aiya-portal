// hooks/useScrollToTop.ts
import { useEffect, useState } from 'react';

export const useScrollToTop = (threshold = 400) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledFromTop = window.scrollY || document.documentElement.scrollTop;
      setShowButton(scrolledFromTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return {
    showButton,
    scrollToTop
  };
};
import { useState, useEffect, RefObject } from 'react';

export const useParallax = (ref: RefObject<HTMLElement>, speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const sectionTop = rect.top + scrolled;
        const windowHeight = window.innerHeight;
        
        // Calculate offset based on how far we've scrolled past the section
        if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + rect.height) {
          const relativeScroll = scrolled + windowHeight - sectionTop;
          setOffset(relativeScroll * speed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);

  return offset;
};

import { useState, useEffect, useRef } from 'react';

export function useScrollStep(threshold = 0.5) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = parseInt(entry.target.getAttribute('data-step'), 10);
            setActiveStep(step);
          }
        });
      },
      { threshold }
    );

    const steps = containerRef.current?.querySelectorAll('[data-step]');
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, [threshold]);

  return { activeStep, containerRef };
}

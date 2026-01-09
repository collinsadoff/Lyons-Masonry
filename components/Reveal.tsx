
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  // Added optional className prop to fix type errors when styling the wrapper
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, width = "100%", delay = 0, direction = "up", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    switch(direction) {
        case "up": return "translate-y-12";
        case "down": return "-translate-y-12";
        case "left": return "translate-x-12";
        case "right": return "-translate-x-12";
        default: return "translate-y-12";
    }
  }

  return (
    // Applied the custom className to the outer wrapper div
    <div ref={ref} style={{ width }} className={`relative overflow-hidden ${className}`}>
      <div
        style={{ transitionDelay: `${delay}ms` }}
        className={`transform transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${getTransform()}`
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;

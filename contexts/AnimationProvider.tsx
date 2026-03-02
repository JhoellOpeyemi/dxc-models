"use client";

import React, { useRef, createContext, useContext } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AnimationContextType = React.RefObject<HTMLDivElement | null> | null;

const AnimationContext = createContext<AnimationContextType>(null);

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      "useAnimationContext must be used within AnimationProvider",
    );
  }
  return context;
};

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // desktop-specific query registered
      return () => {
        // cleanup for this query if needed
      };
    });

    mm.add("(max-width: 767px)", () => {
      // mobile-specific query registered
      return () => {
        // cleanup for this query if needed
      };
    });

    return () => mm.revert();
  }, [containerRef]);

  return (
    <AnimationContext.Provider value={containerRef}>
      <div className="models-anim-container" ref={containerRef}>
        {children}
      </div>
    </AnimationContext.Provider>
  );
};

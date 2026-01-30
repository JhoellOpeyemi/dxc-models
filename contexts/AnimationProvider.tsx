"use client";

import React, { useRef, createContext, useContext } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import { modelsDesktopScrollAnimation } from "./animation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AnimationContextType = React.RefObject<HTMLDivElement | null> | null;

const AnimationContext = createContext<AnimationContextType>(null);

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      "useAnimationContext must be used within AnimationProvider"
    );
  }
  return context;
};

const animContainerStyles: React.CSSProperties = {
  height: "100vh",
  minHeight: "100svh",
  width: "100vw",
  position: "relative",
  overflow: "hidden",
  paddingTop: "13vh",
};

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  //   const tl = useRef<gsap.core.Timeline | null>(null);

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

  // Force ScrollTrigger refresh on component mount/update for hot reloading
  //   React.useEffect(() => {
  //     ScrollTrigger.refresh();
  //   }, []);

  return (
    <AnimationContext.Provider value={containerRef}>
      <div
        className="models-anim-container"
        ref={containerRef}
        style={animContainerStyles}
      >
        {/* <div className="models-anim-section"> */}
        {children}
        {/* </div> */}
      </div>
    </AnimationContext.Provider>
  );
};

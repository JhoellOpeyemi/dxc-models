"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="models-anim-container" ref={containerRef}>
      {children}
    </div>
  );
};

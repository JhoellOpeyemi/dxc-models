"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const Lenis: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  // The ReactLenis forwarded ref has a `lenis` instance on `current`.
  const lenisRef = useRef<{
    lenis?: {
      raf?: (time: number) => void;
      on?: (event: string, fn: () => void) => void;
      off?: (event: string, fn: () => void) => void;
    };
  } | null>(null);

  useEffect(() => {
    function update(time: number) {
      // gsap.ticker passes time in seconds; lenis.raf expects ms
      lenisRef.current?.lenis?.raf?.(time * 1000);
    }

    const onScroll = () => ScrollTrigger.update();

    // Attach scroll listener if available
    lenisRef.current?.lenis?.on?.("scroll", onScroll);

    gsap.ticker.add(update);
    // Reduce lag smoothing for smoother sync while lenis drives the RAF
    gsap.ticker.lagSmoothing(0);

    // Ensure ScrollTrigger is in sync
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      lenisRef.current?.lenis?.off?.("scroll", onScroll);
      // restore default lag smoothing
      gsap.ticker.lagSmoothing(1);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef as any} options={{ autoRaf: false }}>
      {children}
    </ReactLenis>
  );
};

export default Lenis;

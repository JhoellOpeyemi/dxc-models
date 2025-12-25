import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const createRevealModelNameTimeline = () => {
  const tl = gsap.timeline({ paused: true });

  tl.to(".model-name-preview .char", {
    y: 0,
    stagger: { from: "center", each: 0.0125 },
    duration: 0.3,
    ease: "power1.out",
  });

  return tl;
};

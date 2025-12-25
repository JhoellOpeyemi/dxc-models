import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const linkArray = [
  { path: "/about", label: "About us" },
  { path: "/models", label: "Models" },
  { path: "/academy", label: "Academy" },
  { path: "/apply", label: "Apply" },
  { path: "/shop", label: "Shop" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const formatIndex = (index: number) => {
  if (index < 9) return `0${index + 1}`;
  else return index + 1;
};

export function getSplitText(
  text: string,
  splitType: "words" | "chars" | "words, chars"
): string[] | string[][] {
  if (splitType === "words") {
    return text.split(/\s+/);
  } else if (splitType === "chars") {
    return text.split("");
  } else if (splitType === "words, chars") {
    const words = text.split(/\s+/);
    return words.map((word) => word.split(""));
  }
  return [];
}

export const horizontalScroll = (
  triggerElement: React.RefObject<HTMLElement | null>,
  elementToScroll: React.RefObject<HTMLElement | null>
) => {
  if (!triggerElement.current || !elementToScroll.current) return null;

  const trigger = triggerElement.current;
  const element = elementToScroll.current;

  const getScrollAmount = () => {
    const elementWidth = element.offsetWidth;
    return -(elementWidth - window.innerWidth);
  };

  const tween = gsap.to(element, {
    x: getScrollAmount,
    ease: "none",
  });

  const horizontalScrollTrigger = ScrollTrigger.create({
    trigger: trigger,
    start: "clamp(top top)",
    end: () => `+${getScrollAmount() * -1.5}`,
    pin: true,
    pinSpacing: true,
    animation: tween,
    scrub: 2,
    invalidateOnRefresh: true,
  });

  const kill = () => {
    horizontalScrollTrigger.kill();
  };

  return { kill };
};

// export const getHoveredModelCard = (
//   activeIndex: number | null,
//   scrollContainerRef: React.RefObject<HTMLElement | null>
// ): HTMLElement | null => {
//   if (activeIndex === null) return null;
//   const container = scrollContainerRef.current;
//   if (!container) return null;
//   const cards = Array.from(
//     container.querySelectorAll(".model-card-container")
//   ) as HTMLElement[];
//   return cards[activeIndex] || null;
// };

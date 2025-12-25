"use client";

// libraries imports
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// context imports
import { useModelsContext } from "@/components/Models/ModelsProvider";
import { useAnimationContext } from "@/components/Models/Animation/AnimationProvider";

// components imports
import ModelCard from "@/components/ModelCard/ModelCard";
import SplitText from "@/components/SplitText";

// animation imports
import { createRevealModelNameTimeline } from "@/components/Models/Animation/animation";

// styles import
import "./models.css";

// functions imports
import { horizontalScroll } from "@/utils";

gsap.registerPlugin(useGSAP);

const Models = () => {
  const { filteredModels, isLoading, error } = useModelsContext();
  const containerRef = useAnimationContext();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [refsReady, setRefsReady] = useState(false);
  const [modelName, setModelName] = useState<string>("");
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (modelName) {
      // delay to ensure DOM is updated before animation
      setTimeout(() => {
        if (timelineRef.current) {
          timelineRef.current.kill();
          timelineRef.current = null;
        }

        timelineRef.current = createRevealModelNameTimeline();
        // when reversed fully, clear the name
        timelineRef.current.eventCallback("onReverseComplete", () =>
          setModelName("")
        );
        timelineRef.current.play(0);
      }, 0);
    }
  }, [modelName]);

  const handleModelMouseLeave = () => {
    if (timelineRef.current) {
      timelineRef.current.reverse();
    } else {
      setModelName("");
    }
    setActiveIndex(null);
  };

  const handleModelHover = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (containerRef.current && scrollContainerRef.current) {
      setRefsReady(true);
    }
  }, [containerRef, scrollContainerRef]);

  useGSAP(() => {
    if (!refsReady) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const horizontalScrollTrigger = horizontalScroll(
        containerRef,
        scrollContainerRef
      );
      return horizontalScrollTrigger?.kill;
    });

    mm.add("(max-width: 767px)", () => {
      return () => {};
    });

    return () => mm.revert();
  }, [refsReady]);

  if (isLoading) return <p>Loading Models...</p>;
  if (error) return <p>Error loading models: Please check your connection.</p>;

  return (
    <>
      <section className="models-section-container">
        <ul className="models-list-container">
          <div className="model-card-wrapper" ref={scrollContainerRef}>
            {filteredModels && filteredModels.length > 0 ? (
              filteredModels.map((model, index) => (
                <ModelCard
                  key={index}
                  index={index}
                  model={model}
                  setModelName={setModelName}
                  onMouseLeave={handleModelMouseLeave}
                  onHover={handleModelHover}
                  isActive={activeIndex === index}
                />
              ))
            ) : (
              <p>No models to display.</p>
            )}
          </div>
        </ul>
      </section>

      <h3 className="model-name-preview">
        <SplitText text={modelName} splitType="words, chars" />
      </h3>
    </>
  );
};

export default Models;

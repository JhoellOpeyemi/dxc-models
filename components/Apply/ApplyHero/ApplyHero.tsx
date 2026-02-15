"use client";

import Image from "next/image";

import { useWindowSize } from "@/hooks/useWindowSize";

import "./applyHero.css";

const ApplyHero = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 640;

  return (
    <section className="apply-hero-container">
      {isMobile ? (
        <>
          <h1 className="apply-hero-heading apply-hero-heading-become">
            Become
          </h1>
          <h1 className="apply-hero-heading apply-hero-heading-a">a</h1>
        </>
      ) : (
        <h1 className="apply-hero-heading apply-hero-heading-become">
          <span>Become</span>
          <span>a</span>
        </h1>
      )}
      <h1 className="apply-hero-heading apply-hero-heading-model">Model</h1>

      <div className="apply-hero-subheading">
        <h3>Shaping Icons</h3>
        <h3>Defining Elegance</h3>
      </div>

      <p className="apply-hero-subtitle">
        More than models, we cultivate symbols of style and influence
      </p>

      <div className="apply-hero-image-container">
        <Image
          src="/brands-img.webp"
          alt=""
          className="apply-hero-image"
          fill
        />
      </div>
    </section>
  );
};

export default ApplyHero;

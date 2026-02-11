import Image from "next/image";

import "./applyHero.css";

import StyledLink from "@/components/utils/StyledLink/StyledLink";

const ApplyHero = () => {
  return (
    <section className="apply-hero-container">
      <div className="apply-hero-heading-container">
        <h1 className="apply-hero-heading apply-hero-heading-become">
          <span>Become</span>
          <span>a</span>
        </h1>
        <h1 className="apply-hero-heading apply-hero-heading-model">Model</h1>
      </div>

      <div className="apply-hero-subheading">
        <h3>Shaping Icons</h3>
        <h3>Defining Elegance</h3>
      </div>

      <div className="apply-hero-text-link-container">
        <p className="apply-hero-subtitle">
          More than models, we cultivate symbols of style and influence
        </p>

        <div className="apply-hero-link-container">
          <StyledLink path="#" label="Book a private consultation" />
        </div>
      </div>

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

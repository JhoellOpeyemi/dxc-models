import Image from "next/image";

import "./hero.css";

import SplitText from '@/components/SplitText'
import StyledLink from "@/components/StyledLink/StyledLink";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <h1 className="hero-heading">
        <div>
            <SplitText text='We shape talents' splitType='words' />
        </div>
        <div>
            <SplitText text='into global icons' splitType='words' />
        </div>
        </h1>

        <div className="hero-content-container flex-column">
            <div className="cta-container flex-between">
              <StyledLink path="/apply" label="Become a model" />
              <StyledLink path="/academy" label="View our academy" />
            </div>

          <div className="hero-image-subtitle-container">
            <div className="hero-image-container">
              <Image
                src="/hero-img.webp"
                alt=""
                className="hero-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                priority
              />
              <div className='overlay'></div>
            </div>

            <p className="hero-subtitle">
                DXC Models is one of the most influential and trusted fashion talent
                agencies in Sub-Saharan Africa, founded in Nigeria in 2019.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

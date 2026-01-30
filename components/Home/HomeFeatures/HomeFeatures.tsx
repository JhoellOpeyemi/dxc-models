"use client";
// hooks imports
import { useWindowSize } from "@/hooks";
// components imports
import ArrowRight from "@/components/ui/ArrowRight";
import ArrowLeft from "@/components/ui/ArrowLeft";
// import InfoIcon from "@/components/ui/InfoIcon";
// styles import
import "./homeFeatures.css";

const HomeFeatures = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 480;

  return (
    <section className="home-features-section">
      <div className="home-features-heading-container">
        <h2 className="home-features-heading">Features</h2>
        <p className="home-features-subheading">
          A look behind the curtain into the artistry, collaboration, and
          passion that shape our world.
        </p>
      </div>

      <div className="home-features-container">
        <div className="home-features-main-media home-features-media"></div>

        <div className="home-features-other-media-container">
          <div className="home-features-other-media home-features-media"></div>
          <div className="home-features-other-media home-features-media"></div>
        </div>
      </div>

      {isMobile && (
        <div className="info-container">
          <p>Use the arrows to view more</p>

          <div className="arrow-container">
            <button>
              <ArrowLeft />
            </button>
            <button>
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeFeatures;

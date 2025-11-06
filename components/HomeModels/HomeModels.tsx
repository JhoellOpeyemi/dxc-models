import { models, ModelType } from "@/data/models";

import HomeModelCard from "@/components/HomeModelCard/HomeModelCard";
import StyledLink from "@/components/StyledLink/StyledLink";
import "./homeModels.css";

const HomeModels = () => {
  return (
    <section className="home-models-container">
      <h2 className="visually-hidden">Our Models</h2>

      <div className="home-models-visual-details-container flex-between-start">
        <h2 className="home-models-heading" aria-hidden="true">
          Our
        </h2>

        <div className="home-models-cards-container flex-column">
          <>
            {models.map((model: ModelType, index: number) => (
              <HomeModelCard key={index} model={model} />
            ))}

            <StyledLink path="" label="View All Models" />
          </>
        </div>

        <h2 className="home-models-heading flex-between" aria-hidden="true">
          Models
        </h2>
      </div>
    </section>
  );
};

export default HomeModels;

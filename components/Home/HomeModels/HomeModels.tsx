"use client";

import { useHomeModels } from "@/sanity/lib/hooks";

import HomeModelCard from "./HomeModelCard/HomeModelCard";
import StyledLink from "@/components/utils/StyledLink/StyledLink";

import "./homeModels.css";

const HomeModels = () => {
  const { data: models, isLoading, error } = useHomeModels();

  if (isLoading) return <p>Loading Models...</p>;
  if (error) return <p>Error loading models: {error.message}</p>;

  return (
    <section className="home-models-container">
      <h2 className="visually-hidden">Our Models</h2>

      <div className="home-models-visual-details-container flex-between-start">
        <h2 className="home-models-heading our" aria-hidden="true">
          Our
        </h2>

        <div className="home-models-cards-container flex-column">
          <>
            {models?.map((model) => (
              <div key={model?._id}>
                <HomeModelCard model={model} />
              </div>
            ))}

            <StyledLink path="/models" label="View All Models" />
          </>
        </div>

        <h2
          className="home-models-heading flex-between models"
          aria-hidden="true"
        >
          Models
        </h2>
      </div>
    </section>
  );
};

export default HomeModels;

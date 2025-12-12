"use client";

import { useModels } from "@/sanity/lib/hooks";

import ModelCard from "@/components/ModelCard/ModelCard";
import "./models.css";

const Models = () => {
  const { data: allModels, isLoading, error } = useModels();

  console.log(allModels);

  if (isLoading) return <p>Loading Models...</p>;
  if (error) return <p>Error loading models: {error.message}</p>;

  return (
    <section className="models-section-container">
      <ul className="models-list-container">
        {allModels?.map((model, index) => (
          <ModelCard key={index} index={index} model={model} />
        ))}
      </ul>
    </section>
  );
};

export default Models;

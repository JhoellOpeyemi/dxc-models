"use client";

import { useModelsContext } from "@/components/Models/ModelsProvider";

import ModelCard from "@/components/ModelCard/ModelCard";
import "./models.css";

const Models = () => {
  const { filteredModels, isLoading, error } = useModelsContext();

  //   const formatError = (e: unknown) => {
  //     if (!e) return "Unknown error";
  //     if (e instanceof Error) return e.message;
  //     try {
  //       return JSON.stringify(e);
  //     } catch {
  //       return String(e);
  //     }
  //   };

  if (isLoading) return <p>Loading Models...</p>;
  if (error) return <p>Error loading models: Please check your connection.</p>;

  return (
    <section className="models-section-container">
      <ul className="models-list-container">
        {filteredModels && filteredModels.length > 0 ? (
          filteredModels.map((model, index) => (
            <ModelCard key={index} index={index} model={model} />
          ))
        ) : (
          <p>No models to display.</p>
        )}
      </ul>
    </section>
  );
};

export default Models;

import type { ModelType } from "@/data/models";

import Gallery from "@/components/Gallery/Gallery";
import "./modelDetails.css";

export type GalleryType = Pick<ModelType, 'gallery'>

const ModelDetails = ({ model }: { model: ModelType }) => {
    const firstNameOfModel = model?.name.split(' ')[0]

  return (
    <section className="model-details-section-container">
      <div className="model-details-content">
        <h1 className="model-name">{model.name}</h1>

        <div className="model-stats-container">
          <p className="model-stat">
            <span className="stat-heading">Height  — </span>
            <span className="stat-value">{model.height}</span>
          </p>
          <div className="stat-divider" />
          <p className="model-stat">
            <span className="stat-heading">Chest  — </span>
            <span className="stat-value">{model.chest}</span>
          </p>
          <div className="stat-divider" />
          <p className="model-stat">
            <span className="stat-heading">Waist  — </span>
            <span className="stat-value">{model.waist}</span>
          </p>
          <div className="stat-divider" />
          <p className="model-stat">
            <span className="stat-heading">Eyes  — </span>
            <span className="stat-value">{model.eyes}</span>
          </p>
          <div className="stat-divider" />
          <p className="model-stat">
            <span className="stat-heading">Hair  — </span>
            <span className="stat-value">{model.hair}</span>
          </p>
          <div className="stat-divider" />
          <p className="model-stat">
            <span className="stat-heading">Hips  — </span>
            <span className="stat-value">{model.hips}</span>
          </p>
        </div>
      </div>

      <Gallery gallery={model.gallery} />

      <button className='link book-model-btn'>(Book {firstNameOfModel})</button>
    </section>
  );
};

export default ModelDetails;

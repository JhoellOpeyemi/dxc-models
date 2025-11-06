import Image from "next/image";

import type { ModelType } from "@/data/models";

import "./homeModelCard.css";

const HomeModelCard = ({ model }: { model: ModelType }) => {
  return (
    <div className="home-model-card-container flex-column">
      <div className="home-model-image-container">
        <Image src={model.image} alt="" className="home-model-image" fill />
      </div>

      <div className="home-model-info-container">
        <h3 className="home-model-name">{model.name}</h3>

        <ul className="home-model-stats-container">
          <li className="home-model-stat">
            <span className="stat-heading">Height</span>
            <span className="stat-value">{model.height}</span>
          </li>
          <div className="home-model-stat-divider" />
          <li className="home-model-stat">
            <span className="stat-heading">Hair</span>
            <span className="stat-value">{model.hair}</span>
          </li>
          <div className="home-model-stat-divider" />
          <li className="home-model-stat">
            <span className="stat-heading">Eyes</span>
            <span className="stat-value">{model.eyes}</span>
          </li>
          <div className="home-model-stat-divider" />
          <li className="home-model-stat">
            <span className="stat-heading">Chest</span>
            <span className="stat-value">{model.chest}</span>
          </li>
          <div className="home-model-stat-divider" />
          <li className="home-model-stat">
            <span className="stat-heading">Waist</span>
            <span className="stat-value">{model.waist}</span>
          </li>
          <div className="home-model-stat-divider" />
          <li className="home-model-stat">
            <span className="stat-heading">Hips</span>
            <span className="stat-value">{model.hips}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeModelCard;

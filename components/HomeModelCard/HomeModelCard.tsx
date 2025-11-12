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

        <ul className="model-stats-container">
          <li className="model-stat">
            <span className="stat-heading">Height — </span>
            <span className="stat-value">{model.height}</span>
          </li>
          <div className="stat-divider" />
          <li className="model-stat">
            <span className="stat-heading">Chest  — </span>
            <span className="stat-value">{model.chest}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeModelCard;

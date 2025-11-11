import Image from "next/image";
import type { ModelType } from "@/data/models";
import { formatIndex } from "@/utils";

import "./modelCard.css";

const ModelCard = ({ model, index }: { model: ModelType; index: number }) => {
  return (
    <>
      <li className="model-card-container">
        <p className="model-index">{formatIndex(index)}</p>
        <div className="model-card-image-container">
          <Image src={model.image} alt="" className="model-card-image" fill />
        </div>
      </li>

      <h3 className="model-name">{model.name}</h3>
      <div className="model-stat-container">
        <p className="model-stat">
          <span className="stat-heading">Eyes</span>
          <span className="stat-value">{model.eyes}</span>
        </p>
      </div>
    </>
  );
};

export default ModelCard;

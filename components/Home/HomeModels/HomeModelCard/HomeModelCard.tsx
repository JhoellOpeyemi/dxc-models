import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Model } from "@/sanity/types";

import "./homeModelCard.css";

const HomeModelCard = ({ model }: { model: Model }) => {
  return (
    <div className="home-model-card-container flex-column">
      <div className="home-model-image-container">
        {model.headshot && (
          <Image
            src={urlFor(model.headshot).auto("format").url()}
            alt=""
            className="home-model-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        )}
      </div>

      <div className="home-model-info-container">
        <h3 className="home-model-name">{model.name}</h3>

        <ul className="model-stats-container">
          <li className="model-stat">
            <span className="stat-heading">Height — </span>
            <span className="stat-value">{model.height}</span>
          </li>
          <div className="stat-divider" />

          {model.bust && (
            <li className="model-stat">
              <span className="stat-heading">Bust — </span>
              <span className="stat-value">{model.bust}</span>
            </li>
          )}

          {model.chest && (
            <li className="model-stat">
              <span className="stat-heading">Chest — </span>
              <span className="stat-value">{model.chest}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomeModelCard;

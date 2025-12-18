import Link from "next/link";
import Image from "next/image";
import { Model } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { formatIndex } from "@/utils";

import "./modelCard.css";

const ModelCard = ({ model, index }: { model: Model; index: number }) => {
  return (
    <>
      <li className="model-card-container">
        <p className="model-index">{formatIndex(index)}</p>

        <Link
          href={`/models/${model.slug}`}
          className="model-card-link"
          aria-label={`View ${model.name}'s profile`}
        >
          <div className="model-card-image-container">
            {model.headshot && (
              <Image
                src={urlFor(model.headshot).auto("format").url()}
                alt={`${model.name} headshot`}
                className="model-card-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                priority
              />
            )}
          </div>
        </Link>
      </li>

      <h3 className="model-name">{model.name}</h3>
      {/* <div className="model-stat-container">
        <p className="model-stat">
          <span className="stat-heading">Chest  — </span>
            <span className="stat-value">{model.chest}</span>
        </p>
      </div> */}
    </>
  );
};

export default ModelCard;

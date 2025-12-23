"use client";

import { useModelsContext } from "@/components/Models/ModelsProvider";

import "./modelsHeading.css";

const ModelsHeading = () => {
  const { counts, filter, setFilter } = useModelsContext();

  return (
    <div className="models-heading-container">
      <div className="models-heading-filter">
        <h1 className="models-heading page-heading">Our Models</h1>
        <div className="models-filter-container">
          <button
            className={`models-filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            (<span className="link">All</span>)
            <span className="filter-number">{counts.all}</span>
          </button>
          <button
            className={`models-filter-btn ${filter === "female" ? "active" : ""}`}
            onClick={() => setFilter("female")}
          >
            (<span className="link">Female</span>)
            <span className="filter-number">{counts.female}</span>
          </button>
          <button
            className={`models-filter-btn ${filter === "male" ? "active" : ""}`}
            onClick={() => setFilter("male")}
          >
            (<span className="link">Male</span>)
            <span className="filter-number">{counts.male}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelsHeading;

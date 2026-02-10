"use client";

import { useState } from "react";
import { useModelDetails } from "@/sanity/lib/hooks";
// components import
import Gallery from "@/components/ModelsComponents/ModelDetails/Gallery/Gallery";
import BookingForm from "@/components/utils/BookingForm/BookingForm";
import StyledLink from "@/components/utils/StyledLink/StyledLink";

import "./modelDetails.css";

const ModelDetails = ({ slug }: { slug: string }) => {
  const { data: model, isLoading, error } = useModelDetails(slug);
  const [isBookingModal, setIsBookingModal] = useState<boolean>(false);

  const firstNameOfModel = model?.name?.split(" ")[0];

  if (isLoading) return <p>Loading Models...</p>;
  if (error) return <p>Error loading models: {error.message}</p>;

  return (
    <section className="model-details-section-container">
      <div className="model-details-section">
        <div className="model-details-content-container">
          <div className="back-to-models-link">
            <StyledLink path="/models" label="Back to Models" />
          </div>

          <div className="model-details-content">
            <h1 className="model-name">{model?.name}</h1>

            <div className="model-stats-container">
              <p className="model-stat">
                <span className="stat-heading">Height — </span>
                <span className="stat-value">{model?.height}</span>
              </p>
              {model?.gender == "female" && (
                <>
                  <p className="model-stat">
                    <span className="stat-heading">Bust — </span>
                    <span className="stat-value">{model?.bust}</span>
                  </p>
                  <p className="model-stat">
                    <span className="stat-heading">Hips — </span>
                    <span className="stat-value">{model?.hips}</span>
                  </p>
                  <p className="model-stat">
                    <span className="stat-heading">Dress — </span>
                    <span className="stat-value">{model?.dress}</span>
                  </p>
                </>
              )}
              {model?.gender == "male" && (
                <>
                  <p className="model-stat">
                    <span className="stat-heading">Chest — </span>
                    <span className="stat-value">{model?.chest}</span>
                  </p>
                  <p className="model-stat">
                    <span className="stat-heading">Inseam — </span>
                    <span className="stat-value">{model?.inseam}</span>
                  </p>
                </>
              )}
              <p className="model-stat">
                <span className="stat-heading">Waist — </span>
                <span className="stat-value">{model?.waist}</span>
              </p>
              <p className="model-stat">
                <span className="stat-heading">Eyes — </span>
                <span className="stat-value">{model?.eyes}</span>
              </p>
              <p className="model-stat">
                <span className="stat-heading">Hair — </span>
                <span className="stat-value">{model?.hair}</span>
              </p>
              <p className="model-stat">
                <span className="stat-heading">Shoe — </span>
                <span className="stat-value">{model?.shoe}</span>
              </p>
            </div>

            <div className="tab-book-model-btn-container">
              <button
                className={`${isBookingModal ? "link book-model-btn disabled" : "book-model-btn"}`}
                onClick={() => setIsBookingModal(true)}
              >
                (Book {firstNameOfModel})
              </button>
            </div>
          </div>
        </div>

        <Gallery images={model?.gallery} />

        <div className="book-model-btn-container">
          <button
            className={`${isBookingModal ? "link book-model-btn disabled" : "book-model-btn"}`}
            onClick={() => setIsBookingModal(true)}
          >
            (Book {firstNameOfModel})
          </button>
        </div>
      </div>

      {isBookingModal && (
        <BookingForm
          closeBookingModal={() => setIsBookingModal(false)}
          modelName={model?.name}
        />
      )}
    </section>
  );
};

export default ModelDetails;

import "./modelError.css";

export const HomeModelError = () => {
  return (
    <div className="home-model-error-container">
      <h2 className="home-models-heading">Our Models</h2>
      <h3 className="home-model-error-title">Error Loading Models.</h3>
      <p className="home-model-error-prompt">Please try again later.</p>
    </div>
  );
};

export const ModelError = () => {
  return (
    <div className="model-error-container">
      <h3 className="model-error-title">Error Loading Models.</h3>
      <p className="model-error-prompt">
        Please check your connection and try again!
      </p>
    </div>
  );
};

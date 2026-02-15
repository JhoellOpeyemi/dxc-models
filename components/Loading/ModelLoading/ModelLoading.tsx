import "./modelLoading.css";

export const HomeModelLoading = () => {
  return (
    <div className="home-model-loading-container">
      <h2 className="home-models-heading">Our Models</h2>
      <p className="home-model-loading-prompt">Loading Models...</p>
    </div>
  );
};

export const ModelLoading = () => {
  return (
    <div className="model-loading-container">
      <p className="model-loading-prompt">Loading Models...</p>
    </div>
  );
};

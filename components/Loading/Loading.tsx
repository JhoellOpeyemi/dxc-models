import "./loading.css";

interface LoadingProps {
  label: string;
}

export const HomeModelLoading = () => {
  return (
    <div className="home-model-loading-container">
      <h2 className="home-models-heading">Our Models</h2>
      <p className="home-model-loading-prompt">Loading Models...</p>
    </div>
  );
};

export const Loading = ({ label }: LoadingProps) => {
  return (
    <div className="loading-container">
      <p className="loading-prompt">Loading {label}...</p>
    </div>
  );
};

import "./modelsHeading.css";

const ModelsHeading = () => {
  return (
    <div className="models-heading-container">
      <div className="models-heading-filter">
        <h1 className="models-heading page-heading">Our Models</h1>
        <div className="models-filter-container">
          <button className="models-filter-btn">
            (<span className="link">All</span>)
            <span className="filter-number">32</span>
          </button>
          <button className="models-filter-btn">
            (<span className="link">Female</span>)
            <span className="filter-number">19</span>
          </button>
          <button className="models-filter-btn">
            (<span className="link">Male</span>)
            <span className="filter-number">13</span>
          </button>
        </div>
      </div>

      <p className="models-subheading">
        A curated selection of talents — timeless faces, modern energy, and the
        elegance to bring every vision to life.
      </p>
    </div>
  );
};

export default ModelsHeading;

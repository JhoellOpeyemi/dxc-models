import { brands } from "@/utils";

import "./brands.css";

const Brands = () => {
  return (
    <div className="brands-container">
      <div className="brands-text-container">
        <h4>Brands we&apos;ve partnered with:</h4>

        <ul className="brands-list">
          {brands.map((brand: string, index: number) => (
            <li className="brand" key={index}>
              {brand}
            </li>
          ))}
        </ul>
      </div>

      <div className="brands-video-container">
        <video className="brands-video" autoPlay muted loop playsInline>
          <source src="/branding-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Brands;

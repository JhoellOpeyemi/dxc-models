import Image from "next/image";

import "./brands.css";

const Brands = () => {
  const brands = [
    "Bolt",
    "Puma",
    "Salonpas",
    "Skit Ng",
    "Tecno",
    "LYS Apparel",
    "Fancy Africa",
    "ShopRite",
    "Fasha",
    "Cowbell Milk",
    "Zinni Luxury",
    "Dang!",
    "Xclusif",
    "Desperados",
    "Maestro Nigeria",
    "Lost in Lagos",
    "Ci Gusta",
  ];

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
        <video className='brands-video' autoPlay muted loop playsInline>
            <source src='/branding-vid.mp4' type='video/mp4' />
            Your browser does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default Brands;

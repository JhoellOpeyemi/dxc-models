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

      <div className="brands-image-container">
        <Image src="/brands-img.png" alt="" fill className="brand-image" />
      </div>
    </div>
  );
};

export default Brands;

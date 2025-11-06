import Image from "next/image";

import "./aboutImage.css";

const AboutImage = () => {
  return (
    <div className="about-image-container">
      <div className="about-image">
        <Image src="/brands-img.png" alt="" fill />
      </div>

      <h3>Modelling agency that shapes talent into global icons</h3>
    </div>
  );
};

export default AboutImage;

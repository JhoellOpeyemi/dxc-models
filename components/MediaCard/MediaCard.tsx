import Image from 'next/image'

import "./mediaCard.css";

const MediaCard = ({image} : {image: string}) => {

  return (
    <div className="media-card-image-container">
      <Image src={image} alt='' className='media-card-image' fill />
    </div>
  );
};

export default MediaCard;

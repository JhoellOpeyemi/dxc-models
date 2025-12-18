import MediaCard from '@/components/MediaCard/MediaCard'

import "./gallery.css";

const Gallery = ({images} : {images: string[]}) => {

  return (
    <section className="gallery-section-container">
        <div className='gallery-media-container'>
        {images.map((image: string, index:number) => (
            <MediaCard image={image} key={index} />
        ))}
        </div>
    </section>
  );
};

export default Gallery;

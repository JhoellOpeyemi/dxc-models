import type {GalleryType} from '@/components/ModelDetails/ModelDetails'
import MediaCard from '@/components/MediaCard/MediaCard'

import "./gallery.css";

const Gallery = ({gallery} : GalleryType) => {

  return (
    <section className="gallery-section-container">
        <div className='gallery-media-container'>
        {gallery.map((image: string, index:number) => (
            <MediaCard image={image} key={index} />
        ))}
        </div>
    </section>
  );
};

export default Gallery;

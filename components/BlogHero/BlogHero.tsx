import Image from "next/image";

import "./blogHero.css";

const BlogHero = () => {
  return (
    <section className="blog-hero-container">
      <h1 className="blog-hero-heading">Blog</h1>

      <div className="blog-hero-image-group">
        <div className="blog-hero-image-container">
          <Image
            src="/brands-img.png"
            alt=""
            className="blog-hero-image"
            fill
          />
        </div>
        <div className="blog-hero-image-container">
          <Image
            src="/brands-img.png"
            alt=""
            className="blog-hero-image"
            fill
          />
        </div>
      </div>

      <div className="blog-hero-subtitle-container">
        <div className="blog-hero-subtitle-heading-container">
          <h3 className="blog-hero-subtitle-heading">Simple Insights</h3>
          <h3 className="blog-hero-subtitle-heading">Clear Guidance</h3>
          <h3 className="blog-hero-subtitle-heading">Real Stories</h3>
        </div>

        <p className="blog-hero-subtitle-text">
          Our blog is where elegance meets clarity, a space that celebrates the
          art of modeling while keeping the message refined and focused. Here,
          we share industry insights, timeless routines, and creative
          inspiration in a voice that is both sophisticated and accessible.
          Think of it as your curated guide to navigating the world of fashion,
          beauty, and personal growth.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;

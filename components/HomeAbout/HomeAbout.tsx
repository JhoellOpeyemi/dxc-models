import "./homeAbout.css";
import Brands from "@/components/Brands/Brands";

const HomeAbout = () => {
  return (
    <section className="home-about-section">
      <h3 className="home-about-text">
        We are a mother agency that recognizes the need for a modern and fresh
        approach to training, development, management of a new generation of
        models.
      </h3>

      <Brands />
    </section>
  );
};

export default HomeAbout;

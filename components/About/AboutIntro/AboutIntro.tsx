import "./aboutIntro.css";

const About = () => {
  return (
    <section className="about-container">
      <h1 className="about-heading page-heading">
        About <br /> Our Agency
      </h1>

      <div className="about-text-container">
        <p className="about-text">
          DXC Model Management, one of the most influential and trusted fashion
          talent agencies in Sub-Saharan Africa, was founded in Nigeria in 2019.
          Celebrating diversity, and empowerment, our teams constantly strive to
          provide exceptional management to our talents and outstanding service
          to our clients.
        </p>

        <p className="about-text">
          Our approach always combines creativity, technology, and business
          development aligned with respect, trust, humanity, ethics, and social
          responsibility. DXC is a forward-looking organization always searching
          for new and innovative ways to adapt to and take advantage of the
          ever-changing landscape of the modeling industry while balancing an
          elevated image with financial success.
        </p>
      </div>
    </section>
  );
};

export default About;

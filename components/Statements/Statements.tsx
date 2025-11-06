import "./statements.css";

const Statements = () => {
  return (
    <section className="statements-container">
      <div className="vision-mission-container">
        <div className="vision">
          <h2 className="statement-heading">Vision</h2>

          <p className="statement-text">Be in constant evolution.</p>
          <p className="statement-text">
            We want to be a real center of excellence in the world, a unique
            fashion, and entertainment company, capable of anticipating current
            trends for the success of all those who come to us.
          </p>
        </div>

        <div className="statement-separator" />

        <div className="mission">
          <h2 className="statement-heading">Mission</h2>

          <p className="statement-text">
            To work with selflessness, passion, and awareness of our abilities,
            inspired by respect and the desire to generate the success of
            others.
          </p>
          <p className="statement-text">
            Make every effort to discover, train and manage the image and
            professional life of talented individuals in the best possible way
            and contribute to their success and, therefore, to that of our
            customers.
          </p>
          <p className="statement-text">
            Questioning traditional schemes to be a forward-looking, innovative
            and successful company on the market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statements;

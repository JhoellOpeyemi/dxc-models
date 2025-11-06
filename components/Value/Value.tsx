import Image from "next/image";
import StyledLink from "@/components/StyledLink/StyledLink";

import "./value.css";

const Value = () => {
  return (
    <section className="value-container">
      <div className="value-image-container">
        <Image src="/brands-img.png" alt="" fill className="value-image" />
      </div>

      <div className="value-text-container">
        <p>
          Our work is the result of targeted strategies with well-defined
          objectives, based on the centrality of the subjects we represent and
          therefore of the customer. Each of our choices has the aim of
          enhancing the subjects we represent, to allow our customers to find
          the solution most in line with their image and communication needs. We
          carefully look at the causes and effects of the macro trends of the
          market and therefore of companies in the fashion and communication
          sector, trying to anticipate their requests, trends, and needs. We
          work driven by passion and enthusiasm, we love what we do and we do it
          with commitment, seriousness, and awareness that our success is the
          consequence of the success of our customers.
        </p>

        <StyledLink path="/apply" label="Become a model" />
      </div>
    </section>
  );
};

export default Value;

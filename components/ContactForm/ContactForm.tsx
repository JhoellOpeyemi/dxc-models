import StyledInput from "@/components/StyledInput/StyledInput";
import StyledSelect from "@/components/StyledSelect/StyledSelect";
import FormBtn from "@/components/FormBtn/FormBtn";

import "./contactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form className="form">
        <div className="contact-form-group">
          <div className="contact-form-input-group">
            <StyledInput label="Full Name" id="full-name" type="text" />
            <StyledInput label="Email" id="email" type="email" />
            <StyledInput label="Phone Number" id="phone" type="tel" />
            <StyledSelect
              label="Purpose"
              id="purpose"
              options={["private consultation", "model training", "Enquiries"]}
            />
          </div>

          <div className="contact-form-textarea-container">
            <textarea
              className="styled-textarea"
              id="message"
              placeholder="Type your message here..."
            ></textarea>
          </div>
        </div>

        <FormBtn label="Send" />
      </form>
    </div>
  );
};

export default ContactForm;

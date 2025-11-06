import ContactForm from "@/components/ContactForm/ContactForm";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section-container">
      <h1 className="contact-heading">Let&apos;s begin your story</h1>

      <ContactForm />

      <p className="contact-closing-remark">
        Behind every unforgettable image is a connection waiting to be made.
        Whether you&apos;re seeking to collaborate, discover talent, or step
        confidently into the world of modelling, our doors are always open.
        Reach out, and let&apos;s create something extraordinary together.
      </p>
    </section>
  );
};

export default Contact;

import React, { useEffect } from "react";
import TopImage from "./TopImage";
import ContactForm from "./ContactForm";
import {
  faEnvelope,
  faPhoneSquare,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPageImage from "../styles/images/smartphone-g5db46a158_1920.jpg";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <TopImage image={contactPageImage} position={58} />
      <div className="container page-container py-5">
        <h1 className="contact-title">KONTAKT</h1>
        <div className="py-4">
          <div>
            <a href="mailto:naknieruchomosci@gmail.com" className="inner-link">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />{" "}
              <span className="useful-link">naknieruchomosci@gmail.com</span>
            </a>
          </div>
          <div>
            <a href="tel:+48695606006" className="inner-link">
              <FontAwesomeIcon icon={faPhoneSquare} size="2x" />{" "}
              <span className="useful-link">+48 695 606 006</span>
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={faAddressBook} size="2x" />{" "}
            <span>NIP: 8970030520</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faAddressBook} size="2x" />{" "}
            <span>REGON: 930291836 </span>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;

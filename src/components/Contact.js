import React from 'react';
import ContactForm from './ContactForm';
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  return (
    <div className="container page-container py-5">
      <h1>Kontakt</h1>
      <div className="py-4">
        <div>
          <a href="mailto:akower@poczta.onet.pl" className="inner-link">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />{' '}
            <span className="useful-link">akower@poczta.onet.pl</span>
          </a>
        </div>
        <div>
          <a href="tel:+48695606006" className="inner-link">
            <FontAwesomeIcon icon={faPhoneSquare} size="2x" />{' '}
            <span className="useful-link">695 606 006</span>
          </a>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;

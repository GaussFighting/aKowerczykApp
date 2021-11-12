import React from 'react';
import TopImage from './TopImage';
import ContactForm from './ContactForm';
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactPageImage from '../styles/images/smartphone-g5db46a158_1920.jpg';

function Contact() {
  return (
    <div>
      <TopImage image={contactPageImage} position={58} />
      <div className="container page-container py-5">
        <h1>KONTAKT</h1>
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
    </div>
  );
}

export default Contact;

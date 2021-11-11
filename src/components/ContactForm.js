import React, { useState } from 'react';
import { Button, Label } from 'reactstrap';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nameAndSurnameFieldValue, setNameAndSurnameFieldValue] = useState('');
  const [emailFieldValue, setEmailFieldValue] = useState('');
  const [phoneFieldValue, setPhoneFieldValue] = useState('');
  const [messageFieldValue, setMessageFieldValue] = useState('');

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&');
  };

  const onValidSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contactForm',
        nameAndSurname: nameAndSurnameFieldValue,
        email: emailFieldValue,
        phone: phoneFieldValue,
        message: messageFieldValue,
        status: true,
      }),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => alert(error));

    e.preventDefault();
  };
  return (
    <div>
      {isSubmitted ? (
        <div className="text-center">
          <h4>Dziękujemy za wysłanie zapytania</h4>
        </div>
      ) : (
        <div>
          <h3>Dane do kontaktu:</h3>
          <AvForm
            name="contactForm"
            method="post"
            data-netlify="true"
            onValidSubmit={onValidSubmit}
            data-netlify-recaptcha="true"
          >
            <AvInput type="hidden" name="form-name" value="contactForm" />
            <AvInput
              type="hidden"
              name="subject"
              id="subject"
              value="Zgłoszenie z formularza kontaktowego"
            />
            <AvGroup>
              <AvInput
                type="text"
                name="nameAndSurname"
                id="nameAndSurname"
                placeholder="Imię i nazwisko"
                required
                onChange={e => setNameAndSurnameFieldValue(e.target.value)}
              />
              <AvFeedback>Pole jest wymagane</AvFeedback>
            </AvGroup>
            <AvGroup>
              <AvInput
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={e => setEmailFieldValue(e.target.value)}
              />
              <AvFeedback>Pole jest wymagane</AvFeedback>
            </AvGroup>
            <AvGroup>
              <AvInput
                type="text"
                name="phone"
                id="phone"
                placeholder="Telefon kontaktowy (opcjonalnie)"
                onChange={e => setPhoneFieldValue(e.target.value)}
              />
            </AvGroup>
            <AvGroup>
              <AvInput
                type="textarea"
                name="message"
                id="message"
                placeholder="Wiadomość"
                required
                onChange={e => setMessageFieldValue(e.target.value)}
              />
              <AvFeedback>Pole jest wymagane</AvFeedback>
            </AvGroup>
            <AvGroup check>
              <Label check>
                <AvInput required type="checkbox" name="status"/> Wyrażam zgodę
                na przetwarzanie moich danych osobowych przez nazwaFirmy,
                adresFirmy w celu i w zakresie niezbędnym do realizacji obsługi
                niniejszego zgłoszenia. Zapoznałem się z treścią informacji o
                sposobie przetwarzania moich danych osobowych ze stony{' '}
                <Link className="inner-link" to="/privacy-policy">
                  polityki prywatności
                </Link>
              </Label>
            </AvGroup>
            <div data-netlify-recaptcha="true"></div>
            <div className="text-center">
              <Button className="btn_submit_form">Wyślij</Button>
            </div>
          </AvForm>
        </div>
      )}
    </div>
  );
}

export default ContactForm;

import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

function ContactForm() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3>Dane do kontaktu:</h3>
      <Form
        name="contactForm"
        method="POST"
        data-netlify="true"
        onSubmit={onSubmit}
        data-netlify-recaptcha="true"
      >
        <Input
          type="hidden"
          name="form-name"
          value="contactForm"
        />
        <Input
          type="hidden"
          name="subject"
          id="subject"
          value="Zgłoszenie z formularza kontaktowego"
        />
        <FormGroup>
          <Input
            type="text"
            name="nameAndSurname"
            id="nameAndSurname"
            placeholder="Imię i nazwisko"
          />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="Telefon kontaktowy"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="exampleText"
            id="exampleText"
            placeholder="Wiadomość"
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="status" /> Wyrażam zgodę na
            przetwarzanie moich danych osobowych przez nazwaFirmy, adresFirmy w
            celu i w zakresie niezbędnym do realizacji obsługi niniejszego
            zgłoszenia. Zapoznałem się z treścią informacji o sposobie
            przetwarzania moich danych osobowych ze stony{' '}
            <Link className="inner-link" to="/privacy-policy">
              polityki prywatności
            </Link>
          </Label>
        </FormGroup>
        <div data-netlify-recaptcha="true"></div>
        <div className="text-center">
          <Button className="btn_submit_form">Wyślij</Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;

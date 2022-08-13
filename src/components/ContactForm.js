import React, { useState } from "react";
import { Button, Label } from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nameAndSurnameFieldValue, setNameAndSurnameFieldValue] = useState("");
  const [emailFieldValue, setEmailFieldValue] = useState("");
  const [phoneFieldValue, setPhoneFieldValue] = useState("");
  const [messageFieldValue, setMessageFieldValue] = useState("");
  const [isPolicyAccepted, setIsPolicyAccepted] = useState("");
  const [error, setError] = useState(null);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!nameAndSurnameFieldValue)
      return setError("Imię i nazwisko są wymagane");
    if (!emailFieldValue || !emailFieldValue.includes("@"))
      return setError("Email jest wymagany");
    if (!messageFieldValue) return setError("Wiadomość jest wymagana");
    if (!isPolicyAccepted)
      return setError("Wymagane jest zaakceptowanie polityki prywatności");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contactForm",
        nameAndSurname: nameAndSurnameFieldValue,
        email: emailFieldValue,
        phone: phoneFieldValue,
        message: messageFieldValue,
        status: true,
      }),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => alert(error));

    setError("");
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
          <Form
            name="contactForm"
            method="post"
            data-netlify="true"
            onSubmit={onSubmit}
            data-netlify-recaptcha="true"
          >
            <Input type="hidden" name="form-name" value="contactForm" />
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
                placeholder="Imię i nazwisko*"
                onChange={(e) => {
                  setNameAndSurnameFieldValue(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                onChange={(e) => {
                  setEmailFieldValue(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="phone"
                id="phone"
                placeholder="Telefon kontaktowy (opcjonalnie)"
                onChange={(e) => setPhoneFieldValue(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Wiadomość*"
                onChange={(e) => setMessageFieldValue(e.target.value)}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="status"
                  onClick={(e) => setIsPolicyAccepted(e.target.checked)}
                />{" "}
                *Wyrażam zgodę na przetwarzanie moich danych osobowych przez
                nazwaFirmy, adresFirmy w celu i w zakresie niezbędnym do
                realizacji obsługi niniejszego zgłoszenia. Zapoznałem się z
                treścią informacji o sposobie przetwarzania moich danych
                osobowych ze stony{" "}
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
          {error && (
            <div style={{ fontWeight: "bold", color: "red" }}>{error}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default ContactForm;

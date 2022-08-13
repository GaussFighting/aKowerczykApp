import React, { useEffect } from "react";
import TopImage from "./TopImage";
import Service from "./Service";
import { Container, Row, Col } from "reactstrap";
import {
  faSearchLocation,
  faMarker,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import servicesPageImage from "../styles/images/laptop-g930f14b70_1920.jpg";

function Services() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <TopImage image={servicesPageImage} position={68} />
      <div className="container page-container py-5 ">
        <h1 className="services-title">USŁUGI</h1>
        <Container>
          <Row className="services-row">
            <Col md={4} className="services-col">
              <Service
                icon={faSearchLocation}
                title={"DORADZTWO"}
                description={`Nie musisz znać się na skomplikowanych aspektach prawnych obrotu nieruchomości. 
                Weryfikacja dokumentów, analiza stanu prawnego, przygotowanie wniosków do ksiąg wieczystych, Katastru, pozyskiwanie brakujących dokumentów, przygotowywanie projektów umów, przedwstępnych, przyrzeczonych, najmu, analiza i ekspertyzy dotyczące miejscowych planów zagospodarowania przestrzennego to moja codzienność. Aktualizacja wpisów w KW i EGiB
                Rzetelność usług  to priorytet. Twój czas jest cenny.
                `}
                isCollapseOpen={true}
              />
            </Col>
            <Col md={4} className="services-col">
              <Service
                icon={faMarker}
                title={"HOME STAGING"}
                description={`Chcesz sprzedać mieszkanie lub dom? Zastanawiasz się jak najlepiej ulokować fundusze? 
                Każda nieruchomość wymaga przygotowania. Aranżacja powierzchni ma wpływ na zysk ze sprzedaży lub najmu. Wybór nieruchomości i sposób jej przedstawienia potencjalnym  klientom to szybszy zysk.
                Podniesienie atrakcyjności domu lub mieszkania przyśpiesza zawarcie umowy.
                Współpraca z architektami wnętrz oraz krajobrazu pomoże osiągnąć zamierzony efekt.
                `}
                isCollapseOpen={true}
              />
            </Col>
            <Col md={4} className="services-col">
              <Service
                icon={faHouseUser}
                title={"WYCENA"}
                description={`Świadomość wartość  nieruchomości to podstawa. Każda nieruchomość ma swoją wartość i każda swoją cenę. Operat rzeczoznawcy majątkowego uwzględni wszelkie aspekty nieruchomości, jak również jej potencjał. Dom, mieszkanie, garaż, działka , jezioro, służebność – wszystko wymaga określenia wartości. Przed podjęciem decyzji o sprzedaży. Jest ona również potrzebna w procedurze pozyskiwania kredytu hipotecznego.`}
                isCollapseOpen={true}
              />
            </Col>
          </Row>
          <Row className="services-row">
            <Col md={4} className="services-col">
              <Service
                icon={faSearchLocation}
                title={"DLA DEWELOPERÓW"}
                description={``}
                points={[
                  "Analizy możliwości zagospodarowania",
                  "Analiza stanu prawnego",
                  "Raporty due diligence",
                  "Weryfikacja planów miejscowych",
                  "Nadzór nad obsługą geodezyjną",
                  "Badania ksiąg wieczystych",
                  "Pomoc w uzyskaniu zaświadczeń o samodzielności i kartotek lokali",
                  "Analiza sąsiedztwa",
                ]}
                isCollapseOpen={true}
              />
            </Col>
            <Col md={4} className="services-col">
              <Service
                icon={faMarker}
                title={"DZIEDZICZENIE /SPADEK"}
                description={""}
                points={[
                  "Pomoc w przygotowaniu dokumentów",
                  "Obsługa notarialna",
                  "Pozyskiwanie dokumentów z ksiąg wieczystych, Katastru",
                  "Regulowanie zapisów w księgach wieczystych",
                  "Doradztwo inwestycyjne",
                ]}
                isCollapseOpen={true}
              />
            </Col>
            <Col md={4} className="services-col">
              <Service
                icon={faHouseUser}
                title={"SŁUZEBNOSCI PRZESYŁU"}
                description={``}
                points={[
                  "ANALIZA NIERUCHOMOSCI",
                  "ANALIZA SASIEDZTWA",
                  "AKTUALIZACJE MAP",
                  "BAZA DANYCH",
                  "MATERIAŁY GEODEZYJNE",
                  "REJESTR DZIAŁEK",
                  "EWIDENCJA NIERUCHOMOŚCI",
                  "Projekty umów ustanowienia służebności",
                  "Wycena wynagrodzenia",
                  "negocjacje",
                ]}
                isCollapseOpen={true}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Services;

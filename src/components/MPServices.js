import React from "react";
import { NavLink } from "react-router-dom";
import Service from "./Service";
import { Container, Row, Col } from "reactstrap";
import {
  faSearchLocation,
  faMarker,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";

function MPServices() {
  return (
    <div className="container pb-5">
      <NavLink className="inner-link" to="/services">
        <h1>USŁUGI</h1>
      </NavLink>
      <Container fluid>
        <Row>
          <Col lg={4}>
            <Service
              icon={faSearchLocation}
              title={"DORADZTWO"}
              description={`Nie musisz znać się na skomplikowanych aspektach prawnych obrotu nieruchomości. 
                Weryfikacja dokumentów, analiza stanu prawnego, przygotowanie wniosków do ksiąg wieczystych, Katastru, pozyskiwanie brakujących dokumentów, przygotowywanie projektów umów, przedwstępnych, przyrzeczonych, najmu, analiza i ekspertyzy dotyczące miejscowych planów zagospodarowania przestrzennego to moja codzienność. Aktualizacja wpisów w KW i EGiB
                Rzetelność usług  to priorytet. Twój czas jest cenny.
                `}
              isCollapseOpen={false}
            />
          </Col>
          <Col lg={4}>
            <Service
              icon={faMarker}
              title={"HOME STAGING"}
              description={`Chcesz sprzedać mieszkanie lub dom? Zastanawiasz się jak najlepiej ulokować fundusze? 
                Każda nieruchomość wymaga przygotowania. Aranżacja powierzchni ma wpływ na zysk ze sprzedaży lub najmu. Wybór nieruchomości i sposób jej przedstawienia potencjalnym  klientom to szybszy zysk.
                Podniesienie atrakcyjności domu lub mieszkania przyśpiesza zawarcie umowy.
                Współpraca z architektami wnętrz oraz krajobrazu pomoże osiągnąć zamierzony efekt.
                `}
              isCollapseOpen={false}
            />
          </Col>
          <Col lg={4}>
            <Service
              icon={faHouseUser}
              title={"WYCENA"}
              description={`Świadomość wartość  nieruchomości to podstawa. Każda nieruchomość ma swoją wartość i każda swoją cenę. Operat rzeczoznawcy majątkowego uwzględni wszelkie aspekty nieruchomości, jak również jej potencjał. Dom, mieszkanie, garaż, działka , jezioro, służebność – wszystko wymaga określenia wartości. Przed podjęciem decyzji o sprzedaży. Jest ona również potrzebna w procedurze pozyskiwania kredytu hipotecznego.`}
              isCollapseOpen={false}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
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
              isCollapseOpen={false}
            />
          </Col>
          <Col lg={4}>
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
              isCollapseOpen={false}
            />
          </Col>
          <Col lg={4}>
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
              isCollapseOpen={false}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MPServices;

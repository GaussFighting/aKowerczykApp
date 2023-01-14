import React from "react";
import {
  faCalculator,
  faMapLocationDot,
  faSection,
  faChartColumn,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MPUsefulLinks() {
  return (
    <div className="container pb-5 px-4">
      <h1 className="mpuseful-links-title">PRZYDATNE LINKI</h1>
      <ul className="list-unstyled">
        <li>
          <div>
            <a
              href="http://www.kalkulatornotarialny.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inner-link"
            >
              <FontAwesomeIcon icon={faCalculator} size="2x" />{" "}
              <span className="useful-link">
                <b>Kalkulator opłat notarialnych</b>
              </span>
            </a>
          </div>
          <div className="useful-link-description">
            <p>
              Zakup nieruchomości to znaczne obciążenie finansowe kupującego.
              Koszty to nie tylko sama cena transakcyjna, ale także dodatkowe
              opłaty, w tym{" "}
              <b>koszty związane z zawarciem aktu notarialnego </b>. Kalkulator
              ma pomóc Państwu w szacunkowym obliczeniu maksymalnej wysokości
              opłat w związku z daną transakcją.
            </p>
          </div>
        </li>
        <li>
          <div>
            <a
              href="https://www.kalkulatorkredytu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inner-link"
            >
              <FontAwesomeIcon icon={faCalculator} size="2x" />{" "}
              <span className="useful-link">
                <b>Kalkulator kredytu hipotecznego</b>
              </span>
            </a>
          </div>
          <div className="useful-link-description">
            <p>
              Stworzony z myślą o osobach stojącymi przed decyzją o zakupie
              nieruchomości, jest również przydatny dla tych, którzy kredyt
              hipoteczny już mają. W przejrzysty sposób{" "}
              <b>
                pokazuje wszelkie warianty kredytu, również w formie graficznej.
              </b>
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://ekw.ms.gov.pl/eukw_ogol/menu.do"
            className="inner-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="book-icon">
              {/* <FontAwesomeIcon icon={faBook} size="2x" />{" "} */}
              <span className="useful-link useful-link-svg">
                <b>Księgi wieczyste</b>
              </span>
            </div>
          </a>
          <div className="useful-link-description">
            <p>
              Aplikacja Ministerstwa Sprawiedliwości zawierająca{" "}
              <b>bazę elektronicznych ksiąg wieczystych </b>pozwalająca
              przeglądać zapisy ksiąg, generować wydruki oraz składać wnioski.
            </p>
          </div>
        </li>
        <li>
          <div>
            <a
              href="https://wms.zgkikm.wroc.pl/#/giportal"
              className="inner-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMapLocationDot} size="2x" />{" "}
              <span className="useful-link">
                <b>ZGKiKM</b>
              </span>
            </a>
          </div>
          <div className="useful-link-description">
            <p>
              Portalu GEO-INFO i.Mapa dotyczący Wrocławia zawiera{" "}
              <b>dane z ewidencji gruntów i budynków</b>, obiekty topograficzne,
              uzbrojenie terenu, planowanie przestrzenne oraz wszelkie
              informacje istotne dla analizy nieruchomości. <br></br>
              Dysponentem prezentowanych danych przestrzennych jest Zarząd
              Geodezji, Kartografii i Katastru Miejskiego we Wrocławiu. Zarząd
              Geodezji, Kartografii i Katastru Miejskiego we Wrocławiu.
            </p>
          </div>
        </li>
        <li>
          <div>
            <a
              href="https://wrosip.pl/"
              className="inner-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMapLocationDot} size="2x" />{" "}
              <span className="useful-link">
                <b>WROSIP</b>
              </span>
            </a>
          </div>
          <div>
            <p>
              System <b>Informacji Przestrzennej</b> Powiatu Wrocławskiego
            </p>
          </div>
        </li>
        <li>
          <div>
            <a
              href="https://isap.sejm.gov.pl/"
              className="inner-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSection} size="2x" />{" "}
              <span className="useful-link">
                <b>Internetowy System Aktów Prawnych</b>
              </span>
            </a>
          </div>
          <div className="useful-link-description">
            <p>
              System informacji prawnej redagowany przez zespół specjalistów w
              Ośrodku Informatyki Kancelarii Sejmu. ISAP jest częścią Systemu
              Informacyjnego Sejmu. Baza ISAP zawiera{" "}
              <b>opisy bibliograficzne i teksty aktów prawnych </b>{" "}
              opublikowanych na podstawie ustawy z dnia 20 lipca 2000 r. o
              ogłaszaniu aktów normatywnych i niektórych innych aktów prawnych
              (Dz.U. 2019 poz. 1461), w wydawnictwach urzędowych:
              <b> Dzienniku Ustaw i Monitorze Polskim</b>, wydawanych przez
              Rządowe Centrum Legislacji.
            </p>
          </div>
        </li>
        <li>
          <div>
            <a
              href="https://stat.gov.pl/"
              className="inner-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faChartColumn} size="2x" />{" "}
              <span className="useful-link">
                <b>Główny Urząd Statystyczny</b>
              </span>
            </a>
          </div>
          <div className="useful-link-description">
            <p>
              Centralny Informator Statystycznego GUS publikujący{" "}
              <b>dane statystyczne</b>, szczególnie wykorzystywany jako
              poszerzenie zakresu oraz dostępności informacji statystycznych i
              metod analiz geostatystycznych wykorzystujących zasoby statystyki
              publicznej.
            </p>
          </div>
        </li>
        <li>
          <div>
            <a
              href="https://www.gov.pl/web/rozwoj-technologia"
              className="inner-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBuildingColumns} size="2x" />{" "}
              <span className="useful-link">
                <b>Ministerstwo Rozwoju i Technologii</b>
              </span>
            </a>
          </div>
          <div className="useful-link-description">
            <p>
              Ministerstwo Rozwoju i Technologii jest urzędem administracji
              rządowej zapewniającym obsługę Ministra Rozwoju i Technologii.
              Podlegają mu następujące obszary: gospodarka, budownictwo,
              planowanie i zagospodarowanie przestrzenne oraz mieszkalnictwo.
            </p>
          </div>
        </li>
        <li>
          <div>
            <a
              href="https://mapy.geoportal.gov.pl/imap/Imgp_2.html"
              className="inner-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMapLocationDot} size="2x" />{" "}
              <span className="useful-link">
                <b>GEOPORTAL</b>
              </span>
            </a>
          </div>
          <div className="useful-link-description">
            <p>
              Geoportal Infrastruktury{" "}
              <b>Informacji Przestrzennej dla obszaru całej Polski.</b>
            </p>
          </div>
        </li>
        <li>
          <div>
            <a
              href="http://www.ekoportal.gov.pl/"
              className="inner-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMapLocationDot} size="2x" />{" "}
              <span className="useful-link">
                <b>EKOPORTAL</b>
              </span>
            </a>
          </div>
          <div className="useful-link-description">
            <p>
              To miejsce, które ułatwia dotarcie do{" "}
              <b>informacji o środowisku.</b>
            </p>
          </div>
        </li>
        <li>
          <div>
            <a
              href="https://www.podatki.gov.pl/"
              className="inner-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSection} size="2x" />{" "}
              <span className="useful-link">
                <b>Podatki</b>
              </span>
            </a>
          </div>
          <div className="useful-link-description">
            <p>
              Baza <b>informacji podatkowych Ministerstwa Finansów</b>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MPUsefulLinks;

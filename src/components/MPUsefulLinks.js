import React from "react";
import {
  faCalculator,
  faBook,
  faMapLocationDot,
  faSection,
  faChartColumn,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MPUsefulLinks() {
  return (
    <div className="container pb-5">
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
          <div>
            <p>
              Zakup nieruchomości to znaczne obciążenie finansowe kupującego.
              Koszty to nie tylko sama cena transakcyjna, ale także dodatkowe
              opłaty, w tym koszty związane z samym aktem notarialnym.
              kalkulator ma pomóc Państwu w szacunkowym obliczeniu maksymalnej
              wysokości opłat w związku z daną transakcją.
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
          <div>
            <p>
              Stworzony z myślą o osobach stojącymi przed decyzją o zakupie
              nieruchomości, jak również przydatny dla tych, którzy kredyt
              hipoteczny już mają. W przejrzysty sposób pokazuje wszelkie
              warianty kredytu, również w formie graficznej.
            </p>
          </div>
        </li>
        <li>
          <div>
            <a
              href="https://ekw.ms.gov.pl/eukw_ogol/menu.do"
              className="inner-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBook} size="2x" />{" "}
              <span className="useful-link">
                <b>Księgi wieczyste</b>
              </span>
            </a>
          </div>
          <div>
            <p>
              Aplikacja Ministerstwa Sprawiedliwości zawierająca bazę
              elektronicznych ksiąg wieczystych pozwalająca przeglądać zapisy
              ksiąg, generować wydruki oraz składać wnioski.
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
          <div>
            <p>
              Portalu GEO-INFO i.Mapa dotyczący Wrocławia zawiera dane z
              ewidencji gruntów i budynków, obiekty topograficzne, uzbrojenie
              terenu, planowanie przestrzenne oraz wszelkie informacje istotne
              dla analizy nieruchomości.
            </p>
            <p>
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
            <p>System Informacji Przestrzennej Powiatu Wrocławskiego</p>
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
          <div>
            <p>
              System informacji prawnej redagowany przez zespół specjalistów w
              Ośrodku Informatyki Kancelarii Sejmu. ISAP jest częścią Systemu
              Informacyjnego Sejmu. Baza ISAP zawiera opisy bibliograficzne i
              teksty aktów prawnych opublikowanych na podstawie ustawy z dnia 20
              lipca 2000 r. o ogłaszaniu aktów normatywnych i niektórych innych
              aktów prawnych (Dz.U. 2019 poz. 1461), w wydawnictwach urzędowych:
              Dzienniku Ustaw i Monitorze Polskim, wydawanych przez Rządowe
              Centrum Legislacji.
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
          <div>
            <p>
              Centralny Informator Statystycznego GUS publikujący dane
              statystyczne, szczególnie wykorzystywany jako poszerzenie zakresu
              oraz dostępności informacji statystycznych i metod analiz
              geostatystycznych wykorzystujących zasoby statystyki publicznej.
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
          <div>
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
          <div>
            <p>
              Geoportal Infrastruktury Informacji Przestrzennej dla obszaru
              całej Polski
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
          <div>
            <p>To miejsce, które ułatwia dotarcie do informacji o środowisku</p>
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
          <div>
            <p>Baza informacji podatkowych Ministerstwa Finansów</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MPUsefulLinks;

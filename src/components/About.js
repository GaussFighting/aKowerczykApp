import React, { useEffect } from "react";
import SocialMedia from "./SocialMedia";
import TopImage from "./TopImage";
import aboutPageImage from "../styles/images/poland-gfc372c5c7_1920.jpg";
import Certificates from "./Certifacates";
import certs from "../styles/images/index";

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <TopImage image={aboutPageImage} position={88} />
      <div className="container page-container py-5">
        <h1>O FIRMIE</h1>

        <p>
          NAK Nieruchomości to firma założona przez Agatę Kowerczyk działająca
          na rynku nieruchomości od 1992r. Oferuje wsparcie i doradztwo w
          zakresie kompleksowych usług na rynku nieruchomości.
        </p>

        <p>
          Klienci firmy mogą liczyć na rzetelność każdej prowadzonej sprawy ,
          zaangażowanie i ułatwienie poruszania się na rynku nieruchomości.
        </p>

        <p>
          NAK Nieruchomości to pomoc w analizie stanu prawnego nieruchomości,
          badaniach ksiąg wieczystych i dokumentów planistycznych, analizie
          możliwości zagospodarowania nieruchomości, ustanawianiu służebności
          przesyłu .
        </p>

        <ul>
          <li className="bullet-points">
            {" "}
            Nie radzisz sobie z zawiłościami dokumentów, potrzebujesz sprawdzić
            księgę wieczysta?
          </li>
          <li className="bullet-points">
            {" "}
            Potrzebujesz złożyć wniosek do ksiąg wieczystych, przygotować umowę
            przedwstępną, pozyskać mapy geodezyjne, sprawdzić plan
            zagospodarowania?
          </li>
          <li className="bullet-points">
            {" "}
            Otrzymałeś spadek i nie wiesz co dalej?
          </li>
          <li className="bullet-points">
            {" "}
            Chcesz wynająć lub sprzedać mieszkanie, nieruchomość?
          </li>
          <li className="bullet-points"> Potrzebujesz wyceny?</li>
          <li className="bullet-points">
            {" "}
            Potrzebujesz opinii, ekspertyzy, badania rynku?
          </li>
        </ul>

        <p>
          Firma NAK Nieruchomości pomoże w każdej z tych spraw i wielu innych.
          Doradztwo i pomoc to główny cel mojej działalności. Usługi świadczymy
          na terenie całej Polski z dużą wnikliwością i dbałością o klienta i
          nieruchomości.
        </p>

        <p>
          Współpracujemy ściśle z rzeczoznawcami majątkowymi, pośrednikami,
          zarządcami nieruchomości , brokerami finansowymi, geodetami,
          notariuszami, doradcami kredytowymi, architektami wnętrz i krajobrazu.
          Swoją działalność na rynku nieruchomości rozpoczęłam w 1992r.
          zdobywając doświadczenie jako pośrednik, zarządca, pracując w
          spółdzielni mieszkaniowej, firmie developerskiej oraz zajmując się
          służebnościami przesyły w przedsiębiorstwie energetycznym.{" "}
        </p>

        <p>
          Obecnie świadczę usługi jako NAK Nieruchomości rozwiązując problemy i
          dylematy moich klientów.
        </p>

        <p>
          Posiadam licencje pośrednika oraz zarządcy nieruchomości wymagane
          jeszcze przed deregulacją zawodów. Posiadam doświadczenie we
          wszystkich aspektach obsługi nieruchomości, dlatego jestem w stanie
          zaoferować Państwu kompleksową obsługę.
        </p>

        <p>Zapraszamy Państwa do nawiązania współpracy.</p>

        <p>Agata Kowerczyk</p>

        <p>Doradca ds. nieruchomości</p>

        <SocialMedia color="color-green" />
        <Certificates
          certs={[
            certs.certificateImage1,
            certs.certificateImage2,
            certs.certificateImage3,
            certs.certificateImage4,
            certs.certificateImage5,
            certs.certificateImage6,
            certs.certificateImage7,
            certs.certificateImage8,
            certs.certificateImage9,
            certs.certificateImage10,
            certs.certificateImage11,
            certs.certificateImage12,
            certs.certificateImage13,
            certs.certificateImage14,
            certs.certificateImage15,
            certs.certificateImage16,
            certs.certificateImage17,
            certs.certificateImage18,
            certs.certificateImage19,
            certs.certificateImage20,
          ]}
        />
      </div>
    </div>
  );
}

export default About;

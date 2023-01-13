import React, { useEffect } from "react";
import SocialMedia from "./SocialMedia";
import TopImage from "./TopImage";
import aboutPageImage from "../styles/images/aboutLogo.jpg";
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
      <TopImage image={aboutPageImage} position={20} />
      <div className="container page-container py-5 px-4 about">
        <h1 className="about-title">O FIRMIE</h1>

        <p>
          NAK Nieruchomości prowadzi działalność w zakresie doradztwa na rynku
          nieruchomości.
        </p>

        <p>
          Nasze usługi skierowane są do deweloperów, inwestorów, funduszy
          inwestycyjnych, przedsiębiorstw przesyłowych oraz osób prywatnych.
        </p>

        <p>
          W ramach oferowanych usług związanych z rynkiem nieruchomości
          zapewniamy pełną merytoryczną pomoc oraz rzetelną obsługę w zakresie
          doradztwa:
        </p>

        <ul>
          <li className="bullet-points"> inwestycyjnego</li>
          <li className="bullet-points"> transakcyjnego</li>
          <li className="bullet-points"> strategicznego dla deweloperów</li>
          <li className="bullet-points"> w zakresie służebności przesyłu</li>
          <li className="bullet-points">
            przy zawieraniu umów na rynku nieruchomości
          </li>
          <li className="bullet-points">
            przy formalnościach dotyczących spadków i darowizn
          </li>
        </ul>

        <p>Oferujemy również usługi w zakresie:</p>

        <ul>
          <li className="bullet-points"> wyceny nieruchomości</li>
          <li className="bullet-points"> home staging</li>
          <li className="bullet-points"> analizy rynku nieruchomości</li>
        </ul>
        <p>Udzielamy informacji i porad dotyczących rynku nieruchomości.</p>

        <p>
          Diagnoza problemów, zalecanie rozwiązań, pomoc i wskazanie kierunku
          działania to podstawa naszych relacji z klientem. Kwalifikacje i
          wieloletnie doświadczenie naszych doradców pomaga trafnie dokonać
          analizy, ocenić jakość informacji, wskazać zagrożenia oraz
          zarekomendować najlepszy sposób postępowania.
        </p>

        <p>
          Usługi świadczymy na terenie całej Polski działając z dużą
          wnikliwością oraz dbałością o potrzeby klienta i jego nieruchomości.
        </p>

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

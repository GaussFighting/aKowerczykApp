import React from "react";
import { NavLink } from "react-router-dom";
import SocialMedia from "./SocialMedia";

function MPAbout() {
  return (
    <div className="container pb-5 about px-4">
      <NavLink className="inner-link" to="/about">
        <h1>O FIRMIE</h1>
      </NavLink>

      <p>
        NAK Nieruchomości prowadzi działalność w zakresie doradztwa na rynku
        nieruchomości.
      </p>

      <p>
        Nasze usługi skierowane są do deweloperów, inwestorów, funduszy
        inwestycyjnych, przedsiębiorstw przesyłowych oraz osób prywatnych.
      </p>

      <p>
        W ramach oferowanych usług związanych z rynkiem nieruchomości zapewniamy
        pełną merytoryczną pomoc oraz rzetelną obsługę w zakresie doradztwa:
      </p>

      <ul>
        <li className="bullet-points"> inwestycyjnego</li>
        <li className="bullet-points"> transakcyjnego</li>
        <li className="bullet-points"> strategicznego dla deweloperów</li>
        <li className="bullet-points"> w zakresie służebności przesyłu</li>
        <li className="bullet-points">
          {" "}
          przy zawieraniu umów na rynku nieruchomości
        </li>
        <li className="bullet-points">
          {" "}
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
        Usługi świadczymy na terenie całej Polski działając z dużą wnikliwością
        oraz dbałością o potrzeby klienta i jego nieruchomości.
      </p>

      <SocialMedia color="color-green" />
    </div>
  );
}

export default MPAbout;

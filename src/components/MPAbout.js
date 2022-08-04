import React from "react";
import { NavLink } from "react-router-dom";
import SocialMedia from "./SocialMedia";

function MPAbout() {
  return (
    <div className="container pb-5">
      <NavLink className="inner-link" to="/about">
        <h1>O FIRMIE</h1>
      </NavLink>

      <p>
        NAK Nieruchomości to firma założona przez Agatę Kowerczyk działająca na
        rynku nieruchomości od 1992r. Oferuje wsparcie i doradztwo w zakresie
        kompleksowych usług na rynku nieruchomości.
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
        <li>
          {" "}
          Nie radzisz sobie z zawiłościami dokumentów, potrzebujesz sprawdzić
          księgę wieczysta?
        </li>
        <li>
          {" "}
          Potrzebujesz złożyć wniosek do ksiąg wieczystych, przygotować umowę
          przedwstępną, pozyskać mapy geodezyjne, sprawdzić plan
          zagospodarowania?
        </li>
        <li> Otrzymałeś spadek i nie wiesz co dalej?</li>
        <li> Chcesz wynająć lub sprzedać mieszkanie, nieruchomość?</li>
        <li> Potrzebujesz wyceny?</li>
        <li> Potrzebujesz opinii, ekspertyzy, badania rynku?</li>
      </ul>

      <p>
        Firma NAK Nieruchomości pomoże w każdej z tych spraw i wielu innych.
        Doradztwo i pomoc to główny cel mojej działalności. Usługi świadczymy na
        terenie całej Polski z dużą wnikliwością i dbałością o klienta i
        nieruchomości.
      </p>

      <p>
        Współpracujemy ściśle z rzeczoznawcami majątkowymi, pośrednikami,
        zarządcami nieruchomości , brokerami finansowymi, geodetami,
        notariuszami, doradcami kredytowymi, architektami wnętrz i krajobrazu.
        Swoją działalność na rynku nieruchomości rozpoczęłam w 1992r. zdobywając
        doświadczenie jako pośrednik, zarządca, pracując w spółdzielni
        mieszkaniowej, firmie developerskiej oraz zajmując się służebnościami
        przesyły w przedsiębiorstwie energetycznym.{" "}
      </p>

      <p>
        Obecnie świadczę usługi jako NAK Nieruchomości rozwiązując problemy i
        dylematy moich klientów.
      </p>

      <p>
        Posiadam licencje pośrednika oraz zarządcy nieruchomości wymagane
        jeszcze przed deregulacją zawodów. Posiadam doświadczenie we wszystkich
        aspektach obsługi nieruchomości, dlatego jestem w stanie zaoferować
        Państwu kompleksową obsługę.
      </p>

      <p>Zapraszamy Państwa do nawiązania współpracy.</p>

      <p>Agata Kowerczyk</p>

      <p>Doradca ds. nieruchomości</p>
      <SocialMedia color="color-green" />
    </div>
  );
}

export default MPAbout;

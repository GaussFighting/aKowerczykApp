import React, { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container py-5">
      <h1>POLITYKA PRYWATNOŚCI</h1>
      <h3>I Informacje ogólne</h3>
      <p>
        1. Zdeklarowana poniej polityka prywatności dotyczy Serwisu
        zamieszczonego pod adresem url: https://www.nak-nieruchomosci.com/
      </p>
      <p>
        2. Administratorem i Operatorem Serwisu jest NAK NIERUCHOMOŚCI AGATA
        KOWERCZYK, NIP: 8970030520
      </p>
      <p>
        3. Adres email służący do kontaktu z Admnistratorem:
        naknieruchomosci@gmail.com
      </p>
      <p>
        4. Dane osobowe podane dobrowolnie w Serwisie są administrowane przez
        Operatora
      </p>
      <p>5. Dane osobowe są wykorzystywane przez Serwis w celu:</p>
      <p>- obsługi zapytań zgłoszonych za pomocą formularza kontaktowego</p>
      <p>
        6. Serwis pozyskuje informacje o użytkowniku w niżej opisany sposób:
      </p>
      <p>
        - W systemach Operatora przechowywane są tylko dane dobrowolnie
        wprowadzone przez użytkownika za pomocą ww. formularza
      </p>
      <h3>II Metoda ochrony danych osobowych</h3>
      <p>
        Operator chroni dane osobowe użytkownika tj. miejsce logowania i służące
        do obsługi zapytania kontaktowego za pomocą warstwy transmisji
        (certyfikat SSL). Skutkuje to zaszyfrowaniem wspomnianych danych na
        komputerze użytkownika i powoduje, że mogą zostać one odczytane jedynie
        na serwerze operatora
      </p>
      <h3>III Hosting</h3>
      <p>
        1. Serwis hostowany jest na serwerach operatora: Netlify, Inc., 2325 3rd
        Street, Suite 215, San Francisco, California 94107
      </p>
      <h3>
        IV Prawa użytkownika i pozostałe informacje nt. sposobu procesowania
        danych
      </h3>
      <p>
        1. Administrator może przekazać dane osobowe użytkownika innym
        odbiorcom, jeśli jest to konieczne do wypełnienia obowiązków
        spoczywających na Administratorze. Odbiorcami tych danych mogą być:
      </p>
      <p>- firma hostingowa (na zasadzie powierzenia)</p>
      <p>
        - upoważnieni pracownicy, którzy mogą wykorzystać udostępnione dane
        tylko do realizacji celu działania Serwisu
      </p>
      <p>
        2. Dane osobowe użytkownika będą procesowane przez Administratora i
        Operatora nie dłużej, niż wymagane jest to czynnościami związanymi z
        obsługą zgłoszenia
      </p>
      <p>3. Masz prawo żądać od Administratora:</p>
      <p>- udostępnienia dotyczących Ciebie danych osobowych</p>
      <p>- ich edycji</p>
      <p>- ich usunięcia</p>
      <p>- zmiany zakresu przetwarzania</p>
      <p>- ich przeniesienia</p>
      <p>
        4. Użytkownikowi przysługuje prawo do sprzeciwu w obszarze procesowania
        Jego danych. Przy czym sprzeciw nie będzie mógł zostać uwzględniony w
        sytuacji wystąpienia uzasadnionych prawnie podstaw do ich procesowania,
        tj. dochodzenia lub obrony praw, wolności oraz roszczeń i nadrzędnych
        wobec użytkownika interesów
      </p>
      <p>5. Strona Urzędu Ochrony Danych Osobowych: https://uodo.gov.pl/</p>
      <p>
        6. Dane osobowe użytkownika podane są przez Niego dobrowolnie, lecz
        niezbędnie do obsługi zgłoszenia
      </p>
      <h3>V Dane w formularzu kontaktowym</h3>
      <p>
        1. Serwis pobiera dane, w tym dane osobowe, udostępnione dobrowolnie
        przez użytkownika, jeśli zostaną przez Niego podane
      </p>
      <p>
        2. Serwis może archiwizować dane o parametrach połączenia (adres IP
        użytkownika, czas połączenia)
      </p>
      <p>
        3. W niektórych sytuacjach Serwis może zapisać dane ułatwiające
        powiązanie informacji zawartych w formularzu z adresem poczty
        elektronicznej użytkownika przez co Jego adres email może pojawić się w
        adresie URL strony Serwisu
      </p>
      <p>
        4. Informacje udostępnione w formularzu są procesowane w celu
        przeprowadzenia obsługi zgłoszenia, np. w sprawie kontaktu, zapytania
        ofertowego, itp.
      </p>
      <h3>VI Logi</h3>
      <p>
        1. Dane przekazane i nt. parametrów połączenia mogą podlegać logowaniu.
        Są wykorzystane do celów administracyjnych Serwisu
      </p>
    </div>
  );
}

export default PrivacyPolicy;

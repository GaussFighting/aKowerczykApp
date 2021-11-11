import React from 'react';

function MPUsefulLinks() {
  return (
    <div className="container py-5">
      <h1>PRZYDATNE LINKI</h1>
      <ul>
        <li>
          <div>
            <a href="http://www.kalkulatornotarialny.pl/" className="inner-link">
              Kalkulator opłat notarialnych
            </a>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </li>
        <li>
          <div>
            <a href="https://www.kalkulatorkredytu.com/" className="inner-link">
              Kalkulator kredytu hipotecznego
            </a>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MPUsefulLinks;

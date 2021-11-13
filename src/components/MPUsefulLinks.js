import React from 'react';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MPUsefulLinks() {
  return (
    <div className="container pb-5">
      <h1>PRZYDATNE LINKI</h1>
      <ul className="list-unstyled">
        <li>
          <div>
            <a
              href="http://www.kalkulatornotarialny.pl/"
              className="inner-link"
            >
              <FontAwesomeIcon icon={faCalculator} size="2x" />{' '}
              <span className="useful-link">
                Kalkulator opłat notarialnych{' '}
              </span>
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
              <FontAwesomeIcon icon={faCalculator} size="2x" />{' '}
              <span className="useful-link">
                Kalkulator kredytu hipotecznego
              </span>
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

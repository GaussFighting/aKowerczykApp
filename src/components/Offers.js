import React from 'react';
import TopImage from './TopImage';
import Offer from './Offer';
import offersPageImage from '../styles/images/interior-design-g8903eca74_1920.jpg';
import offers from '../data/offers.json';

function Offers() {
  return (
    <div>
      <TopImage image={offersPageImage} position={68} />
      <div className="container page-container py-5">
        <h1>OFERTY</h1>
        <Offer  />
       
      </div>
    </div>
  );
}

export default Offers;

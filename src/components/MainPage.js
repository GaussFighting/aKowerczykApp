import React from 'react';
import TopImage from './TopImage';
import MPContact from './MPContact';
import MPAbout from './MPAbout';
import MPServices from './MPServices';
import MPUsefulLinks from './MPUsefulLinks';
import MPNews from './MPNews';
import mainPageImage from '../styles/images//living-room.jpg';

function MainPage() {
  return (
    <div>
      <TopImage image={mainPageImage} position={78} />
      <div className="py-5">
        <MPAbout />
        <MPServices />
        <MPNews />
        <MPUsefulLinks />
        <MPContact />
      </div>
    </div>
  );
}

export default MainPage;

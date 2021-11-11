import React from 'react';
import TopImage from './TopImage';
import MPContact from './MPContact';
import MPAbout from './MPAbout';
import MPServices from './MPServices';
import MPUsefulLinks from "./MPUsefulLinks"
import mainPageImage from '../styles/images//living-room.jpg'

function MainPage() {
    return (
        <div>
            <TopImage image={mainPageImage} position={78}/>
            <MPAbout/>
            <MPServices/>
            <MPUsefulLinks/>
            <MPContact/>
        </div>
    )
};

export default MainPage;
import React from 'react';
import MPContact from './MPContact';
import MPAbout from './MPAbout';
import MPServices from './MPServices';
import MPNews from './MPNews';


function MainPage() {
    return (
        <div className="page-container">
            <MPAbout/>
            <MPServices/>
            <MPNews/>
            <MPContact/>
        </div>
    )
};

export default MainPage;
import React from 'react';
import MPContact from './MPContact';
import MPAbout from './MPAbout';
import MPServices from './MPServices';

function MainPage() {
    return (
        <div>
            <MPAbout/>
            <MPServices/>
            <MPContact/>
        </div>
    )
};

export default MainPage;
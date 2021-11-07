import React from 'react';
import MPContact from './MPContact';
import MPAbout from './MPAbout';

function MainPage() {
    return (
        <div>
            <MPAbout/>
            <div style={{backgroundColor: "#f3f2f2", height: "200px"}}></div>
            <div style={{backgroundColor: "rgb(200, 200, 200)", height: "200px"}}></div>
            <div style={{backgroundColor: "#f3f2f2", height: "200px"}}></div>
            <div style={{backgroundColor: "rgb(200, 200, 200)", height: "200px"}}></div>
            <div style={{backgroundColor: "#f3f2f2", height: "200px"}}></div>
            <div style={{backgroundColor: "rgb(200, 200, 200)", height: "200px"}}></div>
            <div style={{backgroundColor: "#f3f2f2", height: "200px"}}></div>
            <div style={{backgroundColor: "rgb(200, 200, 200)", height: "200px"}}></div>
            <MPContact/>
        </div>
    )
};

export default MainPage;
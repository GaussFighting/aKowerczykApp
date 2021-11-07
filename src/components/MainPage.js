import React from 'react';
import ContactForm from './ContactForm';
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
            <ContactForm/>
        </div>
    )
};

export default MainPage;
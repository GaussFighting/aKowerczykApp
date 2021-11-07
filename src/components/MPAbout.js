import React from 'react';
import { NavLink } from "react-router-dom";
import SocialMedia from "./SocialMedia";

function MPAbout() {
    return (
        <div className="container py-5">
                <NavLink className="inner-link" to="/about"><h1>O FIRMIE</h1></NavLink>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
                <SocialMedia color="color-green"/>

        </div>
    )
};

export default MPAbout;
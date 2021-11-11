import React from 'react';
import { NavLink } from "react-router-dom";
import ContactForm from "./ContactForm";

function MPAbout() {
    return (
        <div className="container py-5">
                <NavLink className="inner-link" to="/contact"><h1>Kontakt</h1></NavLink>
                <ContactForm/>
        </div>
    )
};

export default MPAbout;
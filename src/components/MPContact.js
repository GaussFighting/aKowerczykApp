import React from 'react';
import { NavLink } from "react-router-dom";
import ContactForm from "./ContactForm";

function MPContact() {
    return (
        <div className="container py-5">
                <NavLink className="inner-link" to="/contact"><h1>KONTAKT</h1></NavLink>
                <ContactForm/>
        </div>
    )
};

export default MPContact;
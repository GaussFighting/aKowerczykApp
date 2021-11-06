import React, {useState} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";


function Navigation() {  
    
    const [isOpen, setIsOpen] = useState(false); 
    
    const toggle = () => {
        setIsOpen(prevState => !prevState);
    };
    
    return (
        <div>
            <Navbar
                className="navigation"
                expand="md"
                fixed="top"
                full
                light
            >
                <NavbarBrand href="/">
                    LOGO
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="justify-content-end" style={{ width: "100%" }}
                        navbar
                    >
                        <NavItem >
                            <NavLink className="nav-link pl-4" to="/">
                                STRONA GŁÓWNA
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="nav-link pl-4" to="/services">
                                USŁUGI
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="nav-link pl-4" to="/blog">
                                BLOG
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="nav-link pl-4" to="/offers">
                                OFERTY
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="nav-link pl-4" to="/about">
                                O NAS
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="nav-link pl-4" to="/contact">
                                KONTAKT
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
};

export default Navigation;
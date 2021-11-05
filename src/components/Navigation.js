import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';



function Navigation() {    
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
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="justify-content-end" style={{ width: "100%" }}
                        navbar
                    >
                        <NavItem >
                            <NavLink className="pl-4" href="">
                                STRONA GŁÓWNA
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="pl-4" href="">
                                USŁUGI
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="pl-4" href="">
                                BLOG
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="pl-4" href="">
                                OFERTY
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="pl-4" href="">
                                O NAS
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="pl-4" href="">
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
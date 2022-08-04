import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
// import logo from "../styles/images/logo.png";
import logo2 from "../styles/images/logo2.png";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navTogglerClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar
        className="navigation"
        expand="xl"
        fixed="top"
        // full
        light
      >
        <NavbarBrand href="/">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <img src={logo2} alt="logo" className="logo2" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
            <NavItem onClick={navTogglerClose}>
              <NavLink className="nav-link pl-4" to="/">
                STRONA GŁÓWNA
              </NavLink>
            </NavItem>
            <NavItem onClick={navTogglerClose}>
              <NavLink className="nav-link pl-4" to="/services">
                USŁUGI
              </NavLink>
            </NavItem>
            <NavItem onClick={navTogglerClose}>
              <NavLink className="nav-link pl-4" to="/blog">
                BLOG
              </NavLink>
            </NavItem>
            <NavItem onClick={navTogglerClose}>
              <NavLink className="nav-link pl-4" to="/offers">
                OFERTY
              </NavLink>
            </NavItem>
            <NavItem onClick={navTogglerClose}>
              <NavLink className="nav-link pl-4" to="/about">
                O FIRMIE
              </NavLink>
            </NavItem>
            <NavItem onClick={navTogglerClose}>
              <NavLink className="nav-link pl-4" to="/contact">
                KONTAKT
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;

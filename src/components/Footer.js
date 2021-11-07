import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from "react-router-dom";
import SocialMedia from './SocialMedia';


function Footer() {

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let copyRightText = currentYear === 2021 ? `copyright © ${currentYear}` : `copyright © 2021 - ${currentYear}`

    return (
        <div>
            <Container className="footer-container mw-100">
                <Row>
                    <Col className="align-self-center text-center">SZAŁAS.JPG</Col>
                    <Col className="py-3">
                        <NavLink className="fw-bold pb-2 footer-contact" to="/contact">
                            KONTAKT
                        </NavLink>
                        <div> telefon: 695-606-006 </div>
                        <div> e-mail: akower@poczta.onet.pl  </div>
                        <div className="pt-2"> POLITYKA PRYWATNOŚCI </div>
                    </Col>
                    <Col className="py-3">
                        <div className="fw-bold pb-2">SOCIAL MEDIA: </div>
                        <SocialMedia/>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center py-1" id="copyright">{copyRightText}</Col>
                </Row>
            </Container>
        </div>
    )
};
export default Footer;
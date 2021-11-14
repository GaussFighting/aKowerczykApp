import React from 'react';
import Offer from './Offer';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from "react-router-dom";
import offers from "../data/offers.json";


function MPOffers() {
        const sortedItems = offers.offers.sort((a, b) => {
            return a.offers > b.offers ? -1 : 1
        });
        console.log(sortedItems, "asd")

        const selectedItems = sortedItems.filter((item, idx) => {
            return idx < 3;
        }
        );
        console.log(selectedItems)

    return (
        <div className="container py-5">
            <NavLink className="inner-link" to="/offers"><h1>OFERTY</h1></NavLink>
                       <Container>
                <Row>
                    {selectedItems.map((offer) => {
                        return (<Col md={4}>
                            <Offer />
                        </Col>)
                    })}
                </Row>
            </Container>
        </div>
    )
};

export default MPOffers;
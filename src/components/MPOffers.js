import React from "react";
import Offer from "./Offer";
import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import offers from "../data/offers.json";

function MPOffers() {
  const sortedItems = offers.offers.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });
  const selectedItems = sortedItems.filter((item, idx) => {
    return idx < 3;
  });
  return (
    <div className="container pb-5">
      <NavLink className="inner-link " to="/offers">
        <h1 className="mb-4">OFERTY</h1>
      </NavLink>
      <Container>
        <Row>
          {selectedItems.map((offer) => {
            return (
              <Col lg={12} key={offer.id}>
                <Offer
                  id={offer.id}
                  title={offer.title}
                  date={offer.date}
                  description={offer.description}
                  carouselImages={offer.photos}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default MPOffers;

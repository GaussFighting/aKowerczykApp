import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import TopImage from "./TopImage";
import Offer from "./Offer";
import offersPageImage from "../styles/images/interior-design-g8903eca74_1920.jpg";
import offers from "../data/offers.json";

function Offers() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const allItems = offers.offers.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });
  return (
    <div>
      <TopImage image={offersPageImage} position={68} />
      <div className="container page-container py-5 ">
        <h1 className="offers-title">OFERTY</h1>
        <Container>
          <Row>
            {allItems.map((offer) => {
              return (
                <Col key={offer.id} md={4}>
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
    </div>
  );
}

export default Offers;

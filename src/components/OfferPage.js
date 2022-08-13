import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TopImage from "./TopImage";
import offersPageImage from "../styles/images/interior-design-g8903eca74_1920.jpg";
import offers from "../data/offers.json";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import Offer from "./Offer";

function OfferPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  let { id } = useParams();

  const offer = offers.offers.find((item) => id === item.id);

  if (!offer) {
    return (
      <div className="container page-container py-5">
        <h1> NIE ZNALEZIONO OFERTY </h1>
      </div>
    );
  }

  return (
    <div>
      <TopImage image={offersPageImage} position={68} />
      <div className="container page-container py-5">
        <Offer carouselImages={offer.photos} />
        <Card>
          <CardBody>
            <CardTitle>
              <h4>{offer.title}</h4>
            </CardTitle>
            <CardSubtitle>{offer.date}</CardSubtitle>
            <CardText> {offer.descriptionLong}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default OfferPage;

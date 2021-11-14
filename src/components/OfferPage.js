import React from "react";
import { useParams } from "react-router-dom";
import offers from '../data/offers.json';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap';
import Offer from './Offer';

function OfferPage() {

    let { id } = useParams();

    const offer = offers.offers.find(item => id === item.id);

    if (!offer) {
        return (
            <div className="container page-container py-5">
                <h1>  NIE ZNALEZIONO OFERTY </h1>
            </div>
        )
    }

    return (
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
    );
}

export default OfferPage;
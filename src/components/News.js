import React from 'react';
import { NavLink } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { HashLink as Link} from 'react-router-hash-link';




function News(props) {
    return (
        <div>
            <Card >
                <CardImg top width="100%" src={props.src} alt="Card image cap" />
                <CardBody>
                    <CardTitle><Link className="inner-link" to={`blog#${props.id}`}><h4>{props.title}</h4></Link></CardTitle>
                    <CardSubtitle>{props.data}</CardSubtitle>
                    <CardText>{props.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
};

export default News;
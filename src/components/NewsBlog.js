import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap';

function NewsBlog(props) {
    return (
        <div className="mb-5 shadow" id={props.id}>
            <Card>
                <div 
                className="blogImgCenter" alt=""
                style={{
                    backgroundImage: `url(${props.src})`,
                    backgroundPosition: `center ${props.position}%`,
                  }}>
                </div>
                <CardBody>
                    <CardTitle className="py-1" tag="h2" >
                        {props.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {props.data}
                    </CardSubtitle>
                    <CardText>
                        {props.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
};

export default NewsBlog;
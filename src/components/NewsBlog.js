import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap';



function NewsBlog(props) {
    return (
        <div id={props.id}>
            <Card>
                <CardImg
                    alt=""
                    src={props.src}
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5" >
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
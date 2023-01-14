import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

function NewsBlog(props) {
  return (
    <div className="mb-5 shadow " id={props.id}>
      <Card>
        <div
          className="blogImgCenter"
          alt=""
          style={{
            backgroundImage: props.src.startsWith("https")
              ? `url(${props.src})`
              : `url(${props.src})`,
            backgroundPosition: `center ${props.position}%`,
          }}
        ></div>
        <div className="position-relative">
          <CardBody>
            <Row>
              <Col>
                <CardTitle className="py-1" tag="h2">
                  {props.title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {props.data}
                </CardSubtitle>
              </Col>

              <div
                className="logoImgCenter position-absolute"
                alt=""
                style={{
                  backgroundImage: `url(${props.logo})`,
                  backgroundPosition: `right`,
                  backgroundSize: `${props.logoSize}`,
                }}
              ></div>
            </Row>
            <CardText className="blog-description">
              {props.description}
            </CardText>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}

export default NewsBlog;

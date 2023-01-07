import React, { useState } from "react";
import {
  Carousel,
  CarouselIndicators,
  CarouselItem,
  CarouselControl,
} from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";

function Offer(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  let animating = false;

  const onExiting = () => {
    animating = true;
  };
  const onExited = () => {
    animating = false;
  };
  const next = () => {
    if (animating) return;

    const nextIndex =
      activeIndex === props.carouselImages.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;

    const nextIndex =
      activeIndex === 0 ? props.carouselImages.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = props.carouselImages.map((item) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
        <div
          className="blogImgCenter"
          style={{
            backgroundImage: `url(${item.src})`,
            backgroundPosition: `center ${item.position}%`,
          }}
        />
      </CarouselItem>
    );
  });
  return (
    <div className="shadow mb-5">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={props.carouselImages}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      {props.title && (
        <div>
          <Card>
            <CardBody>
              <CardTitle>
                <Link className="inner-link" to={`/offer/${props.id}`}>
                  <h4>{props.title}</h4>
                </Link>
              </CardTitle>
              <CardSubtitle>{props.data}</CardSubtitle>
              <CardText className="card-text"> {props.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Offer;

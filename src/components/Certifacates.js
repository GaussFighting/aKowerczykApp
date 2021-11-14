import React, { useState } from 'react';
import certificateImage1 from '../styles/images/certificate-g1f0be08b8_640.png';
import certificateImage2 from '../styles/images/picture-frame-g5a0f10742_640.png';
import {
  Carousel,
  CarouselIndicators,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';

function Certificates() {
  const certificateImagesArray = [
    {
      id: 1,
      src: certificateImage1,
      position: '0',
    },
    {
      id: 2,
      src: certificateImage2,
      position: '0',
    },
    {
      id: 3,
      src: certificateImage1,
      position: '0',
    },
    {
      id: 4,
      src: certificateImage2,
      position: '0',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  let animating = false;

  const onExiting = () => {
    animating = false;
  };
  const onExited = () => {
    animating = false;
  };
  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === certificateImagesArray.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? certificateImagesArray.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = certificateImagesArray.map((item) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
        <div
          className="certificate-images"
          style={{
            backgroundImage: `url(${item.src})`,
            backgroundPosition: `center ${item.position}%`,
          }}
        />
      </CarouselItem>
    );
  });
  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} pause={false} autoPlay={true}>
        <CarouselIndicators
          items={certificateImagesArray}
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
    </div>
  );
}

export default Certificates;

import React, { useState } from "react";
import certificateImage1 from "../styles/images/certyfikaty/skompresowane/skompresowane3/1997-02-20-min.png";
import certificateImage2 from "../styles/images/certyfikaty/skompresowane/skompresowane3/1997-08-21-min.png";
import certificateImage3 from "../styles/images/certyfikaty/skompresowane/skompresowane3/1997-08-25a-min.png";
import certificateImage4 from "../styles/images/certyfikaty/skompresowane/skompresowane3/1997-08-25-min.png";
import certificateImage5 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2001-04-min.png";
import certificateImage6 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2001-05-18-min.png";
import certificateImage7 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2003-04-26-min.png";
import certificateImage8 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2003-05-31-min.png";
import certificateImage9 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2003-06-28-min.png";
import certificateImage10 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2003-07-23b-min.png";
import certificateImage11 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2003-09-23-min.png";
import certificateImage12 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2005-01-12-min.png";
import certificateImage13 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2006-06-27-min.png";
import certificateImage14 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2007-03-16-min.png";
import certificateImage15 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2007-09-25-min.png";
import certificateImage16 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2008-03-14-min.png";
import certificateImage17 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2009-12-01-min.png";
import certificateImage18 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2017-02-27-min.png";
import certificateImage19 from "../styles/images/certyfikaty/skompresowane/skompresowane3/2017-06-03-min.png";

import {
  Carousel,
  CarouselIndicators,
  CarouselItem,
  CarouselControl,
} from "reactstrap";

function Certificates() {
  const certificateImagesArray = [
    {
      id: 1,
      src: certificateImage1,
      position: "0",
    },
    {
      id: 2,
      src: certificateImage2,
      position: "0",
    },
    {
      id: 3,
      src: certificateImage3,
      position: "0",
    },
    {
      id: 4,
      src: certificateImage4,
      position: "0",
    },
    {
      id: 5,
      src: certificateImage5,
      position: "0",
    },
    {
      id: 6,
      src: certificateImage6,
      position: "0",
    },
    {
      id: 7,
      src: certificateImage7,
      position: "0",
    },
    {
      id: 8,
      src: certificateImage8,
      position: "0",
    },
    {
      id: 9,
      src: certificateImage9,
      position: "0",
    },
    {
      id: 10,
      src: certificateImage10,
      position: "0",
    },
    {
      id: 11,
      src: certificateImage11,
      position: "0",
    },
    {
      id: 12,
      src: certificateImage12,
      position: "0",
    },
    {
      id: 13,
      src: certificateImage13,
      position: "0",
    },
    {
      id: 14,
      src: certificateImage14,
      position: "0",
    },
    {
      id: 15,
      src: certificateImage15,
      position: "0",
    },
    {
      id: 16,
      src: certificateImage16,
      position: "0",
    },
    {
      id: 17,
      src: certificateImage17,
      position: "0",
    },
    {
      id: 18,
      src: certificateImage18,
      position: "0",
    },
    {
      id: 19,
      src: certificateImage19,
      position: "0",
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
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        pause={false}
        autoPlay={true}
      >
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

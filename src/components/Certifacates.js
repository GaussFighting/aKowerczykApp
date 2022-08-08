import React, { useState } from "react";

import { CardGroup, Card, CardImg } from "reactstrap";

// import {
//   Carousel,
//   CarouselIndicators,
//   CarouselItem,
//   CarouselControl,
// } from "reactstrap";

const Certificates = (props) => {
  console.log(props.certs);
  let asdf = props.certs
    .slice(0)
    .reverse()
    .map((cert) => {
      return (
        <Card>
          <CardImg alt="Card image cap" src={cert} top width="100%" />
        </Card>
      );
    });
  return <CardGroup>{asdf}</CardGroup>;

  // const certificateImagesArray = [
  //   {
  //     id: 1,
  //     src: certificateImage1,
  //     position: "0",
  //   },
  //   {
  //     id: 2,
  //     src: certificateImage2,
  //     position: "0",
  //   },
  //   {
  //     id: 3,
  //     src: certificateImage3,
  //     position: "0",
  //   },
  //   {
  //     id: 4,
  //     src: certificateImage4,
  //     position: "0",
  //   },
  //   {
  //     id: 5,
  //     src: certificateImage5,
  //     position: "0",
  //   },
  //   {
  //     id: 6,
  //     src: certificateImage6,
  //     position: "0",
  //   },
  //   {
  //     id: 7,
  //     src: certificateImage7,
  //     position: "0",
  //   },
  //   {
  //     id: 8,
  //     src: certificateImage8,
  //     position: "0",
  //   },
  //   {
  //     id: 9,
  //     src: certificateImage9,
  //     position: "0",
  //   },
  //   {
  //     id: 10,
  //     src: certificateImage10,
  //     position: "0",
  //   },
  //   {
  //     id: 11,
  //     src: certificateImage11,
  //     position: "0",
  //   },
  //   {
  //     id: 12,
  //     src: certificateImage12,
  //     position: "0",
  //   },
  //   {
  //     id: 13,
  //     src: certificateImage13,
  //     position: "0",
  //   },
  //   {
  //     id: 14,
  //     src: certificateImage14,
  //     position: "0",
  //   },
  //   {
  //     id: 15,
  //     src: certificateImage15,
  //     position: "0",
  //   },
  //   {
  //     id: 16,
  //     src: certificateImage16,
  //     position: "0",
  //   },
  //   {
  //     id: 17,
  //     src: certificateImage17,
  //     position: "0",
  //   },
  //   {
  //     id: 18,
  //     src: certificateImage18,
  //     position: "0",
  //   },
  //   {
  //     id: 19,
  //     src: certificateImage19,
  //     position: "0",
  //   },
  //   {
  //     id: 20,
  //     src: certificateImage20,
  //     position: "0",
  //   },
  // ];
  // const [activeIndex, setActiveIndex] = useState(0);
  // let animating = false;
  // const onExiting = () => {
  //   animating = false;
  // };
  // const onExited = () => {
  //   animating = false;
  // };
  // const next = () => {
  //   if (animating) return;
  //   const nextIndex =
  //     activeIndex === certificateImagesArray.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };
  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex =
  //     activeIndex === 0 ? certificateImagesArray.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };
  // const goToIndex = (newIndex) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };
  // const slides = certificateImagesArray.map((item) => {
  //   return (
  //     <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
  //       <div
  //         className="certificate-images"
  //         style={{
  //           backgroundImage: `url(${item.src})`,
  //           backgroundPosition: `center ${item.position}%`,
  //         }}
  //       />
  //     </CarouselItem>
  //   );
  // });
  // return (
  //   <div>
  //     <Carousel
  //       activeIndex={activeIndex}
  //       next={next}
  //       previous={previous}
  //       pause={false}
  //       autoPlay={true}
  //     >
  //       <CarouselIndicators
  //         items={certificateImagesArray}
  //         activeIndex={activeIndex}
  //         onClickHandler={goToIndex}
  //       />
  //       {slides}
  //       <CarouselControl
  //         direction="prev"
  //         directionText="Previous"
  //         onClickHandler={previous}
  //       />
  //       <CarouselControl
  //         direction="next"
  //         directionText="Next"
  //         onClickHandler={next}
  //       />
  //     </Carousel>
  //   </div>
  // );
};

export default Certificates;

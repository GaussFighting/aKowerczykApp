import React, { useState } from 'react';
import { Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl } from 'reactstrap';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap';


const items = [
    {
        src: 'https://picsum.photos/id/237/1296/500',
        position: '100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        src: 'https://picsum.photos/id/236/1296/500',
        position: '100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        src: 'https://picsum.photos/id/235/1296/500',
        position: '100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
];



function Offer() {

    const [activeIndex, setActiveIndex] = useState(0)
    console.log(activeIndex)
    let animating = false;

    const onExiting = () => {
        animating = true;
    }
    const onExited = () => {
        animating = false;
    }
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}
            >
                <div className="blogImgCenter"
                    style={{
                        backgroundImage: `url(${item.src})`,
                        backgroundPosition: `center ${item.position}%`,
                        }}
                     />
            </CarouselItem>
        );
    });
    return (
        <div><Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
            <div>
            {items[0].description}

            </div>
        </div>
    );
}

export default Offer;

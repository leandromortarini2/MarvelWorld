/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    src: "https://www.imgworlds.com/_next/static/media/thor.aabaca85.png",

    key: 1,
  },
  {
    src: "https://www.imgworlds.com/_next/static/media/spiderman.8071ace6.png",

    key: 2,
  },
  {
    src: "https://www.imgworlds.com/_next/static/media/iron-man.cbce2b80.png",

    key: 3,
  },
  {
    src: "https://www.imgworlds.com/_next/static/media/hulk.4aaa2db7.png",

    key: 4,
  },
  {
    src: "https://www.imgworlds.com/_next/static/media/hawkeye.a6d35081.png",

    key: 5,
  },
  {
    src: "https://www.imgworlds.com/_next/static/media/black-widow.46308741.png",

    key: 6,
  },
  {
    src: "https://www.imgworlds.com/_next/static/media/captain-america.e49a7de3.png",

    key: 7,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="  "
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="w-full flex justify-center ">
          <img
            src={item.src}
            alt={item.altText}
            className="h-[300px] overflow-hidden ShadowEffect2"
          />
        </div>

        <CarouselCaption
          className=""
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="w-full sm:w-1/2 "
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
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
  );
}

export default Example;

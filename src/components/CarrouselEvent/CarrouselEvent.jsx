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
import { Link } from "react-router-dom";

const items = [
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/7/00/57194e8d24f2f.jpg",
    enlase: "/ComicDetail/37",
    title: "MARVEL AGE FANTASTIC FOUR",
    key: 1,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc69f33cafc0.jpg",
    enlase: "/ComicDetail/323",
    title: "ANT-MAN",
    key: 2,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/2/f0/5d24f707b1611.jpg",
    enlase: "/ComicDetail/296",
    title: "SPIDER-MAN/DOCTOR OCTOPUS: NEGATIVE EXPOSURE",
    key: 3,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/6/70/515f05c5906cf.jpg",
    enlase: "/ComicDetail/255",
    title: "ULTIMATES",
    key: 4,
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
        <div className="w-full flex flex-col sm:flex-row justify-center items-center  ">
          <img
            src={item.src}
            alt={item.altText}
            className="w-3/4  lg:w-1/2 xl:h-[550px] p-4 overflow-hidden ShadowEffect2"
          />
          <div className="w-full sm:w-1/2 h-[170px]  flex flex-col items-center justify-center md:justify-evenly ">
            {" "}
            <h3 className="text-white text-center font-bold text-lg sm:text-xl ShadowEffect2 mb-2">
              {item.title}
            </h3>
            <p className="text-white text-center font-bold text-lg sm:text-xl ShadowEffect2 mb-2">
              {item.anio}
            </p>
            <Link to={item.enlase}>
              <button className="w-32 h-9 lg:w-40 sm:h-10 text-white bg-red-800 capitalize  font-bold text-xl rounded-lg hover:bg-Marvel hover:scale-110 duration-1000  shadow-md shadow-black lg:ShadowEffect2 mb-4">
                see comic
              </button>
            </Link>
          </div>
        </div>

        <CarouselCaption
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
        className="hidden"
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        className="hidden"
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;

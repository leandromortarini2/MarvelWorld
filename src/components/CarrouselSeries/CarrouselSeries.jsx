/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const items = [
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/a/a0/57fe7fc55993c.jpg",
    enlase: "/ComicDetail/6792#",
    title: "THE AMAZING SPIDER-MAN",
    key: 1,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/f/40/51accf35f3e9a.jpg",
    enlase: "/ComicDetail/13896",
    title: "UNCANNY X-MEN ",
    key: 2,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/66212be916e52.jpg",
    enlase: "/ComicDetail/115500",
    title: "BLOOD HUNT",
    key: 3,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/8/c0/4bc5a54c2531e.jpg",
    enlase: "/ComicDetail/6079",
    title: "ULTIMATE SPIDER-MAN",
    key: 4,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/3/a0/57470b733fd27.jpg",
    enlase: "/ComicDetail/2298",
    title: "DAREDEVIL",
    key: 5,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/9/d0/4f2067943feec.jpg",
    enlase: "/ComicDetail/7739",
    title: "CAPTAIN AMERICA",

    key: 6,
  },
];

function CarrouselSeries(args) {
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
            <h3 className="text-white text-center font-bold text-lg sm:text-xl xl:text-5xl ShadowEffect2 mb-2">
              {item.title}
            </h3>
            <Link to={item.enlase}>
              <button className="w-40 h-9 lg:w-40 sm:h-10 text-white bg-red-800 capitalize  font-bold text-xl rounded-lg hover:bg-Marvel hover:scale-110 duration-1000  shadow-md shadow-black lg:ShadowEffect2 mb-4">
                see Character
              </button>
            </Link>
          </div>
        </div>
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

export default CarrouselSeries;

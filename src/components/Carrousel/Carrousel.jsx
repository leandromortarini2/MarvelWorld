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
    src: "https://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4.jpg",
    enlase: "/ComicDetail/1749",
    title: "X-MEN - AGE OF APOCALYPSE",
    anio: 2004,
    key: 1,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc63a47b8dcb.jpg",
    enlase: "/ComicDetail/1994",
    title: "TEAMS",
    anio: 2004,

    key: 2,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/9/60/591deb9a803d2.jpg",
    enlase: "/ComicDetail/13947",
    title: "UNCANNY X-MEN",
    anio: 1963,
    key: 3,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/9/30/4bc64df4105b9.jpg",
    enlase: "/ComicDetail/1689",
    title: "MARVEL KNIGHTS",
    anio: 2004,
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

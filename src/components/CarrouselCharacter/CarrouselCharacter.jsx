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
    src: "https://i.annihil.us/u/prod/marvel/i/mg/3/90/5261675f6b22f.jpg",
    enlase: "/CharacterDetail/1009515",
    title: "The Punisher",
    key: 1,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg",
    enlase: "/CharacterDetail/1009368",
    title: "Iron Man",
    key: 2,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg",
    enlase: "/CharacterDetail/1009718",
    title: "Wolverine",
    key: 3,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/531771b4e8c60.jpg",
    enlase: "/CharacterDetail/1011010",
    title: "Spider-Man",
    key: 4,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg",
    enlase: "/CharacterDetail/1009351",
    title: "Hulk",
    key: 4,
  },
  {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/9/60/50febc4f55525.jpg",
    enlase: "/CharacterDetail/1009299",
    title: "Fantastic Four",

    key: 5,
  },
];

function CarrouselCharacter(args) {
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
            className="h-[260px]  lg:h-[380px] xl:h-[550px] p-4 overflow-hidden ShadowEffect2"
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

export default CarrouselCharacter;

/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import { useState } from "react";
import BurgerImg from "../../assets/burger-general-ham-svgrepo-com.svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [burger, setBurger] = useState(false);

  const [home, setHome] = useState(false);
  const [event, setEvent] = useState(false);
  const [comic, setComic] = useState(false);
  const [character, setCharacter] = useState(false);
  const [serie, setSerie] = useState(false);

  const handleHome = () => {
    setHome(!home);
    setEvent(false);
    setComic(false);
    setCharacter(false);
    setSerie(false);
  };
  const handleEvent = () => {
    setEvent(!event);
    setHome(false);
    setComic(false);
    setCharacter(false);
    setSerie(false);
  };
  const handleComic = () => {
    setComic(!comic);
    setHome(false);
    setEvent(false);
    setCharacter(false);
    setSerie(false);
  };
  const handleCharacter = () => {
    setCharacter(!character);
    setHome(false);
    setEvent(false);
    setComic(false);
    setSerie(false);
  };
  const handleSerie = () => {
    setSerie(!serie);
    setHome(false);
    setEvent(false);
    setComic(false);
    setCharacter(false);
  };

  // manejador de hamburguesa
  const handleBurger = (event) => {
    event.preventDefault();
    setBurger(!burger);
  };

  return (
    <>
      <div className="w-full h-14 bg-gray-900 flex justify-evenly shadow-black shadow-2xl ">
        {/* CONTAINER MARCA/LOGO */}
        <div className="w-1/2 sm:w-1/4 h-14 flex items-center justify-center">
          <img
            src="https://www.imgworlds.com/_next/static/media/marvel.7cc446a7.png"
            alt=""
            className="w-20 md:w-24 "
          />
        </div>

        {/* BURGER COMPONENT*/}
        <div className="w-full flex items-center justify-end lg:hidden ">
          <button onClick={handleBurger} className="bg-transparent border-none">
            <img
              src={BurgerImg}
              alt=""
              className="w-8 mr-2 duration-1000 ShadowEffect"
            />
          </button>
        </div>

        {/* CONTAINER BOTONERA */}
        <div className="hidden w-1/2 h-14 lg:flex justify-evenly items-center">
          <Link to="/">
            <button
              onClick={handleHome}
              className={`xl:text-2xl ${
                home === false ? "text-gray-500" : "text-Marvel"
              }  font-bold duration-1000 hover:text-white hover:scale-110 bg-transparent border-none `}
            >
              Home
            </button>
          </Link>{" "}
          <Link to="/Event">
            {" "}
            <button
              onClick={handleEvent}
              className={`xl:text-2xl ${
                event === false ? "text-gray-500" : "text-Marvel"
              }  font-bold duration-1000 hover:text-white hover:scale-110 bg-transparent border-none `}
            >
              Event
            </button>
          </Link>
          <Link to="/Comic">
            {" "}
            <button
              onClick={handleComic}
              className={`xl:text-2xl ${
                comic === false ? "text-gray-500" : "text-Marvel"
              }  font-bold duration-1000 hover:text-white hover:scale-110 bg-transparent border-none `}
            >
              Comic
            </button>
          </Link>{" "}
          <Link to="/Characters">
            {" "}
            <button
              onClick={handleCharacter}
              className={`xl:text-2xl ${
                character === false ? "text-gray-500" : "text-Marvel"
              }  font-bold duration-1000 hover:text-white hover:scale-110 bg-transparent border-none `}
            >
              Character
            </button>
          </Link>
          <Link to="/Serie">
            {" "}
            <button
              onClick={handleSerie}
              className={`xl:text-2xl ${
                serie === false ? "text-gray-500" : "text-Marvel"
              }  font-bold duration-1000 hover:text-white hover:scale-110 bg-transparent border-none `}
            >
              Serie
            </button>
          </Link>
        </div>
      </div>

      {/* CONTAINER MENU BURGER */}
      {burger && (
        <div className="w-full bg-gray-900 min-h-80 lg:hidden absolute z-20 flex flex-col justify-evenly items-center">
          <Link to="/">
            <button className="text-lg text-white font-medium duration-1000  hover:scale-110  bg-transparent border-none">
              Home
            </button>
          </Link>
          <Link to="/Event">
            <button className="text-lg text-white font-medium duration-1000  hover:scale-110 bg-transparent border-none">
              Event
            </button>
          </Link>
          <Link to="/Comic">
            {" "}
            <button className="text-lg text-white font-medium duration-1000  hover:scale-110  bg-transparent border-none">
              Comic
            </button>
          </Link>{" "}
          <Link to="/Characters">
            {" "}
            <button className="text-lg text-white font-medium duration-1000  hover:scale-110 bg-transparent border-none">
              Character
            </button>
          </Link>
          <Link to="/Serie">
            <button className="text-lg text-white font-medium duration-1000  hover:scale-110 bg-transparent border-none">
              Serie
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

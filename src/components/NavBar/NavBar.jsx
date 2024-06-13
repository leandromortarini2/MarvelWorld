/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import { useState } from "react";
import BurgerImg from "../../assets/burger-general-ham-svgrepo-com.svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [burger, setBurger] = useState(false);

  // manejador de hamburguesa
  const handleBurger = (event) => {
    event.preventDefault();
    setBurger(!burger);
  };

  return (
    <>
      <div className="w-full h-14 bg-white flex justify-evenly ">
        {/* CONTAINER MARCA/LOGO */}
        <div className="w-1/2 sm:w-1/4 h-14 flex items-center justify-center">
          <img
            src="https://i.ibb.co/JpR0fyV/marvel-Logo.png"
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
            <button className="xl:text-2xl text-red-700 font-bold duration-1000 hover:text-red-500 hover:scale-110 bg-transparent border-none ">
              Home
            </button>
          </Link>
          <Link to="/Characters">
            {" "}
            <button className="xl:text-2xl text-red-700 font-bold duration-1000 hover:text-red-500 hover:scale-110 bg-transparent border-none ">
              Character
            </button>
          </Link>

          <Link to="/Comic">
            {" "}
            <button className="xl:text-2xl text-red-700 font-bold duration-1000 hover:text-red-500 hover:scale-110 bg-transparent border-none ">
              Comic
            </button>
          </Link>

          <Link to="/Serie">
            {" "}
            <button className="xl:text-2xl text-red-700 font-bold duration-1000 hover:text-red-500 hover:scale-110 bg-transparent border-none ">
              Serie
            </button>
          </Link>

          <Link to="/Movie">
            {" "}
            <button className="xl:text-2xl text-red-700 font-bold duration-1000 hover:text-red-500 hover:scale-110 bg-transparent border-none ">
              Movie
            </button>
          </Link>
        </div>
      </div>

      {/* CONTAINER MENU BURGER */}
      {burger && (
        <div className="w-full bg-red-500 min-h-80 lg:hidden absolute z-20 flex flex-col justify-evenly items-center">
          <Link to="/">
            <button className="text-lg text-white font-medium duration-1000  hover:scale-110  bg-transparent border-none">
              Home
            </button>
          </Link>
          <Link to="/Characters">
            {" "}
            <button className="text-lg text-white font-medium duration-1000  hover:scale-110 bg-transparent border-none">
              Character
            </button>
          </Link>
          <Link to="/Comic">
            {" "}
            <button className="text-lg text-white font-medium duration-1000  hover:scale-110 bg-transparent border-none">
              Comic
            </button>
          </Link>
          <Link to="/Serie">
            <button className="text-lg text-white font-medium duration-1000  hover:scale-110 bg-transparent border-none">
              Serie
            </button>
          </Link>
          <Link to="/Movie">
            <button className="text-lg text-white font-medium duration-1000  hover:scale-110 bg-transparent border-none">
              Movie
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

/* eslint-disable no-unused-vars */
import React from "react";
import Example from "../../components/Carrousel/Carrousel";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col  items-center bg-gray-300">
        <div className="hidden w-full lg:h-[400px]  bg-gray-800 md:flex  justify-around lg:justify-center ">
          <div className="w-1/3  flex justify-center items-center ">
            <h2 className="text-5xl lg:text-[75px]  text-white font-bold uppercase ShadowEffect2 ">
              Most popular comic
            </h2>
          </div>
          <Example />
        </div>
        {/* celu */}
        <div className="w-full md:hidden bg-gray-800 flex flex-col  justify-center">
          <div className="w-full sm:w-1/4  flex justify-center items-center ">
            <h2 className="text-2xl mt-2 text-center sm:text-[100px] text-white font-bold uppercase ShadowEffect2 ">
              Most popular comic
            </h2>
          </div>{" "}
          <Example />
        </div>
        {/* cards */}
        {/* cards */}
        {/* cards */}
        {/* cards */}
        <div className="w-full  flex flex-wrap justify-evenly items-center mt-3 ">
          {/* card 1 */}
          {/* card 1 */}
          {/* card 1 */}
        </div>
      </div>
    </>
  );
};

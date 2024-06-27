/* eslint-disable no-unused-vars */
import React from "react";
import Example from "../../components/Carrousel/Carrousel";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col  items-center bg-gray-300">
        <div className="hidden w-full lg:h-[400px] xl:min-h-[600px]  bg-gray-800 md:flex  justify-around lg:justify-center ">
          <div className="w-1/3  flex justify-center items-center ">
            <h2 className="text-5xl lg:text-[75px]  text-white font-bold uppercase ShadowEffect2 ">
              Most popular comic
            </h2>
          </div>
          <Example />
        </div>
        {/* celu */}
        <div className="w-full md:hidden bg-gray-800 flex flex-col  justify-center">
          <div className="w-full md:w-1/4  flex justify-center items-center ">
            <h2 className="text-2xl mt-2 text-center md:text-[100px] text-white font-bold uppercase ShadowEffect2 ">
              Most popular comic
            </h2>
          </div>{" "}
          <Example />
        </div>
        {/* cards */}
        {/* cards */}
        {/* cards */}
        {/* cards */}
        <div className="w-full  flex flex-wrap justify-evenly items-center m-5 ">
          {/* card 1 */}
          {/* card 1 */}
          {/* card 1 */}
          <div className="w-full h-[300px]  flex justify-center">
            <div className="w-1/3 h-[300px] ">
              {" "}
              <img
                className="w-full h-full imgDifuminado"
                src="https://cdn.evbstatic.com/s3-build/fe/build/images/adb2ce79e35963480e2b82a5214f225a-comics.webp"
                alt=""
              />
            </div>
            <div className="w-1/2 h-[300px] flex flex-col justify-evenly  ml-5">
              <div>
                {" "}
                <h2 className=" text-gray-800 font-bold  text-4xl  capitalize">
                  Comic section
                </h2>
                <p className=" text-gray-800 font-semibold  text-2xl  capitalize">
                  Here you can find the most exciting comics in the Marvel
                  universe! From the epic adventures of the Avengers to the
                  heroic exploits of Spider-Man, our collections are packed with
                  action, intrigue and unforgettable characters.
                </p>
              </div>

              <Link to="/Comic">
                <button className="w-1/4 h-10 font-bold uppercase bg-Marvel text-white rounded-lg hover:bg-red-800">
                  See Comic
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

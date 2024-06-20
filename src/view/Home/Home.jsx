/* eslint-disable no-unused-vars */
import React from "react";
import Example from "../../components/Carrousel/Carrousel";

export const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col  items-center bg-gray-200">
        <div className="hidden md:w-full bg-Marvel md:flex   justify-center">
          <Example />
          <img
            className="w-1/2"
            src="https://www.imgworlds.com/_next/static/media/marvel.7cc446a7.png"
            alt=""
          />
        </div>
        {/* celu */}
        <div className="w-full md:hidden bg-Marvel flex flex-col  justify-center">
          <img
            className=""
            src="https://www.imgworlds.com/_next/static/media/marvel.7cc446a7.png"
            alt=""
          />{" "}
          <Example />
        </div>

        {/* container principal */}
        {/* container principal */}
        {/* container principal */}
        <div className="w-full min-h-[250px] flex justify-evenly flex-wrap  ">
          {/* container 1 */}
          {/* container 1 */}
          {/* container 1 */}
          <div className="w-full md:w-3/4 lg: lg:w-1/3 md:h-[150px] flex flex-col md:flex-row justify-center items-center bg-Marvel  rounded-md md:p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-full md:w-1/3 flex items-center opacity-100 ">
              <img
                className="w-full xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/captain-america.e49a7de3.png"
                alt=""
              />
            </div>{" "}
            <div className="w-full md:w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h2 className=" text-white text-3xl md:text-6xl lg:text-4xl xl:text-5xl uppercase font-bold rounded-lg ">
                comic{" "}
              </h2>
              <p className="text-white text-sm md:text-xl md:font-bold text-center">
                find the most exciting stories{" "}
              </p>
            </div>
          </div>
          {/* container 2 */}
          {/* container 2 */}
          {/* container 2 */}
          <div className="w-full md:w-3/4 lg: lg:w-1/3 md:h-[150px] flex flex-col md:flex-row justify-center items-center bg-Marvel  rounded-md md:p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-full md:w-1/3 flex items-center opacity-100 ">
              <img
                className="w-full xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/spiderman.8071ace6.png"
                alt=""
              />
            </div>{" "}
            <div className="w-full md:w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h2 className=" text-white text-3xl md:text-6xl lg:text-4xl xl:text-5xl uppercase font-bold rounded-lg ">
                {" "}
                Character
              </h2>
              <p className="text-white text-md md:font-bold text-center">
                super heroes of the marvel world{" "}
              </p>
            </div>
          </div>
          {/* container 3 */}
          {/* container 3 */}
          {/* container 3 */}
          <div className="w-full md:w-3/4 lg: lg:w-1/3 md:h-[150px] flex flex-col md:flex-row justify-center items-center bg-Marvel  rounded-md md:p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-full md:w-1/3 flex items-center opacity-100 ">
              <img
                className="w-full xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/iron-man.cbce2b80.png"
                alt=""
              />
            </div>{" "}
            <div className="w-full md:w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h2 className=" text-white text-3xl md:text-6xl lg:text-4xl xl:text-5xl uppercase font-bold rounded-lg ">
                {" "}
                stories
              </h2>
              <p className="text-white text-md md:font-bold text-center p-1">
                original stories from the marvel world{" "}
              </p>
            </div>
          </div>
          {/* container 4 */}
          {/* container 4 */}
          {/* container 4 */}
          <div className="w-full md:w-3/4 lg: lg:w-1/3 md:h-[150px] flex flex-col md:flex-row justify-center items-center bg-Marvel  rounded-md md:p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-full md:w-1/3 flex items-center opacity-100 ">
              <img
                className="w-full xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/hulk.4aaa2db7.png"
                alt=""
              />
            </div>{" "}
            <div className="w-full md:w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h2 className=" text-white text-3xl md:text-6xl lg:text-4xl xl:text-5xl uppercase font-bold rounded-lg ">
                {" "}
                Serie
              </h2>
              <p className="text-white text-md md:font-bold text-center p-1">
                the series of your favorite heroes{" "}
              </p>
            </div>
          </div>
          {/* container 5 */}
          {/* container 5 */}
          {/* container 5 */}
          <div className="w-full md:w-3/4 md:h-[150px] lg:h-[300px] flex flex-col md:flex-row justify-center items-center bg-Marvel  rounded-md p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-full md:w-1/4 flex items-center opacity-100 ">
              <img
                className="w-full lg:h-[300px] xl:h-[400px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/thor.aabaca85.png"
                alt=""
              />
            </div>{" "}
            <div className="w-full md:w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h2 className=" text-white text-3xl md:text-6xl  xl:text-[70px] uppercase font-bold rounded-lg ">
                Events
              </h2>
              <p className="text-white text-md lg:text-2xl xl:text-3xl md:font-bold text-center">
                the series of your favorite heroes{" "}
              </p>
            </div>
            <div className="hidden  w-1/4 lg:flex items-center opacity-100 ">
              <img
                className="lg:h-[300px] xl:h-[400px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/hawkeye.a6d35081.png"
                alt=""
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

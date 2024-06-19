/* eslint-disable no-unused-vars */
import React from "react";
import Example from "../../components/Carrousel/Carrousel";

export const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col  items-center bg-gray-200">
        <div className="w-full bg-Marvel flex justify-center">
          <Example />
          <img
            src="https://www.imgworlds.com/_next/static/media/marvel.7cc446a7.png"
            alt=""
          />
        </div>

        {/* container principal */}
        {/* container principal */}
        {/* container principal */}
        <div className="w-full min-h-[250px] flex justify-evenly flex-wrap ">
          {/* container 1 */}
          {/* container 1 */}
          {/* container 1 */}
          <div className="w-1/3 h-[150px] flex justify-center items-center bg-Marvel  rounded-md p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-1/3 flex items-center opacity-100 ">
              <img
                className="w-full xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/captain-america.e49a7de3.png"
                alt=""
              />
            </div>{" "}
            <div className="w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h1 className=" text-white text-[70px] uppercase font-bold rounded-lg ">
                comic{" "}
              </h1>
              <p className="text-white text-xl font-bold text-center">
                find the most exciting stories{" "}
              </p>
            </div>
          </div>
          {/* container 2 */}
          {/* container 2 */}
          {/* container 2 */}
          <div className="w-1/3 h-[150px] flex justify-center items-center bg-Marvel  rounded-md p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-1/3 flex items-center opacity-100 ">
              <img
                className=" xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/spiderman.8071ace6.png"
                alt=""
              />
            </div>{" "}
            <div className="w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h1 className=" text-white text-[50px] uppercase font-bold rounded-lg ">
                Character
              </h1>
              <p className="text-white text-md font-bold text-center">
                super heroes of the marvel world{" "}
              </p>
            </div>
          </div>
          {/* container 3 */}
          {/* container 3 */}
          {/* container 3 */}
          <div className="w-1/3 h-[150px] flex justify-center items-center bg-Marvel  rounded-md p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-1/3 flex items-center opacity-100 ">
              <img
                className=" xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/iron-man.cbce2b80.png"
                alt=""
              />
            </div>{" "}
            <div className="w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h1 className=" text-white text-[50px] uppercase font-bold rounded-lg ">
                stories
              </h1>
              <p className="text-white text-md font-bold text-center">
                original stories from the marvel world{" "}
              </p>
            </div>
          </div>
          {/* container 4 */}
          {/* container 4 */}
          {/* container 4 */}
          <div className="w-1/3 h-[150px] flex justify-center items-center bg-Marvel  rounded-md p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-1/3 flex items-center opacity-100 ">
              <img
                className=" xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/hulk.4aaa2db7.png"
                alt=""
              />
            </div>{" "}
            <div className="w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h1 className=" text-white text-[50px] uppercase font-bold rounded-lg ">
                Serie
              </h1>
              <p className="text-white text-md font-bold text-center">
                the series of your favorite heroes{" "}
              </p>
            </div>
          </div>
          {/* container 5 */}
          {/* container 5 */}
          {/* container 5 */}
          <div className="w-full h-[300px] flex justify-center items-center bg-Marvel  rounded-md p-5 m-20 ShadowEffect2">
            {/*  */}
            <div className="w-1/4 flex items-center opacity-100 ">
              <img
                className=" xl:h-[400px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/thor.aabaca85.png"
                alt=""
              />
            </div>{" "}
            <div className="w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h1 className=" text-white text-[100px] uppercase font-bold rounded-lg ">
                Events
              </h1>
              <p className="text-white text-3xl font-bold text-center">
                the series of your favorite heroes{" "}
              </p>
            </div>
            <div className="w-1/4 flex items-center opacity-100 ">
              <img
                className=" xl:h-[400px] rounded-md ShadowEffect2"
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

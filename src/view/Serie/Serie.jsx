/* eslint-disable no-unused-vars */
import React from "react";

export const Serie = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-wrap justify-evenly bg-gray-200 pb-5">
        <div className="w-3/4 h-[250px] flex justify-center items-center bg-Marvel  rounded-md p-5 m-10 ShadowEffect2">
          {/*  */}
          <div className="w-1/4 flex items-center opacity-100 ">
            <img
              className=" xl:h-[255px] rounded-md ShadowEffect2"
              src="https://www.imgworlds.com/_next/static/media/black-widow.46308741.png"
              alt=""
            />
          </div>{" "}
          <div className="w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
            <h1 className=" text-white text-[100px] uppercase font-bold rounded-lg ShadowEffect2">
              Serie
            </h1>
            <p className="text-white text-3xl font-bold text-center ShadowEffect2">
              the series of your favorite heroes{" "}
            </p>
          </div>
          <div className="w-1/4 flex items-center opacity-100 ">
            <img
              className=" xl:h-[280px] rounded-md ShadowEffect2"
              src="https://www.imgworlds.com/_next/static/media/iron-man.cbce2b80.png"
              alt=""
            />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

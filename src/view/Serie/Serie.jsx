/* eslint-disable no-unused-vars */
import React from "react";

export const Serie = () => {
  return (
    <>
      <div className="w-full min-h-screen flex  justify-evenly bg-green-300 pb-5">
        <div className="w-32 h-32 bg-black  md:w-1/3 xl:w-1/4"></div>
        <div className="hidden md:block w-32 h-32 bg-red-800  md:w-1/3 xl:w-1/4"></div>
        {/* <div className="bg-sky-900 h-32 w-1/4"></div> */}
      </div>
    </>
  );
};

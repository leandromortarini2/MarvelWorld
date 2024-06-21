/* eslint-disable no-unused-vars */
import React from "react";

export const Loader = () => {
  return (
    <div className="w-full h-[300px] flex justify-center items-center">
      <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-Marvel via-gray-800 to-Marvel md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
        <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
      </div>
    </div>
  );
};

export default Loader;

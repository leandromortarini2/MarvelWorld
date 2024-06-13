/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getComics } from "../../helpers/solicitudes";

export const Comic = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getComics();

        setComics(results);
        console.log("---------", results);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white   pb-5">
      <div className="w-full h-[400px]  flex flex-col items-center  ">
        <div className="w-1/2 h-[200px] bg-red-900 absolute flex justify-center items-center xl:top-60 rounded-full">
          <h1 className=" text-white text-[200px] uppercase font-bold opacity-100 ">
            comic
          </h1>
        </div>

        <img
          className="w-full xl:h-[400px]  "
          src="https://cdn.marvel.com/content/1x/mi_wallpaper_mas_dsk_01.jpg"
          alt=""
        />
      </div>

      <div className="w-full flex flex-wrap justify-center ">
        {comics.length > 0
          ? comics.map((element) => {
              return (
                <div
                  key={element.id}
                  className="xl:w-1/5 h-92 m-4 flex flex-col items-center bg-white rounded-xl  hover:scale-110 hover:shadow-red-800 hover:shadow-md duration-1000 overflow-hidden shadow-xl shadow-black "
                >
                  <div className="w-full  h-20 bg-gray-200 text-red-800  capitalize  flex justify-center items-center">
                    <h2 className="text-center font-semibold p-1">
                      {element.title}
                    </h2>
                  </div>

                  <img
                    className="w-full h-72 "
                    src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                    alt=""
                  />
                  <button className="w-full  h-10 bg-gray-800 text-white  hover:bg-red-800 capitalize font-semibold text-xl ">
                    see comic
                  </button>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

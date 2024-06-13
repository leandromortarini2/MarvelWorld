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
      <div className="w-full h-[300px]  flex flex-col items-center  ">
        <h1 className="absolute text-white text-[200px] uppercase top-32 font-bold opacity-100 ">
          comic
        </h1>
        <img
          className=" xl:h-[600px]  "
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
                  className="xl:w-1/6  m-1 flex flex-col items-center bg-white rounded-t-xl border-4 border-white hover:scale-110 duration-1000  "
                >
                  <img
                    className="w-full h-full rounded-t-xl"
                    src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                    alt=""
                  />
                  <button className="w-full  h-12 bg-red-500 text-white rounded-b-xl hover:bg-red-800 capitalize ">
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

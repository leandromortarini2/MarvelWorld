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
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-200 pb-5">
      <h1 className="xl:text-[100px] text-red-800 font-bold uppercase tracking-wider opacity-50 ">
        comic
      </h1>
      <div className="w-full flex flex-wrap justify-evenly">
        {comics.length > 0
          ? comics.map((element) => {
              return (
                <div
                  key={element.id}
                  className=" min-w-1/4 h-[270px]  m-2 flex  items-center  bg-white rounded-xl"
                >
                  <img
                    className="w-full h-full rounded-xl"
                    src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                    alt=""
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

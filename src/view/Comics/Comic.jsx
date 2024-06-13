/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getComics } from "../../helpers/solicitudes";
import { Link } from "react-router-dom";
import logoSuper from "../../assets/capitan.svg";

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

  // const handleButtonId = (id) => {

  // }

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white  pb-5">
      <div className="w-full h-[400px]  flex flex-col items-center  ">
        <div className="w-1/3 h-[100px] bg-red-900 absolute flex justify-center items-center xl:top-80 rounded-full border-4 border-white shadow-white shadow-2xl opacity-90">
          <img className="w-20" src={logoSuper} alt="" />{" "}
          <h1 className=" text-white text-[100px] uppercase font-bold  ">
            comic
          </h1>
        </div>

        <img
          className="w-full xl:h-[400px] shadow-lg shadow-gray-800 "
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
                  className="xl:w-1/6 h-92 m-4 flex flex-col items-center bg-white rounded-xl  hover:scale-110 hover:shadow-red-800 hover:shadow-md duration-1000 overflow-hidden shadow-xl shadow-black border-4 border-gray-400 "
                >
                  <div className="w-full  h-20 bg-white text-red-700 capitalize  flex justify-center items-center">
                    <h2 className="text-center font-semibold p-1">
                      {element.title}
                    </h2>
                  </div>

                  <img
                    className="w-full h-72"
                    src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                    alt=""
                  />
                  <Link to={`/ComicDetail/${element.id}`}>
                    <button className="w-60 m-2  h-10 bg-red-900 text-white duration-1000   capitalize font-semibold text-xl rounded-lg  hover:bg-red-500">
                      see comic
                    </button>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

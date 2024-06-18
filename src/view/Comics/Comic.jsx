/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getComics } from "../../helpers/solicitudes";
import { Link } from "react-router-dom";
import logoSuper from "../../assets/capitan.svg";
import { Pagination } from "../../components/Pagination/Pagination";

export const Comic = () => {
  const [comics, setComics] = useState([]);
  const [comicsPerPage, setComicsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalComics = comics.length;

  const lastIndex = currentPage * comicsPerPage;
  const firstIndex = lastIndex - comicsPerPage;

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
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-200  pb-5">
      <div className="w-3/4 h-[150px] bg-red-00 flex justify-center items-center ShadowEffect   bg-red-800 m-20 rounded-md">
        <div className="w-1/2   flex items-center opacity-100   ">
          <img
            className="w-full xl:h-[250px] rounded-md ml-5 ShadowEffect"
            src="https://cdn.marvel.com/content/1x/mi_wallpaper_mas_dsk_01.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2 h-3/4  flex justify-center items-start rounded-lg  ">
          <h1 className=" text-white text-[80px] uppercase font-bold rounded-lg ">
            Comic
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col flex-wrap justify-center items-center ">
        <div className="w-full flex flex-wrap justify-center ">
          {comics.length > 0
            ? comics
                .map((element) => {
                  return (
                    <div
                      key={element.id}
                      className="xl:w-[250px] h-[400px]  m-4 flex flex-col items-center justify-evenly shadow-lg shadow-gray-800 hover:scale-110 hover:shadow-black hover:shadow-2xl duration-1000 overflow-hidden rounded-lg "
                    >
                      <div className="w-full  h-20 bg-red-800 text-white capitalize  flex justify-center items-center">
                        <h2 className="text-center font-semibold p-1">
                          {element.title}
                        </h2>
                      </div>
                      <Link to={`/ComicDetail/${element.id}`}>
                        <img
                          className="w-full h-72 "
                          src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                          alt=""
                        />
                      </Link>
                    </div>
                  );
                })
                .slice(firstIndex, lastIndex)
            : null}
        </div>
      </div>
      <Pagination
        comicsPerPage={comicsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalComics={totalComics}
      />
    </div>
  );
};

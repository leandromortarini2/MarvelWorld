/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getComics } from "../../helpers/solicitudes";
import { Link } from "react-router-dom";
import logoSuper from "../../assets/capitan.svg";
import { Pagination } from "../../components/Pagination/Pagination";

export const Comic = () => {
  const [comics, setComics] = useState([]);
  const [comicsPerPage, setComicsPerPage] = useState(10);
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
      <div className="w-3/4 h-[250px] flex justify-center items-center bg-Marvel  rounded-md p-5 m-10 ShadowEffect2">
        {/*  */}
        <div className="w-1/4 flex items-center opacity-100 ">
          <img
            className=" xl:h-[300px] rounded-md ShadowEffect2"
            src="https://www.imgworlds.com/_next/static/media/spiderman.8071ace6.png"
            alt=""
          />
        </div>{" "}
        <div className="w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
          <h1 className=" text-white text-[100px] uppercase font-bold rounded-lg ShadowEffect2">
            Comic
          </h1>
          <p className="text-white text-3xl font-bold text-center ShadowEffect2">
            find the most exciting stories{" "}
          </p>
        </div>
        <div className="w-1/4 flex items-center opacity-100 ">
          <img
            className=" xl:h-[300px] rounded-md ShadowEffect2"
            src="https://www.imgworlds.com/_next/static/media/thor.aabaca85.png"
            alt=""
          />
        </div>{" "}
      </div>
      <div className="w-full flex flex-col flex-wrap justify-center items-center ">
        <div className="w-full flex flex-wrap justify-center ">
          {comics.length > 0
            ? comics
                .map((element) => {
                  return (
                    <div
                      key={element.id}
                      className="xl:w-[250px] h-[400px]  m-4 flex flex-col items-center justify-evenly shadow-lg ShadowEffect hover:scale-110  duration-1000 overflow-hidden rounded-lg "
                    >
                      <Link to={`/ComicDetail/${element.id}`}>
                        <img
                          className="w-full h-72 "
                          src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                          alt=""
                        />
                      </Link>
                      <div className="w-full  h-20 bg-Marvel text-white capitalize  flex justify-center items-center">
                        <h2 className="text-center font-semibold p-1">
                          {element.title}
                        </h2>
                      </div>
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

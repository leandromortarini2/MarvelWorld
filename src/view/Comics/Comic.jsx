/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getComics } from "../../helpers/solicitudes";
import { Link } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loader } from "../../components/Loader/Loader";
import Example from "../../components/Carrousel/Carrousel";

export const Comic = () => {
  const [loaderState, setLoaderState] = useState(true);
  const [comics, setComics] = useState([]);
  const [comicsPerPage, setComicsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const totalComics = comics.length;

  const lastIndex = currentPage * comicsPerPage;
  const firstIndex = lastIndex - comicsPerPage;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getComics();
        console.log(results); // Verifica la respuesta de la API
        setComics(results);
      } catch (error) {
        console.log("Error fetching comics:", error);
      } finally {
        setLoaderState(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-600 pb-5">
        {/* BANNER */}
        <div className="hidden w-full lg:h-[400px] xl:min-h-[600px]  bg-gray-800 md:flex  justify-around lg:justify-center ">
          <div className="w-1/3  flex flex-col justify-center items-center ">
            <h2 className="text-5xl lg:text-[85px]  text-white font-bold uppercase ShadowEffect2 ">
              comic section
            </h2>
            <p className="text-lg lg:text-xl  text-white font-bold capitalize ShadowEffect2 p-2 ">
              Here you can find the most exciting comics in the Marvel
              universe!From the epic adventures of the Avengers to the heroic
              exploits of Spider-Man.
            </p>
          </div>
          <Example />
        </div>

        {/* celu BANNER */}
        <div className="w-full md:hidden bg-gray-800 flex flex-col  justify-center">
          <div className="w-full md:w-1/4  flex flex-col justify-center items-center ">
            <h2 className="text-2xl mt-2 text-center md:text-[100px] text-white font-bold uppercase ShadowEffect2 ">
              Most popular comic
            </h2>
            <p className="text-lg lg:text-xl text-center text-gray-300 font-semibold capitalize ShadowEffect2 p-2 ">
              Here you can find the most exciting comics in the Marvel
              universe!From the epic adventures of the Avengers to the heroic
              exploits of Spider-Man.
            </p>
          </div>{" "}
          <Example />
        </div>
        <div className="w-full flex flex-col flex-wrap justify-center items-center">
          {loaderState === true ? (
            <Loader />
          ) : (
            <div className="w-full flex flex-wrap justify-center ShadowEffect2">
              {comics?.length > 0 ? (
                comics?.slice(firstIndex, lastIndex).map((element) => (
                  <div
                    key={element.id}
                    className="w-32 m-2 h-56 md:w-1/5 xl:w-[250px] md:min-h-[300px] lg:h-[400px] md:m-4 flex flex-col items-center justify-evenly  ShadowEffect hover:scale-110 duration-1000 overflow-hidden  "
                  >
                    <img
                      className="w-full h-28 md:h-56 xl:h-72 mb-1"
                      src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                      alt=""
                    />

                    <div className="w-full min-h-20 bg-gray-700 hover:bg-Marvel duration-1000 text-white capitalize flex justify-center items-center">
                      <Link to={`/ComicDetail/${element.id}`}>
                        <h2 className="text-center text-sm  md:font-semibold p-1 ">
                          {element.title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-white">No comics found</div>
              )}
            </div>
          )}
        </div>
        {comics.length > 0 ? (
          <Pagination
            comicsPerPage={comicsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalComics={totalComics}
          />
        ) : null}
      </div>
    </>
  );
};

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
  const [comicsPerPage, setComicsPerPage] = useState(10);
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
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-800 pb-5">
        {/* BANNER */}
        <div className="hidden md:w-full bg-Marvel md:flex justify-center">
          <Example />
          <div className="w-1/2 flex justify-center items-center">
            <h2 className="md:text-[100px] lg:text-[150px] xl:text-[200px] text-white uppercase font-bold tracking-tighter ShadowEffect2">
              comic
            </h2>
          </div>
        </div>

        {/* celu BANNER */}
        <div className="w-full md:hidden bg-Marvel flex flex-col justify-center">
          <div className="w-full flex justify-center items-center md:hidden">
            <h2 className="text-[80px] text-white uppercase font-bold tracking-tighter ShadowEffect2">
              comic
            </h2>
          </div>
          <Example />
        </div>

        <div className="w-full flex flex-col flex-wrap justify-center items-center">
          {loaderState === true ? (
            <Loader />
          ) : (
            <div className="w-full flex flex-wrap justify-center">
              {comics?.length > 0 ? (
                comics?.slice(firstIndex, lastIndex).map((element) => (
                  <div
                    key={element.id}
                    className="xl:w-[250px] h-[400px] m-4 flex flex-col items-center justify-evenly  ShadowEffect hover:scale-110 duration-1000 overflow-hidden rounded-lg "
                  >
                    <img
                      className="w-full h-72"
                      src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                      alt=""
                    />

                    <div className="w-full h-20 bg-gray-700 hover:bg-Marvel duration-1000 text-white capitalize flex justify-center items-center">
                      <Link to={`/ComicDetail/${element.id}`}>
                        <h2 className="text-center  font-semibold p-1 ">
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

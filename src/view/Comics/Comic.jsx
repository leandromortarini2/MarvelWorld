/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, lazy } from "react";
import { getComics } from "../../helpers/solicitudes";
import { Link } from "react-router-dom";
import logoSuper from "../../assets/capitan.svg";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loader } from "../../components/Loader/Loader";
import Example from "../../components/Carrousel/Carrousel";

export const Comic = () => {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState([]);
  const [comicsPerPage, setComicsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalComics = comics.length;

  const lastIndex = currentPage * comicsPerPage;
  const firstIndex = lastIndex - comicsPerPage;

  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        const { results } = await getComics();
        setComics(results);
        // console.log("---------", results);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // const handleButtonId = (id) => {

  // }

  return (
    <div className="w-full min-h-screen flex flex-col  items-center bg-gray-800  pb-5">
      {loading && <Loader />}
      <div className="hidden md:w-full bg-Marvel md:flex   justify-center">
        <Example />
        <div className="w-1/2 flex justify-center items-center">
          <h2 className="md:text-[100px] lg:text-[150px] xl:text-[200px] text-white uppercase font-bold tracking-tighter ShadowEffect2">
            {" "}
            comic
          </h2>
        </div>
      </div>
      {/* celu */}
      <div className="w-full md:hidden bg-Marvel flex flex-col  justify-center">
        <div className="w-full  flex justify-center items-center md:hidden">
          <h2 className="text-[80px] text-white uppercase font-bold tracking-tighter ShadowEffect2">
            comic
          </h2>
        </div>
        <Example />
      </div>

      <div className="w-full flex flex-col flex-wrap justify-center items-center ">
        <div className="w-full flex flex-wrap justify-center ">
          {comics.length > 0 ? (
            comics
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
          ) : (
            <div className="w-full  flex justify-center items-center">
              <img
                className="w-3/4 md:w-1/2 "
                src="https://i.ibb.co/Mh0xC81/r-1319511-u-AVWG-Photoroom-Photoroom.png"
                alt=""
              />
            </div>
          )}
        </div>
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
  );
};

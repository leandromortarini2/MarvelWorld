/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getComicCharacters,
  getComicCreators,
  getComicEvents,
  getComicID,
} from "../../helpers/solicitudes";
import { Pagination } from "../../components/Pagination/Pagination";

export const ComicDetail = () => {
  const [comic, setComic] = useState([]);
  const [creator, setCreator] = useState([]);
  const [characters, setCharacters] = useState([]);

  const { id } = useParams();

  // pagination
  // pagination
  // pagination
  const [charactersPerPage, setComicsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalComics = characters.length;

  const lastIndex = currentPage * charactersPerPage;
  const firstIndex = lastIndex - charactersPerPage;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getComicID(id);
        console.log(results);
        setComic(results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getComicCreators(id);
        // console.log("Creadores==========", results);
        setCreator(results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getComicCharacters(id);
        // console.log("Personajes.............", results);
        setCharacters(results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-start items-start  bg-[url(https://cdn.marvel.com/content/1x/mi_wallpaper_mas_dsk_01.jpg)] bg-cover pb-5">
        {comic?.length > 0
          ? comic?.map((element) => {
              return (
                <div
                  key={element.id}
                  className="w-full  flex flex-col justify-center  "
                >
                  {/* container 2  */}
                  {/* container 2  */}
                  <div className="w-full   flex justify-center">
                    <div className="w-1/3 flex justify-center items-center bg-black ">
                      <img
                        className="w-full mt-2 ShadowEffect2"
                        src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                        alt=""
                      />
                    </div>

                    <div className="w-3/5 min-h-screen flex flex-col  items-center  mt-2 bg-gray-300   ">
                      {/* container 1 */}
                      {/* container 1 */}
                      <div className="w-full  h-20   flex justify-center items-center p-4  bg-Marvel ">
                        <div className="w-3/4">
                          <h1 className="text-2xl font-bold text-center text-white uppercase tracking-wid ShadowEffect2">
                            {element.title}
                          </h1>
                        </div>
                      </div>{" "}
                      {creator?.length > 0 ? (
                        <div className="w-full h-32  flex flex-col justify-start items-center mt-5">
                          <h3 className="text-2xl font-bold uppercase text-Marvel  tracking-wider mb-2  ">
                            creators
                          </h3>
                          {creator
                            .map((characterElement) => {
                              return (
                                <div
                                  className="w-full flex justify-center "
                                  key={characterElement.id}
                                >
                                  <p className="text-xl font-semibold text-gray-800">
                                    {characterElement.fullName}
                                  </p>
                                </div>
                              );
                            })
                            .slice(firstIndex, lastIndex)}
                        </div>
                      ) : (
                        <div className="w-full min-h-20 flex justify-center items-center ">
                          <h3 className="text-Marvel text-xl font-bold uppercase">
                            no creators found{" "}
                          </h3>
                        </div>
                      )}
                      {characters?.length > 0 ? (
                        <div className="w-full h-1/2 flex flex-col justify-center items-center ">
                          <h3 className="text-3xl font-bold uppercase text-Marvel  tracking-wider text-center m-5 ">
                            Characters
                          </h3>
                          <div className="w-3/4 flex justify-evenly flex-wrap  ">
                            {characters
                              .map((characterElement) => {
                                return (
                                  <div key={characterElement.id}>
                                    <Link
                                      to={`/CharacterDetail/${characterElement.id}`}
                                    >
                                      <img
                                        className="w-20 h-20 shadow-lg hover:scale-110 duration-1000 m-2 ShadowEffect2"
                                        src={`${characterElement.thumbnail.path}.${characterElement.thumbnail.extension}`}
                                      />
                                    </Link>
                                  </div>
                                );
                              })
                              .slice(firstIndex, lastIndex)}
                            <div className="w-full">
                              <Pagination
                                comicsPerPage={charactersPerPage}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                totalComics={totalComics}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-1/4 flex justify-center items-center ">
                          <h3 className="text-Marvel text-2xl font-bold uppercase">
                            no characters found
                          </h3>
                        </div>
                      )}
                      {element.prices.map((price, i) => {
                        return (
                          <div
                            key={i}
                            className="w-full h-32 flex justify-center items-center "
                          >
                            {price.type === "digitalPurchasePrice" ? null : (
                              <div className="w-1/2  flex flex-col justify-evenly items-center    ">
                                <p className="text-gray-800 text-3xl font-bold  ">
                                  Price:{" "}
                                  <span className="text-green-800 text-5xl font-bold  ">
                                    ${price.price}
                                  </span>
                                </p>
                                <button className="w-1/ bg-green-600 text-gray-200 p-2 text-xl mt-3 font-bold  rounded-lg hover:bg-green-900 hover:scale-110 hover:text-white duration-1000 capitalize  ">
                                  buy comic
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

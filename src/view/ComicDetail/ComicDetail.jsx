/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, redirect, useParams } from "react-router-dom";
import {
  getComicCharacters,
  getComicCreators,
  getComicID,
} from "../../helpers/solicitudes";
import { Pagination } from "../../components/Pagination/Pagination";
import { useAuth } from "../../context/Context";

export const ComicDetail = () => {
  const { carrito, setCarrito } = useAuth();

  const [comic, setComic] = useState(null);
  const [creator, setCreator] = useState([]);
  const [characters, setCharacters] = useState([]);

  const { id } = useParams();

  // pagination
  // pagination
  // pagination
  const [charactersPerPage, setComicsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);

  const totalComics = characters.length;

  const lastIndex = currentPage * charactersPerPage;
  const firstIndex = lastIndex - charactersPerPage;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getComicID(id);
        // console.log(results);
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

  const handleAddToCart = () => {
    setCarrito([...carrito, comic]);
    alert("el comic se agrego al carrito");
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-start items-start bg-gray-800 pb-5">
        {comic?.length > 0
          ? comic?.map((element) => {
              return (
                <div
                  key={element.id}
                  className="w-full  flex  justify-center  "
                >
                  <div className="w-3/4 lg:w-full xl:w-3/4   flex flex-col md:flex-row justify-center">
                    {/* container 1 */}
                    {/* container 1 */}

                    <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center items-center mb-5 pt-2">
                      <img
                        className="w-full mt-2 ShadowEffect2"
                        src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                        alt=""
                      />
                    </div>
                    {/* container 2  */}
                    {/* container 2  */}
                    <div className=" w-full md:w-1/2  flex flex-col  justify-evenly items-center  mb-5   ">
                      <div className="w-full  ">
                        <h1 className=" md:text-md md:ml-5 lg:ml-0 lg:text-lg p-2 xl:text-2xl font-bold xl:font-extrabold text-center text-white uppercase  tracking-wider ShadowEffect2 ">
                          {element.title}
                        </h1>
                      </div>
                      {creator?.length > 0 ? (
                        <div className="w-full min-h-32  flex flex-col justify-start items-center mt-2 md:mt-5 ">
                          <h3 className="md:text-xl lg:text-2xl font-bold uppercase text-white  tracking-wider mb-2  ">
                            creators
                          </h3>
                          {creator
                            .map((characterElement) => {
                              return (
                                <div
                                  className="w-full flex justify-center "
                                  key={characterElement.id}
                                >
                                  <p className="md:text-lg lg:text-2xl font-semibold  text-gray-400">
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

                      {element.prices.map((price, i) => {
                        return (
                          <div
                            key={i}
                            className="w-full md:h-32 flex justify-center items-center "
                          >
                            {price.type === "digitalPurchasePrice" ? null : (
                              <div className="w-full  flex flex-col justify-evenly items-center md:mt-2    ">
                                <span className="text-green-500 text-xl lg:text-3xl xl:text-6xl font-bold mb-4 ">
                                  ${price.price}
                                </span>

                                <Link to="/">
                                  <button
                                    onClick={handleAddToCart}
                                    className="w-40 md:h-10 xl:h-12 bg-green-600 text-gray-200 lg:text-xl xl:text-2xl md:mt-3 font-bold  rounded-lg hover:bg-green-900 hover:scale-110 hover:text-white duration-1000 capitalize  "
                                  >
                                    Add To Cart
                                  </button>
                                </Link>
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
        {/* characters */}
        {/* characters */}
        {/* characters */}
        {/* characters */}
        {characters?.length > 0 ? (
          <div className="w-full min-h-[400px] flex flex-col justify-center items-center bg-gray-700 ">
            <h3 className="text-2xl xl:text-4xl font-bold uppercase text-white  tracking-wider text-center m-3 ShadowEffect2 ">
              comic characters
            </h3>
            <div className="w-full md:w-3/4 flex flex-row justify-evenly flex-wrap  ">
              {characters
                .map((characterElement) => {
                  return (
                    <div key={characterElement.id}>
                      <Link to={`/CharacterDetail/${characterElement.id}`}>
                        <img
                          className="w-24 h-24 md:w-20 md:h-20 xl:w-32 xl:h-32 shadow-lg hover:scale-110 duration-1000 m-2 ShadowEffect2"
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
      </div>
    </>
  );
};

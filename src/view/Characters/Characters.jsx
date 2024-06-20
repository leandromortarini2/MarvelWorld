/* eslint-disable no-unused-vars */
import React from "react";
import { getCharacters } from "../../helpers/solicitudes";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoSuper from "../../assets/capitan.svg";
import { Pagination } from "../../components/Pagination/Pagination";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [charactersPerPage, setCharactersPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalComics = characters.length;

  const lastIndex = currentPage * charactersPerPage;
  const firstIndex = lastIndex - charactersPerPage;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getCharacters();

        setCharacters(results);
        // console.log("---------", characters);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [characters]);

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-evenly bg-gray-200 pb-5">
      <div className="w-3/4 h-[250px] flex justify-center items-center bg-Marvel  rounded-md p-5 m-10 ShadowEffect2">
        {/*  */}
        <div className="w-1/4 flex items-center opacity-100 ">
          <img
            className=" xl:h-[300px] rounded-md ShadowEffect2"
            src="https://www.imgworlds.com/_next/static/media/hulk.4aaa2db7.png"
            alt=""
          />
        </div>{" "}
        <div className="w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
          <h1 className=" text-white text-[100px] uppercase font-bold rounded-lg ShadowEffect2">
            Character
          </h1>
          <p className="text-white text-3xl font-bold text-center ShadowEffect2">
            super heroes of the marvel world{" "}
          </p>
        </div>
        <div className="w-1/4 flex items-center opacity-100 ">
          <img
            className=" xl:h-[280px] rounded-md ShadowEffect2"
            src="https://www.imgworlds.com/_next/static/media/captain-america.e49a7de3.png"
            alt=""
          />
        </div>{" "}
      </div>
      <div className="w-full flex  flex-wrap justify-center items-center ">
        {characters.length > 0 ? (
          characters
            .map((character) => (
              <div
                key={character.id}
                className="xl:w-[250px] h-[400px]  m-4 flex flex-col items-center justify-evenly shadow-lg ShadowEffect hover:scale-110  duration-1000 overflow-hidden rounded-lg "
              >
                {character.thumbnail && (
                  <Link to={`/CharacterDetail/${character.id}`}>
                    <img
                      className="w-full h-[300px] "
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    />
                  </Link>
                )}
                <div className="w-full h-10 flex justify-center bg-red-800 overflow-hidden">
                  {" "}
                  <h2 className="text-xl font-bold m-2 text-white">
                    {character.name}
                  </h2>
                </div>
              </div>
            ))
            .slice(firstIndex, lastIndex)
        ) : (
          <p>Cargando personajes...</p>
        )}
      </div>
      <Pagination
        comicsPerPage={charactersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalComics={totalComics}
      />
    </div>
  );
};

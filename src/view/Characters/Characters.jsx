/* eslint-disable no-unused-vars */
import React from "react";
import { getCharacters } from "../../helpers/solicitudes";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoSuper from "../../assets/capitan.svg";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

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
      <div className="w-3/4 h-[150px] bg-red-00 flex justify-center items-center ShadowEffect   bg-red-800 m-20 rounded-md">
        <div className="w-1/2   flex items-center opacity-100   ">
          <img
            className="w-full xl:h-[250px] rounded-md ml-5 ShadowEffect"
            src="https://cdn.marvel.com/content/1x/black_widow_and_hawkeye_1_card.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2 h-3/4  flex justify-center items-start rounded-lg  ">
          <h1 className=" text-white text-[80px] uppercase font-bold rounded-lg ">
            Character
          </h1>
        </div>
      </div>
      <div className="w-full flex  flex-wrap justify-center items-center ">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div
              key={character.id}
              className=" xl:w-1/6 min-h-[350px]  m-2 flex flex-col items-center justify-between  bg-white rounded-xl"
            >
              <div className="w-full h-10 flex justify-center bg-red-800">
                {" "}
                <h2 className="text-xl font-bold m-2 text-white">
                  {character.name}
                </h2>
              </div>

              {character.thumbnail && (
                <Link to={`/ComicDetail/${character.id}`}>
                  <img
                    className="w-full h-[300px] "
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  />
                </Link>
              )}
              {/* <p>{character.description}</p> */}
            </div>
          ))
        ) : (
          <p>Cargando personajes...</p>
        )}
      </div>
    </div>
  );
};

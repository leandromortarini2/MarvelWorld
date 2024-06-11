/* eslint-disable no-unused-vars */
import React from "react";
import { getCharacters } from "../../helpers/solicitudes";
import { useState, useEffect } from "react";

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
      {characters.length > 0 ? (
        characters.map((character) => (
          <div
            key={character.id}
            className=" xl:w-1/5 min-h-[320px]  m-2 flex flex-col items-center  bg-white rounded-xl"
          >
            <h2 className="text-xl font-bold m-2 text-red-700">
              {character.name}
            </h2>
            {character.thumbnail && (
              <img
                className="w-60 h-60 rounded-xl"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            )}{" "}
            {/* <p>{character.description}</p> */}
          </div>
        ))
      ) : (
        <p>Cargando personajes...</p>
      )}
    </div>
  );
};

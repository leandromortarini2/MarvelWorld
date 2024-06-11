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
        console.log("---------", characters);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-evenly bg-white ">
      {characters.length > 0 ? (
        characters.map((character) => (
          <div
            key={character.id}
            className="w-1/4 min-h-[320px] bg-red-900 border-2 m-2 flex flex-col items-center "
          >
            <h2 className="text-xl font-bold m-2">{character.name}</h2>
            {character.thumbnail && (
              <img
                className="w-60 h-60"
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

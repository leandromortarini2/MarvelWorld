/* eslint-disable no-unused-vars */
import { getCharacters } from "../../helpers/solicitudes";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";
import Example from "../../components/Carrousel/Carrousel";

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
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-evenly bg-gray-800 pb-5">
      <div className="hidden md:w-full bg-Marvel md:flex justify-center">
        <Example />
        <div className="w-1/2 flex justify-center items-center">
          <h2 className="md:text-[60px] lg:text-[80px] xl:text-[110px] text-white uppercase font-bold  ShadowEffect2">
            {" "}
            Character
          </h2>
        </div>
      </div>
      {/* celu */}
      <div className="w-full md:hidden bg-Marvel flex flex-col  justify-center">
        <div className="w-full  flex justify-center items-center md:hidden">
          <h2 className="text-[50px] text-white uppercase font-bold tracking-tighter ShadowEffect2">
            Character
          </h2>
        </div>
        <Example />
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
          <div className="w-full  flex justify-center items-center">
            <img
              className="w-3/4 md:w-1/2"
              src="https://i.ibb.co/Mh0xC81/r-1319511-u-AVWG-Photoroom-Photoroom.png"
              alt=""
            />
          </div>
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

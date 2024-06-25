/* eslint-disable no-unused-vars */
import { getCharacters } from "../../helpers/solicitudes";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";
import Example from "../../components/Carrousel/Carrousel";
import Loader from "../../components/Loader/Loader";

export const Characters = () => {
  const [loaderState, setLoaderState] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [charactersPerPage, setCharactersPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalComics = characters.length;
  const lastIndex = currentPage * charactersPerPage;
  const firstIndex = lastIndex - charactersPerPage;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getCharacters();
        setCharacters(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaderState(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-evenly bg-gray-200 pb-5">
      <div className="hidden md:w-full bg-Marvel md:flex justify-center ShadowEffect2">
        <Example />
        <div className="w-1/2 flex justify-center items-center">
          <h2 className="md:text-[60px] lg:text-[80px] xl:text-[110px] text-white uppercase font-bold ShadowEffect2">
            Character
          </h2>
        </div>
      </div>
      {/* celu */}
      <div className="w-full md:hidden bg-Marvel flex flex-col justify-center">
        <div className="w-full flex justify-center items-center md:hidden">
          <h2 className="text-[50px] text-white uppercase font-bold tracking-tighter ShadowEffect2">
            Character
          </h2>
        </div>
        <Example />
      </div>
      {loaderState ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-wrap justify-center ShadowEffect2">
          {characters.length > 0
            ? characters.slice(firstIndex, lastIndex).map((character) => (
                <div
                  key={character.id}
                  className="w-32 m-2 h-56 md:w-1/5 xl:w-[250px] md:min-h-[300px] lg:h-[400px] md:m-4 flex flex-col items-center justify-evenly  ShadowEffect hover:scale-110 duration-1000 overflow-hidden  "
                >
                  {character.thumbnail && (
                    <img
                      className="w-full h-28 md:h-56 xl:h-72 mb-1"
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    />
                  )}
                  <div className="w-full min-h-20 bg-gray-700 hover:bg-Marvel duration-1000 text-white capitalize flex justify-center items-center">
                    <Link to={`/CharacterDetail/${character.id}`}>
                      <h2 className="text-center text-sm  md:font-semibold p-1 ">
                        {character.name}
                      </h2>
                    </Link>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}
      <Pagination
        comicsPerPage={charactersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalComics={totalComics}
      />
    </div>
  );
};

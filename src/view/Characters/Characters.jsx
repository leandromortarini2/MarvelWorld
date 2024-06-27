/* eslint-disable no-unused-vars */
import { getCharacters } from "../../helpers/solicitudes";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";
import CarrouselCharacter from "../../components/CarrouselCharacter/CarrouselCharacter";
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
    <div className="w-full min-h-screen flex flex-wrap justify-evenly bg-gray-600 pb-5">
      <div className="hidden w-full lg:h-[400px] xl:min-h-[600px]  bg-gray-800 md:flex  justify-around lg:justify-center ">
        <div className="w-1/3  flex flex-col justify-center items-center ">
          <h2 className="md:text-3xl lg:text-5xl xl:text-[60px]  text-white font-bold uppercase ShadowEffect2 ">
            Character section
          </h2>
          <p className="md:text-md lg:text-xl  text-white font-bold capitalize ShadowEffect2 p-2 ">
            Here you can find all the characters from the Marvel universe! From
            iconic superheroes like Iron Man and Captain America to scheming
            villains like Thanos and Loki.
          </p>
        </div>
        <CarrouselCharacter />
      </div>

      {/* celu BANNER */}
      <div className="w-full md:hidden bg-gray-800 flex flex-col  justify-center">
        <div className="w-full md:w-1/4  flex flex-col justify-center items-center ">
          <h2 className="text-2xl mt-2 text-center md:text-[100px] text-white font-bold uppercase ShadowEffect2 ">
            Character section
          </h2>
          <p className="text-lg lg:text-xl text-center text-gray-300 font-semibold capitalize ShadowEffect2 p-2 ">
            Here you can find all the characters from the Marvel universe! From
            iconic superheroes like Iron Man and Captain America to scheming
            villains like Thanos and Loki.
          </p>
        </div>{" "}
        <CarrouselCharacter />
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

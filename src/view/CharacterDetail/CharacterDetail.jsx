/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, lazy } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getCharacterComic,
  getCharacterEvents,
  getCharacterID,
  getCharacterSeries,
  getCharacterStories,
} from "../../helpers/solicitudes";
import { Pagination } from "../../components/Pagination/Pagination";

export const CharacterDetail = () => {
  const [character, setCharacter] = useState(null);
  const [comics, setComics] = useState(null);
  const [events, setEvents] = useState(null);
  const [series, setSeries] = useState(null);
  const [stories, setStories] = useState(null);
  const [nameHero, setnameHero] = useState(null);

  // BUTTONS

  const [buttonComic, setButtonComic] = useState(false);
  const [buttonEvents, setButtonEvents] = useState(false);
  const [buttonSeries, setButtonSeries] = useState(false);
  const [buttonStories, setButtonStories] = useState(false);

  // const [buttonSelect, setButtonSelect] = useState(false);

  const handleButtonComic = () => {
    setButtonComic(!buttonComic);
  };
  const handleButtonEvents = () => {
    setButtonEvents(!buttonEvents);
  };
  const handleButtonSeries = () => {
    setButtonSeries(!buttonSeries);
  };
  const handleButtonStorie = () => {
    setButtonStories(!buttonStories);
  };

  // paginacion comic
  const [comicsPerPage, setComicsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalComics = comics?.length;

  const lastIndex = currentPage * comicsPerPage;
  const firstIndex = lastIndex - comicsPerPage;

  const { id } = useParams();

  // personaje
  // personaje
  // personaje
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getCharacterID(id);
        // console.log(".................................", results);
        setCharacter(results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // comics
  // comics
  // comics
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getCharacterComic(id);
        // console.log(".................................", results);
        setComics(results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // eventos
  // eventos
  // eventos
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getCharacterEvents(id);
        // console.log(".................................", results);
        setEvents(results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // series
  // series
  // series
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getCharacterSeries(id);
        // console.log("...........series......................", results);
        setSeries(results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Stories
  // Stories
  // Stories
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getCharacterStories(id);
        // console.log("...............stories..................", results);
        setStories(results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="w-full  min-h-screen flex flex-col  justify-start items-start bg-gray-800 ">
        {/* CONTAINER IZQ */}
        {/* CONTAINER IZQ */}
        {/* CONTAINER IZQ */}
        <div className="w-full    bg-white">
          <div className="w-full flex  justify-start items-start flex-wrap  ">
            {/* personaje */}
            {/* personaje */}
            {character?.length > 0
              ? character.map((character) => {
                  return (
                    <div
                      key={character.id}
                      className="w-full  flex flex-col items-center justify-center "
                    >
                      <div className="w-full  bg-Marvel flex flex-col items-center justify-center p-4">
                        <img
                          className="w-14 md:w-40 lg:w-52 ShadowEffect2 rounded-full border-4 border-white"
                          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        />{" "}
                        <h1 className=" text-xl lg:text-6xl font-bold text-center text-white ShadowEffect2">
                          {character.name}
                        </h1>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
          {/* container buttons */}
          {/* container buttons */}
          {/* container buttons */}
          <div className="w-full h-20   flex  justify-evenly items-center flex-wrap bg-white">
            <button
              onClick={handleButtonComic}
              className={` m-1  w-1/3 md:w-1/6  h-8 lg:h-12  text-white font-bold md:text-md xl:text-3xl uppercase tracking-wide duration-1000 hover:bg-Marvel rounded-lg ${
                buttonComic === true ? "bg-Marvel" : " bg-gray-500"
              }`}
            >
              comic
            </button>
            <button
              onClick={handleButtonEvents}
              className={`  m-1 w-1/3 md:w-1/6  h-8 lg:h-12  text-white font-bold md:text-md xl:text-3xl uppercase tracking-wide duration-1000 hover:bg-Marvel rounded-lg ${
                buttonEvents === true ? "bg-Marvel" : " bg-gray-500"
              }`}
            >
              events
            </button>
            <button
              onClick={handleButtonSeries}
              className={` m-1 w-1/3 md:w-1/6  h-8 lg:h-12  text-white font-bold md:text-md xl:text-3xl uppercase tracking-wide duration-1000 hover:bg-Marvel rounded-lg ${
                buttonSeries === true ? "bg-Marvel" : " bg-gray-500"
              }`}
            >
              series
            </button>
            <button
              onClick={handleButtonStorie}
              className={` m-1 w-1/3 md:w-1/6   h-8 lg:h-12  text-white font-bold md:text-md xl:text-3xl uppercase tracking-wide duration-1000 hover:bg-Marvel rounded-lg ${
                buttonStories === true ? "bg-Marvel" : " bg-gray-500"
              }`}
            >
              stories
            </button>
          </div>
        </div>
        {/* comic 2  */}
        {/* comic 2  */}
        {/* comic 2  */}
        {buttonComic === true ? (
          <div className="w-full min-h-screen lg:mt-5 p-2 flex flex-col items-center justify-start   ShadowEffect2  ">
            <div className="hidden md:w-3/5 md:h-12 lg:h-20 bg-Marvel md:flex justify-center items-center  ">
              {" "}
              <h2 className="text-white font-bold md:text-3xl lg:text-[50px] xl:text-[80px] uppercase ShadowEffect2">
                comic
              </h2>
            </div>

            <div className="w-full lg:min-h-[450px] flex flex-wrap justify-evenly md:mt-2  lg:mt-5">
              {comics?.length > 0 ? (
                comics
                  .map((comic) => {
                    return (
                      <div
                        key={comic.id}
                        className={`w-32 m-2  md:w-1/5 md:h-[300px] lg:h-[320px] xl:h-[400px] xl:w-[250px]   flex flex-col items-center justify-evenly  ShadowEffect hover:scale-110 duration-1000 overflow-hidden `}
                      >
                        <img
                          className="w-full h-28 md:h-56 xl:h-72 mb-1"
                          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        />
                        <div className=" w-full min-h-20 bg-gray-700 hover:bg-Marvel duration-1000 text-white capitalize flex justify-center items-center">
                          {" "}
                          <Link to={`/ComicDetail/${comic.id}`}>
                            <h2 className="text-center text-sm md:text-xs lg:font-semibold p-1 ">
                              {comic.title}
                            </h2>
                          </Link>
                        </div>
                      </div>
                    );
                  })
                  .slice(firstIndex, lastIndex)
              ) : (
                <div className="w-3/5 bg-Marvel flex justify-center items-center  ">
                  <h2 className="text-white font-bold text-center xl:text-6xl uppercase ShadowEffect2">
                    There are no comics now, try later
                  </h2>
                </div>
              )}
            </div>

            <Pagination
              comicsPerPage={comicsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalComics={totalComics}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

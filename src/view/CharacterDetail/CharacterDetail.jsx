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

  const [buttonComic, setButtonComic] = useState(true);
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
  const [comicsPerPage, setComicsPerPage] = useState(4);
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
      <div className="w-full  min-h-screen flex justify-start items-start bg-gray-800 ">
        {/* CONTAINER IZQ */}
        {/* CONTAINER IZQ */}
        {/* CONTAINER IZQ */}
        <div className="w-1/4 min-h-screen  bg-white">
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
                          className="w-52 ShadowEffect2 rounded-full mr-5 border-4 border-white"
                          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        />{" "}
                        <h1 className="text-6xl font-bold text-center text-white ShadowEffect2">
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
          <div className="w-full h-[400px] flex flex-col justify-evenly items-center flex-wrap bg-white  ">
            <button
              onClick={handleButtonComic}
              className={`w-3/4 h-12  text-white font-bold xl:text-3xl uppercase tracking-wide duration-1000 hover:bg-Marvel rounded-lg ${
                buttonComic === true ? "bg-Marvel" : " bg-gray-500"
              }`}
            >
              comic
            </button>
            <button
              onClick={handleButtonEvents}
              className="w-3/4 h-12 bg-gray-500   text-white font-bold xl:text-3xl uppercase tracking-wide duration-1000 hover:bg-Marvel rounded-lg"
            >
              events
            </button>
            <button
              onClick={handleButtonSeries}
              className="w-3/4 h-12 bg-gray-500   text-white font-bold xl:text-3xl uppercase tracking-wide duration-1000 hover:bg-Marvel rounded-lg"
            >
              series
            </button>
            <button
              onClick={handleButtonStorie}
              className="w-3/4 h-12 bg-gray-500   text-white font-bold xl:text-3xl uppercase tracking-wide duration-1000 hover:bg-Marvel rounded-lg"
            >
              stories
            </button>
          </div>
        </div>
        {/* comic 2  */}
        {/* comic 2  */}
        {/* comic 2  */}
        {buttonComic === true ? (
          <div className="w-full min-h-screen mt-5 p-2 flex flex-col items-center justify-start   ShadowEffect2   ">
            <div className="w-3/5 bg-Marvel flex justify-center items-center  ">
              {" "}
              <h2 className="text-white font-bold text-[80px] uppercase ShadowEffect2">
                comic
              </h2>
            </div>

            <div className="w-full min-h-[450px] flex flex-wrap justify-evenly ">
              {comics?.length > 0 ? (
                comics
                  .map((comic) => {
                    return (
                      <div
                        key={comic.id}
                        className="xl:w-[250px] h-[400px] m-4 flex flex-col items-center justify-evenly  ShadowEffect hover:scale-110 duration-1000 overflow-hidden rounded-lg "
                      >
                        <img
                          className="w-full h-72"
                          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        />
                        <div className="w-full h-20 bg-gray-700 hover:bg-Marvel duration-1000 text-white capitalize flex justify-center items-center">
                          {" "}
                          <Link to={`/ComicDetail/${comic.id}`}>
                            <p className="text-white text-center text-md ShadowEffect2  ">
                              {comic.title}
                            </p>
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

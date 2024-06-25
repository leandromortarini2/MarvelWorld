/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, lazy } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getCharacterComic,
  getCharacterEvents,
  getCharacterID,
  getCharacterSeries,
} from "../../helpers/solicitudes";
import { Pagination } from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";

export const CharacterDetail = () => {
  const [loaderState, setLoaderState] = useState(true);

  const [character, setCharacter] = useState(null);
  const [comics, setComics] = useState(null);
  const [events, setEvents] = useState(null);
  const [series, setSeries] = useState(null);

  // BUTTONS
  const [buttonComic, setButtonComic] = useState(true);
  const [buttonEvents, setButtonEvents] = useState(false);
  const [buttonSeries, setButtonSeries] = useState(false);

  const handleButtonComic = () => {
    setButtonComic(!buttonComic);
    setButtonEvents(false);
    setButtonSeries(false);
  };
  const handleButtonEvents = () => {
    setButtonEvents(!buttonEvents);
    setButtonComic(false);
    setButtonSeries(false);
  };
  const handleButtonSeries = () => {
    setButtonSeries(!buttonSeries);
    setButtonComic(false);
    setButtonEvents(false);
  };

  // Paginación comic
  const [comicsPerPage, setComicsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalComics = comics?.length;
  const lastIndex = currentPage * comicsPerPage;
  const firstIndex = lastIndex - comicsPerPage;

  const { id } = useParams();

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoaderState(true);
      try {
        const characterData = getCharacterID(id);
        const comicsData = getCharacterComic(id);
        const eventsData = getCharacterEvents(id);
        const seriesData = getCharacterSeries(id);

        const [characterResults, comicsResults, eventsResults, seriesResults] =
          await Promise.all([
            characterData,
            comicsData,
            eventsData,
            seriesData,
          ]);

        setCharacter(characterResults.results);
        setComics(comicsResults.results);
        setEvents(eventsResults.results);
        setSeries(seriesResults.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaderState(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {loaderState ? (
        <Loader />
      ) : (
        <div className="w-full min-h-screen flex flex-col justify-start items-start bg-gray-100">
          {/* CONTAINER 1 */}
          <div className="w-full bg-white">
            <div className="w-full flex justify-start items-start flex-wrap">
              {/* Personaje */}
              {character?.length > 0 &&
                character.map((character) => (
                  <div
                    key={character.id}
                    className="w-full flex flex-col items-center justify-center"
                  >
                    <div className="w-full bg-Marvel flex flex-col items-center justify-center p-4">
                      <img
                        className="w-14 md:w-40 lg:w-52 ShadowEffect2 rounded-full border-4 border-white"
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt={character.name}
                      />
                      <h1 className="text-xl lg:text-6xl font-bold text-center text-white ShadowEffect2">
                        {character.name}
                      </h1>
                    </div>
                  </div>
                ))}
            </div>

            {/* Container buttons */}
            <div className="w-full h-20 flex justify-evenly items-center flex-wrap bg-white">
              <button
                onClick={handleButtonComic}
                className={`m-1 w-1/3 md:w-1/6 h-8 lg:h-12 text-white font-bold md:text-md xl:text-3xl uppercase tracking-wide duration-1000 hover:bg-Marvel rounded-lg ${
                  buttonComic ? "bg-Marvel" : "bg-gray-500"
                }`}
              >
                Comic
              </button>
              <button
                onClick={handleButtonEvents}
                className={`m-1 w-1/3 md:w-1/6 h-8 lg:h-12 text-white font-bold md:text-md xl:text-3xl uppercase tracking-wide duration-1000 hover:bg-Marvel rounded-lg ${
                  buttonEvents ? "bg-Marvel" : "bg-gray-500"
                }`}
              >
                Events
              </button>
              <button
                onClick={handleButtonSeries}
                className={`m-1 w-1/3 md:w-1/6 h-8 lg:h-12 text-white font-bold md:text-md xl:text-3xl uppercase tracking-wide duration-1000 hover:bg-Marvel rounded-lg ${
                  buttonSeries ? "bg-Marvel" : "bg-gray-500"
                }`}
              >
                Series
              </button>
            </div>
          </div>

          {/* Comic */}
          {buttonComic && (
            <div className="w-full min-h-screen lg:mt-5 p-2 flex flex-col items-center justify-start ShadowEffect2">
              <div className="hidden md:w-3/5 md:h-12 lg:h-20 bg-Marvel md:flex justify-center items-center">
                <h2 className="text-white font-bold md:text-3xl lg:text-[50px] xl:text-[80px] uppercase ShadowEffect2">
                  Comic
                </h2>
              </div>
              {loaderState ? (
                <Loader />
              ) : (
                <div className="w-full lg:min-h-[450px] flex flex-wrap justify-evenly md:mt-2 lg:mt-5">
                  {comics?.length > 0 ? (
                    comics.slice(firstIndex, lastIndex).map((comic) => (
                      <div
                        key={comic.id}
                        className="w-32 m-2 md:w-1/5 md:h-[300px] lg:h-[320px] xl:h-[400px] xl:w-[250px] flex flex-col items-center justify-evenly ShadowEffect hover:scale-110 duration-1000 overflow-hidden"
                      >
                        <img
                          className="w-full h-28 md:h-56 xl:h-72 mb-1"
                          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                          alt={comic.title}
                        />
                        <div className="w-full min-h-20 bg-gray-700 hover:bg-Marvel duration-1000 text-white capitalize flex justify-center items-center">
                          <Link to={`/ComicDetail/${comic.id}`}>
                            <h2 className="text-center text-sm md:text-xs lg:font-semibold p-1">
                              {comic.title}
                            </h2>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="w-3/5 bg-Marvel flex justify-center items-center">
                      <h2 className="text-white font-bold text-center xl:text-6xl uppercase ShadowEffect2">
                        There are no comics now, try later
                      </h2>
                    </div>
                  )}
                </div>
              )}
              <Pagination
                comicsPerPage={comicsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalComics={totalComics}
              />
            </div>
          )}

          {/* Events */}
          {buttonEvents && (
            <div className="w-full min-h-screen lg:mt-5 p-2 flex flex-col items-center justify-start ShadowEffect2">
              <div className="hidden md:w-3/5 md:h-12 lg:h-20 bg-Marvel md:flex justify-center items-center">
                <h2 className="text-white font-bold md:text-3xl lg:text-[50px] xl:text-[80px] uppercase ShadowEffect2">
                  Events
                </h2>
              </div>
              {loaderState ? (
                <Loader />
              ) : (
                <div className="w-full lg:min-h-[450px] flex flex-wrap justify-evenly md:mt-2 lg:mt-5">
                  {events?.length > 0 ? (
                    events.slice(firstIndex, lastIndex).map((event) => (
                      <div
                        key={event.id}
                        className="w-32 m-2 md:w-1/5 md:h-[300px] lg:h-[320px] xl:h-[400px] xl:w-[250px] flex flex-col items-center justify-evenly ShadowEffect hover:scale-110 duration-1000 overflow-hidden"
                      >
                        <img
                          className="w-full h-28 md:h-56 xl:h-72 mb-1"
                          src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                          alt={event.title}
                        />
                        <div className="w-full min-h-20 bg-gray-700 hover:bg-Marvel duration-1000 text-white capitalize flex justify-center items-center">
                          <Link to={`/ComicDetail/${event.id}`}>
                            <h2 className="text-center text-sm md:text-xs lg:font-semibold p-1">
                              {event.title}
                            </h2>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="w-1/2 h-20 mt-5 flex justify-center items-center">
                      <h2 className="text-white font-bold text-center xl:text-6xl uppercase ShadowEffect2">
                        There are no events now, try later
                      </h2>
                    </div>
                  )}
                </div>
              )}
              <Pagination
                comicsPerPage={comicsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalComics={totalComics}
              />
            </div>
          )}

          {/* Series */}
          {buttonSeries && (
            <div className="w-full min-h-screen lg:mt-5 p-2 flex flex-col items-center justify-start ShadowEffect2">
              <div className="hidden md:w-3/5 md:h-12 lg:h-20 bg-Marvel md:flex justify-center items-center">
                <h2 className="text-white font-bold md:text-3xl lg:text-[50px] xl:text-[80px] uppercase ShadowEffect2">
                  Series
                </h2>
              </div>
              {loaderState ? (
                <Loader />
              ) : (
                <div className="w-full lg:min-h-[450px] flex flex-wrap justify-evenly md:mt-2 lg:mt-5">
                  {series?.length > 0 ? (
                    series.slice(firstIndex, lastIndex).map((serie) => (
                      <div
                        key={serie.id}
                        className="w-32 m-2 md:w-1/5 md:h-[300px] lg:h-[320px] xl:h-[400px] xl:w-[250px] flex flex-col items-center justify-evenly ShadowEffect hover:scale-110 duration-1000 overflow-hidden"
                      >
                        <img
                          className="w-full h-28 md:h-56 xl:h-72 mb-1"
                          src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                          alt={serie.title}
                        />
                        <div className="w-full min-h-20 bg-gray-700 hover:bg-Marvel duration-1000 text-white capitalize flex justify-center items-center">
                          <Link to={`/ComicDetail/${serie.id}`}>
                            <h2 className="text-center text-sm md:text-xs lg:font-semibold p-1">
                              {serie.title}
                            </h2>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="w-3/5 bg-Marvel flex justify-center items-center">
                      <h2 className="text-white font-bold text-center xl:text-6xl uppercase ShadowEffect2">
                        There are no series now, try later
                      </h2>
                    </div>
                  )}
                </div>
              )}
              <Pagination
                comicsPerPage={comicsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalComics={totalComics}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

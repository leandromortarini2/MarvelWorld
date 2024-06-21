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

  // paginacion comic
  const [comicsPerPage, setComicsPerPage] = useState(9);
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
        console.log(".................................", results);
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
      <div className="w-full  min-h-screen flex flex-col  justify-start items-center bg-gray-800 ">
        {" "}
        {/* personaje */}
        {/* personaje */}
        {/* personaje */}
        {/* personaje */}
        {/* personaje */}
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
                  {/* comic 2  */}
                  {/* comic 2  */}
                  {/* comic 2  */}
                  {/* <div className="w-full   p-2 flex flex-col items-center justify-start   ShadowEffect2   ">
                    <div className="w-full md:w-3/4 lg: lg:w-1/4 flex flex-col md:flex-row justify-center items-center bg-Marvel  rounded-md md:p-2 m-2 ShadowEffect2">
                      <div className="w-full md:w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
                        <h2 className=" text-white text-3xl md:text-6xl lg:text-4xl xl:text-3xl uppercase font-bold rounded-lg ">
                          comic
                        </h2>
                      </div>
                    </div>
                    <div className="w-full flex flex-wrap justify-evenly ">
                      {comics?.length > 0
                        ? comics
                            .map((comic) => {
                              return (
                                <div key={comic.id} className=" min-h-60 p-2">
                                  <img
                                    className="h-52  shadow-lg hover:scale-110 duration-1000 m-2 ShadowEffect2"
                                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                  />
                                </div>
                              );
                            })
                            .slice(firstIndex, lastIndex)
                        : null}
                    </div>
                    <Pagination
                      comicsPerPage={comicsPerPage}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      totalComics={totalComics}
                    />
                  </div> */}
                </div>
              );
            })
          : null}
        {/* container principal */}
        {/* container principal */}
        {/* container principal */}
        <div className="w-full min-h-[250px] flex justify-evenly flex-wrap  ">
          {/* container 1 */}
          {/* container 1 */}
          {/* container 1 */}
          <div className="w-full md:w-3/4 lg: lg:w-1/3 md:h-[150px] flex flex-col md:flex-row justify-center items-center bg-Marvel  rounded-md md:p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-full md:w-1/3 flex items-center opacity-100 ">
              <img
                className="w-full xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/captain-america.e49a7de3.png"
                alt=""
              />
            </div>{" "}
            <div className="w-full md:w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h2 className=" text-white text-3xl md:text-6xl lg:text-4xl xl:text-5xl uppercase font-bold rounded-lg ">
                comic{" "}
              </h2>
              <p className="text-white text-sm md:text-xl md:font-bold text-center">
                find the most exciting stories{" "}
              </p>
            </div>
          </div>
          {/* container 2 */}
          {/* container 2 */}
          {/* container 2 */}
          <div className="w-full md:w-3/4 lg: lg:w-1/3 md:h-[150px] flex flex-col md:flex-row justify-center items-center bg-Marvel  rounded-md md:p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-full md:w-1/3 flex items-center opacity-100 ">
              <img
                className="w-full xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/spiderman.8071ace6.png"
                alt=""
              />
            </div>{" "}
            <div className="w-full md:w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h2 className=" text-white text-3xl md:text-6xl lg:text-4xl xl:text-5xl uppercase font-bold rounded-lg ">
                {" "}
                Character
              </h2>
              <p className="text-white text-md md:font-bold text-center">
                super heroes of the marvel world{" "}
              </p>
            </div>
          </div>
          {/* container 3 */}
          {/* container 3 */}
          {/* container 3 */}
          <div className="w-full md:w-3/4 lg: lg:w-1/3 md:h-[150px] flex flex-col md:flex-row justify-center items-center bg-Marvel  rounded-md md:p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-full md:w-1/3 flex items-center opacity-100 ">
              <img
                className="w-full xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/iron-man.cbce2b80.png"
                alt=""
              />
            </div>{" "}
            <div className="w-full md:w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h2 className=" text-white text-3xl md:text-6xl lg:text-4xl xl:text-5xl uppercase font-bold rounded-lg ">
                {" "}
                stories
              </h2>
              <p className="text-white text-md md:font-bold text-center p-1">
                original stories from the marvel world{" "}
              </p>
            </div>
          </div>
          {/* container 4 */}
          {/* container 4 */}
          {/* container 4 */}
          <div className="w-full md:w-3/4 lg: lg:w-1/3 md:h-[150px] flex flex-col md:flex-row justify-center items-center bg-Marvel  rounded-md md:p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-full md:w-1/3 flex items-center opacity-100 ">
              <img
                className="w-full xl:h-[200px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/hulk.4aaa2db7.png"
                alt=""
              />
            </div>{" "}
            <div className="w-full md:w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h2 className=" text-white text-3xl md:text-6xl lg:text-4xl xl:text-5xl uppercase font-bold rounded-lg ">
                {" "}
                Serie
              </h2>
              <p className="text-white text-md md:font-bold text-center p-1">
                the series of your favorite heroes{" "}
              </p>
            </div>
          </div>
          {/* container 5 */}
          {/* container 5 */}
          {/* container 5 */}
          <div className="w-full md:w-3/4 md:h-[150px] lg:h-[300px] flex flex-col md:flex-row justify-center items-center bg-Marvel  rounded-md p-5 m-10 ShadowEffect2">
            {/*  */}
            <div className="w-full md:w-1/4 flex items-center opacity-100 ">
              <img
                className="w-full lg:h-[300px] xl:h-[400px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/thor.aabaca85.png"
                alt=""
              />
            </div>{" "}
            <div className="w-full md:w-3/4 h-3/4  flex flex-col justify-center items-center rounded-lg  ">
              <h2 className=" text-white text-3xl md:text-6xl  xl:text-[70px] uppercase font-bold rounded-lg ">
                Events
              </h2>
              <p className="text-white text-md lg:text-2xl xl:text-3xl md:font-bold text-center">
                the series of your favorite heroes{" "}
              </p>
            </div>
            <div className="hidden  w-1/4 lg:flex items-center opacity-100 ">
              <img
                className="lg:h-[300px] xl:h-[400px] rounded-md ShadowEffect2"
                src="https://www.imgworlds.com/_next/static/media/hawkeye.a6d35081.png"
                alt=""
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

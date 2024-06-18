/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getComicCharacters,
  getComicCreators,
  getComicID,
} from "../../helpers/solicitudes";

export const ComicDetail = () => {
  const [comic, setComic] = useState(null);
  const [creator, setCreator] = useState(null);
  const [characters, setCharacters] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getComicID(id);
        console.log(results);
        setComic(results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getComicCreators(id);
        console.log("Creadores==========", results);
        setCreator(results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { results } = await getComicCharacters(id);
        console.log("Personajes.............", results);
        setCharacters(results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center  pb-5">
        {comic?.length > 0
          ? comic?.map((element) => {
              return (
                <div
                  key={element.id}
                  className="w-3/4 min-h-screen flex justify-center  mt-5 "
                >
                  {/* container 1 */}
                  {/* container 1 */}
                  <div className="w-1/3 min-h-screen flex justify-center items-center">
                    <img
                      className="xl:h-[600px] shadow-black shadow-2xl "
                      src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                      alt=""
                    />
                  </div>
                  {/* container 2  */}
                  {/* container 2  */}
                  <div className="w-1/2  flex flex-col justify-center items-center ml-5   ">
                    <div className="w-full  h-26   flex p-4  bg-red-800">
                      <h1 className="text-2xl font-bold text-center text-white">
                        {element.title}
                      </h1>
                    </div>

                    <h3 className="text-3xl font-bold uppercase text-red-900 text-center mt-5 ">
                      Creators
                    </h3>
                    <div className="w-3/4  flex flex-wrap mt-5   ">
                      {creator?.length > 0
                        ? creator?.map((creatorElement) => {
                            return (
                              <div key={creatorElement.id}>
                                <p className="text-gray-700 font-semibold text-xl text-center p-2 ">
                                  {`${creatorElement.fullName}, `}
                                </p>
                              </div>
                            );
                          })
                        : null}
                    </div>
                    <h3 className="text-3xl font-bold uppercase text-red-900 text-center m-5 ">
                      Characters
                    </h3>
                    <div className="w-full  flex justify-evenly flex-wrap">
                      {characters?.length > 0
                        ? characters.map((characterElement) => {
                            return (
                              <div key={characterElement.id}>
                                <Link
                                  to={`/CharacterDetail/${characterElement.id}`}
                                >
                                  <img
                                    className="w-20 h-20 shadow-lg hover:scale-110 duration-1000 m-2"
                                    src={`${characterElement.thumbnail.path}.${characterElement.thumbnail.extension}`}
                                  />
                                </Link>
                              </div>
                            );
                          })
                        : null}
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

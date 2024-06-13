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
      <div className="w-full min-h-screen flex flex-col items-center pb-5">
        {comic?.length > 0
          ? comic?.map((element) => {
              return (
                <div key={element.id} className="w-3/4 min-h-screen flex ">
                  {/* container 1 */}
                  {/* container 1 */}
                  <div className="w-1/2 min-h-screen flex justify-center items-center">
                    <img
                      className="xl:h-[500px] shadow-black shadow-2xl "
                      src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                      alt=""
                    />
                  </div>
                  {/* container 2  */}
                  {/* container 2  */}
                  <div className="w-1/2 flex flex-col justify-center items-center ">
                    <div className="w-full h-32  rounded-t-2xl flex ">
                      <h1 className="text-3xl font-bold text-justify text-red-900">
                        {element.title}
                      </h1>
                    </div>

                    <div className="w-full h-[300px]  flex flex-col justify-evenly ">
                      <h3 className="text-3xl font-bold uppercase text-red-900">
                        Creators
                      </h3>
                      {creator?.length > 0
                        ? creator?.map((creatorElement) => {
                            return (
                              <div key={creatorElement.id}>
                                <p className="text-gray-800 font-bold text-xl">
                                  {creatorElement.fullName}
                                </p>
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
        <div className="w-3/4  flex justify-evenly flex-wrap">
          {characters?.length > 0
            ? characters.map((characterElement) => {
                return (
                  <div key={characterElement.id}>
                    <Link to={`/CharacterDetail/${characterElement.id}`}>
                      <img
                        className="w-60 h-60 rounded-lg m-2 shadow-lg shadow-black hover:scale-110 duration-1000"
                        src={`${characterElement.thumbnail.path}.${characterElement.thumbnail.extension}`}
                      />
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

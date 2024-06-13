/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComicID } from "../../helpers/solicitudes";

export const ComicDetail = () => {
  const [comic, setComic] = useState(null);

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

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-300 pb-5">
        {comic?.length > 0
          ? comic.map((element) => {
              return (
                <div key={element.id} className="w-3/4 min-h-screen flex ">
                  <div className="w-1/2 min-h-screenbg-gray-300 flex justify-center items-center">
                    <img
                      className="xl:h-[700px] shadow-black shadow-2xl "
                      src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                      alt=""
                    />
                  </div>
                  <div className="w-1/2 min-h-screen bg-red-500">
                    <h1>{element.title}</h1>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

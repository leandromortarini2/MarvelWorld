/* eslint-disable no-unused-vars */
import React from "react";
import Example from "../../components/Carrousel/Carrousel";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col  items-center bg-gray-800">
        <div className="hidden md:w-full bg-Marvel md:flex   justify-center">
          <Example />
          <img
            className="w-1/2"
            src="https://www.imgworlds.com/_next/static/media/marvel.7cc446a7.png"
            alt=""
          />
        </div>
        {/* celu */}
        <div className="w-full md:hidden bg-Marvel flex flex-col  justify-center">
          <img
            className=""
            src="https://www.imgworlds.com/_next/static/media/marvel.7cc446a7.png"
            alt=""
          />{" "}
          <Example />
        </div>
        {/* cards */}
        {/* cards */}
        {/* cards */}
        {/* cards */}
        <div className="w-full h-80 flex justify-center bg-black  ">
          <div className="card w-1/2 h-full">
            <img
              className="img "
              src="https://cdn.marvel.com/content/1x/marvel-vs-capcom-fighting-collection-arcade-classics-announce-trailer-article-card.jpg"
              alt="Marvel vs Capcom"
            />
            <div className="textBox ">
              <h2 className="text head text-white ShadowEffect2 text-3xl p-5">
                MARVEL vs. CAPCOM Fighting Collection: Arcade Classics Brings
                Seven Timeless Games in an All-in-One Package
              </h2>
              <Link to="https://www.marvel.com/articles/games/marvel-vs-capcom-fighting-collection-arcade-classics-announce-trailer">
                <button className="w-20 h-10 bg-Marvel text-white rounded-lg hover:bg-red-800">
                  info
                </button>
              </Link>
            </div>
          </div>
          <div className="card w-1/2">
            <img
              className="img "
              src="https://cdn.marvel.com/content/1x/marvel-vs-capcom-fighting-collection-arcade-classics-announce-trailer-article-card.jpg"
              alt="Marvel vs Capcom"
            />
            <div className="textBox ">
              <h2 className="text head text-white ShadowEffect2 text-3xl p-5">
                MARVEL vs. CAPCOM Fighting Collection: Arcade Classics Brings
                Seven Timeless Games in an All-in-One Package
              </h2>
              <Link to="https://www.marvel.com/articles/games/marvel-vs-capcom-fighting-collection-arcade-classics-announce-trailer">
                <button className="w-20 h-10 bg-Marvel text-white rounded-lg hover:bg-red-800">
                  info
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* eslint-disable no-unused-vars */
import React from "react";
import Example from "../../components/Carrousel/Carrousel";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col  items-center bg-gray-50">
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
        <div className="w-full  flex flex-wrap justify-evenly items-center mt-3 ">
          {/* card 1 */}
          {/* card 1 */}
          {/* card 1 */}
          <div className="card w-full h-32 mt-0 mb-2 ml-1 mr-1 md:m-0 md:w-[58%] md:h-[280px]  border-none ">
            <img
              className="img w-full "
              src="https://cdn.evbstatic.com/s3-build/fe/build/images/adb2ce79e35963480e2b82a5214f225a-comics.webp"
              alt=""
            />
            <div className="textBox ">
              <h2 className="text head text-white ShadowEffect2 text-3xl capitalize">
                Find the most incredible comics and join the adventure with your
                favorite heroes
              </h2>
              <Link to="/Comic">
                <button className="w-20 h-10 bg-Marvel text-white rounded-lg hover:bg-red-800">
                  info
                </button>
              </Link>
            </div>
          </div>
          {/* card 2 */}
          {/* card 2 */}
          {/* card 2 */}
          <div className="card w-full h-32 mt-0 mb-2 ml-1 mr-1 md:m-0  md:w-[38%] md:h-[280px]  border-none ">
            <img
              className="img w-full "
              src="https://www.comunidadbaratz.com/wp-content/uploads/Los-comics-y-las-novelas-graficas-aportan-a-sus-lectores-grandes-momentos-de-entretenimiento-informacion-y-conocimiento.jpg"
              alt=""
            />
            <div className="textBox ">
              <h2 className="text head text-white ShadowEffect2 text-3xl  capitalize">
                Here you will find the most successful Marvel comic series
              </h2>
              <Link to="/Series">
                <button className="w-20 h-10 bg-Marvel text-white rounded-lg hover:bg-red-800">
                  info
                </button>
              </Link>
            </div>
          </div>
          {/* card 3 */}
          {/* card 3 */}
          {/* card 3 */}

          <div className="card w-full h-32 mt-0 mb-2 ml-1 mr-1 md:m-0  md:w-[38%] md:h-[280px]   border-none ">
            <img
              className="img w-full "
              src="https://media.vandalsports.com/i/1706x960/10-2023/20231019124011_1.jpg.webp"
              alt=""
            />
            <div className="textBox ">
              <h2 className="text head text-white ShadowEffect2 text-3xl capitalize">
                Here you will find the most important Marvel events
              </h2>
              <Link to="/Events">
                <button className="w-20 h-10 bg-Marvel text-white rounded-lg hover:bg-red-800">
                  info
                </button>
              </Link>
            </div>
          </div>

          {/* card 4 */}
          {/* card 4 */}
          {/* card 4 */}
          <div className="card w-full h-32 mt-0 mb-2 ml-1 mr-1 md:m-0  md:w-[58%] md:h-[280px] md:mb-4 border-none ">
            <img
              className="img w-full ShadowEffect2"
              src="https://cdn.marvel.com/content/1x/mi_wallpaper_mas_dsk_01.jpg"
              alt=""
            />
            <div className="textBox ">
              <h2 className="text head text-white ShadowEffect2 text-3xl  capitalize">
                Here you will find the bravest superheroes in the universe{" "}
              </h2>

              <Link to="/Characters">
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

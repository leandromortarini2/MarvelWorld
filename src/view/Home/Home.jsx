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
        <div className="w-full min-h-[300px] flex flex-wrap justify-evenly items-center  ">
          {/* card 1 */}
          {/* card 1 */}
          {/* card 1 */}
          <div className="card w-1/3 h-[300px] m-2 border-none ">
            <img
              className="img w-full ShadowEffect2"
              src="https://mcdn.wallpapersafari.com/medium/24/55/kg5oQM.jpg"
              alt="Marvel vs Capcom"
            />
            <div className="textBox ">
              <h2 className="text head text-white ShadowEffect2 text-3xl p-5 capitalize">
                Here you will find the bravest superheroes in the universe{" "}
              </h2>

              <Link to="/Characters">
                <button className="w-20 h-10 bg-Marvel text-white rounded-lg hover:bg-red-800">
                  info
                </button>
              </Link>
            </div>
          </div>
          {/* card 2 */}
          {/* card 2 */}
          {/* card 2 */}
          <div className="card w-1/4 h-[300px] m-2 border-none">
            <img
              className="img w-full"
              src="https://wallpapers.com/images/hd/comic-background-ts89u0v8uw2idhkz.jpg"
              alt="Marvel vs Capcom"
            />
            <div className="textBox ">
              <h2 className="text head text-white ShadowEffect2 text-3xl p-5 capitalize">
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
          {/* card 3 */}
          {/* card 3 */}
          {/* card 3 */}
          <div className="card w-1/3 h-[300px] m-2 border-none">
            <img
              className="img w-full"
              src="https://s.yimg.com/ny/api/res/1.2/mLIL40ReVUjLE.5M_g1bWQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMA--/https://media.zenfs.com/es/qore_584/34db14a3d5e27a46fead2fbda92233a9"
              alt="Marvel vs Capcom"
            />
            <div className="textBox ">
              <h2 className="text head text-white ShadowEffect2 text-3xl p-5 capitalize">
                Here you will find the most successful Marvel series
              </h2>
              <Link to="/Series">
                <button className="w-20 h-10 bg-Marvel text-white rounded-lg hover:bg-red-800">
                  info
                </button>
              </Link>
            </div>
          </div>
          {/* card 4 */}
          {/* card 4 */}
          {/* card 4 */}
          <div className="card w-1/3 h-[300px] m-2 border-none  rounded-none ">
            <img
              className="img w-full"
              src="https://www.coca-cola.com/content/dam/onexp/us/en/brands/coca-cola-original/epic/hp_slide/tccc_epicfansassemble_dt_us.png/width1338.png"
              alt="Marvel vs Capcom"
            />
            <div className="textBox ">
              <h2 className="text head text-white text-3xl p-5 capitalize">
                Here you will find the most relevant Marvel stories{" "}
              </h2>

              <Link to="/Stories">
                <button className="w-20 h-10 bg-Marvel text-white rounded-lg hover:bg-red-800">
                  info
                </button>
              </Link>
            </div>
          </div>
          {/* card 5 */}
          {/* card 5 */}
          {/* card 5 */}
          <div className="card w-3/5 h-[300px] m-2 border-none  rounded-none ">
            <img
              className="img w-full"
              src="https://c4.wallpaperflare.com/wallpaper/902/0/25/comics-marvel-comics-angel-marvel-comics-baron-zemo-wallpaper-preview.jpg"
              alt="Marvel vs Capcom"
            />
            <div className="textBox ">
              <h2 className="text head text-white ShadowEffect2 text-3xl p-5 capitalize">
                Here you will find the most important Marvel events
              </h2>

              <Link to="/Events">
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

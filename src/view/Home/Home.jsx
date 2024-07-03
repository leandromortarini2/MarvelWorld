/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Example from "../../components/Carrousel/Carrousel";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Context";

export const Home = () => {
  const { carrito } = useAuth();

  useEffect(() => {
    console.log(carrito);
  });

  return (
    <>
      <div className="w-full min-h-screen flex flex-col  items-center bg-gray-600">
        <div className="hidden w-full lg:h-[400px] xl:min-h-[600px]  bg-gray-800 md:flex  justify-around lg:justify-center ">
          <div className="w-1/3  flex justify-center items-center ">
            <h2 className="text-5xl lg:text-[85px]  text-white font-bold uppercase ShadowEffect2 ">
              Most popular comic
            </h2>
          </div>
          <Example />
        </div>
        {/* celu */}
        <div className="w-full md:hidden bg-gray-800 flex flex-col  justify-center">
          <div className="w-full md:w-1/4  flex justify-center items-center ">
            <h2 className="text-2xl mt-2 text-center md:text-[100px] text-white font-bold uppercase ShadowEffect2 ">
              Most popular comic
            </h2>
          </div>{" "}
          <Example />
        </div>
        {/* cards */}
        {/* cards */}
        {/* cards */}
        {/* cards */}
        <div className="w-full lg:w-3/4  flex  flex-wrap justify-evenly items-center md:m-5 ">
          {/* card 1 */}
          {/* card 1 */}
          {/* card 1 */}
          <div className="hidden full   md:m-2 md:flex    lg:h-[300px] justify-center bg-gray-800 ShadowEffect2">
            <div className="w-1/2 h-52  lg:h-[300px] ">
              <img
                className="w-full h-full imgEffectRigth"
                src="https://cdn.evbstatic.com/s3-build/fe/build/images/adb2ce79e35963480e2b82a5214f225a-comics.webp"
                alt=""
              />
            </div>
            <div className="w-3/4  h-52  lg:h-[300px] flex flex-col justify-evenly  ml-5 ">
              <div>
                {" "}
                <h2 className=" text-gray-300 font-bold text-lg  lg:text-3xl xl:text-4xl capitalize p-2">
                  Comic section
                </h2>
                <p className=" text-gray-300 font-semibold text-md   lg:text-xl xl:text-2xl  capitalize p-2">
                  Here you can find the most exciting comics in the Marvel
                  universe! From the epic adventures of the Avengers to the
                  heroic exploits of Spider-Man, our collections are packed with
                  action, intrigue and unforgettable characters.{" "}
                  <Link to="/Comic">
                    <span className="p-1 font-bold capitalize text-red-700 rounded-lg  tracking-wide hover:text-Marvel">
                      visit comics section
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* celu */}
          {/* celu */}
          {/* celu */}
          <div className="w-full min-h-[300px]  flex flex-col justify-center md:hidden bg-gray-800">
            <div className="w-full  ">
              {" "}
              <img
                className="w-full h-52 imgEffectLow"
                src="https://cdn.evbstatic.com/s3-build/fe/build/images/adb2ce79e35963480e2b82a5214f225a-comics.webp"
                alt=""
              />
            </div>
            <div className="w-full flex flex-col justify-evenly items-center mb-2 ">
              <div>
                {" "}
                <h2 className=" text-gray-200 font-bold  text-2xl  text-center capitalize">
                  Comic section
                </h2>
                <p className=" text-gray-300 font-semibold  text-lg text-center p-2 capitalize">
                  Here you can find the most exciting comics in the Marvel
                  universe! From the epic adventures of the Avengers to the
                  heroic exploits of Spider-Man, our collections are packed with
                  action, intrigue and unforgettable characters. <br />
                  <Link to="/Comic">
                    <span className="p-1 font-bold capitalize text-red-700 rounded-lg  tracking-wide hover:text-Marvel">
                      visit comics section
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* card 2 Character */}
          {/* card 2 Character */}
          {/* card 2  Character*/}
          <div className="hidden full   md:m-2 md:flex    lg:h-[300px] justify-center bg-gray-800 ShadowEffect2">
            <div className="w-1/2 h-52  lg:h-[300px] ">
              <img
                className="w-full h-full imgEffectRigth"
                src="https://cdn.marvel.com/content/1x/mi_wallpaper_mas_dsk_01.jpg"
                alt=""
              />
            </div>
            <div className="w-3/4  h-52  lg:h-[300px] flex flex-col justify-evenly  ml-5 ">
              <div>
                {" "}
                <h2 className=" text-gray-300 font-bold text-lg  lg:text-3xl xl:text-4xl capitalize p-2">
                  Character section
                </h2>
                <p className=" text-gray-300 font-semibold text-md   lg:text-xl xl:text-2xl  capitalize p-2">
                  Here you can find all the characters from the Marvel universe!
                  From iconic superheroes like Iron Man and Captain America to
                  scheming villains like Thanos and Loki, this section is
                  dedicated to the characters who have brought the most exciting
                  stories to life.
                  <Link to="/Characters">
                    <span className="p-1 font-bold capitalize text-red-700 rounded-lg  tracking-wide hover:text-Marvel">
                      visit Character section
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* celu Character*/}
          {/* celu Character*/}
          {/* celu Character*/}
          <div className="w-full min-h-[300px]  flex flex-col justify-center md:hidden bg-gray-800">
            <div className="w-full  ">
              {" "}
              <img
                className="w-full h-52 imgEffectLow"
                src="https://cdn.marvel.com/content/1x/mi_wallpaper_mas_dsk_01.jpg"
                alt=""
              />
            </div>
            <div className="w-full flex flex-col justify-evenly items-center mb-2 ">
              <div>
                {" "}
                <h2 className=" text-gray-200 font-bold  text-2xl  text-center capitalize">
                  Characters
                </h2>
                <p className=" text-gray-300 font-semibold  text-lg text-center p-2 capitalize">
                  Here you can find all the characters from the Marvel universe!
                  From iconic superheroes like Iron Man and Captain America to
                  scheming villains like Thanos and Loki, this section is
                  dedicated to the characters who have brought the most exciting
                  stories to life. <br />
                  <Link to="/Comic">
                    <span className="p-1 font-bold capitalize text-red-700 rounded-lg  tracking-wide hover:text-Marvel">
                      visit comics section
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* card 3 Events*/}
          {/* card 3 Events*/}
          {/* card 3 Events*/}
          <div className="hidden full   md:m-2 md:flex    lg:h-[300px] justify-center bg-gray-800 ShadowEffect2">
            <div className="w-1/2 h-52  lg:h-[300px] ">
              <img
                className="w-full h-full imgEffectRigth"
                src="https://media.vandalsports.com/i/1706x960/10-2023/20231019124011_1.jpg.webp"
                alt=""
              />
            </div>
            <div className="w-3/4  h-52  lg:h-[300px] flex flex-col justify-evenly  ml-5 ">
              <div>
                {" "}
                <h2 className=" text-gray-300 font-bold text-lg  lg:text-3xl xl:text-4xl capitalize p-2">
                  Events
                </h2>
                <p className=" text-gray-300 font-semibold text-md   lg:text-xl xl:text-2xl  capitalize p-2">
                  Here you can find all the epic events of the Marvel universe!
                  This section is dedicated to comics that tell the greatest and
                  most exciting sagas, where heroes and villains face off in
                  battles that change the course of history.
                  <Link to="/Characters">
                    <span className="p-1 font-bold capitalize text-red-700 rounded-lg  tracking-wide hover:text-Marvel">
                      visit events section
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* celu Events*/}
          {/* celu Events*/}
          {/* celu Events*/}
          <div className="w-full min-h-[300px]  flex flex-col justify-center md:hidden bg-gray-800">
            <div className="w-full  ">
              {" "}
              <img
                className="w-full h-52 imgEffectLow"
                src="https://media.vandalsports.com/i/1706x960/10-2023/20231019124011_1.jpg.webp"
                alt=""
              />
            </div>
            <div className="w-full flex flex-col justify-evenly items-center mb-2 ">
              <div>
                {" "}
                <h2 className=" text-gray-200 font-bold  text-2xl  text-center capitalize">
                  Events
                </h2>
                <p className=" text-gray-300 font-semibold  text-lg text-center p-2 capitalize">
                  Here you can find all the epic events of the Marvel universe!
                  This section is dedicated to comics that tell the greatest and
                  most exciting sagas, where heroes and villains face off in
                  battles that change the course of history. <br />
                  <Link to="/Comic">
                    <span className="p-1 font-bold capitalize text-red-700 rounded-lg  tracking-wide hover:text-Marvel">
                      visit events section
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* card 4 */}
          {/* card 4 */}
          {/* card 4 */}
          <div className="hidden full   md:m-2 md:flex    lg:h-[300px] justify-center bg-gray-800 ShadowEffect2">
            <div className="w-1/2 h-52  lg:h-[300px] ">
              <img
                className="w-full h-full imgEffectRigth"
                src="https://www.comunidadbaratz.com/wp-content/uploads/Los-comics-y-las-novelas-graficas-aportan-a-sus-lectores-grandes-momentos-de-entretenimiento-informacion-y-conocimiento.jpg"
                alt=""
              />
            </div>
            <div className="w-3/4  h-52  lg:h-[300px] flex flex-col justify-evenly  ml-5 ">
              <div>
                {" "}
                <h2 className=" text-gray-300 font-bold text-lg  lg:text-3xl xl:text-4xl capitalize p-2">
                  Series
                </h2>
                <p className=" text-gray-300 font-semibold text-md   lg:text-xl xl:text-2xl  capitalize p-2">
                  Here you can find all the series from the Marvel universe!
                  This section is dedicated to comic book sagas that immerse you
                  in continuous and exciting stories. From the epic story arcs
                  of the X-Men to the never-ending adventures of the Guardians
                  of the Galaxy.
                  <Link to="/Characters">
                    <span className="p-1 font-bold capitalize text-red-700 rounded-lg  tracking-wide hover:text-Marvel">
                      Visit series section
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* celu */}
          {/* celu */}
          {/* celu */}
          <div className="w-full min-h-[300px]  flex flex-col justify-center md:hidden bg-gray-800">
            <div className="w-full  ">
              {" "}
              <img
                className="w-full h-52 imgEffectLow"
                src="https://www.comunidadbaratz.com/wp-content/uploads/Los-comics-y-las-novelas-graficas-aportan-a-sus-lectores-grandes-momentos-de-entretenimiento-informacion-y-conocimiento.jpg"
                alt=""
              />
            </div>
            <div className="w-full flex flex-col justify-evenly items-center mb-2 ">
              <div>
                {" "}
                <h2 className=" text-gray-200 font-bold  text-2xl  text-center capitalize">
                  Series
                </h2>
                <p className=" text-gray-300 font-semibold  text-lg text-center p-2 capitalize">
                  Here you can find all the series from the Marvel universe!
                  This section is dedicated to comic book sagas that immerse you
                  in continuous and exciting stories. From the epic story arcs
                  of the X-Men to the never-ending adventures of the Guardians
                  of the Galaxy. <br />
                  <Link to="/Comic">
                    <span className="p-1 font-bold capitalize text-red-700 rounded-lg  tracking-wide hover:text-Marvel">
                      visit events section
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

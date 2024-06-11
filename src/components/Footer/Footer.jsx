/* eslint-disable no-unused-vars */
import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow dark:bg-red-950 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://i.ibb.co/cYN0nJt/avengers.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Leandro Mortarini
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 no-underline text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 no-underline text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 no-underline text-white"
                >
                  {" "}
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 no-underline text-white"
                >
                  {" "}
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <a
              href="https://flowbite.com/"
              className="hover:underline text-red-300 hover:text-red-500"
            >
              Marvel
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

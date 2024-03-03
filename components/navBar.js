import React, { useState } from "react";

export default function NavBar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  return (
    <nav className="border-gray-200 ">
      <div className="z-10  flex flex-wrap items-center justify-around  bg-gray-50 w-[100vw] dark:bg-gray-800 dark:border-gray-700 h-[8vh]">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Xian&apos;s page
          </span>
        </a>
        <button
          data-collapse-toggle="navbarHamburger"
          type="button"
          className="inline-flex items-center  justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbarHamburger"
          aria-expanded="false"
          onClick={() => setShowHamburgerMenu((pre) => !pre)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {showHamburgerMenu ? (
        <div className="animate-show-menu z-0 duration-1000 overflow-hidden h-[15vh]">
          <div className="w-full" id="navbarHamburger">
            <ul className="flex h-full flex-col justify-center font-medium mt-1 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:duration-300 hover:bg-blue-700 hover:text-white"
                  aria-current="page"
                >
                  關於我
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-700 hover:duration-300 hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
                >
                  作品
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-700 hover:duration-300 hover:text-white dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  聯繫
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="animate-no-show z-0 duration-1000 overflow-hidden h-0">
          <div className="w-full" id="navbarHamburger">
            <ul className="flex flex-col justify-center font-medium mt-1 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:duration-300 hover:bg-blue-700 hover:text-white"
                  aria-current="page"
                >
                  關於我
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-700 hover:duration-300 hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
                >
                  作品
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-700 hover:duration-300 hover:text-white dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  聯繫
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

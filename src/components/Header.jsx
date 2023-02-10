import React from "react";
import bookIcon from "../images/book-solid.png";
import { useState, useContext } from "react";
import { DictContext } from "../context";

function Header() {
  const { theme, switchTheme, setSwitchTheme, font, setFont } =
    useContext(DictContext);
  const [themeSwitch, setThemeSwitch] = useState(false);
  const fontTypes = ["serif", "sans-serif", "monospace"];

  // function to change the theme
  function handleChange() {
    if (themeSwitch) {
      document.body.classList.remove("light");
      setSwitchTheme(theme.dark);
      setThemeSwitch(false);
    } else {
      document.body.classList.remove("dark");
      setSwitchTheme(theme.light);
      setThemeSwitch(true);
    }
  }

  // function to change the font style
  function handleList(e) {
    if (
      document.body.className === "dark" ||
      document.body.className === "light"
    )
      document.body.classList.add("serif");
    document.body.classList.remove("serif", "sans-serif", "monospace");
    setFont(e.currentTarget.children[0].innerText);
  }

  function FontList() {
    let displayList = fontTypes.map((temp) => {
      return (
        <li key={temp} onClick={handleList}>
          <p
            className={`dropdown-item cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 ${
              temp === font ? "font-active" : ""
            }`}
            href="#"
          >
            {temp}
          </p>
        </li>
      );
    });
    return displayList;
  }

  return (
    <div className="header p-5 md:p-12">
      <div className="flex justify-around items-center flex-wrap">
        <div className="flex items-center w-fit text-3xl font-bold mb-3 md:text-6xl md:font-semibold md:m-0">
          <img src={bookIcon} alt="" className="h-10 mr-5 md:h-20 md:mr-16" />
          <h1>Dictionary</h1>
        </div>
        <div className="dropdown relative flex items-center">
          <button
            className="
          dropdown-toggle
          bg-transparent
          font-medium
          text-base
          leading-tight
          rounded
          focus:outline-none focus:ring-0
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Font Style
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              />
            </svg>
          </button>
          <ul
            className="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
            aria-labelledby="dropdownMenuButton1"
          >
            <FontList />
          </ul>
          <svg
            className="text-white w-4 mx-2 md:mx-6"
            width="3"
            height="45"
            viewBox="0 0 3 61"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.79041"
              y1="0.0107502"
              x2="0.499957"
              y2="60.0169"
              stroke="#EEEEEE"
            />
          </svg>
          <div className="flex justify-center gap-5">
            <div className="form-check form-switch inline-block">
              <input
                className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={handleChange}
              />
            </div>
            <img
              src={switchTheme.svg}
              alt=""
              className="themeImg text-white w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import { Link } from "react-router-dom";
import icon from "../images/logo.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsopen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  function handleOpen() {
    setIsopen(!isOpen);
  }

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 1280);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main-container xl:fixed text-white flex flex-col gap-16 xl:gap-20 py-10 bg-blue-950 xl:py-20 xl:w-[400px] xl:h-screen">
      <div className="header w-full flex px-5 lg:px-10 items-center justify-between gap-5">
        <div className="company flex  items-center gap-5 justify-start">
          <div className="logo">
            <img className=" h-[60px]" src={icon} alt="company icon" />
          </div>
          <div className="company text-3xl font-Heading font-semibold">
            <Link to="/">CoinSphere</Link>
          </div>
        </div>
        <div
          onClick={() => handleOpen()}
          className="menu-icon text-3xl cursor-pointer xl:hidden"
        >
          {isOpen ? (
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"></path>
              </g>
            </svg>
          )}
        </div>
      </div>

      {(isOpen || isLargeScreen) && (
        <div className="links flex  flex-col items-start px-5 lg:px-14 font-Heading gap-5 text-2xl ">
          <div className="link flex items-center gap-5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
            </svg>
            <div className="group">
              <Link to="/">Home</Link>
              <div className=" border-b-4 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
          <div className="link flex items-center gap-5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M1,16 L8,9 L13,14 L23,4 M0,22 L23.999,22 M16,4 L23,4 L23,11"
              ></path>
            </svg>
            <div className="group">
              <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
              <div className=" border-b-4 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
          <div className="link flex items-center gap-5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h9v2h-4v3l-5-5zm5-4V6l5 5H8V9h4z"></path>
              </g>
            </svg>
            <div className="group">
              <Link to="/Exchanges">Exchanges</Link>
              <div className=" border-b-4 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
          <div className="link flex items-center gap-5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 4v-2h-14v11c0 0.552 0.448 1 1 1h13.5c0.828 0 1.5-0.672 1.5-1.5v-8.5h-2zM13 13h-12v-10h12v10zM2 5h10v1h-10zM8 7h4v1h-4zM8 9h4v1h-4zM8 11h3v1h-3zM2 7h5v5h-5z"></path>
            </svg>
            <div className="group">
              <Link to="/News">News</Link>
              <div className=" border-b-4 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

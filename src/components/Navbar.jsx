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
    <div className="main-container text-white flex flex-col gap-10 py-10 bg-blue-950 xl:py-20 xl:w-[400px] xl:h-screen">
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
        <div className="links flex flex-col items-start px-5 font-Heading gap-5 text-2xl underline">
          <div className="link">
            <Link to="/">Home</Link>
          </div>
          <div className="link">
            <Link to="/">Cryptocurrencies</Link>
          </div>
          <div className="link">
            <Link to="/">Exchanges</Link>
          </div>
          <div className="link">
            <Link to="/">News</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

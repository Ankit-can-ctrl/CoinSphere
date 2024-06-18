import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [componentWidth, setComponentWidth] = useState(window.innerWidth - 410);
  useEffect(() => {
    const handleResize = () => {
      setComponentWidth(window.innerWidth - 410);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{ width: window.innerWidth > 1280 && `${componentWidth}px` }}
      className="main-container bg-blue-950 xl:absolute right-0 text-white font-Heading py-10 flex flex-col items-center justify-center gap-5"
    >
      <div className="headings flex flex-col items-center justify-center ">
        <h1 className=" text-2xl font-semibold">CoinSphere</h1>
        <h2 className=" font-light">All rights reserved.</h2>
      </div>
      <div className="footer-links text-blue-300 flex gap-5">
        <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
        <Link to="/Exchanges">Exchanges</Link>
        <Link to="/News">News</Link>
      </div>
    </div>
  );
}

export default Footer;

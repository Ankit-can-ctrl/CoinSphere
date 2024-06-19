import millify from "millify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoinsCard from "../components/CoinsCard";

function Homepage() {
  const [componentWidth, setComponentWidth] = useState(window.innerWidth - 400);
  useEffect(() => {
    const handleResize = () => {
      setComponentWidth(window.innerWidth - 400);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={{ width: window.innerWidth > 1280 && `${componentWidth}px` }}
        className=" xl:absolute right-0 "
      >
        <CoinData />
        <Coins />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;

function CoinData() {
  const { data, isFetching } = useGetCryptosQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";
  return (
    <div className="Coin-data flex flex-col w-full  gap-16  ">
      <h1 className=" bg-gray-300 font-Heading text-4xl md:text-5xl font-bold p-10">
        Global Crypto Stats
      </h1>
      <div className="data flex px-10 pb-10 flex-col md:flex-row flex-wrap xl:gap-28 gap-14 w-full">
        {Object.keys(globalStats).map((key) => (
          <div key={key} className="total font-Heading">
            <h2 className=" text-2xl font-medium text-gray-600 capitalize">
              {key}
            </h2>
            <h1 className="pt-5 text-4xl font-semibold">
              {millify(globalStats[key])}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

function Coins() {
  return (
    <div>
      <div className="heading gap-5 font-Heading flex bg-gray-300 items-center justify-between p-10">
        <h1 className=" text-2xl md:text-3xl font-semibold">
          Top 10 Cryptocurrencies in the world
        </h1>
        <Link
          className=" underline text-blue-700 text-xl"
          to="/Cryptocurrencies"
        >
          Show more
        </Link>
      </div>
      <div className="all-coins">
        <CoinsCard />
      </div>
    </div>
  );
}

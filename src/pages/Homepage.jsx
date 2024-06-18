import millify from "millify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useEffect, useState } from "react";

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

  const { data, isFetching } = useGetCryptosQuery();

  console.log(data);

  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";

  return (
    <div
      style={{ width: window.innerWidth > 1280 && `${componentWidth}px` }}
      className="xl:absolute right-0"
    >
      <div className="Coin-data flex flex-col w-full  gap-16 py-20 px-10 bg-gray-400 ">
        <h1 className=" font-Heading text-5xl font-bold tracking-tighter">
          Global Crypto Stats
        </h1>
        <div className="data flex flex-col md:flex-row flex-wrap xl:gap-28 gap-16 w-full">
          {Object.keys(globalStats).map((key) => (
            <div key={key} className="total font-Heading">
              <h2 className=" text-2xl font-medium text-gray-600 capitalize">
                {key}
              </h2>
              <h1 className="pt-5 text-4xl">{millify(globalStats[key])}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;

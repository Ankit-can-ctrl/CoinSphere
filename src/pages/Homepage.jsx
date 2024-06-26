import millify from "millify";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoinsCard from "../components/CoinsCard";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import DataLoader from "../components/DataLoader";

function Homepage() {
  return (
    <div className=" w-full ">
      <GlobalData />
      <Coins />
      <CryptoNews />
    </div>
  );
}

export default Homepage;

//fetching gloabl data for homepage
function GlobalData() {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  const [localLoading, setLocalLoading] = useState(true);
  useEffect(() => {
    if (!isFetching && data) {
      const timer = setTimeout(() => {
        setLocalLoading(false);
      }, 2000); // Adjust the delay as needed
      return () => clearTimeout(timer); // Cleanup the timer on component unmount or if the effect runs again
    }
  }, [isFetching, data]);
  if (localLoading) return <DataLoader />;
  return (
    <div className="Coin-data flex flex-col w-full md:gap-16 bg-gray-300 px-5">
      <h1 className=" bg-gray-300 font-Heading text-4xl md:text-6xl font-bold p-10">
        Global Crypto Stats
      </h1>
      <div className="data flex px-10  bg-gray-200 py-10 rounded-md flex-col md:flex-row flex-wrap xl:gap-28 gap-14 w-full">
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

//coins component for homepage
function Coins() {
  // to display only 10 data items on the home page
  const count = 10;

  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

  useEffect(() => {
    if (cryptoList?.data?.coins) {
      setCryptos(cryptoList.data.coins);
    }
  }, [cryptoList]);

  if (isFetching)
    return (
      <h1>
        <DataLoader />
      </h1>
    );
  return (
    <div className="All-coins bg-gray-300">
      <div className="heading gap-5 font-Heading flex bg-gray-300 items-center justify-between p-10">
        <h1 className=" text-2xl md:text-6xl font-semibold">
          Top 10 Cryptocurrencies in the world
        </h1>
        <Link
          className=" md:text-xl border-2 font-semibold hover:scale-105 transition-all duration-500 px-4 py-2 bg-white rounded-xl"
          to="/cryptocurrencies"
        >
          Show more
        </Link>
      </div>
      <div className="coins flex flex-col p-5 gap-5 lg:grid grid-cols-3">
        {cryptos?.map((coin) => (
          <li className=" list-none" key={coin.uuid}>
            <Link to={`/crypto/${coin.uuid}`}>
              <CoinsCard key={coin.id} coin={coin} />
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}

//news componeent for home page
function CryptoNews() {
  const { data: cryptoNews } = useGetCryptoNewsQuery();

  const [newsArray, setNewsArray] = useState([]);
  //puttng api object arrays data in newsArrays
  useEffect(() => {
    if (cryptoNews && cryptoNews.data) {
      setNewsArray(cryptoNews.data.slice(0, 10));
    }
  }, [cryptoNews]);

  if (!cryptoNews?.data)
    return (
      <h1>
        <DataLoader />
      </h1>
    );
  return (
    <div className=" bg-slate-300">
      <div className="All-coins bg-gray-300">
        <div className="heading gap-5 font-Heading flex bg-gray-300 items-center justify-between p-10">
          <h1 className=" text-2xl md:text-6xl font-semibold">
            Latest Headlines in Crypto
          </h1>
          <Link
            className=" md:text-xl border-2 font-semibold hover:scale-105 transition-all duration-500 px-4 py-2 bg-white rounded-xl"
            to="/news"
          >
            Show more
          </Link>
        </div>
        <div className="newsCard bg-gray-300 flex flex-col gap-5 lg:grid grid-cols-3">
          {newsArray.map((topic, index) => (
            <div
              key={index}
              className="newsCard m-2 rounded-md bg-gray-100 overflow-hidden"
            >
              <a
                className=" flex flex-col gap-5 justify-between px-3 py-4"
                href={topic.url}
              >
                <h1 className=" font-Heading text-2xl font-semibold text-center">
                  {topic.title}
                </h1>
                <img
                  className=" rounded-md hover:scale-110 transition-all duration-500"
                  src={topic.thumbnail}
                  alt="crypto news"
                />
                <h3>{Date(topic.createdAt)}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import millify from "millify";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoinsCard from "../components/CoinsCard";

function Homepage() {
  return (
    <div className=" w-full ">
      <GlobalData />
      <Coins />
    </div>
  );
}

export default Homepage;

function GlobalData() {
  const { data, isFetching } = useGetCryptosQuery(10);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";
  return (
    <div className="Coin-data flex flex-col w-full gap-16  ">
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
  // to display only 10 data items on the home page
  const count = 10;

  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

  useEffect(() => {
    if (cryptoList?.data?.coins) {
      setCryptos(cryptoList.data.coins);
    }
  }, [cryptoList]);

  useEffect(() => {
    console.log(cryptos);
  }, [cryptos]);

  if (isFetching) return <h1>loading..</h1>;
  return (
    <div className="All-coins bg-gray-300">
      <div className="heading gap-5 font-Heading flex bg-gray-300 items-center justify-between p-10">
        <h1 className=" text-2xl md:text-3xl font-semibold">
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
            <Link to={`/cryptocurrencies/${coin.uuid}`}>
              <CoinsCard key={coin.id} coin={coin} />
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}

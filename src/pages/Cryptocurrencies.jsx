import { useEffect, useState } from "react";
import CoinsCard from "../components/CoinsCard";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import DataLoader from "../components/DataLoader";

function Cryptocurrencies() {
  const { data: cryptoList, isFetching } = useGetCryptosQuery(200);
  const [cryptos, setCryptos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);

  useEffect(() => {
    if (cryptoList?.data?.coins) {
      setCryptos(cryptoList.data.coins);
    }
  }, [cryptoList]);

  const [localLoading, setLocalLoading] = useState(true);
  useEffect(() => {
    if (!isFetching && cryptoList) {
      const timer = setTimeout(() => {
        setLocalLoading(false);
      }, 2000); // Adjust the delay as needed
      return () => clearTimeout(timer); // Cleanup the timer on component unmount or if the effect runs again
    }
  }, [isFetching, cryptoList]);
  if (localLoading)
    return (
      <h1>
        <DataLoader />
      </h1>
    );
  return (
    <div className="">
      <div className="heading px-5 pt-10">
        <h1 className=" font-Heading text-4xl lg:text-6xl lg:p-6 text-gray-800 text-center bg-white rounded-md p-3 font-semibold">
          Explore the Top Cryptocurrencies of Today
        </h1>
      </div>
      <div className="search-bar flex items-center justify-center pt-10 pb-5">
        <input
          className=" px-4 py-3 xl:w-[500px] rounded-lg outline-none"
          placeholder="Search Cryptocurrency"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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

export default Cryptocurrencies;

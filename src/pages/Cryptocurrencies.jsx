import { useEffect, useState } from "react";
import CoinsCard from "../components/CoinsCard";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

function Cryptocurrencies() {
  const { data: cryptoList, isFetching } = useGetCryptosQuery(200);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

  useEffect(() => {
    if (cryptoList?.data?.coins) {
      setCryptos(cryptoList.data.coins);
    }
  }, [cryptoList]);

  useEffect(() => {
    console.log(cryptos);
  }, [cryptos]);

  if (isFetching) return <h1>Loading data...</h1>;
  return (
    <div className="xl:overflow-y-auto bg-gray-400">
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

export default Cryptocurrencies;

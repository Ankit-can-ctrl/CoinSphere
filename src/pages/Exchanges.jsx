import { Link } from "react-router-dom";
import { useGetCryptoExchangesQuery } from "../services/cryptoMarkets";
import DataLoader from "../components/DataLoader";
import { useEffect, useState } from "react";

function Exchanges() {
  const { data: exchangeList, isFetching } = useGetCryptoExchangesQuery();

  const exchangeArray = exchangeList?.data?.items;

  const [localLoading, setLocalLoading] = useState(true);
  useEffect(() => {
    if (!isFetching && exchangeList) {
      const timer = setTimeout(() => {
        setLocalLoading(false);
      }, 2000); // Adjust the delay as needed
      return () => clearTimeout(timer); // Cleanup the timer on component unmount or if the effect runs again
    }
  }, [isFetching, exchangeList]);

  if (localLoading)
    return (
      <h1>
        <DataLoader />
      </h1>
    );
  return (
    <div className="main-container">
      <div className="header bg-white m-3 p-5 rounded-md font-Heading text-3xl md:text-6xl font-semibold text-gray-600">
        <h1>Global Exchanges</h1>
      </div>
      {exchangeArray.map((item, index) => (
        <div
          className="m-3 hover:scale-103 transition-all duration-500  hover:bg-green-300 bg-white rounded-md "
          key={index}
        >
          <div className="exchanges-list  p-3 flex items-center md:px-5 cursor-pointer justify-between">
            <div className="left flex font-Heading md:text-2xl font-semibold text-gray-600 items-center justify-center gap-2 md:gap-5">
              <h1>{index + 1}</h1>
              <h1>{item.exchange_name}</h1>
            </div>
            <Link to={item.website} className="right md:text-2xl text-blue-600">
              {item.website}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Exchanges;

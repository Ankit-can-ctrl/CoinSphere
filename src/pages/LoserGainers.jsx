import millify from "millify";
import { useGetCryptoGainerQuery } from "../services/cryptoMarkets";
import { Link } from "react-router-dom";

function LoserGainers() {
  const { data, isFetching } = useGetCryptoGainerQuery();
  console.log(data);

  // const textColor =
  //   item.price_change_24h < 0 ? "text-red-500" : "text-green-500";

  if (isFetching) return <div>Loading data...</div>;
  const GainersData = data?.data;
  return (
    <div className="main-container">
      <div className="header bg-white p-5 m-5 rounded-md font-semibold text-gray-600 font-Heading text-3xl md:text-5xl text-center">
        <h1>Global Crypto Top Gainers/Losers</h1>
      </div>
      <div className="Gainers m-5 p-5 flex flex-col gap-10 bg-white rounded-md font-Heading">
        <h1 className="text-3xl font-semibold text-gray-600">Top Gainers:</h1>
        <div className="coin">
          <div className="heading bg-green-100 p-4 rounded-md flex items-center justify-between">
            <div className="left-head flex gap-2">
              <h1>#</h1>
              <h1>Token</h1>
            </div>
            <div className="left-head flex gap-10">
              <h1>Price</h1>
              <h1>24H Price Change</h1>
            </div>
          </div>
          {GainersData.map((item, index) => (
            <div
              key={index}
              className="gainer-Data p-4 rounded-md flex items-center justify-between"
            >
              <div className="left-head flex items-center gap-4">
                <h1>{index + 1}</h1>
                <Link
                  to={item.url}
                  className="name flex items-center justify-center gap-2"
                >
                  <img className=" h-[50px]" src={item.logo} alt="coin icon" />
                  <h1>{item.name}</h1>
                </Link>
              </div>

              {item.price_change_24h < 0 ? (
                <div key={index} className="left-head flex gap-24">
                  <h1 className=" text-red-600">${item.price.toFixed(5)}</h1>
                  <h1 className=" text-red-600">
                    {item.price_change_24h.toFixed(4)}
                  </h1>
                </div>
              ) : (
                <div className="left-head flex gap-24">
                  <h1 className=" text-green-600">${item.price.toFixed(5)}</h1>
                  <h1 className=" text-green-600">
                    {item.price_change_24h.toFixed(4)}
                  </h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoserGainers;

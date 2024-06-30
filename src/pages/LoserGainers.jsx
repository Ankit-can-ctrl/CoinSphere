import {
  useGetCryptoGainerQuery,
  useGetCryptoLoserQuery,
} from "../services/cryptoMarkets";

function LoserGainers() {
  const { data: Loser } = useGetCryptoLoserQuery();
  const { data, isFetching } = useGetCryptoGainerQuery();
  console.log(data);
  console.log(Loser);
  // console.log(LoserData);

  // const textColor =
  //   item.price_change_24h < 0 ? "text-red-500" : "text-green-500";

  if (isFetching) return <div>Loading data...</div>;
  const LoserData = Loser?.data;
  const GainersData = data?.data;
  const dateUpdate = new Date(data?.status.timestamp);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <div>
      <div className="header bg-white p-5 m-5 rounded-md font-semibold text-gray-600 font-Heading text-3xl md:text-5xl text-center">
        <h1>Global Crypto Top Gainers/Losers</h1>
      </div>
      <div className="flex items-center justify-center text-white font-Heading font-semibold">
        <h1>Last Updated : {dateUpdate.toLocaleString("en-GB", options)}</h1>
      </div>
      <Gainers GainersData={GainersData} />;
      <LoserStats LoserData={LoserData} />
    </div>
  );
}
function Gainers({ GainersData }) {
  return (
    <div className="main-container">
      <div className="Gainers m-5 p-5 flex flex-col gap-10 bg-white rounded-md font-Heading">
        <h1 className="text-4xl font-semibold text-green-600">Top Gainers:</h1>
        <div className="coin">
          <div className="heading bg-green-100 p-4 md:px-20 rounded-md flex items-center justify-between">
            <div className="left-head flex gap-2">
              <h1>#</h1>
              <h1>Token</h1>
            </div>
            <div className="left-head flex gap-10">
              <h1>Price</h1>
              <h1>24H Change</h1>
            </div>
          </div>
          {GainersData.map((item, index) => (
            <a
              href={item.url}
              key={index}
              className="gainer-Data py-3 md:px-20 hover:scale-105  transition-all duration-500 hover:bg-green-400 rounded-md flex items-center gap-5 justify-between"
            >
              <div className="left-head flex items-center  gap-4">
                <h1 className="hidden md:block">{index + 1}</h1>
                <div className="name flex flex-col  md:flex-row text-left md:text-center items-start md:items-center justify-center gap-2">
                  <img className=" h-[50px]" src={item.logo} alt="coin icon" />
                  <h1>{item.name}</h1>
                </div>
              </div>

              <div className="right-head">
                {item.price_change_24h < 0 ? (
                  <div key={index} className="left-head flex gap-14">
                    <h1 className=" text-red-600">${item.price.toFixed(5)}</h1>
                    <h1 className=" text-red-600">
                      {(item.price_change_24h * 100).toFixed(4)}
                    </h1>
                  </div>
                ) : (
                  <div className="left-head flex gap-14">
                    <h1 className=" text-green-600">
                      ${item.price.toFixed(5)}
                    </h1>
                    <h1 className=" text-green-600">
                      {`${(item.price_change_24h * 100).toFixed(4)}%`}
                    </h1>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function LoserStats({ LoserData }) {
  return (
    <div className="main-container">
      <div className="Gainers m-5 p-5 flex flex-col gap-10 bg-white rounded-md font-Heading">
        <h1 className="text-4xl font-semibold text-red-600">Top Losers:</h1>
        <div className="coin">
          <div className="heading bg-red-100 p-4 md:px-20 rounded-md flex items-center justify-between">
            <div className="left-head flex gap-2">
              <h1>#</h1>
              <h1>Token</h1>
            </div>
            <div className="left-head flex gap-10">
              <h1>Price</h1>
              <h1>24H Change</h1>
            </div>
          </div>
          {LoserData.map((item, index) => (
            <a
              href={item.url}
              key={index}
              className="gainer-Data py-3 md:px-20 hover:scale-105  transition-all duration-500 hover:bg-green-400 rounded-md flex items-center gap-5 justify-between"
            >
              <div className="left-head flex items-center  gap-4">
                <h1 className="hidden md:block">{index + 1}</h1>
                <div className="name flex flex-col  md:flex-row text-left md:text-center items-start md:items-center justify-center gap-2">
                  <img className=" h-[50px]" src={item.logo} alt="coin icon" />
                  <h1>{item.name}</h1>
                </div>
              </div>

              <div className="right-head">
                {item.price_change_24h < 0 ? (
                  <div key={index} className="left-head flex gap-14">
                    <h1 className=" text-red-600">${item.price.toFixed(5)}</h1>
                    <h1 className=" text-red-600">
                      {(item.price_change_24h * 100).toFixed(4)}
                    </h1>
                  </div>
                ) : (
                  <div className="left-head flex gap-14">
                    <h1 className=" text-green-600">
                      ${item.price.toFixed(5)}
                    </h1>
                    <h1 className=" text-green-600">
                      {`${(item.price_change_24h * 100).toFixed(4)}%`}
                    </h1>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoserGainers;

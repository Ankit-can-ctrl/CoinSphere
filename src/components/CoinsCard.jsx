import millify from "millify";
/*eslint-disable*/
function CoinsCard({ coin }) {
  return (
    <div className="card bg-white hover:scale-105 transition-all duration-500">
      <div className="heading flex items-center justify-between p-10 text-gray-600">
        <h1 className=" font-Heading text-2xl font-semibold">
          {coin.rank}.{coin.name}
        </h1>
        <img className=" h-[50px]" src={coin.iconUrl} alt="bitcoin" />
      </div>
      <div className="coin-description flex flex-col gap-2 text-lg px-10 font-medium text-gray-500 pb-10">
        <h2>Price: {millify(coin.price)}$</h2>
        <h2>Market Cap:{millify(coin.marketCap)}</h2>
        <h2>Daily Change: {millify(coin.change)}%</h2>
      </div>
    </div>
  );
}

export default CoinsCard;

function CoinsCard() {
  return (
    <div className="card bg-gray-200 rounded-2xl">
      <div className="heading flex items-center justify-between p-5">
        <h1 className=" font-Heading text-xl font-semibold">1.Bitcoin</h1>
        <img
          className=" h-[50px]"
          src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"
          alt="bitcoin"
        />
      </div>
      <div className="coin-description flex flex-col px-5 gap-2 text-lg font-normal pb-10">
        <h2>Price:1</h2>
        <h2>Market Cap:1</h2>
        <h2>Daily Change:1</h2>
      </div>
    </div>
  );
}

export default CoinsCard;

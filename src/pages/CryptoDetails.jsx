import HTMLReactParser from "html-react-parser/lib/index";
import { useParams } from "react-router-dom";
import millify from "millify";
import { useEffect, useState } from "react";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

function CryptoDetails() {
  // we can use params to get value from the url which was after : in routes
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
  const cryptoDetails = data?.data?.coin;
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="main-details-container">
      <div className="header flex flex-col items-center justify-center gap-10 py-10 mx-10 font-Heading border-b-2 border-gray-300">
        <div className="flex gap-5 items-center justify-center">
          <h1 className="text-white capitalize text-6xl md:text-8xl font-semibold">
            {cryptoDetails?.name}
          </h1>
          <img
            className=" h-[60px] md:h-[80px]"
            src={cryptoDetails?.iconUrl}
            alt="Coin image"
          />
        </div>
        <p className=" text-center md:text-2xl text-white">
          {cryptoDetails?.description}
        </p>
      </div>
      <div className="filter-coin-data w-full p-10 text-black">
        <select
          className=" min-w-[150px] text-center rounded-lg outline-none border-2 border-gray-500 py-2"
          defaultValue="7d"
          onChange={(value) => setTimePeriod(value)}
        >
          {time.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>
      <div className="stats lg:grid grid-cols-2">
        <Statistics cryptoDetails={cryptoDetails} />
        <OtherStats cryptoDetails={cryptoDetails} />
      </div>
    </div>
  );
}

function Statistics({ cryptoDetails }) {
  return (
    <div className="coin-data flex flex-col gap-10 bg-white rounded-md m-10 md:mx-10 text-center p-10">
      <h1 className=" font-Heading text-3xl text-gray-600 md:text-4xl font-semibold">
        {cryptoDetails?.name} Value Statistics
      </h1>
      <p className=" text md:text-2xl text-gray-500">
        An overview showing the stats of {cryptoDetails?.name}
      </p>
      <div className="coin-stats flex flex-col gap-5 md:p-10 ">
        <div className="Price flex items-center text-gray-700 justify-between">
          <div className="flex items-center gap-3">
            <svg
              className=" text-3xl"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path>
            </svg>
            <h2 className="text-xl md:text-2xl">Price to USD</h2>
          </div>
          <h2 className=" text-xl md:text-2xl font-semibold">
            {cryptoDetails?.price && millify(cryptoDetails.price)}
          </h2>
        </div>
        <div className="Rank flex items-center text-gray-700 justify-between">
          <div className="flex items-center gap-3">
            <svg
              className=" text-3xl"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"></path>
            </svg>
            <h2 className="text-xl md:text-2xl">Rank</h2>
          </div>
          <h2 className=" text-xl md:text-2xl font-semibold">
            {cryptoDetails?.rank}
          </h2>
        </div>
        <div className="Change flex items-center text-gray-700 justify-between">
          <div className="flex items-center gap-3">
            <svg
              className=" text-3xl"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M376 211H256V16L136 301h120v195z"></path>
            </svg>
            <h2 className="text-xl md:text-2xl">Change</h2>
          </div>
          <h2 className=" text-xl md:text-2xl font-semibold">
            {cryptoDetails?.change}%
          </h2>
        </div>
        <div className="MarketCap flex items-center text-gray-700 justify-between">
          <div className="flex items-center gap-3">
            <svg
              className=" text-3xl"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path>
            </svg>
            <h2 className="text-xl md:text-2xl">Market Cap</h2>
          </div>
          <h2 className=" text-xl md:text-2xl font-semibold">
            {cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}
          </h2>
        </div>
        <div className="AllTimeHigh flex items-center text-gray-700 justify-between">
          <div className="flex items-center gap-3">
            <svg
              className=" text-3xl"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21,4h-3V3c0-0.553-0.447-1-1-1H7C6.447,2,6,2.447,6,3v1H3C2.447,4,2,4.447,2,5v3c0,4.31,1.799,6.91,4.819,7.012 c0.88,1.509,2.396,2.597,4.181,2.898V20H9v2h6v-2h-2v-2.09c1.784-0.302,3.301-1.39,4.181-2.898C20.201,14.91,22,12.31,22,8V5 C22,4.447,21.553,4,21,4z M4,8V6h2v6.021v0.809C4.216,12.078,4,9.299,4,8z M12,16c-2.206,0-4-1.794-4-4V4h8v8 C16,14.206,14.206,16,12,16z M18,12.83v-0.809V6h2v2C20,9.299,19.784,12.078,18,12.83z"></path>
            </svg>
            <h2 className="text-xl md:text-2xl">All-time-high(daily-avg)</h2>
          </div>
          <h2 className=" text-xl md:text-2xl font-semibold">
            {cryptoDetails?.allTimeHigh?.price &&
              millify(cryptoDetails?.allTimeHigh?.price)}
          </h2>
        </div>
      </div>
    </div>
  );
}

function OtherStats({ cryptoDetails }) {
  return (
    <div className="coin-data flex flex-col gap-10 bg-white rounded-md m-10 md:mx-10 text-center p-10">
      <h1 className=" font-Heading text-3xl text-gray-600 md:text-4xl font-semibold">
        Other Statistics
      </h1>
      <p className=" text md:text-2xl text-gray-500">
        An overview showing the stats of all cryptocurrencies
      </p>
      <div className="coin-stats flex flex-col gap-5 md:p-10 ">
        <div className="NumberMarket flex items-center text-gray-700 justify-between">
          <div className="flex items-center gap-3">
            <svg
              className=" text-3xl"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z"></path>
              <path
                fillRule="evenodd"
                d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4h-3.5a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="text-xl md:text-2xl">Number of Markets</h2>
          </div>
          <h2 className=" text-xl md:text-2xl font-semibold">
            {cryptoDetails?.numberOfMarkets}
          </h2>
        </div>
        <div className="Exchanges flex items-center text-gray-700 justify-between">
          <div className="flex items-center gap-3">
            <svg
              className=" text-3xl"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#3F51B5" cx="18" cy="18" r="15"></circle>
              <path
                fill="#FFF59D"
                d="M20.3,16v1.7h-3.8v1.4h3.8v1.7h-3.8c0,0.6,0.1,1.2,0.3,1.6c0.2,0.4,0.4,0.8,0.7,1c0.3,0.3,0.7,0.4,1.1,0.6 c0.4,0.1,0.9,0.2,1.4,0.2c0.4,0,0.7,0,1.1-0.1c0.4-0.1,0.7-0.1,1-0.3l0.4,2.7c-0.4,0.1-0.9,0.2-1.4,0.2c-0.5,0.1-1,0.1-1.5,0.1 c-0.9,0-1.8-0.1-2.6-0.4c-0.8-0.2-1.5-0.6-2-1.1c-0.6-0.5-1-1.1-1.4-1.9c-0.3-0.7-0.5-1.6-0.5-2.6h-1.9v-1.7h1.9v-1.4h-1.9V16h1.9 c0.1-1,0.3-1.8,0.6-2.6c0.4-0.7,0.8-1.4,1.4-1.9c0.6-0.5,1.3-0.9,2.1-1.1c0.8-0.3,1.7-0.4,2.6-0.4c0.4,0,0.9,0,1.3,0.1 c0.4,0.1,0.9,0.1,1.3,0.3l-0.4,2.7c-0.3-0.1-0.6-0.2-1-0.3c-0.4-0.1-0.7-0.1-1.1-0.1c-0.5,0-1,0.1-1.4,0.2c-0.4,0.1-0.8,0.3-1,0.6 c-0.3,0.3-0.5,0.6-0.7,1s-0.3,0.9-0.3,1.5H20.3z"
              ></path>
              <circle fill="#4CAF50" cx="30" cy="30" r="15"></circle>
              <path
                fill="#fff"
                d="M28.4,27c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.2,0.7,0.3,1.1,0.5c0.7,0.3,1.4,0.6,2,0.9 c0.6,0.3,1.1,0.7,1.5,1.1c0.4,0.4,0.8,0.9,1,1.4c0.2,0.5,0.4,1.2,0.4,1.9c0,0.7-0.1,1.3-0.3,1.8c-0.2,0.5-0.5,1-0.9,1.4 s-0.9,0.7-1.4,0.9c-0.6,0.2-1.2,0.4-1.8,0.5v2.2h-1.8v-2.2c-0.6-0.1-1.2-0.2-1.8-0.4s-1.1-0.5-1.5-1c-0.5-0.4-0.8-1-1.1-1.6 c-0.3-0.6-0.4-1.4-0.4-2.3h3.3c0,0.5,0.1,1,0.2,1.3c0.1,0.4,0.3,0.6,0.6,0.9c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.6,0.1,0.9,0.1 c0.4,0,0.7,0,0.9-0.1c0.3-0.1,0.5-0.2,0.7-0.4c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.1-0.5,0.1-0.8c0-0.3,0-0.6-0.1-0.8 c-0.1-0.2-0.2-0.5-0.4-0.7s-0.4-0.4-0.7-0.5c-0.3-0.2-0.7-0.3-1.1-0.5c-0.7-0.3-1.4-0.6-2-0.9c-0.6-0.3-1.1-0.7-1.5-1.1 c-0.4-0.4-0.8-0.9-1-1.4c-0.2-0.5-0.4-1.2-0.4-1.9c0-0.6,0.1-1.2,0.3-1.7c0.2-0.5,0.5-1,0.9-1.4c0.4-0.4,0.9-0.7,1.4-1 c0.5-0.2,1.2-0.4,1.8-0.5v-2.4h1.8v2.4c0.6,0.1,1.2,0.3,1.8,0.6c0.5,0.3,1,0.6,1.3,1.1c0.4,0.4,0.7,1,0.9,1.6c0.2,0.6,0.3,1.3,0.3,2 h-3.3c0-0.9-0.2-1.6-0.6-2c-0.4-0.4-0.9-0.7-1.5-0.7c-0.3,0-0.6,0.1-0.9,0.2c-0.2,0.1-0.4,0.2-0.6,0.4c-0.2,0.2-0.3,0.4-0.3,0.6 c-0.1,0.2-0.1,0.5-0.1,0.8C28.3,26.5,28.4,26.8,28.4,27z"
              ></path>
            </svg>
            <h2 className="text-xl md:text-2xl">No. of Exchnages</h2>
          </div>
          <h2 className=" text-xl md:text-2xl font-semibold">
            {cryptoDetails?.numberOfExchanges}
          </h2>
        </div>
        <div className="Approved flex items-center text-gray-700 justify-between">
          <div className="flex items-center gap-3">
            <svg
              className=" text-3xl"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="#8BC34A"
                points="24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"
              ></polygon>
              <polygon
                fill="#CCFF90"
                points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"
              ></polygon>
            </svg>
            <h2 className="text-xl md:text-2xl">Approved supply</h2>
          </div>
          <h2 className=" text-xl md:text-2xl font-semibold">
            {cryptoDetails?.supply.confirmed ? (
              <svg
                className=" text-3xl"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#8BC34A"
                  points="24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"
                ></polygon>
                <polygon
                  fill="#CCFF90"
                  points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"
                ></polygon>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
              </svg>
            )}
          </h2>
        </div>
        <div className="TotalSupply flex items-center text-gray-700 justify-between">
          <div className="flex items-center gap-3">
            <svg
              className=" text-3xl"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              <path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
            </svg>
            <h2 className="text-xl md:text-2xl">Total supply</h2>
          </div>
          <h2 className=" text-xl md:text-2xl font-semibold">
            {cryptoDetails?.supply?.total &&
              millify(cryptoDetails?.supply?.total)}
          </h2>
        </div>
        <div className="Circulatingsupply flex items-center text-gray-700 justify-between">
          <div className="flex items-center gap-3">
            <svg
              className=" text-3xl"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              <path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
            </svg>
            <h2 className="text-xl md:text-2xl">Circulating Supply</h2>
          </div>
          <h2 className=" text-xl md:text-2xl font-semibold">
            {cryptoDetails?.supply?.circulating &&
              millify(cryptoDetails?.supply?.circulating)}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CryptoDetails;

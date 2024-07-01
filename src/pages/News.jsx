import { useEffect, useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import DataLoader from "../components/DataLoader";

function News({ limit }) {
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery();

  const [newsArray, setNewsArray] = useState([]);

  //puttng api object arrays data in newsArrays
  useEffect(() => {
    if (cryptoNews && cryptoNews.data) {
      setNewsArray(cryptoNews.data.slice(0, limit));
    }
  }, [cryptoNews]);

  const [localLoading, setLocalLoading] = useState(true);
  useEffect(() => {
    if (!isFetching && cryptoNews) {
      const timer = setTimeout(() => {
        setLocalLoading(false);
      }, 2000); // Adjust the delay as needed
      return () => clearTimeout(timer); // Cleanup the timer on component unmount or if the effect runs again
    }
  }, [isFetching, cryptoNews]);
  if (localLoading)
    return (
      <h1>
        <DataLoader />
      </h1>
    );
  return (
    <div className=" bg-slate-300">
      <div className="All-coins bg-gray-300">
        <div className="heading font-Heading bg-gray-300">
          <h1 className=" py-10 px-5 text-5xl md:text-6xl font-bold">
            Latest Headlines in Crypto
          </h1>
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
                <h1 className=" font-Heading text-2xl font-semibold text-gray-600 text-center">
                  {topic.title}
                </h1>
                <img
                  className=" rounded-md hover:scale-110 transition-all duration-500"
                  src={topic.thumbnail}
                  alt="crypto news"
                />
                <h3>{topic.createdAt}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;

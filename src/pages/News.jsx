import { useEffect, useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

function News() {
  const { data: cryptoNews } = useGetCryptoNewsQuery();

  const [newsArray, setNewsArray] = useState([]);

  useEffect(() => {
    console.log(cryptoNews);
  }, [cryptoNews]);

  //puttng api object arrays data in newsArrays
  useEffect(() => {
    if (cryptoNews && cryptoNews.data) {
      setNewsArray(cryptoNews.data);
      // console.log(newsArray);
    }
  }, [cryptoNews, newsArray]);

  if (!cryptoNews?.data) return <h1>loading news</h1>;
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
            <div key={index} className="newsCard m-2 rounded-md bg-gray-100">
              <a
                className=" flex flex-col gap-5 justify-between px-3 py-4"
                href={topic.url}
              >
                <h1 className=" font-Heading text-2xl font-semibold text-center">
                  {topic.title}
                </h1>
                <img
                  className=" rounded-md"
                  src={topic.thumbnail}
                  alt="crypto news"
                />
              </a>
            </div>
          ))}
        </div>
        {/* <div className="page-changer flex items-center gap-5 justify-center my-20">
          {pageNo > 1 && (
            <button
              onClick={() => handleBack()}
              className="border-2 border-white px-3 py-2 rounded-xl bg-white md:text-2xl md:px-6 font-Heading font-semibold"
            >
              Back
            </button>
          )}
          <h1 className=" text-xl font-Heading font-semibold md:text-3xl">
            Page: {pageNo}
          </h1>
          <button
            onClick={() => handleNext()}
            className="border-2 border-white px-3 py-2 rounded-xl bg-white md:text-2xl md:px-6 font-Heading font-semibold"
          >
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default News;

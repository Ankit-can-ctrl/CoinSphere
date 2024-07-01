import Navbar from "./components/Navbar";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import News from "./pages/News";
import CryptoDetails from "./pages/CryptoDetails";
import Exchanges from "./pages/Exchanges";
import LoserGainers from "./pages/LoserGainers";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className=" xl:h-screen xl:flex">
      <Navbar />
      <div className=" right-content flex flex-col xl:overflow-y-auto w-full justify-between bg-gray-400 min-h-screen">
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/news" element={<News limit={200} />} />
          <Route path={`/crypto/:coinId`} element={<CryptoDetails />} />
          <Route path="/Exchanges" element={<Exchanges />} />
          <Route path="/Markets" element={<LoserGainers />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import News from "./pages/News";
import CryptoDetails from "./pages/CryptoDetails";
function App() {
  return (
    <div className=" xl:h-screen xl:flex">
      <ScrollToTop />
      <Navbar />
      <div className=" right-content flex flex-col xl:overflow-y-auto w-full justify-between bg-gray-400 min-h-screen">
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/news" element={<News limit={200} />} />
          <Route path={`/crypto/:coinId`} element={<CryptoDetails />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

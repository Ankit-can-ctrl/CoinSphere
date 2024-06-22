import Navbar from "./components/Navbar";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className=" xl:h-screen xl:flex">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
      </Routes>
    </div>
  );
}

export default App;

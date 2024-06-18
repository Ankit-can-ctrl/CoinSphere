import millify from "millify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useGetCryptosQuery } from "../services/cryptoApi";

function Homepage() {
  const { data, isFetching } = useGetCryptosQuery();
  console.log(data);
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default Homepage;

import animationData from "../assets/Animation - 1719827803723.json";
import Lottie from "react-lottie";
function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className=" w-full h-screen z-99 bg-white flex items-center justify-center">
      <Lottie options={defaultOptions} height={500} width={500} />
    </div>
  );
}

export default Loader;

import DataAnimation from "../assets/DataLoaderAnimation.json";
import Lottie from "react-lottie";

function DataLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: DataAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default DataLoader;

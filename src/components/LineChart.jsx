import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useRef, useState } from "react";

// Register the components
ChartJS.register(
  PointElement,
  LineElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

function LineChart({ coinHistory, currentPrice, coinName }) {
  const coinPrice = [];
  const coinTimestamp = [];

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.update();
    }
  }, [coinHistory]);

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleDateString()
    );
  }
  const reversePrice = coinPrice?.slice().reverse();
  const reverseTimeStamps = coinTimestamp?.slice().reverse();

  const data = {
    labels: reverseTimeStamps,
    datasets: [
      {
        label: "Price In USD",
        data: reversePrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        pointRadius: 3,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      scales: {
        x: { reverse: false, type: "category" },
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="chart bg-white mx-4 md:mx-10 rounded-md p-5">
      <div className="h-[600px] md:min-h-[800px] flex items-center justify-center">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
}

export default LineChart;

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
import { useMemo } from "react";

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

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = useMemo(
    () => ({
      labels: coinTimestamp,
      datasets: [
        {
          label: "Price In USD",
          data: coinPrice,
          fill: false,
          backgroundColor: "#0071bd",
          borderColor: "#0071bd",
        },
      ],
    }),
    []
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }),
    []
  );

  return (
    <div className=" min-h-[1000px]">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;

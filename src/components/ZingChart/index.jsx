import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const ZingChart = () => {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        gridLine: {
          display: false,
        },
      },
    },
  };

  const labels = [1, 2, 3, 4, 5];
  const data = {
    labels,
    datasets: [
      {
        label: false,
        data: [120, 240, 500, 200, 400],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        cubicInterpolationMode: "monotone",
      },
      {
        label: [],
        data: [200, 300, 100, 270, 500],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        cubicInterpolationMode: "monotone",
      },
    ],
  };
  return <Line data={data} options={options} />;
};

export default ZingChart;

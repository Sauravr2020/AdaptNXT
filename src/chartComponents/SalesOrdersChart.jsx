import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const SalesOrdersChart = () => {
  const salesOrdersData = {
    labels: [
      "6/30/2024 - 7/6/2024",
      "7/7/2024 - 7/13/2024",
      "7/14/2024 - 7/20/2024",
      "7/21/2024 - 7/27/2024",
    ],
    datasets: [
      {
        label: "Orders",
        data: [4, 3, 2, 2],
        borderColor: "orange",
        backgroundColor: "orange",
        yAxisID: "y1",
      },
      {
        label: "Sales",
        data: [1404, 1000, 600, 300],
        borderColor: "teal",
        backgroundColor: "teal",
        yAxisID: "y2",
      },
    ],
  };

  const options = {
    scales: {
      y1: {
        type: "linear",
        position: "right",
        ticks: {
          callback: function (value) {
            return value.toFixed(0); // Show integer values only
          },
        },
      },
      y2: {
        type: "linear",
        position: "left",
        grid: {
          drawOnChartArea: false, // Only show grid for the first axis
        },
        ticks: {
          callback: function (value) {
            return value.toFixed(0); // Show integer values only
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.dataset.label === "Orders") {
              return `Orders: ${context.raw}`;
            } else if (context.dataset.label === "Sales") {
              return `Sales: ${context.raw}`;
            }
          },
          footer: function () {
            return "Avg Order Value - 351.00";
          },
        },
        // Show tooltip for longer duration
        displayColors: false,
        intersect: false,
        mode: "index",
        position: "nearest",
      },
      legend: {
        position: "top",
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return <Line data={salesOrdersData} options={options} />;
};

export default SalesOrdersChart;

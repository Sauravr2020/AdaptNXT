import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register the components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const SalesPortionChart = () => {
  const data = {
    labels: ["WooCommerce Store", "Shopify Store"],
    datasets: [
      {
        data: [44.2, 55.8],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 20,
          padding: 15,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw || "";
            return `${label}: ${value}%`;
          },
        },
      },
      datalabels: {
        display: true, // Always display data labels
        color: "#fff", // Text color for labels
        formatter: (value, context) => `${value}%`, // Format the label to show percentage
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
    responsive: true,
  };

  return <Pie data={data} options={options} />;
};

export default SalesPortionChart;

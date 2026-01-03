"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = ({ expenses }) => {
  // 🔥 GROUP SAME NAMES
  const groupedData = expenses.reduce((acc, item) => {
    const key = item.name.toLowerCase();
    acc[key] = (acc[key] || 0) + Number(item.amount);
    return acc;
  }, {});

  const labels = Object.keys(groupedData);
  const values = Object.values(groupedData);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#2563eb", // blue
          "#dc2626", // red
          "#16a34a", // green
          "#ca8a04", // yellow
          "#9333ea", // purple
          "#0d9488", // teal
        ],
        borderWidth: 1,
        borderColor: "#18181b",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#e5e7eb",
        },
      },
    },
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800  w-[50%]rounded-xl p-6 mt-10">
      <h3 className="text-lg font-semibold mb-4 text-white">
        Expense Distribution
      </h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpensePieChart;

"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ExpenseBarChart = ({ expenses }) => {
  // 🔥 GROUP SAME NAMES
  const groupedData = expenses.reduce((acc, item) => {
    const key = item.name.toLowerCase(); // food & Food treated same
    acc[key] = (acc[key] || 0) + Number(item.amount);
    return acc;
  }, {});

  const labels = Object.keys(groupedData);
  const values = Object.values(groupedData);

  const data = {
    labels,
    datasets: [
      {
        label: "Expenses (₹)",
        data: values,
        backgroundColor: "#2563eb", // blue-600
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: "#e5e7eb" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#e5e7eb" },
        grid: { color: "#27272a" },
      },
    },
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mt-10">
      <h3 className="text-lg font-semibold mb-4 text-white">
        Expense Summary
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpenseBarChart;

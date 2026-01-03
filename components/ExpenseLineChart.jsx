"use client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const ExpenseLineChart = ({ expenses }) => {
  // 🔥 GROUP BY DATE (SUM AMOUNT)
  const groupedByDate = expenses.reduce((acc, item) => {
    const date = new Date(item.date).toLocaleDateString();
    acc[date] = (acc[date] || 0) + Number(item.amount);
    return acc;
  }, {});

  const labels = Object.keys(groupedByDate);
  const values = Object.values(groupedByDate);

  const data = {
    labels,
    datasets: [
      {
        label: "Daily Expense (₹)",
        data: values,
        borderColor: "#22c55e", // green
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#e5e7eb",
        },
      },
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
        Expense Trend (Daily)
      </h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default ExpenseLineChart;

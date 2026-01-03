"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import ExpenseBarChart from "./ExpenseBarChart";
import ExpensePieChart from "./ExpensePieChart";
import ExpenseLineChart from "./ExpenseLineChart";


const ExpenceCard = ({ name, description, amount, date }) => {
  const formattedDate = new Date(date).toLocaleDateString();

  

  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-red-500">₹{amount}</span>
        <span className="text-sm text-gray-500">{formattedDate}</span>
      </div>
    </div>
  );
};

const ExpenseList = () => {
  const { user, loading } = useAuth();
  const [expenses, setExpenses] = useState([]);
const router = useRouter();
  useEffect(() => {
    if (!user?.email) return;

    const fetchExpenses = async () => {
      const res = await fetch("/api/fetchExp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
        }),
      });

      const data = await res.json();
      setExpenses(data.expenses || []);
     router.refresh();
    };

    fetchExpenses();
  }, [user]);

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-white text-2xl font-bold mb-6">
        Your Expenses
      </h1>

      {expenses.length === 0 ? (
        <p className="text-gray-400">No expenses found</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {expenses.map((exp) => (
            <ExpenceCard
              key={exp._id}
              name={exp.name}
              description={exp.description}
              amount={exp.amount}
              date={exp.date}
            />
          ))}
          <div className="pl-12 flex gap-23 items-center justify-evenly w-full h-full"> 
          {expenses.length > 0 && (
  <ExpenseBarChart expenses={expenses} />
  
)}
{expenses.length > 0 && (
  <ExpensePieChart expenses={expenses} />
)}

{expenses.length > 0 && (
  <ExpenseLineChart expenses={expenses} />
)}

</div>
    

        </div>
      )}
    </div>
  );
};

export default ExpenseList;

"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Trackercard = () => {
  const { user, loading } = useAuth();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  if (loading) return null;

  const handlSubmit = async (e) => {
    e.preventDefault();

    if (!name || !amount || !desc) {
      alert("Please fill all the fields");
      return;
    }
    const mail= user.email;
    try {
      const res = await fetch("/api/exp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, amount, desc, email: mail }),
      });
      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }
      alert("Expense added successfully");
      setName("");
      setAmount("");
      setDesc("");
    } catch (err) {
      alert("Something went wrong");
      console.log(err);
    }
  };

  return (
    <div className="p-6 md:p-10">
      <div className="max-w-3xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-2xl shadow-lg p-8">
        {/* Greeting */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold">Hello {user?.name} 👋</h1>
          <p className="mt-2 text-gray-400">
            Here’s a quick look at your spending this month
          </p>
        </div>

        {/* Expense Summary */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col items-center mb-10">
          <p className="text-gray-400 text-sm">Total expenses (This month)</p>
          <h2 className="text-4xl font-bold mt-2 text-red-500">₹12,000</h2>
        </div>

        {/* Add Expense */}
        <div>
          <h3 className="text-xl font-medium mb-4">Add a new expense</h3>

          <form className="space-y-4" onSubmit={handlSubmit}>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Expense Name
              </label>
              <input
                type="text"
                placeholder="Expense name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-blue-500 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Expense amount
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-blue-500 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Description
              </label>
              <input
                type="text"
                placeholder="e.g. Groceries, Rent"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-blue-500 text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              Add Expense
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Trackercard;

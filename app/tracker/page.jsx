"use client";

import Navbar from "@/components/navbar";
import { useAuth } from "../context/AuthContext";
import { Wallet, PieChart, Lock } from "lucide-react";

const page = () => {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {!user ? (
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold text-center">
            Track your expenses. Stay in control.
          </h1>

          <p className="mt-4 text-center text-gray-400 text-lg">
            Log in to securely manage and analyze your personal finances.
          </p>

          {/* Feature Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/80 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition">
              <Wallet className="text-blue-500 mb-4" size={28} />
              <h3 className="text-lg font-medium">
                Add Daily Expenses
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                Easily record income and expenses with category and date.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition">
              <PieChart className="text-green-500 mb-4" size={28} />
              <h3 className="text-lg font-medium">
                Analyze Spending
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                View monthly summaries and understand spending patterns.
              </p>
            </div>

            <div className="bg-zinc-900/80 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition">
              <Lock className="text-purple-500 mb-4" size={28} />
              <h3 className="text-lg font-medium">
                Private & Secure
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                Your data is encrypted and visible only after login.
              </p>
            </div>
          </div>

          {/* Guest Notice */}
          <div className="mt-16 text-center">
            <p className="text-gray-300">
              🔒 You are currently using the app as a guest.
            </p>
            <p className="mt-2 text-gray-500 text-sm">
              Please log in to start tracking your expenses.
            </p>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <p className="text-lg">
            Welcome <span className="font-medium">{user.name}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default page;

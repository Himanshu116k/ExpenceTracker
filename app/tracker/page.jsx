"use client";

import Navbar from "@/components/navbar";
import { useAuth } from "../context/AuthContext";
import { Wallet, PieChart, Lock } from "lucide-react";
import Footer from "@/components/footer";
import Trackercard from "@/components/Trackercard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ExpenceCard from "@/components/ExpenceCard";

const page = () => {

  const { user, loading } = useAuth();


   const router = useRouter();
    useEffect(() => {
    router.refresh();
  }, []);

  // ✅ STOP rendering until auth finishes
  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <p className="text-gray-400">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {user ? (

        <div>
        <Trackercard/>
        <ExpenceCard/>
        </div>
 
      ) : (
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold text-center">
            Track your expenses. Stay in control.
          </h1>

          <p className="mt-4 text-center text-gray-400 text-lg">
            Log in to securely manage and analyze your personal finances.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Feature
              icon={<Wallet className="text-blue-500" size={28} />}
              title="Add Daily Expenses"
              desc="Easily record income and expenses with category and date."
            />
            <Feature
              icon={<PieChart className="text-green-500" size={28} />}
              title="Analyze Spending"
              desc="View monthly summaries and understand spending patterns."
            />
            <Feature
              icon={<Lock className="text-purple-500" size={28} />}
              title="Private & Secure"
              desc="Your data is encrypted and visible only after login."
            />
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-300">
              🔒 You are currently using the app as a guest.
            </p>
            <p className="mt-2 text-gray-500 text-sm">
              Please log in to start tracking your expenses.
            </p>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="bg-zinc-900/80 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="mt-2 text-gray-400 text-sm">{desc}</p>
  </div>
);

export default page;

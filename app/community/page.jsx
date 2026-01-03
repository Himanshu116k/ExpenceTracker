import Navbar from "@/components/navbar";
import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubCard = () => {
  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center py-20 bg-black min-h-screen ">
        
      <a
        href="https://github.com/Himanshu116k/ExpenceTracker"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-[380px] rounded-2xl p-[2px]
        bg-gradient-to-r from-green-500 via-emerald-400 to-green-600
        hover:shadow-green-500/40 hover:shadow-2xl transition"
      >
        {/* Card */}
        <div className="rounded-2xl bg-black p-8 text-center transition">
          <FaGithub className="text-5xl mx-auto mb-5 text-white group-hover:text-green-400 transition" />

          <h2 className="text-xl font-semibold text-white mb-2">
            Want to contribute?
          </h2>

          <p className="text-gray-400 mb-6">
            Help improve this project by contributing on GitHub.
          </p>

          <span className="inline-block text-green-400 font-medium group-hover:underline">
            Visit GitHub Repository →
          </span>
        </div>
      </a>
    </div>
    </>
  );
};

export default GithubCard;

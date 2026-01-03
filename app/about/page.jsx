import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const page = () => {
  return (
    <>
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-transparent blur-3xl" />
        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Control Your
            <br />
            <span className="text-green-400">Money</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            A powerful expense tracker designed to help you
            understand, manage, and master your finances.
          </p>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400">
            Why we exist
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Most people lose money without realizing it.
            Expense Tracker exposes hidden spending, organizes chaos,
            and turns raw numbers into clarity you can act on.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-28 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            Every interaction is crafted for speed and simplicity.
            No clutter. No confusion. Just focus on what matters:
            your money and your future.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-right">
            Built for
            <br />
            <span className="text-green-400">real life</span>
          </h2>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            What makes it
            <span className="text-green-400"> powerful</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Instant Tracking",
                desc: "Log expenses in seconds with zero friction.",
              },
              {
                title: "Visual Insights",
                desc: "Understand spending through clean analytics.",
              },
              {
                title: "Data Protection",
                desc: "Your financial data stays encrypted and private.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-400/40 hover:shadow-green-400/20 hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            To empower people with financial awareness through
            elegant design, intelligent tools, and absolute clarity.
            Because controlling money means controlling life.
          </p>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default page;

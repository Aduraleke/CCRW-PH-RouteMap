"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { stops } from "@/data/stops";
import Footer from "@/components/Footer";

function StopNode({ name, type }: { name: string; type: "start" | "middle" | "end" }) {
  const colors = {
    start: {
      bg: "linear-gradient(135deg,#f8d195,#a01f11)",
      text: "#a01f11",
      desc: "🟢 Departure point – buses begin boarding here",
    },
    middle: {
      bg: "linear-gradient(135deg,#f8d195,#a01f11)",
      text: "#a01f11",
      desc: "🚌 Pickup stop – buses will stop here for passengers",
    },
    end: {
      bg: "linear-gradient(135deg,#34d399,#059669)",
      text: "#059669",
      desc: "🏁 Final stop – Stadium drop-off point",
    },
  };
  const icon = type === "end" ? "mdi:flag-checkered" : "mdi:bus-side";

  return (
    <div className="relative flex items-start ml-2">
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full shadow-md z-10"
        style={{ background: colors[type].bg }}
      >
        <Icon icon={icon} className="w-6 h-6 text-white" />
      </div>
      <div className="ml-4">
        <h2 className="font-semibold text-base" style={{ color: colors[type].text }}>
          {name}
        </h2>
        <p className="text-xs text-gray-500">{colors[type].desc}</p>
      </div>
    </div>
  );
}

export default function LocationPage() {
  const { id } = useParams();
  const details = stops.find((stop) => stop.id === id);

  if (!details) return <p className="text-center mt-20">Stop not found</p>;

  const path = details.path;
  const lastIndex = path.length - 1;

  return (
    <>
      <main
        className="min-h-screen flex flex-col items-center px-5 py-10 relative"
        style={{ background: "linear-gradient(180deg,#f8d195 0%, #fff 100%)" }}
      >
        {/* 🚀 Upgraded Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center text-center px-4"
        >

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-2xl font-extrabold tracking-tight relative z-10"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f59e0b] to-[#a01f11] animate-gradient-x">
              Your Pickup Journey
            </span>
          </motion.h1>

          {/* Departure Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
              bg-white/60 backdrop-blur-lg border border-[#a01f11]/30 shadow-md 
              transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Icon icon="mdi:map-marker" className="w-5 h-5 text-[#a01f11]" />
            <span className="text-base font-medium text-gray-800">
              Departure: <span className="text-[#a01f11]">{details.name}</span>
            </span>
          </motion.div>

          {/* Journey Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed relative z-10 text-justify"
          >
            Begin your ride from
            <span className="ml-1 px-2 py-0.5 rounded-md bg-[#a01f11]/10 text-[#a01f11] font-semibold">
              {details.name}
            </span>
            . Along the way, you’ll pass through
            <span className="ml-1 px-2 py-0.5 rounded-md bg-gray-200/60 text-gray-800 font-medium">
              {path.slice(1, -1).join(", ")}
            </span>{" "}
            before reaching your final destination at
            <span className="ml-1 px-2 py-0.5 rounded-md bg-[#059669]/10 text-[#059669] font-semibold">
              Adokiye Amiesimaka Stadium
            </span>
            .
          </motion.p>
        </motion.div>

        {/* Roadmap */}
        <div
          className="mt-10 w-full max-w-sm rounded-3xl p-6 shadow-xl relative"
          style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)" }}
        >
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-1 rounded-full"
              style={{ background: "linear-gradient(180deg,#a01f11,#f8d195)" }}
            ></div>

            {/* Stops */}
            <div className="flex flex-col gap-10">
              {path.map((p, i) => (
                <StopNode
                  key={i}
                  name={p}
                  type={i === 0 ? "start" : i === lastIndex ? "end" : "middle"}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="fixed bottom-6 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium shadow-xl hover:scale-105 transition-transform"
          style={{ background: "#a01f11", color: "#fff" }}
        >
          <Icon icon="mdi:arrow-left" className="w-5 h-5" />
          Choose another stop
        </Link>
      </main>

      <Footer />
    </>
  );
}

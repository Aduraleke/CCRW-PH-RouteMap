"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { stops } from "@/data/stops";
import Footer from "@/components/Footer";

function StopNode({ name, type }: { name: string; type: "start" | "middle" | "end" }) {
  const colors = {
    start: { bg: "linear-gradient(135deg,#f8d195,#a01f11)", text: "#a01f11", desc: "🟢 Departure point – buses begin boarding here" },
    middle: { bg: "linear-gradient(135deg,#f8d195,#a01f11)", text: "#a01f11", desc: "🚌 Pickup stop – buses will stop here for passengers" },
    end: { bg: "linear-gradient(135deg,#34d399,#059669)", text: "#059669", desc: "🏁 Final stop – Stadium drop-off point" },
  };
  const icon = type === "end" ? "mdi:flag-checkered" : "mdi:bus-side";

  return (
    <div className="relative flex items-start ml-2">
      <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md z-10" style={{ background: colors[type].bg }}>
        <Icon icon={icon} className="w-6 h-6 text-white" />
      </div>
      <div className="ml-4">
        <h2 className="font-semibold text-base" style={{ color: colors[type].text }}>{name}</h2>
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
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-center leading-snug tracking-tight" style={{ color: "#a01f11" }}>
          Your Pickup Journey
          <br />
          <span className="text-2xl block mt-1">{details.name}</span>
        </h1>

        <p className="mt-4 text-center text-sm text-gray-600 max-w-md leading-relaxed">
          Starting from <strong>{details.name}</strong>, our buses will pick up passengers at each stop along the way. You’ll move through {path.slice(1, -1).join(", ")} before finally arriving at <strong>Adokiye Amiesimaka Stadium</strong>.
        </p>

        {/* Roadmap */}
        <div className="mt-10 w-full max-w-sm rounded-3xl p-6 shadow-xl relative" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)" }}>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 rounded-full" style={{ background: "linear-gradient(180deg,#a01f11,#f8d195)" }}></div>

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

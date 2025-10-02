"use client";

import { useState } from "react";
import StopCard from "./StopCard";
import { stops } from "../data/stops";

export default function Stops() {
  const [query, setQuery] = useState("");
  const defaultStops = stops.slice(0, 3);

  const filteredStops =
    query.trim() === ""
      ? defaultStops
      : stops.filter((stop) => {
          const q = query.toLowerCase();
          const matchName = stop.name.toLowerCase().includes(q);
          const matchPath = stop.path.some((p) => p.toLowerCase().includes(q));
          return matchName || matchPath;
        });

  return (
    <section id="stops" className="w-full max-w-md mt-12">
      <h2 className="text-lg font-bold mb-4 text-center" style={{ color: "#a01f11" }}>
        🚍 Roadmap to the Stadium
      </h2>

      {/* Search */}
      <div className="mb-7 relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your stop..."
          className="w-full pl-11 pr-4 py-3 rounded-full shadow-md text-sm focus:outline-none"
          style={{ border: "1px solid #a01f11", background: "#fff", color: "#333" }}
        />
      </div>

      <div className="relative pl-5">
        <div className="absolute top-0 bottom-0 left-2 w-0.5" style={{ background: "#f8d195" }} />
        <div className="space-y-4">
          {filteredStops.length > 0 ? (
            filteredStops.map((s) => <StopCard key={s.id} stop={s} query={query} />)
          ) : (
            <p className="text-center text-sm text-gray-500">No stops found</p>
          )}
        </div>
      </div>
    </section>
  );
}

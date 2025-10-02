"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Stop } from "../data/stops";

export default function StopCard({ stop, query }: { stop: Stop; query: string }) {
  const q = query.trim().toLowerCase();
  const isMainMatch = stop.name.toLowerCase().includes(q);
  const matchedPath = stop.path.find((p) => p.toLowerCase().includes(q));

  return (
    <Link
      href={`/locations/${stop.id}`}
      className="p-4 rounded-xl shadow-md flex flex-col justify-between transition hover:scale-[1.02] hover:shadow-lg relative"
      style={{
        background: "#fff",
        border: "1px solid rgba(160,31,17,0.07)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="rounded-full flex items-center justify-center"
          style={{
            width: 40,
            height: 40,
            background: "#f8d195",
            border: "2px solid #a01f11",
          }}
        >
          <Icon icon="mdi:bus" style={{ color: "#a01f11", width: 20, height: 20 }} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold" style={{ color: "#a01f11" }}>
            {stop.name}
          </span>

          {!isMainMatch && matchedPath && (
            <span className="text-xs text-gray-500 italic">
              via <strong>{matchedPath}</strong>
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

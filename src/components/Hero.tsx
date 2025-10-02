"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import logo from "../../public/logo.png";

export default function Hero() {
  return (
    <header className="w-full max-w-md text-center">
      <div className="relative mx-auto flex items-center justify-center">
        {/* glowing circle behind logo */}
        <div
          className="absolute rounded-full blur-3xl opacity-40"
          style={{
            width: 200,
            height: 200,
            background: "#f8d195",
            top: -20,
          }}
        />
        <div
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: 140,
            height: 140,
            background: "#fff",
            boxShadow: "0 0 35px rgba(248,209,149,0.7)",
          }}
        >
          <Image
            src={logo}
            alt="CCRW Logo"
            width={120}
            height={120}
            className="rounded-full relative z-10"
          />
        </div>
      </div>

      <h1
        className="mt-6 text-3xl font-extrabold leading-snug"
        style={{ color: "#a01f11" }}
      >
        Port Harcourt, <br /> This is <span>Selfless Love</span>
      </h1>

      <p className="mt-4 text-base font-medium" style={{ color: "#555" }}>
        Crusade & Community Support <strong>24–29 Nov 2025</strong> • 5PM
        daily
      </p>

      <p
        className="mt-1 text-sm tracking-wide"
        style={{ color: "#a01f11", fontWeight: 600 }}
      >
        Adokiye Amiesimaka Stadium, Igwuruta
      </p>

      <div className="mt-6 flex justify-center">
        <a
          href="#stops"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105 animate-pulse"
          style={{
            background: "#a01f11",
            boxShadow: "0 10px 24px rgba(160,31,17,0.25)",
          }}
        >
          <Icon icon="mdi:map-marker" className="w-5 h-5" />
          Find Your Route
        </a>
      </div>
    </header>
  );
}

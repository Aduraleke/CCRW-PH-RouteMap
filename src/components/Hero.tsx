"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import logo from "../../public/logo.png";
import matthew from "../../public/matthew.jpeg";

export default function Hero() {
  return (
    <header className="w-full max-w-2xl mx-auto text-center mt-12 relative overflow-hidden px-4">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <div className="relative mb-5">
          <div className="absolute w-28 h-28 rounded-full bg-[#f8d195] opacity-40 blur-2xl -z-10 animate-pulse-slow" />
          <Image
            src={logo}
            alt="Christ Compassion Revival World Logo"
            width={110}
            height={110}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Location + Theme */}
        <div className="flex flex-col items-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold text-[#a01f11] uppercase tracking-widest">
            #Port Harcourt
          </p>
          <p className="mt-1 text-sm sm:text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#f59e0b] to-[#a01f11]">
            This is Selfless Love
          </p>
        </div>
      </div>

      {/* Main Heading */}
      <h1
        className="mt-6 text-xl sm:text-xl md:text-xl font-extrabold leading-tight text-[#a01f11] max-w-lg mx-auto text-balance"
        aria-label="Join Pastor Matthew for the Crusade and Community Support"
      >
        Join Pastor Matthew for the{" "}
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#f59e0b] to-[#a01f11]">
          Crusade
        </span>{" "}
        &{" "}
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#a01f11] to-[#f59e0b]">
          Community Support
        </span>
      </h1>

      <p className="mt-3 text-[12px] font-bold italic text-gray-700 max-w-md mx-auto">
        Faith Revival • Love in Action • Hope for Port Harcourt
      </p>

      {/* Pastor */}
      <div className="mt-8 flex flex-col items-center">
        <div className="relative">
          <div className="absolute w-32 h-32 rounded-full bg-white shadow-[0_0_35px_rgba(248,209,149,0.6)] -z-10 animate-pulse-slow" />
          <Image
            src={matthew}
            alt="Pastor Matthew Ashimolowo, Visionary Leader"
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>
        <p className="mt-4 text-xl font-extrabold text-[#a01f11]">
          Pastor Matthew Ashimolowo
        </p>
        <p className="text-sm font-semibold text-gray-600 tracking-wide">
          Visionary
        </p>
      </div>

      {/* Event Details */}
      <div className="mt-8 space-y-1">
        <p className="text-base font-semibold text-[#a01f11]">
          24–29 Nov 2025 • 5PM Daily
        </p>
        <p className="text-base font-semibold text-[#a01f11]">
          Adokiye Amiesimaka Stadium, Igwuruta
        </p>
      </div>

      {/* CTA */}
      <div className="mt-9 flex justify-center">
        <a
          href="#stops"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold shadow-xl transition-all transform hover:scale-105 bg-gradient-to-r from-[#f59e0b] to-[#a01f11] hover:from-[#a01f11] hover:to-[#f59e0b]"
          style={{
            boxShadow: "0 8px 18px rgba(248,209,149,0.45)",
          }}
        >
          <Icon icon="mdi:map-marker" className="w-5 h-5" />
          Find Your Route
        </a>
      </div>
    </header>
  );
}

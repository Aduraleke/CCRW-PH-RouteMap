"use client";

import Hero from "../components/Hero";
import Stops from "../components/Stops";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center px-4 py-6"
      style={{ background: "linear-gradient(180deg,#f8d195 0%, #fff 75%)" }}
    >
      <Hero />
      <Stops />
      <Footer />
    </main>
  );
}

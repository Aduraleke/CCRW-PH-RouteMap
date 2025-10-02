"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full mt-16 max-w-md">
      <div className="rounded-xl overflow-hidden shadow-md">
        <div className="py-3 px-4 flex flex-col gap-1 text-sm" style={{ background: "#fff", color: "#333" }}>
          <div>📞 +234 704 800 0341</div>
          <div>🌐 www.ccrwfoundation.org</div>
        </div>
        <div className="py-3 px-4 text-center font-bold text-white" style={{ background: "#a01f11" }}>
          <Icon icon="mdi:star-four-points" className="inline mr-1" />
          All roads lead to the Stadium ✨
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

export default function WhatsAppButton() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {tooltipVisible && (
        <div className="absolute -top-16 right-0 bg-white p-3 rounded-xl shadow-lg text-gray-700 text-sm w-52 flex justify-between items-center border border-gray-100">
          <span>Hi! 👋 Kamu bisa menghubungi kami via WhatsApp</span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="ml-2 text-gray-400 hover:text-gray-700 text-lg leading-none flex-shrink-0"
            aria-label="Tutup tooltip"
          >
            &times;
          </button>
        </div>
      )}

      {/* Desktop */}
      <a
        href="https://wa.link/pk884n"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-green-500 text-white font-semibold py-3 px-5 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300"
      >
        <span>Hubungi Kami</span>
        <Image
          src="/images/asset/logo-wa.png"
          alt="WhatsApp"
          width={22}
          height={22}
          className="w-5 h-5"
        />
      </a>

      {/* Mobile */}
      <a
        href="https://wa.me/6287854454888"
        target="_blank"
        rel="noopener noreferrer"
        className="block md:hidden bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300"
      >
        <Image
          src="/images/asset/logo-wa.png"
          alt="WhatsApp"
          width={22}
          height={22}
          className="w-5 h-5"
        />
      </a>
    </div>
  );
}

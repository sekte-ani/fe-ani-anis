"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCard() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);

  return (
    <section className="py-16 md:py-24 md:px-32 px-6" data-aos="fade-up">
      <div className="relative bg-gradient-to-br from-greenfont1 to-greenfont2 rounded-3xl p-10 md:p-16 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-sm font-semibold text-greenfont3 tracking-widest uppercase mb-4">
            Hubungi Kami
          </span>
          <h1 className="text-2xl md:text-5xl font-bold text-white leading-snug mb-4">
            Konsultasikan Masalah Anda Dengan Kami,{" "}
            <span className="text-secondary">
              Kami Akan Memberikan Solusi Terbaik!
            </span>
          </h1>
          <p className="mt-2 text-white/80 md:text-lg">
            Hubungi Kami Sekarang Untuk Merasakan Jasa-Jasa yang Kami Tawarkan!
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-greenfont1 font-semibold px-6 py-3 rounded-full hover:bg-secondary transition-colors duration-300"
            >
              Hubungi Kami <ArrowRight size={16} />
            </Link>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

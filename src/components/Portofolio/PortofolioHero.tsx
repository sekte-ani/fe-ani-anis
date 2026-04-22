"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortofolioHero() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-third via-secondary/60 to-primary/20 -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-fourth/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
            <span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-3 bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-secondary">
              Karya Terbaik Kami
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-greenfont1 mt-4 leading-tight">
              Portofolio
            </h1>
            <p className="mt-5 text-greenfont3 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Dalam setiap layanan yang kami berikan — UI/UX Design, Web Development,
              Mobile App, hingga AI/ML — kami selalu mengutamakan kualitas dan
              profesionalisme demi memenuhi kepercayaan klien.
            </p>

            <div className="mt-8 flex items-center gap-6 lg:gap-8 justify-center lg:justify-start">
              {[
                { value: "20+", label: "Proyek Selesai" },
                { value: "15+", label: "Klien Puas" },
                { value: "4", label: "Layanan Utama" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-greenfont1">{stat.value}</div>
                  <div className="text-xs text-greenfont3 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex-1 relative w-full max-w-xl lg:max-w-none h-64 md:h-80 lg:h-96"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <Image
              src="/images/portofolio/portofolio-hero.png"
              alt="Portfolio Hero"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
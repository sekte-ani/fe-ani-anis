"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

type Category =
  | "Semua"
  | "Web Development"
  | "Mobile App Development"
  | "AI/Machine Learning"
  | "UI/UX Design";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<Category, "Semua">;
  image: string;
  featured?: boolean;
}

const categories: Category[] = [
  "Semua",
  "Web Development",
  "Mobile App Development",
  "AI/Machine Learning",
  "UI/UX Design",
];

const categoryColors: Record<Exclude<Category, "Semua">, string> = {
  "UI/UX Design": "bg-violet-100 text-violet-700 border-violet-200",
  "Web Development": "bg-blue-100 text-blue-700 border-blue-200",
  "Mobile App Development": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "AI/Machine Learning": "bg-orange-100 text-orange-700 border-orange-200",
};

const projects: Project[] = [
  {
    id: 1,
    title: "Pencatatan Transaksi Warteug",
    description:
      "Aplikasi untuk mempermudah owner dalam hal pencatatan stok yang tersedia dan pencatatan transaksi secara otomatis.",
    category: "UI/UX Design",
    image: "/images/portofolio/portofolio-ui-1.png",
    featured: true,
  },
  {
    id: 2,
    title: "Dashboard Warteug",
    description:
      "Tampilan dashboard untuk manajemen stok dan transaksi warteug yang dirancang modern dan mudah digunakan.",
    category: "UI/UX Design",
    image: "/images/portofolio/portofolio-ui-2.png",
  },
  {
    id: 3,
    title: "SYMALAS",
    description:
      "Aplikasi mobile untuk mempermudah komunikasi antara dosen dan mahasiswa dalam hal pengumpulan tugas secara perkelas.",
    category: "UI/UX Design",
    image: "/images/portofolio/portofolio-ui-3.png",
  },
  {
    id: 4,
    title: "Chef Kos-an",
    description:
      "Website resep masak yang ditujukan untuk anak kos, menyediakan berbagai resep praktis dan terjangkau.",
    category: "UI/UX Design",
    image: "/images/portofolio/portofolio-ui-4.png",
  },
  {
    id: 5,
    title: "MyAbsen",
    description:
      "Aplikasi mobile untuk mempermudah pengelolaan absensi antara perusahaan dan pegawai secara real-time.",
    category: "Mobile App Development",
    image: "/images/portofolio/portofolio-mobile-1.png",
    featured: true,
  },
  {
    id: 6,
    title: "LahanTani",
    description:
      "Platform mobile untuk petani dalam mengelola lahan, pencatatan hasil panen, dan informasi pertanian terkini.",
    category: "Mobile App Development",
    image: "/images/portofolio/portofolio-mobile-2.png",
  },
];

export default function PortofolioGrid() {
  const [active, setActive] = useState<Category>("Semua");
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);

  const filtered =
    active === "Semua"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-3">
            Proyek Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-greenfont1">
            Jelajahi Karya Terbaru
          </h2>
        </div>

        <div
          className="flex flex-wrap gap-2 justify-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                active === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                  : "bg-gray-100 text-gray-500 hover:bg-secondary hover:text-greenfont2"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative h-56 overflow-hidden bg-third">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hovered === project.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-greenfont1/70 via-transparent to-transparent" />
                
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold">
                    <Sparkles size={12} />
                    Featured
                  </div>
                )}

                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hovered === project.id
                      ? "opacity-100 bg-greenfont1/50"
                      : "opacity-0"
                  }`}
                >
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 hover:bg-white/30 transition-colors">
                    <ExternalLink size={20} className="text-white" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[project.category]}`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-greenfont1 text-lg leading-snug group-hover:text-greenfont2 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500">Belum ada proyek di kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
}
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { ArrowRight, Star } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Web Development",
    short_description:
      "Membangun website modern, responsif, dan berkinerja tinggi sesuai kebutuhan bisnis Anda.",
    image: "/images/home/layanan/layanan-web.png",
    path: "/layanan/web",
  },
  {
    id: 2,
    name: "UI/UX Design",
    short_description:
      "Merancang antarmuka yang intuitif dan pengalaman pengguna yang menyenangkan untuk produk digital Anda.",
    image: "/images/home/layanan/layanan-ui.png",
    path: "/layanan/ui",
  },
  {
    id: 3,
    name: "Mobile Development",
    short_description:
      "Mengembangkan aplikasi mobile cross-platform yang powerful dan user-friendly untuk iOS & Android.",
    image: "/images/home/layanan/layanan-mobile.png",
    path: "/layanan/mobile",
  },
  {
    id: 4,
    name: "AI & Machine Learning",
    short_description:
      "Mengintegrasikan kecerdasan buatan dan machine learning untuk mengotomatiskan dan mengoptimalkan proses bisnis.",
    image: "/images/home/layanan/layanan-ai.png",
    path: "/layanan/ml",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    job: "CEO, StartupTech",
    message:
      "ANI Solution memberikan hasil yang luar biasa! Website kami kini lebih modern dan performa meningkat drastis. Tim mereka sangat profesional dan komunikatif.",
    image: "/images/home/testimoni/user-1.png",
  },
  {
    id: 2,
    name: "Sari Dewi",
    job: "Product Manager, DigitalCo",
    message:
      "Desain UI/UX yang mereka buat benar-benar meningkatkan user experience aplikasi kami. Sangat puas dengan kualitas kerja dan ketepatan waktu pengiriman.",
    image: "/images/home/testimoni/user-2.png",
  },
  {
    id: 3,
    name: "Ahmad Rizky",
    job: "Founder, EduApp",
    message:
      "Aplikasi mobile yang dikembangkan ANI Solution melebihi ekspektasi kami. Proses kolaborasi berjalan lancar dan hasilnya sangat memuaskan.",
    image: "/images/home/testimoni/user-3.png",
  },
];

export default function Layanan() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);

  return (
    <section className="relative py-16 md:py-24 md:px-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute -z-10 bottom-[-100px] left-20 w-full h-full">
        <Image
          src="/images/home/hero/background2.3.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Layanan Header */}
      <div className="mb-10" data-aos="fade-up">
        <span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-2">
          Apa yang Kami Tawarkan
        </span>
        <h2 className="md:text-4xl text-3xl font-bold text-greenfont1">
          Layanan Kami
        </h2>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 gap-6" id="services-section">
        {services.map((service, idx) => (
          <Link key={service.id} href={service.path} className="block group">
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-greenfont1/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">
                  {service.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.short_description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-greenfont2 font-semibold group-hover:gap-3 transition-all duration-300">
                  Pelajari Selengkapnya <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Testimoni */}
      <div className="py-20">
        <div data-aos="fade-up">
          <span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-2">
            Testimoni
          </span>
          <h2 className="text-left md:text-4xl text-3xl font-bold text-greenfont1 mb-1">
            Partner Kami, Teman Kami.
          </h2>
          <p className="text-left text-lg text-greenfont3 mb-8">
            Ini Kata Mereka
          </p>
        </div>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-8xl mx-auto pb-10"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className="bg-white py-8 px-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                data-aos="fade-up"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-greenfont1 mb-6 leading-relaxed flex-1">
                  &ldquo;{testimonial.message}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-greenfont1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-greenfont3">{testimonial.job}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

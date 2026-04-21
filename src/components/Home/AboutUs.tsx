"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutUs() {
	useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
	}, []);

	return (
		<section
			className="relative flex flex-col md:flex-row gap-8 min-h-screen md:py-20 md:px-32 px-4 py-12 bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url('/images/home/hero/background1.png')" }}
		>
			{/* Kiri - Gambar */}
			<div className="md:w-1/2 grid grid-cols-2 gap-4">
				<div className="col-span-2 h-80 md:h-96 relative rounded-2xl overflow-hidden shadow-xl" data-aos="fade-in">
					<Image
						src="/images/home/hero/hero-1.png"
						alt="Team ANI Solution"
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-greenfont1/20" />
				</div>
				<div className="h-44 md:h-52 relative rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="100">
					<Image
						src="/images/home/hero/hero-2.png"
						alt="Workspace"
						fill
						className="object-cover"
					/>
				</div>
				<div className="h-44 md:h-52 relative rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
					<Image
						src="/images/home/hero/hero-3.png"
						alt="Collaboration"
						fill
						className="object-cover"
					/>
				</div>
			</div>

			{/* Kanan - Teks */}
			<div className="md:w-1/2 flex flex-col md:px-8 justify-center gap-4">
				<div data-aos="fade-up">
					<span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-2">
						Tentang Kami
					</span>
					<h2 className="md:text-5xl text-3xl font-bold text-greenfont1 leading-tight">
						Kenali Kami Lebih <span className="text-greenfont2">Dekat</span>
					</h2>
				</div>

				<p className="text-gray-600 text-justify leading-relaxed" data-aos="fade-up" data-aos-delay="100">
					Di A.N.I Solution, kami percaya bahwa setiap bisnis memiliki potensi
					untuk berkembang lebih jauh dengan pemanfaatan teknologi yang tepat.
					Kami hadir sebagai mitra digital Anda untuk mewujudkan potensi tersebut.
				</p>

				<ul className="space-y-3" data-aos="fade-up" data-aos-delay="200">
					{[
						"Inovasi dari Mahasiswa untuk Semua",
						"Berorientasi pada Pengguna",
						"Fokus pada Solusi Nyata",
					].map((item) => (
						<li key={item} className="flex items-center gap-3">
							<span className="flex-shrink-0 w-6 h-6 rounded-full bg-greenfont2/10 flex items-center justify-center">
								<Check size={14} className="text-greenfont2" />
							</span>
							<span className="text-greenfont1 font-medium">{item}</span>
						</li>
					))}
				</ul>

				<p className="text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
					Kami mengundang Anda untuk menjadi bagian dari perjalanan kami dalam
					menciptakan masa depan digital yang lebih baik.
				</p>

				<p className="font-bold text-greenfont2 text-lg" data-aos="fade-up" data-aos-delay="400">
					#InovasiUntukIndonesia
				</p>
			</div>
		</section>
	);
}

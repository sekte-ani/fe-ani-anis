"use client";
import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const points = [
	"Menyediakan berbagai solusi untuk menciptakan website berkualitas tinggi yang didukung strategi digital yang efektif.",
	"Memberikan jawaban yang jelas dan cepat, siap untuk segera memulai pekerjaan.",
	"Website dikembangkan dengan teknologi terbaru dan arsitektur yang scalable.",
];

export default function Bottom() {
	useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
	}, []);

	return (
		<section className="py-16 md:py-20 my-8" data-aos="fade-up">
			<div className="max-w-7xl mx-auto w-full px-4 md:px-6">
			<div className="relative bg-gradient-to-br from-greenfont1 to-greenfont2 rounded-3xl p-10 md:p-16 overflow-hidden">
				<div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
				<div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full" />

				<div className="relative z-10">
					<span className="inline-block text-sm font-semibold text-greenfont3 tracking-widest uppercase mb-4">
						Hubungi Kami
					</span>
					<h1 className="text-2xl md:text-4xl font-bold text-white leading-snug mb-4">
						Konsultasikan Masalah Anda Dengan Kami,{" "}
						<span className="text-secondary">Kami Akan Memberikan Solusi Terbaik!</span>
					</h1>
					<p className="text-white/80 md:text-lg mb-8">
						Hubungi Kami Sekarang Untuk Merasakan Jasa-Jasa yang Kami Tawarkan!
					</p>

					<ul className="space-y-3 mb-10">
						{points.map((point, i) => (
							<li key={i} className="flex items-start gap-3">
								<CheckCircle className="text-green-300 w-5 h-5 mt-0.5 flex-shrink-0" />
								<span className="text-white/90">{point}</span>
							</li>
						))}
					</ul>

					<div className="flex flex-wrap gap-4">
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
							Lihat Layanan Lain
						</Link>
					</div>
				</div>
			</div>
			</div>
		</section>
	);
}

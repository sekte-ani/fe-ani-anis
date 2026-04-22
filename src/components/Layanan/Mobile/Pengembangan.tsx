"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pengembangan() {
	useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
	}, []);

	return (
		<section className="py-12 md:mt-12">
			<div className="max-w-7xl mx-auto w-full px-4 md:px-6">
				<div data-aos="fade-up">
					<span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-2">
						Alur Kerja
					</span>
					<h2 className="text-3xl font-bold text-greenfont1 mb-2">
						Proses Pengembangan
					</h2>
					<p className="text-gray-600">Langkah-langkah proses pemesanan jasa Kami</p>
				</div>

				<div className="mt-10 md:block hidden" data-aos="fade-right">
					<Image
						src="/images/layanan/roadmap-dekstop.png"
						alt="Roadmap Proses Pengembangan"
						width={1200}
						height={400}
						className="w-full md:w-3/4 mx-auto rounded-2xl shadow-md"
					/>
				</div>
				<div className="mt-10 md:hidden" data-aos="fade-left">
					<Image
						src="/images/layanan/roadmap-mobile.png"
						alt="Roadmap Proses Pengembangan"
						width={600}
						height={800}
						className="w-full rounded-2xl shadow-md"
					/>
				</div>
			</div>
		</section>
	);
}
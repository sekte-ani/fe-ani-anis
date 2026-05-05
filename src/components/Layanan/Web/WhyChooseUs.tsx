"use client";
import { useEffect } from "react";
import {
	Smartphone,
	Search,
	Wrench,
	FileCode2,
	ShieldCheck,
	Zap,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const reasons = [
	{
		icon: Smartphone,
		title: "Fully Responsive",
		desc: "Tampilan optimal di semua perangkat — desktop, tablet, maupun mobile.",
	},
	{
		icon: Search,
		title: "SEO-Ready",
		desc: "Dibangun dengan praktik SEO terbaik agar mudah ditemukan di mesin pencari.",
	},
	{
		icon: Zap,
		title: "Performa Cepat",
		desc: "Dioptimasi untuk loading cepat dan pengalaman pengguna yang mulus.",
	},
	{
		icon: ShieldCheck,
		title: "Aman & Terpercaya",
		desc: "Standar keamanan modern dengan SSL, proteksi data, dan best practices.",
	},
	{
		icon: Wrench,
		title: "Maintenance Support",
		desc: "Dukungan after-sales untuk pemeliharaan, update, dan pengembangan lanjutan.",
	},
	{
		icon: FileCode2,
		title: "Source Code Handover",
		desc: "Source code menjadi milik Anda sepenuhnya setelah project selesai.",
	},
];

export default function WhyChooseUs() {
	useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
	}, []);

	return (
		<section className="py-12 md:py-16">
			<div className="max-w-7xl mx-auto w-full px-4 md:px-6">
				<div className="text-center mb-12" data-aos="fade-up">
					<span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-2">
						Mengapa Kami
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-greenfont1 mb-3">
						Kenapa Memilih Layanan Kami?
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Komitmen kami adalah memberikan hasil terbaik dengan kualitas yang
						tidak hanya memuaskan, tetapi juga berkelanjutan.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{reasons.map((reason, i) => {
						const Icon = reason.icon;
						return (
							<div
								key={reason.title}
								data-aos="fade-up"
								data-aos-delay={i * 100}
								className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:bg-third/40 transition-colors duration-300"
							>
								<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-third flex items-center justify-center">
									<Icon className="text-greenfont1 w-6 h-6" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-greenfont1 mb-1">
										{reason.title}
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										{reason.desc}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

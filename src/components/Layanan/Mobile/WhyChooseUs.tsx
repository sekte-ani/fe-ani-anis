"use client";
import { useEffect } from "react";
import {
	Layers,
	Gauge,
	WifiOff,
	Bell,
	Store,
	FileCode2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const reasons = [
	{
		icon: Layers,
		title: "Cross-Platform Ready",
		desc: "Satu codebase untuk iOS dan Android, hemat waktu dan biaya pengembangan.",
	},
	{
		icon: Gauge,
		title: "Performa Native",
		desc: "Dioptimasi untuk smooth animation, fast startup, dan low memory footprint.",
	},
	{
		icon: WifiOff,
		title: "Offline-Ready",
		desc: "Aplikasi tetap berfungsi tanpa koneksi internet dengan local storage & sync.",
	},
	{
		icon: Bell,
		title: "Push Notification",
		desc: "Integrasi notifikasi realtime untuk meningkatkan engagement pengguna.",
	},
	{
		icon: Store,
		title: "Publish ke Store",
		desc: "Kami bantu proses submission ke App Store dan Google Play Store hingga approved.",
	},
	{
		icon: FileCode2,
		title: "Source Code Handover",
		desc: "Source code dan akses akun store menjadi milik Anda sepenuhnya.",
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
						Kami fokus membangun aplikasi mobile yang tidak hanya berjalan,
						tapi juga berkembang bersama bisnis Anda.
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

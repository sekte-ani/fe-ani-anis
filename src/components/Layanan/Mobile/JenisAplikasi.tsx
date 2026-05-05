"use client";
import { useEffect } from "react";
import {
	ShoppingBag,
	Store,
	Users,
	Bike,
	Wallet,
	GraduationCap,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const types = [
	{
		icon: ShoppingBag,
		title: "E-Commerce App",
		desc: "Aplikasi belanja online dengan katalog, keranjang, dan integrasi payment gateway.",
	},
	{
		icon: Store,
		title: "Marketplace",
		desc: "Platform multi-seller dengan manajemen toko, produk, dan transaksi terpusat.",
	},
	{
		icon: Users,
		title: "Social & Community",
		desc: "Aplikasi sosial dengan fitur chat, feed, komentar, dan notifikasi realtime.",
	},
	{
		icon: Bike,
		title: "On-Demand Service",
		desc: "Aplikasi jasa on-demand seperti delivery, ride-hailing, atau layanan rumah tangga.",
	},
	{
		icon: Wallet,
		title: "Fintech & E-Wallet",
		desc: "Aplikasi keuangan, dompet digital, dan layanan pembayaran dengan keamanan tinggi.",
	},
	{
		icon: GraduationCap,
		title: "LMS & Edukasi",
		desc: "Aplikasi pembelajaran dengan konten video, kuis, dan tracking progres siswa.",
	},
];

export default function JenisAplikasi() {
	useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
	}, []);

	return (
		<section className="py-12 md:py-16 bg-third/40">
			<div className="max-w-7xl mx-auto w-full px-4 md:px-6">
				<div className="text-center mb-12" data-aos="fade-up">
					<span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-2">
						Jenis Layanan
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-greenfont1 mb-3">
						Jenis Aplikasi Mobile yang Kami Kerjakan
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Berbagai kategori aplikasi mobile dapat kami kembangkan sesuai
						kebutuhan dan model bisnis Anda.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{types.map((type, i) => {
						const Icon = type.icon;
						return (
							<div
								key={type.title}
								data-aos="fade-up"
								data-aos-delay={i * 100}
								className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-greenfont3 hover:shadow-xl transition-all duration-300"
							>
								<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-greenfont1 to-greenfont2 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
									<Icon className="text-white w-7 h-7" />
								</div>
								<h3 className="text-xl font-semibold text-greenfont1 mb-2">
									{type.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">{type.desc}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

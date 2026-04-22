"use client";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const packages = [
	{
		name: "Basic",
		price: "Rp1.500.000",
		description: "Cocok untuk bisnis yang baru memulai kehadiran online.",
		features: [
			"Landing page (1 halaman)",
			"Desain responsif",
			"Domain gratis (.com/.net)",
			"SSL (HTTPS) gratis",
			"SEO dasar",
			"Form kontak",
		],
		highlight: false,
	},
	{
		name: "Standard",
		price: "Rp3.500.000",
		description: "Solusi lengkap untuk bisnis yang ingin tampil lebih profesional.",
		features: [
			"Multi-page website",
			"CMS (kelola konten sendiri)",
			"Domain & SSL gratis",
			"SEO lanjutan",
			"Form kontak & WhatsApp",
			"3 bulan maintenance",
		],
		highlight: true,
	},
	{
		name: "Premium",
		price: "Rp7.500.000",
		description: "Untuk bisnis yang membutuhkan fitur lengkap dan skalabel.",
		features: [
			"Website e-commerce",
			"Fitur & desain kustom",
			"API integration",
			"Domain & SSL gratis",
			"SEO premium",
			"Admin panel",
			"6 bulan maintenance",
		],
		highlight: false,
	},
];

export default function Paket() {
	useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
	}, []);

	return (
		<section className="py-12">
			<div className="max-w-7xl mx-auto w-full px-4 md:px-6">
			<div data-aos="fade-up" className="mb-10">
				<span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-2">
					Harga
				</span>
				<h2 className="text-2xl md:text-3xl font-bold text-greenfont1 mb-2">
					Paket Website
				</h2>
				<p className="text-gray-600 max-w-xl">
					Setiap paket sudah termasuk domain (.com/.net) dan SSL (HTTPS) gratis
					untuk keamanan dan peringkat Google yang lebih baik.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
				{packages.map((pkg, index) => (
					<div
						key={index}
						className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
							pkg.highlight
								? "bg-greenfont1 text-white shadow-2xl scale-105"
								: "bg-white border border-gray-100 shadow-md hover:shadow-xl"
						}`}
					>
						{pkg.highlight && (
							<span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-greenfont2 text-white text-xs font-bold px-4 py-1 rounded-full">
								Paling Populer
							</span>
						)}

						<h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-greenfont1"}`}>
							{pkg.name}
						</h3>
						<p className={`text-sm mb-4 ${pkg.highlight ? "text-white/70" : "text-gray-500"}`}>
							{pkg.description}
						</p>
						<p className={`text-3xl font-bold mb-6 ${pkg.highlight ? "text-white" : "text-greenfont1"}`}>
							{pkg.price}
						</p>

						<a
							href="https://wa.link/pk884n"
							target="_blank"
							rel="noopener noreferrer"
							className={`w-full text-center font-semibold py-3 rounded-full mb-6 transition-colors duration-300 ${
								pkg.highlight
									? "bg-white text-greenfont1 hover:bg-secondary"
									: "bg-greenfont1 text-white hover:bg-greenfont2"
							}`}
						>
							Mulai Sekarang
						</a>

						<ul className="space-y-3 flex-1">
							{pkg.features.map((feature, idx) => (
								<li key={idx} className="flex items-start gap-3">
									<CheckCircle
										className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
											pkg.highlight ? "text-green-300" : "text-green-500"
										}`}
									/>
									<span className={`text-sm ${pkg.highlight ? "text-white/90" : "text-gray-700"}`}>
										{feature}
									</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			</div>
		</section>
	);
}

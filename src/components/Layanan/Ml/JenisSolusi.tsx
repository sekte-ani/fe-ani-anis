"use client";
import { useEffect } from "react";
import {
	Bot,
	Eye,
	TrendingUp,
	Sparkles,
	FileText,
	ScanText,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const types = [
	{
		icon: Bot,
		title: "Chatbot & AI Assistant",
		desc: "Asisten virtual berbasis LLM untuk customer service, FAQ, dan otomasi internal.",
	},
	{
		icon: Eye,
		title: "Computer Vision",
		desc: "Deteksi objek, face recognition, dan analisis gambar untuk berbagai industri.",
	},
	{
		icon: TrendingUp,
		title: "Predictive Analytics",
		desc: "Model prediksi untuk forecasting penjualan, churn, demand, dan tren bisnis.",
	},
	{
		icon: Sparkles,
		title: "Recommendation System",
		desc: "Sistem rekomendasi personal untuk produk, konten, atau user-matching.",
	},
	{
		icon: FileText,
		title: "NLP & Text Analysis",
		desc: "Sentiment analysis, klasifikasi teks, dan ekstraksi informasi dari dokumen.",
	},
	{
		icon: ScanText,
		title: "OCR & Document AI",
		desc: "Otomasi pembacaan KTP, invoice, kontrak, dan dokumen scanned lainnya.",
	},
];

export default function JenisSolusi() {
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
						Solusi ML & AI yang Kami Kerjakan
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Dari otomasi sederhana hingga sistem AI kompleks, kami bantu bisnis
						Anda memanfaatkan kekuatan data dan model machine learning.
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

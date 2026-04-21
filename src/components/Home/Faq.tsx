"use client";

import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
	{
		question: "Layanan apa saja yang ditawarkan oleh A.N.I Solution?",
		answer:
			"Kami menawarkan berbagai layanan, seperti: Pengembangan aplikasi web & mobile, Solusi berbasis AI & Machine Learning dan UI/UX design.",
	},
	{
		question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?",
		answer:
			"Durasi proyek bergantung pada kompleksitas dan cakupan pekerjaan. Proyek sederhana dapat memakan waktu beberapa minggu, sementara proyek yang lebih kompleks bisa berlangsung beberapa bulan. Estimasi waktu akan diberikan setelah diskusi awal.",
	},
	{
		question: "Apakah ANI Solution memberikan layanan purna jual (pemeliharaan)?",
		answer:
			"Ya, kami menyediakan layanan pemeliharaan dan dukungan teknis setelah proyek selesai. Ini mencakup perbaikan bug, pembaruan sistem, serta peningkatan fitur sesuai kebutuhan bisnis Anda.",
	},
	{
		question: "Apakah ANI Solution menerima revisi selama proyek berlangsung?",
		answer:
			"Tentu, kami menerima revisi sesuai dengan kesepakatan dalam perjanjian proyek. Kami memastikan hasil akhir sesuai dengan kebutuhan dan harapan klien.",
	},
	{
		question: "Bagaimana cara pembayaran untuk layanan yang diberikan?",
		answer:
			"Kami menyediakan beberapa metode pembayaran, tergantung pada kesepakatan. Detail pembayaran akan dijelaskan dalam proposal proyek.",
	},
];

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
	}, []);

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			className="relative py-20 md:py-24 bg-cover bg-center bg-no-repeat bg-fixed"
			style={{ backgroundImage: "url('/images/home/hero/background3.1.png')" }}
		>
			<div className="w-full max-w-4xl mx-auto px-4 md:px-8">
				<div className="text-center mb-12" data-aos="fade-up">
					<span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-2">
						FAQ
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-greenfont1">
						Frequently Asked Questions
					</h2>
				</div>

				<div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
								openIndex === index ? "ring-1 ring-greenfont3/40" : ""
							}`}
						>
							<button
								className="w-full text-left px-6 py-5 text-greenfont1 font-semibold flex justify-between items-center gap-4 transition-colors duration-200 hover:text-greenfont2"
								onClick={() => toggle(index)}
							>
								<span>{faq.question}</span>
								<span className="flex-shrink-0 w-7 h-7 rounded-full bg-greenfont1/10 flex items-center justify-center transition-colors duration-200">
									{openIndex === index ? (
										<Minus size={16} className="text-greenfont1" />
									) : (
										<Plus size={16} className="text-greenfont1" />
									)}
								</span>
							</button>

							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${
									openIndex === index ? "max-h-96" : "max-h-0"
								}`}
							>
								<div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
									{faq.answer}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

"use client";
import { useEffect } from "react";
import {
	Target,
	Lock,
	Server,
	Activity,
	Plug,
	RefreshCw,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const reasons = [
	{
		icon: Target,
		title: "Custom Model",
		desc: "Model dilatih dan di-tuning sesuai data dan kebutuhan spesifik bisnis Anda.",
	},
	{
		icon: Lock,
		title: "Data Privacy",
		desc: "Opsi on-premise dan private deployment untuk data sensitif dan compliance.",
	},
	{
		icon: Server,
		title: "Scalable Infrastructure",
		desc: "Arsitektur cloud-ready yang siap menangani trafik dan beban inferensi besar.",
	},
	{
		icon: Activity,
		title: "Model Monitoring",
		desc: "Dashboard untuk memantau akurasi, drift, dan performa model di production.",
	},
	{
		icon: Plug,
		title: "Integration-Ready API",
		desc: "Endpoint API yang rapi dan terdokumentasi, mudah di-integrate ke sistem Anda.",
	},
	{
		icon: RefreshCw,
		title: "Continuous Improvement",
		desc: "Model di-retrain berkala dengan data baru agar performa tetap optimal.",
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
						Kenapa Memilih Layanan ML & AI Kami?
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Kami fokus membangun solusi AI yang tidak hanya akurat di lab,
						tapi juga reliable saat dipakai di production.
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

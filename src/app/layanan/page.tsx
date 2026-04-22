import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
	{
		name: "Web Development",
		description: "Website modern, responsif, dan berkinerja tinggi untuk bisnis Anda.",
		href: "/layanan/web",
		image: "/images/layanan/layanan-web.png",
	},
	{
		name: "Mobile App Development",
		description: "Aplikasi mobile cross-platform yang powerful untuk Android & iOS.",
		href: "/layanan/mobile",
		image: "/images/layanan/layanan-mobile.png",
	},
	{
		name: "UI/UX Design",
		description: "Antarmuka yang intuitif dan pengalaman pengguna yang menyenangkan.",
		href: "/layanan/ui",
		image: "/images/layanan/layanan-ui.png",
	},
	{
		name: "AI & Machine Learning",
		description: "Solusi cerdas berbasis AI untuk mengoptimalkan proses bisnis Anda.",
		href: "/layanan/ml",
		image: "/images/layanan/layanan-ml.png",
	},
];

export default function LayananIndex() {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-7xl mx-auto w-full px-4 md:px-6">
			<div className="mb-12">
				<span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-2">
					Apa yang Kami Tawarkan
				</span>
				<h1 className="text-3xl md:text-4xl font-bold text-greenfont1">
					Layanan Kami
				</h1>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{services.map((service) => (
					<Link key={service.href} href={service.href} className="block group">
						<div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="relative h-56 overflow-hidden">
								<Image
									src={service.image}
									alt={service.name}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-greenfont1/60 to-transparent" />
								<h2 className="absolute bottom-4 left-6 text-xl font-bold text-white">
									{service.name}
								</h2>
							</div>
							<div className="p-6">
								<p className="text-gray-600 leading-relaxed">{service.description}</p>
								<span className="mt-4 inline-flex items-center gap-2 text-greenfont2 font-semibold group-hover:gap-3 transition-all duration-300">
									Selengkapnya <ArrowRight size={16} />
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
			</div>
		</section>
	);
}

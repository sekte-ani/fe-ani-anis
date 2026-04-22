import Image from "next/image";

export default function Jasa() {
	return (
		<section className="mt-12 py-12">
			<div className="max-w-7xl mx-auto w-full px-4 md:px-6">
				<div className="flex flex-col md:flex-row items-center gap-10">
					<div className="md:w-1/2 relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
						<Image
							src="/images/layanan/layanan-ml.png"
							alt="AI & Machine Learning"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-tr from-greenfont1/30 to-transparent" />
					</div>

					<div className="md:w-1/2">
						<span className="inline-block bg-third text-greenfont1 font-semibold text-sm px-4 py-2 rounded-full mb-4">
							Layanan
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-greenfont1 leading-tight mb-4">
							Jasa Machine Learning & Artificial Intelligence
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Kami menyediakan layanan pengembangan solusi Machine Learning dan
							Artificial Intelligence yang cerdas dan inovatif untuk membantu bisnis
							Anda beradaptasi dan berkembang di era digital.
						</p>
						<p className="mt-4 text-gray-600 leading-relaxed">
							Dengan teknologi AI yang disesuaikan dengan kebutuhan, kami
							menghadirkan solusi mulai dari otomatisasi proses, analisis data yang
							lebih akurat, hingga pengambilan keputusan yang lebih cerdas.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
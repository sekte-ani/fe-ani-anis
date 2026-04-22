import Image from "next/image";

export default function Jasa() {
	return (
		<section className="mt-12 py-12">
			<div className="max-w-7xl mx-auto w-full px-4 md:px-6">
				<div className="flex flex-col md:flex-row items-center gap-10">
					<div className="md:w-1/2 relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
						<Image
							src="/images/layanan/layanan-ui.png"
							alt="UI/UX Design"
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
							Desain UI/UX
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Tingkatkan kualitas bisnis Anda dengan desain UI/UX yang intuitif,
							menarik, dan berfokus pada pengalaman pengguna. Kami membantu
							menciptakan antarmuka yang tidak hanya estetis, tetapi juga
							fungsional, sehingga pengguna dapat berinteraksi dengan mudah dan nyaman.
						</p>
						<p className="mt-4 text-gray-600 leading-relaxed">
							Apapun jenis platform yang Anda kembangkan — website, aplikasi mobile,
							atau sistem digital lainnya — kami siap merancang solusi yang sesuai
							dengan kebutuhan Anda dengan pendekatan berbasis riset dan usability.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
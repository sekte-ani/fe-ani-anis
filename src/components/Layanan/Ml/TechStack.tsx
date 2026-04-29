"use client";
import { useEffect } from "react";
import {
	Brain,
	MessageSquare,
	Eye,
	Sparkles,
	Database,
	Cog,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const stacks = [
	{
		icon: Brain,
		title: "Machine Learning",
		items: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "XGBoost"],
	},
	{
		icon: MessageSquare,
		title: "NLP & LLM",
		items: ["Hugging Face", "spaCy", "LangChain", "OpenAI", "Anthropic"],
	},
	{
		icon: Eye,
		title: "Computer Vision",
		items: ["OpenCV", "YOLO", "MediaPipe", "Tesseract OCR"],
	},
	{
		icon: Sparkles,
		title: "Generative AI",
		items: ["GPT", "Claude", "Stable Diffusion", "RAG", "Vector DB"],
	},
	{
		icon: Database,
		title: "Data Engineering",
		items: ["Pandas", "NumPy", "PostgreSQL", "Pinecone", "Airflow"],
	},
	{
		icon: Cog,
		title: "MLOps & Deploy",
		items: ["FastAPI", "Docker", "MLflow", "AWS SageMaker", "Vertex AI"],
	},
];

export default function TechStack() {
	useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
	}, []);

	return (
		<section className="py-12 md:py-16">
			<div className="max-w-7xl mx-auto w-full px-4 md:px-6">
				<div className="text-center mb-12" data-aos="fade-up">
					<span className="inline-block text-sm font-semibold text-greenfont2 tracking-widest uppercase mb-2">
						Teknologi Kami
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-greenfont1 mb-3">
						Tech Stack ML & AI yang Kami Gunakan
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Dari riset hingga deploy ke production, kami pakai stack ML modern
						untuk membangun solusi AI yang akurat dan scalable.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{stacks.map((stack, i) => {
						const Icon = stack.icon;
						return (
							<div
								key={stack.title}
								data-aos="fade-up"
								data-aos-delay={i * 100}
								className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
							>
								<div className="w-12 h-12 rounded-xl bg-third flex items-center justify-center mb-4">
									<Icon className="text-greenfont1 w-6 h-6" />
								</div>
								<h3 className="text-lg font-semibold text-greenfont1 mb-3">
									{stack.title}
								</h3>
								<div className="flex flex-wrap gap-2">
									{stack.items.map((item) => (
										<span
											key={item}
											className="text-sm text-greenfont2 bg-secondary/60 px-3 py-1 rounded-full"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

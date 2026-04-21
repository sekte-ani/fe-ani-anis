"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
	{ id: 1, image: "/images/home/carousel/carousel-1.png" },
	{ id: 2, image: "/images/home/carousel/carousel-2.png" },
	{ id: 3, image: "/images/home/carousel/carousel-3.jpg" },
	{ id: 4, image: "/images/home/carousel/carousel-4.jpg" },
];

export default function Carousel() {
	const [current, setCurrent] = useState(0);

	const nextSlide = useCallback(() => {
		setCurrent((prev) => (prev + 1) % slides.length);
	}, []);

	const prevSlide = () => {
		setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 4000);
		return () => clearInterval(interval);
	}, [nextSlide]);

	return (
		<div className="relative w-full aspect-[16/9] md:h-[85vh] md:max-h-screen overflow-hidden group">
			{/* Slide Image */}
			{slides.map((slide, index) => (
				<div
					key={slide.id}
					className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
						index === current ? "opacity-100" : "opacity-0"
					}`}
				>
					<Image
						src={slide.image}
						alt={`Slide ${slide.id}`}
						fill
						className="object-cover"
						priority={index === 0}
					/>
				</div>
			))}

			{/* Gradient overlay bawah */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

			{/* Nav Buttons */}
			<button
				onClick={prevSlide}
				className="absolute left-4 top-1/2 -translate-y-1/2 p-2 lg:p-3 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
				aria-label="Previous slide"
			>
				<ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-4 top-1/2 -translate-y-1/2 p-2 lg:p-3 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
				aria-label="Next slide"
			>
				<ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
			</button>

			{/* Indicators */}
			<div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrent(index)}
						className={`rounded-full transition-all duration-300 ${
							index === current
								? "w-8 h-2 bg-white"
								: "w-2 h-2 bg-white/50 hover:bg-white/80"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}

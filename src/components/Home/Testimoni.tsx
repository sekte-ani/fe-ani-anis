"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";

// Definisikan tipe data untuk testimonial
interface Testimonial {
	id: number;
	name: string;
	job: string;
	message: string;
	image: string;
}

export default function Testimonial() {
	const [isVisible, setIsVisible] = useState(true);
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]); // Terapkan tipe data

	useEffect(() => {
		const fetchTestimonials = async () => {
			try {
				const response = await fetch(
					"http://82.112.230.106:8010/api/testimonials"
				);
				const result = await response.json();
				console.log("Fetched data:", result); // Debugging
				setTestimonials(Array.isArray(result.data) ? result.data : []);
			} catch (error) {
				console.error("Error fetching testimonials:", error);
			}
		};

		fetchTestimonials();
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const section = document.getElementById("testimoni-section");
			if (section) {
				const rect = section.getBoundingClientRect();
				setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		// <section
		// 	id="testimoni-section"
		// 	className={`relative md:flex-row gap-6 min-h-auto md:py-20 md:px-32 px-2 overflow-hidden ${
		// 		isVisible ? "opacity-100" : "opacity-0"
		// 	}`}
		// >
		<section className="relative md:flex-row gap-6 min-h-auto md:py-20 md:px-32 px-2 overflow-hidden z-0 ">
			<h2 className="text-left md:text-4xl text-3xl font-bold text-greenfont1">
				Partner Kami, Teman Kami.
			</h2>
			<p className="text-left text-lg text-greenfont3 mb-6">Ini Kata Mereka</p>
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
				className="max-w-8xl mx-auto"
			>
				{testimonials.map((testimonial) => (
					<SwiperSlide key={testimonial.id}>
						<div
							className="bg-white py-8 px-12 rounded-2xl shadow-md flex flex-col text-left z-0"
							data-aos="fade-up"
						>
							<p className="text-greenfont1 mb-4">{testimonial.message}</p>
							<div className="flex">
								<Image
									src={`https://system.anitech.id/storage/${testimonial.image}`}
									alt={testimonial.name}
									className="w-12 h-12 rounded-full mb-2"
								/>
								<div className="ml-4">
									<h4 className="font-semibold text-greenfont3">
										{testimonial.name}
									</h4>
									<p className="text-sm text-greenfont1">{testimonial.job}</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

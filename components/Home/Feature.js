import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";

export default function Feature() {
	SwiperCore.use([Autoplay]);
	const sectionStyle = {
		backgroundPosition: "top",
	};

	return (
		<section className="mb-20 py-5" style={sectionStyle}>
			<h2 className="max-w-4xl py-5 mx-auto text-4xl font-semibold tracking-tight text-gray-800 xl:text-6xl dark:text-gray-800 text-center">
				Tailoring <span className="text-red-800">Service</span>
			</h2>
			<div className="container mx-auto my-10 md:px-20">
				<Swiper
					slidesPerView={1}
					autoplay={{
						delay: 2000,
					}}
					className="h-auto"
				>
					<SwiperSlide>{Slide3()}</SwiperSlide>
					<SwiperSlide>{Slide()}</SwiperSlide>
					<SwiperSlide>{Slide2()}</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}

function Slide() {
	return (
		<div className="grid md:grid-cols-2 min-h-[400px] md:min-h-[500px] items-center">
			<div className="image flex items-center justify-center h-full">
				<div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
					<Image
						src={"/cleaning.webp"}
						fill
						className="object-cover"
						alt="Person cleaning bathroom mirror and light fixtures using a duster while wearing yellow gloves"
					/>
				</div>
			</div>

			<div className="info flex justify-center flex-col carousle-pointer h-full px-4 md:px-8">
				<div className="cat">
					<div className="title">
						<h1 className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight">
							We Deliver the Fit You Imagine. 
						</h1>
					</div>
					<p className="text-gray-900 text-xl md:text-2xl py-6 md:py-10">
						Every customer wants outfits that make them feel confident and stylish. At Collibet, our expert tailors turn your ideas into perfectly stitched garments. Whether it’s a blouse, suit, saree finishing, kurti, gown, lehenga, or men’s tailoring — we ensure clean finishing, accurate measurements, and stunning final results.
					</p>
				</div>
			</div>
		</div>
	);
}

function Slide2() {
	return (
		<div className="grid md:grid-cols-2 min-h-[400px] md:min-h-[500px] items-center">
			<div className="image flex items-center justify-center h-full">
				<div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
					<Image
						src={"/cleaning.webp"}
						fill
						className="object-cover"
						alt="Person cleaning bathroom mirror and light fixtures using a duster while wearing yellow gloves"
					/>
				</div>
			</div>

			<div className="info flex justify-center flex-col carousle-pointer h-full px-4 md:px-8">
				<div className="cat">
					<div className="title">
						<a className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight">
							Premium Stitching & Fast Delivery 
						</a>
					</div>
					<p className="text-gray-900 text-xl md:text-2xl py-6 md:py-10">
						Once you place your order, our team gets to work immediately. Your garment is assigned to a skilled tailor who ensures perfect cutting, stitching, and fitting. We offer fast delivery, alteration support, and quality checks at no extra cost — so you get hassle-free tailoring every time.
					</p>
				</div>
			</div>
		</div>
	);
}

function Slide3() {
	return (
		<div className="grid md:grid-cols-2 min-h-[400px] md:min-h-[500px] items-center">
			<div className="image flex items-center justify-center h-full">
				<div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
					<Image
						src={"/cleaning2.webp"}
						fill
						className="object-cover"
						alt="Hand in rubber glove using brush to scrub stainless steel sink with soap lather"
					/>
				</div>
			</div>

			<div className="info flex justify-center flex-col carousle-pointer h-full px-4 md:px-8">
				<div className="cat">
					<div className="title">
						<a className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight">
							Perfect Fitting. Seamless Experience.
						</a>
					</div>
					<p className="text-gray-900 text-xl md:text-2xl py-6 md:py-10">
						At Collibet, we understand that perfect stitching begins with understanding you. From taking accurate body measurements to selecting the right design and fabric cuts, we follow a detailed process to ensure every outfit fits beautifully and feels comfortable. Your outfit is crafted with precision, care, and professional tailoring expertise.
					</p>
				</div>
			</div>
		</div>
	);
}
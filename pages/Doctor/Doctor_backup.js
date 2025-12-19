import Layout from "@/components/Layout/Layout";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "./doctor";
import Image from "next/image";
import { motion } from "framer-motion";

const Doctor = () => {
	return (
			<Layout>
				<div className="text-center">
					<div className="flex justify-center">
						<Image
							width={1500}
							height={1500}
							className="object-cover w-full h-96"
							src={data[data.length - 2].heroimage}
							alt="heroimg"
						/>
					</div>

					<div className="px-4 py-10 sm:px-8 md:px-12 lg:px-20 xl:px-40">
						<div className="p-4">
							<h1 className="text-3xl sm:text-4xl text-black md:text-5xl font-bold text-center">
								{data[data.length - 2].heading}
							</h1>
							<p className="mt-5 text-base sm:text-lg md:text-xl lg:text-md xl:text-xl text-gray-600 text-center">
								{data[data.length - 2].subheading}
							</p>
						</div>
					</div>
				</div>
				<section className="bg-white lg:py-12 lg:flex lg:justify-center">
					<div className="overflow-hidden bg-black lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
						<div className="lg:w-1/2">
							<div
								className="h-64 bg-cover my-10 mx-10"
								style={{
									backgroundImage:
										"url('https://res.cloudinary.com/dcxnmagjx/image/upload/v1688973281/markus-frieauff-IJ0KiXl4uys-unsplash_rblzc7.jpg')",
								}}
							></div>
						</div>

						<div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2 text-xl font-semibold text-white md:text-2xl my-10 mx-10">
							<ul className="list-disc">
								{data[data.length - 1].list.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</section>
				<div className="py-5 bg-white">
					<section className="py-20 px-5 bg-black">
						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							navigation
							pagination={{ clickable: true }}
							breakpoints={{
								640: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
						>
							{data.slice(0, data.length - 11).map((card, i) => (
								<SwiperSlide key={i}>
									<div className="p-4 bg-gray-300">
										<div className="flex flex-col r-card gap-2 bg-gray-200 rounded-lg max-w-max mx-auto transition-all duration-300 ease-in hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-b from-transparent to-gray-400 hover:shadow-lg">
											<div className="w-full max-w-md mx-auto">
												<Image
													width={1200}
													height={600}
													src={card.image}
													alt="home"
													className="w-full h-full p-3 object-cover rounded-t-lg"
												/>
											</div>
											<span className="flex text-2xl p-5 text-black">
												<span className="text-teal-800 text-center">
													{card.price}
												</span>
											</span>
											<span className="flex text-md p-1 text-center text-black">
												{card.detail}
											</span>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</section>
				</div>

				<div className="bg-white py-10 px-5 sm:py-10">
					<div className="">
						<div className="grid max-w-lg grid-cols-4 items-center gap-x-1 gap-y-1 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
							<motion.img
								whileHover={{ x: 10, y: -10 }}
								transition={{ duration: 0.5 }}
								className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
								src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1688974137/Verified_Card_Logo_1_yutimy.png"
								alt="Transistor"
								width={250}
								height={250}
							/>

							<motion.img
								whileHover={{ x: 10, y: -10 }}
								transition={{ duration: 0.5 }}
								className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
								src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1688821535/4_qnsnmn.png"
								alt="Transistor"
								width={250}
								height={275}
							/>

							<motion.img
								whileHover={{ x: 10, y: -10 }}
								transition={{ duration: 0.5 }}
								className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
								src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1688821535/2_mdbf2b.png"
								alt="Transistor"
								width={250}
								height={250}
							/>

							<motion.img
								whileHover={{ x: 10, y: -10 }}
								transition={{ duration: 0.5 }}
								className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
								src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1688821535/3_qzec8l.png"
								alt="Transistor"
								width={250}
								height={250}
							/>
						</div>
					</div>
				</div>

				<section className="bg-black">
					<div className="container px-6 py-10 mx-auto">
						<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
							{data.slice(6, -2).map((item, index) => (
								<div
									key={index}
									className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group bg-gray-900 hover:bg-gray-800 rounded-xl"
								>
									<h1 className="mt-4 text-2xl font-semibold text-gray-300 capitalize dark:text-white group-hover:text-white">
										{item.title}
									</h1>

									<p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
										{item.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="bg-white dark:bg-gray-100">
					<div className="container px-6 py-12 mx-auto">
						<div className="text-center">
							<h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-gray-900">
								Let’s Contact
							</h1>
						</div>

						<div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col items-center justify-center text-center">
								<span className="p-3 text-white rounded-full bg-black">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
										/>
									</svg>
								</span>

								<h2 className="mt-4 text-lg font-medium text-gray-800 ">
									Email
								</h2>
								<p className="mt-2 text-gray-900 ">
									Our friendly team is here to help.
								</p>
								<p className="mt-2 text-gray-900 ">hello@test.com</p>
							</div>

							<div className="flex flex-col items-center justify-center text-center">
								<span className="p-3 text-white rounded-full bg-black ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
										/>
									</svg>
								</span>

								<h2 className="mt-4 text-lg font-medium text-gray-800 ">
									Office
								</h2>
								<p className="mt-2 text-gray-900 ">
									Come say hello at our office HQ.
								</p>
								<p className="mt-2 text-gray-900">
									100 Smith Street Collingwood VIC 3066 AU
								</p>
							</div>

							<div className="flex flex-col items-center justify-center text-center">
								<span className="p-3 text-white rounded-full bg-black ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
										/>
									</svg>
								</span>

								<h2 className="mt-4 text-lg font-medium text-gray-800 ">
									Phone
								</h2>
								<p className="mt-2 text-gray-900 ">Mon-Fri from 8am to 5pm.</p>
								<p className="mt-2 text-black-900">+1 (555) 000-0000</p>
							</div>
						</div>
					</div>
				</section>
			</Layout>
	);
};

export default Doctor;

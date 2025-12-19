import {
	EggFriedIcon,
	FingerprintIcon,
	ForwardIcon,
	ShareIcon,
} from "lucide-react";
import { AxeIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Section3 = () => {
	return (
		<>
			<div>
				<section className="pt-10 pb-20 bg-gradient-to-r from-indigo-300 to-indigo-400">
					<div className="container mx-auto px-4">
						<div>
							<h4 className="text-2xl md:text-3xl text-gray-100 text-center font-semibold">
								We are ready to serve you in no time.
							</h4>
						</div>
						<div className="flex flex-wrap">
							<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
								<motion.div
									className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
									initial="rest"
									whileHover="hover"
									animate="rest"
									variants={{
										rest: { scale: 1, border: "none" },
										hover: { scale: 1.05, border: "1px solid green" },
									}}
									whileTap={{ scale: 0.95 }}
								>
									<div className="px-4 py-5 flex-auto">
										<motion.div
											className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
											whileHover={{ rotate: 180 }}
										>
											<ForwardIcon />
										</motion.div>
										<h6 className="text-xl font-semibold">Awarded Agency</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Divide details about your product or agency work into
											parts. A paragraph describing a feature will be enough.
										</p>
									</div>
								</motion.div>
							</div>
							<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
								<motion.div
									className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
									initial="rest"
									whileHover="hover"
									animate="rest"
									variants={{
										rest: { scale: 1, border: "none" },
										hover: { scale: 1.05, border: "1px solid green" },
									}}
									whileTap={{ scale: 0.95 }}
								>
									<div className="px-4 py-5 flex-auto">
										<motion.div
											className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
											whileHover={{ rotate: 180 }}
										>
											<ShareIcon />
										</motion.div>
										<h6 className="text-xl font-semibold">Free Revisions</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Keep your user engaged by providing meaningful
											information. Remember that by this time, the user is
											curious.
										</p>
									</div>
								</motion.div>
							</div>

							<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
								<motion.div
									className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
									initial="rest"
									whileHover="hover"
									animate="rest"
									variants={{
										rest: { scale: 1, border: "none" },
										hover: { scale: 1.05, border: "1px solid green" },
									}}
									whileTap={{ scale: 0.95 }}
								>
									<div className="px-4 py-5 flex-auto">
										<motion.div
											className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
											whileHover={{ rotate: 180 }}
										>
											<FingerprintIcon />
										</motion.div>
										<h6 className="text-xl font-semibold">Verified Company</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Write a few lines about each one. A paragraph describing a
											feature will be enough. Keep your user engaged!
										</p>
									</div>
								</motion.div>
							</div>
						</div>

						<div className="flex flex-wrap items-center mt-32">
							<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
								<div className="text-lime-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
									<EggFriedIcon />{" "}
								</div>
								<h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
									Collibet brings you expert tailoring services with trusted professionals.</h3>

								<p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-300">
									Our skilled team of professional tailors delivers top-quality stitching for all your wardrobe needs. From designer blouses and saree finishing to kurti stitching, gown making, lehenga tailoring, and men’s suit or shirt fitting — Collibet ensures precision, style, and comfort in every outfit. Whether you want perfect daily wear tailoring or premium custom-made designs for special events, we bring you the finest tailoring services in Ranchi.
								</p>
								{/* <a
									href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
									className="font-bold text-gray-400 mt-8"
								>
									Download our Services Brochure
								</a> */}
							</div>

							<div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
								<div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-lime-600">
									<Image
										alt="Person wearing yellow gloves cleaning bathroom faucet with disinfectant spray"
										src="/cleaning3.webp"
										className="w-full align-middle rounded-t-lg"
										layout="responsive"
										width={100}
										height={100}
									/>


									<blockquote className="relative p-8 mb-4">
										<AxeIcon />
										<h4 className="text-xl font-bold text-white">
											Top Notch Tailoring Services
										</h4>
										<p className="text-md font-light mt-2 text-gray-200">
											Collibet works tirelessly to deliver high-quality tailoring that matches every customer’s expectations. Our focus on modern designs, clean finishing, and perfect measurement ensures top-notch results every time. We believe in constant improvement and upgraded tailoring techniques to craft garments that fit beautifully and last longer.</p>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* <div
				className="relative pt-16 pb-32 flex content-center items-center justify-center"
				style={{
					minHeight: "75vh",
				}}
			> */}
			{/* <div
					className="absolute top-0 w-full h-full bg-center bg-cover"
					style={{
						backgroundImage:
							"url('https://res.cloudinary.com/dcxnmagjx/image/upload/v1687438384/immo-wegmann-U0jpGKtMtWE-unsplash_yszkab.jpg')",
					}}
				>
					<span
						id="blackOverlay"
						className="w-full h-full absolute opacity-50 bg-black"
					></span>
				</div> */}
			{/* <div className="container relative mx-auto">
					<div className="items-center flex flex-wrap">
						<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
							<div className="pr-12">
								<h1 className="max-w-6xl py-10 mx-auto text-6xl font-semibold tracking-tight text-cyan-300 xl:text-6xl dark:text-cyan-600 text-center">
									Home Serve’s Mission Is To Be
									<span className="text-sky-400">
										{" "}
										The Customers Preferred Service Solution
									</span>
								</h1>

								<h1 className="text-white font-semibold text-5xl"></h1>
								<p className="mt-4 text-lg text-gray-300">
									At Viveks, we’ve always believed in offering more to our
									customers. And Home Serve is just one more way of doing that.
									It’s our way of giving you more peace of mind through
									world-class service.
								</p>
							</div>
						</div>
					</div>
				</div> */}
			{/* <div
					className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
					style={{ height: '70px' }}
				>
					<svg
						className='absolute bottom-0 overflow-hidden'
						xmlns='http://www.w3.org/2000/svg'
						preserveAspectRatio='none'
						version='1.1'
						viewBox='0 0 2560 100'
						x='0'
						y='0'
					>
						<polygon
							className='text-gray-300 fill-current'
							points='2560 0 2560 100 0 100'
						></polygon>
					</svg>
				</div> */}
			{/* </div> */}
		</>
	);
};

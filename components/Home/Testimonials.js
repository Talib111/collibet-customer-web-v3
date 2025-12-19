// import React from 'react';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import 'swiper/css';
// import data from './slider.json';
// import Image from 'next/image';

// const Testimonial = () => {
// 	const SliderButtons = () => {
// 		const swiper = useSwiper();

// 		const handlePrev = () => {
// 			swiper.slidePrev();
// 		};

// 		const handleNext = () => {
// 			swiper.slideNext();
// 		};

// 		return (
// 			<div className='flex items-center justify-between mt-6 md:justify-start'>
// 				<button
// 					onClick={handlePrev}
// 					title='left arrow'
// 					className='p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400'
// 				>
// 					<svg
// 						xmlns='http://www.w3.org/2000/svg'
// 						className='w-6 h-6'
// 						fill='none'
// 						viewBox='0 0 24 24'
// 						stroke='currentColor'
// 						strokeWidth='2'
// 					>
// 						<path
// 							strokeLinecap='round'
// 							strokeLinejoin='round'
// 							d='M15 19l-7-7 7-7'
// 						/>
// 					</svg>
// 				</button>

// 				<button
// 					onClick={handleNext}
// 					title='right arrow'
// 					className='p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400'
// 				>
// 					<svg
// 						xmlns='http://www.w3.org/2000/svg'
// 						className='w-6 h-6'
// 						fill='none'
// 						viewBox='0 0 24 24'
// 						stroke='currentColor'
// 						strokeWidth='2'
// 					>
// 						<path
// 							strokeLinecap='round'
// 							strokeLinejoin='round'
// 							d='M9 5l7 7-7 7'
// 						/>
// 					</svg>
// 				</button>
// 			</div>
// 		);
// 	};

// 	return (
// 		<div>
// 			<section className=''>
// 				<div className='max-w-6xl px-6 py-20 mx-auto container px-6 py-12 mx-auto text-center'>
// 					<p className='text-xl text-black font-medium'>Testimonials</p>

// 					<h1 className='mt-2 text-2xl font-semibold capitalize lg:text-3xl text-black'>
// 						What clients saying
// 					</h1>

// 					<Swiper>
// 						{data.map((card, i) => (
// 							<SwiperSlide key={i}>
// 								<main className='relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12'>
// 									<div className='absolute w-full bg-gray-900 -z-10 md:h-96 rounded-2xl'></div>

// 									<div className='w-full p-6 bg-gray-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly'>
// 										<Image
// 										width={400}
// 										height={400}
// 											className='h-24 w-24 md:mx-6 mx-auto rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl'
// 											src={card.image}
// 											alt='client photo'
// 										/>

// 										<div className='mt-2 md:mx-6'>
// 											<div>
// 												<p className='text-xl font-medium tracking-tight text-white'>
// 													{card.name}
// 												</p>
// 												<p className='text-blue-200 '>{card.sub}</p>
// 											</div>

// 											<p className='mt-4 text-lg leading-relaxed text-white md:text-xl'>
// 												{card.detail}
// 											</p>

// 											<SliderButtons />
// 										</div>
// 									</div>
// 								</main>
// 							</SwiperSlide>
// 						))}
// 					</Swiper>
// 				</div>
// 			</section>
// 		</div>
// 	);
// };

// export default Testimonial;
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from './slider.json';
import Image from 'next/image';

const Testimonial = () => {
	const SliderButtons = () => {
		const swiper = useSwiper();

		const handlePrev = () => {
			swiper.slidePrev();
		};

		const handleNext = () => {
			swiper.slideNext();
		};

		return (
			<div className='flex items-center justify-center gap-4 mt-8'>
				<button
					onClick={handlePrev}
					title='Previous testimonial'
					className='group p-3 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 border border-white/20 rounded-full hover:bg-white/20 hover:scale-110 hover:shadow-lg'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15 19l-7-7 7-7'
						/>
					</svg>
				</button>

				<button
					onClick={handleNext}
					title='Next testimonial'
					className='group p-3 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 border border-white/20 rounded-full hover:bg-white/20 hover:scale-110 hover:shadow-lg'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</button>
			</div>
		);
	};

	return (
		<section className='relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden'>
			{/* Background decorations */}
			<div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-40'></div>
			
			{/* Floating elements */}
			<div className='absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse'></div>
			<div className='absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000'></div>
			<div className='absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-2000'></div>

			<div className='relative z-10 max-w-7xl px-6 py-20 mx-auto'>
				{/* Header */}
				<div className='text-center mb-16'>
					<div className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6'>
						<span className='text-blue-200 font-medium'>✨ Testimonials</span>
					</div>
					
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
						What Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Clients</span> Say
					</h1>
					
					<p className='text-xl text-blue-200 max-w-2xl mx-auto'>
						Discover why clients trust us with their tailoring services
					</p>
				</div>

				{/* Testimonial Slider */}
				<div className='relative'>
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						loop={true}
						className='testimonial-swiper'
					>
					
						{data.map((card, i) => (
							<SwiperSlide key={i}>
								<div className='relative max-w-5xl mx-auto'>
									{/* Quote decoration */}
									<div className='absolute -top-6 -left-6 text-8xl text-white/10 font-serif'>{'"'}</div>
									
									<div className='bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl'>
										<div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
											{/* Client Image */}
											<div className='relative group'>
												<div className='absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300'></div>
												<div className='relative'>
													<Image
														width={400}
														height={400}
														className='w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl ring-4 ring-white/20'
														src={card.image}
														alt={`${card.name} - Client photo`}
													/>
													<div className='absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white/20 flex items-center justify-center'>
														<svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
															<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
														</svg>
													</div>
												</div>
											</div>

											{/* Content */}
											<div className='flex-1 text-center lg:text-left'>
												{/* Star Rating */}
												<div className='flex justify-center lg:justify-start gap-1 mb-4'>
													{[...Array(5)].map((_, star) => (
														<svg key={star} className='w-5 h-5 text-yellow-400 fill-current' viewBox='0 0 20 20'>
															<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
														</svg>
													))}
												</div>

												{/* Testimonial Text */}
												<blockquote className='text-lg md:text-xl lg:text-2xl leading-relaxed text-white mb-6 italic'>
													{`"${card.detail}"`}
												</blockquote>

												{/* Client Info */}
												<div className='mb-6'>
													<h3 className='text-xl md:text-2xl font-bold text-white mb-1'>
														{card.name}
													</h3>
													<p className='text-blue-200 font-medium'>
														{card.sub}
													</p>
												</div>

												{/* Navigation Buttons */}
												<SliderButtons />
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Bottom Stats */}
				<div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8'>
					<div className='text-center'>
						<div className='text-3xl md:text-4xl font-bold text-white mb-2'>500+</div>
						<div className='text-blue-200'>Happy Clients</div>
					</div>
					<div className='text-center'>
						<div className='text-3xl md:text-4xl font-bold text-white mb-2'>98%</div>
						<div className='text-blue-200'>Satisfaction Rate</div>
					</div>
					<div className='text-center'>
						<div className='text-3xl md:text-4xl font-bold text-white mb-2'>1000+</div>
						<div className='text-blue-200'>Service Done</div>
					</div>
					<div className='text-center'>
						<div className='text-3xl md:text-4xl font-bold text-white mb-2'>Easy</div>
						<div className='text-blue-200'>Support</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.testimonial-swiper .swiper-pagination {
					bottom: -50px !important;
				}
				
				.testimonial-swiper .swiper-pagination-bullet {
					margin: 0 6px !important;
				}
			`}</style>
		</section>
	);
};

export default Testimonial;
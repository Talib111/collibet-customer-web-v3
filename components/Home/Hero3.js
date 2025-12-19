// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import SwiperCore, { Autoplay } from 'swiper';
// import Image from 'next/image';
// import LazyImage from '../Image/LazyImage';
// import ApiList from '../ApiList/ApiList';
// import ApiHeader from '../ApiList/ApiHeader';
// import AxiosInterceptors from '../ApiList/AxiosInterceptors';

// export default function Hero3(props) {
// 	SwiperCore.use([Autoplay]);
// 	const [bannerList, setbannerList] = useState([]);

// 	const { getAllSliders } = ApiList()
// 	// ═════════════║ THIS FUNCTION GETS THE DYANMIC BANNERS║══════════════════
// 	const fetchBannerList = () => {
// 		AxiosInterceptors.get(`${getAllSliders}?page=1&limit=1000`, ApiHeader())
// 			.then(function (response) {
// 				console.log('the data is..', response?.data)
// 				if (!response?.data?.error) {
// 					setbannerList(response?.data?.payload);
// 				}
// 			})
// 			.catch(function (error) { })
// 	};

// 	useEffect(() => {
// 		fetchBannerList()
// 	}, []);
// 	console.log('the banner is..',bannerList)


// 	return (
// 		<section className='mb-10  ' >

// 			<Swiper
// 				slidesPerView={1}
// 				autoplay={{
// 					delay: 2000,
// 				}}
// 			>
// 				{Array.isArray(bannerList) && bannerList?.map((item) => (
// 					<SwiperSlide>
// 						<div onClick={() => props?.setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
// 							<LazyImage
// 								src={item?.imageURL || '/Images/heroImage1.png'}
// 								layout="responsive"
// 							/>
// 						</div>
// 					</SwiperSlide>
// 				))}

// 				{/* <SwiperSlide>{Slide(props?.setcategoryModal)}</SwiperSlide>
// 				<SwiperSlide>{Slide2(props?.setcategoryModal)}</SwiperSlide>
// 				<SwiperSlide>{Slide3(props?.setcategoryModal)}</SwiperSlide> */}
// 			</Swiper>
// 		</section>
// 	);
// }

// function Slide(setcategoryModal) {
// 	return (
// 		<>
// 			<div onClick={() => setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
// 				<LazyImage
// 					src='/Images/heroImage1.png'
// 					layout="responsive"
// 				/>
// 			</div>
// 			<div onClick={() => setcategoryModal(true)} className='sm:hidden cursor-pointer'>
// 				<LazyImage
// 					src='/Images/heroSmall1.png'
// 					layout="responsive"
// 				/>
// 			</div>
// 		</>
// 	);
// }

// function Slide2(setcategoryModal) {
// 	return (
// 		<>
// 			<div onClick={() => setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
// 				<Image
// 					src='/Images/heroImage2.png'
// 					layout="responsive"
// 					width={1536}
// 					height={550}
// 				/>
// 			</div>
// 			<div onClick={() => setcategoryModal(true)} className='sm:hidden cursor-pointer'>
// 				<Image
// 					src='/Images/heroSmall2.png'
// 					layout="responsive"
// 					width={585}
// 					height={924}
// 				/>
// 			</div>
// 		</>
// 	);
// }

// function Slide3(setcategoryModal) {
// 	return (
// 		<>
// 			<div onClick={() => setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
// 				<Image
// 					src='/Images/heroImage3.png'
// 					layout="responsive"
// 					width={1536}
// 					height={550}
// 				/>
// 			</div>
// 			<div onClick={() => setcategoryModal(true)} className='sm:hidden cursor-pointer'>
// 				<Image
// 					src='/Images/heroSmall3.png'
// 					layout="responsive"
// 					width={585}
// 					height={924}
// 				/>
// 			</div>
// 		</>
// 	);
// }
// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay } from 'swiper/modules'; // Updated import
// import Image from 'next/image';
// import LazyImage from '../Image/LazyImage';
// import ApiList from '../ApiList/ApiList';
// import ApiHeader from '../ApiList/ApiHeader';
// import AxiosInterceptors from '../ApiList/AxiosInterceptors';

// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import SwiperCore, { Autoplay } from 'swiper';
// import Image from 'next/image';
// import LazyImage from '../Image/LazyImage';
// import ApiList from '../ApiList/ApiList';
// import ApiHeader from '../ApiList/ApiHeader';
// import AxiosInterceptors from '../ApiList/AxiosInterceptors';

// export default function Hero3(props) {
// 	const [bannerList, setbannerList] = useState([]);

// 	const { getAllSliders } = ApiList()

// 	// ═════════════║ THIS FUNCTION GETS THE DYANMIC BANNERS║══════════════════
// 	const fetchBannerList = () => {
// 		AxiosInterceptors.get(`${getAllSliders}?page=1&limit=1000`, ApiHeader())
// 			.then(function (response) {
// 				console.log('the data is..', response?.data)
// 				if (!response?.data?.error) {
// 					setbannerList(response?.data?.payload);
// 				}
// 			})
// 			.catch(function (error) { 
// 				console.error('Error fetching banners:', error);
// 			})
// 	};

// 	useEffect(() => {
// 		fetchBannerList()
// 	}, []);

// 	console.log('the banner is..', bannerList)

// 	return (
// 		<section className='mb-10'>
// 			<Swiper
// 				modules={[Autoplay]} // Add modules prop
// 				slidesPerView={1}
// 				autoplay={{
// 					delay: 2000,
// 				}}
// 				loop={true} // Add loop for better UX
// 			>
// 				{Array.isArray(bannerList) && bannerList?.length > 0 && bannerList.map((item, index) => (
// 					<SwiperSlide key={item?.id || index}> {/* Add key prop */}
// 						{/* Desktop version */}
// 						<div onClick={() => props?.setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
// 							<LazyImage
// 								src={item?.imageURL || '/Images/heroImage1.png'}
// 								layout="responsive"
// 								alt={item?.alt || `Banner ${index + 1}`} // Add alt text
// 							/>
// 						</div>
// 						{/* Mobile version - add mobile image handling */}
// 						<div onClick={() => props?.setcategoryModal(true)} className='sm:hidden cursor-pointer'>
// 							<LazyImage
// 								src={item?.mobileImageURL || item?.imageURL || '/Images/heroSmall1.png'}
// 								layout="responsive"
// 								alt={item?.alt || `Banner ${index + 1}`}
// 							/>
// 						</div>
// 					</SwiperSlide>
// 				))}

// 				{/* Fallback slides if no dynamic banners */}
// 				{(!Array.isArray(bannerList) || bannerList.length === 0) && (
// 					<>
// 						<SwiperSlide>{Slide(props?.setcategoryModal)}</SwiperSlide>
// 						<SwiperSlide>{Slide2(props?.setcategoryModal)}</SwiperSlide>
// 						<SwiperSlide>{Slide3(props?.setcategoryModal)}</SwiperSlide>
// 					</>
// 				)}
// 			</Swiper>
// 		</section>
// 	);
// }

// function Slide(setcategoryModal) {
// 	return (
// 		<>
// 			<div onClick={() => setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
// 				<LazyImage
// 					src='/Images/heroImage1.png'
// 					layout="responsive"
// 					alt="Hero Image 1"
// 				/>
// 			</div>
// 			<div onClick={() => setcategoryModal(true)} className='sm:hidden cursor-pointer'>
// 				<LazyImage
// 					src='/Images/heroSmall1.png'
// 					layout="responsive"
// 					alt="Hero Image 1 Mobile"
// 				/>
// 			</div>
// 		</>
// 	);
// }

// function Slide2(setcategoryModal) {
// 	return (
// 		<>
// 			<div onClick={() => setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
// 				<Image
// 					src='/Images/heroImage2.png'
// 					layout="responsive"
// 					width={1536}
// 					height={550}
// 					alt="Hero Image 2"
// 				/>
// 			</div>
// 			<div onClick={() => setcategoryModal(true)} className='sm:hidden cursor-pointer'>
// 				<Image
// 					src='/Images/heroSmall2.png'
// 					layout="responsive"
// 					width={585}
// 					height={924}
// 					alt="Hero Image 2 Mobile"
// 				/>
// 			</div>
// 		</>
// 	);
// }

// function Slide3(setcategoryModal) {
// 	return (
// 		<>
// 			<div onClick={() => setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
// 				<Image
// 					src='/Images/heroImage3.png'
// 					layout="responsive"
// 					width={1536}
// 					height={550}
// 					alt="Hero Image 3"
// 				/>
// 			</div>
// 			<div onClick={() => setcategoryModal(true)} className='sm:hidden cursor-pointer'>
// 				<Image
// 					src='/Images/heroSmall3.png'
// 					layout="responsive"
// 					width={585}
// 					height={924}
// 					alt="Hero Image 3 Mobile"
// 				/>
// 			</div>
// 		</>
// 	);
// }

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import Image from 'next/image';
import LazyImage from '../Image/LazyImage';
import ApiList from '../ApiList/ApiList';
import ApiHeader from '../ApiList/ApiHeader';
import AxiosInterceptors from '../ApiList/AxiosInterceptors';

export default function Hero3(props) {
	const [bannerList, setbannerList] = useState([]);

	const { getAllSliders } = ApiList()

	// ═════════════║ THIS FUNCTION GETS THE DYANMIC BANNERS║══════════════════
	const fetchBannerList = () => {
		AxiosInterceptors.get(`${getAllSliders}?page=1&limit=1000`, ApiHeader())
			.then(function (response) {
				console.log('the data is..', response?.data)
				if (!response?.data?.error) {
					setbannerList(response?.data?.payload);
				}
			})
			.catch(function (error) {
				console.error('Error fetching banners:', error);
			})
	};

	useEffect(() => {
		fetchBannerList()
	}, []);

	console.log('the banner is..', bannerList)

	return (
		<section className='mb-10'>
			<div className='relative'>
				<Swiper
					modules={[Autoplay]} // Add modules prop
					slidesPerView={1}
					autoplay={{
						delay: 2000,
					}}
					loop={true} // Add loop for better UX
				>
					{Array.isArray(bannerList) && bannerList?.length > 0 && bannerList.map((item, index) => (
						<SwiperSlide key={item?.id || index}> {/* Add key prop */}
							{/* Desktop version */}
							<div onClick={() => props?.setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
								<Image
								width={100}
								height={100}
									priority={true}
									src={item?.imageURL || '/Images/heroImage1.png'}
									layout="responsive"
									alt={item?.alt || `Banner ${index + 1}`} // Add alt text
								/>
							</div>
							{/* Mobile version - add mobile image handling */}
							<div onClick={() => props?.setcategoryModal(true)} className='sm:hidden cursor-pointer'>
								<Image
								width={100}
								height={100}
									priority={true}

									src={item?.mobileImageURL || item?.imageURL || '/Images/heroSmall1.png'}
									layout="responsive"
									alt={item?.alt || `Banner ${index + 1}`}
								/>
							</div>
						</SwiperSlide>
					))}

					{/* Fallback slides if no dynamic banners */}
					{(!Array.isArray(bannerList) || bannerList.length === 0) && (
						<>
							<SwiperSlide>{Slide(props?.setcategoryModal)}</SwiperSlide>
							<SwiperSlide>{Slide2(props?.setcategoryModal)}</SwiperSlide>
							<SwiperSlide>{Slide3(props?.setcategoryModal)}</SwiperSlide>
						</>
					)}
				</Swiper>

				{/* App Store Links Overlay */}
				<div className='absolute top-4 right-4 z-10 flex flex-row gap-2'>
					{/* Google Play Store Link */}
					<a
						href="https://play.google.com/store/apps/details?id=com.collibetv3&hl=en"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center bg-black text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 shadow-lg border border-gray-700"
					>
						<svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
						</svg>
						<div className="text-left">
							<div className="text-xs opacity-90 hidden sm:block">GET IT ON</div>
							<div className="text-xs sm:text-sm font-semibold">Google Play</div>
						</div>
					</a>

					{/* Apple App Store Link */}
					<a
						href="https://apps.apple.com/in/app/collibet/id6471412332"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center bg-black text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 shadow-lg border border-gray-700"
					>
						<svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" viewBox="0 0 24 24" fill="currentColor">
							<path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
						</svg>
						<div className="text-left">
							<div className="text-xs opacity-90 hidden sm:block">Download on the</div>
							<div className="text-xs sm:text-sm font-semibold">App Store</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}

function Slide(setcategoryModal) {
	return (
		<>
			<div onClick={() => setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
				<LazyImage
					src='/Images/heroImage1.png'
					layout="responsive"
					alt="Hero Image 1"
				/>
			</div>
			<div onClick={() => setcategoryModal(true)} className='sm:hidden cursor-pointer'>
				<LazyImage
					src='/Images/heroSmall1.png'
					layout="responsive"
					alt="Hero Image 1 Mobile"
				/>
			</div>
		</>
	);
}

function Slide2(setcategoryModal) {
	return (
		<>
			<div onClick={() => setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
				<Image
					src='/Images/heroImage2.png'
					layout="responsive"
					width={1536}
					height={550}
					alt="Hero Image 2"
				/>
			</div>
			<div onClick={() => setcategoryModal(true)} className='sm:hidden cursor-pointer'>
				<Image
					src='/Images/heroSmall2.png'
					layout="responsive"
					width={585}
					height={924}
					alt="Hero Image 2 Mobile"
				/>
			</div>
		</>
	);
}

function Slide3(setcategoryModal) {
	return (
		<>
			<div onClick={() => setcategoryModal(true)} className='hidden sm:block cursor-pointer'>
				<Image
					src='/Images/heroImage3.png'
					layout="responsive"
					width={1536}
					height={550}
					alt="Hero Image 3"
				/>
			</div>
			<div onClick={() => setcategoryModal(true)} className='sm:hidden cursor-pointer'>
				<Image
					src='/Images/heroSmall3.png'
					layout="responsive"
					width={585}
					height={924}
					alt="Hero Image 3 Mobile"
				/>
			</div>
		</>
	);
}
// import axiosInstance from "../../utils/axios";
// import { FETCH_ALL_SERVICE } from "../../utils/constants";
// import { useState, useEffect } from "react";
// import AxiosInterceptors from "@/components/ApiList/AxiosInterceptors";
// import ApiList from "@/components/ApiList/ApiList";
// import ApiHeader from '@/components/ApiList/ApiHeader'
// import { RotatingLines } from "react-loader-spinner";
// import Image from "next/image";
// import styles from "../../styles/HomeServices.module.css";
// import Loading from "@/blocks/Loading";
// import Link from "next/link";
// import { FIND_PERCENTAGE_FROM_VALUE } from "@/components/helper/helper";
// import Head from "next/head";

// export default function OfferPage() {
// 	const [isLoading, setisLoading] = useState(true);
// 	const [offerList, setofferList] = useState(null);
// 	const [page, setPage] = useState(1)
// 	const [perPage, setPerPage] = useState(10)
// 	const { api_getAllOffers } = ApiList()

// 	// ═════════════║ THIS FUNCTION GETS THE OFFERS║══════════════════
// 	const fetchOffers = () => {
// 		setisLoading(true)
// 		AxiosInterceptors.get(`${api_getAllOffers}?page=${page}&limit=${perPage}&q=`, ApiHeader())
// 			.then(function (response) {
// 				if (!response?.data?.error) {
// 					setofferList(response?.data?.data);
// 				}
// 				setisLoading(false)
// 			})
// 			.catch(function (error) {
// 				setisLoading(false)
// 			})
// 	};


// 	console.log('the offer list...', offerList)
// 	useEffect(() => {
// 		fetchOffers()
// 	}, []);

// 	if (isLoading) {
// 		return (
// 			<div className="flex items-center justify-center h-96">
// 				<RotatingLines
// 					strokeColor="white"
// 					strokeWidth="5"
// 					animationDuration="0.75"
// 					width="25"
// 					visible={true}
// 				/>
// 			</div>
// 		)
// 	}

// 	return (
// 		<>
// 			<Head>
// 				<title>Home Service Offers in Ranchi | Save on AC, Plumbing & More – Collibet</title>
// 				<meta name="description" content="Grab the best deals on AC servicing, plumbing, and cleaning in Ranchi. Book local services at discounted rates with Collibet’s limited-time offers." />
// 			</Head>
// 			<div className="container px-4 py-12 mx-auto text-center">
// 				<h1 className="text-3xl font-semibold text-gray-800 xl:text-5xl text-center w-full">
// 					Explore Our{" "}
// 					<span className="text-amber-500">Latest Offers</span>
// 				</h1>
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
// 					{Array.isArray(offerList?.docs) && offerList?.docs?.length > 0 ? (
// 						offerList?.docs?.map(
// 							(item, index) =>
// 							(
// 								<Link key={item?._id} className=" p-4 mb-2 md:mb-0" href={
// 									// `/package-details?packageId=${item?.Package?._id}`
// 									(item?.Package?.slug === null || !item?.Package?.slug) ?
// 										`/package-details?packageId=${item?.Package?._id}` :
// 										`/package-details?service=${item?.Package?.slug}`
// 								}>
// 									<div
// 										className={
// 											"bg-gray-200 p-2 rounded-lg flex justify-center items-center flex-col group"
// 										}
// 									>
// 										<div className="w-full  h-40 overflow-hidden shadow-sm border relative">
// 											<Image
// 												src={item?.Package?.image}
// 												alt={item?.Package?.title}
// 												width={446}
// 												height={271}
// 												layout="responsive"
// 												objectFit="contain"
// 												loading="lazy"
// 											/>
// 											<div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
// 												{Math.round((100 - FIND_PERCENTAGE_FROM_VALUE(item?.Package?.MRP, item?.Package?.price, 2)))}% OFF
// 											</div>
// 										</div>
// 										<div className={styles.service_main_container_txt_container}>
// 											<p className={`${styles.service_main_container_p_1} text-left`}>
// 												{item?.Package?.title}
// 											</p>
// 										</div>
// 									</div>
// 								</Link>
// 							)
// 						)
// 					) : (
// 						<div className="col-span-1 md:col-span-2 lg:col-span-3 w-full flex justify-center items-center text-lg font-semibold text-gray-700 md:text-xl">
// 							No Offer Found !
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export async function getServerSideProps() {
// 	const { data } = await axiosInstance.get(FETCH_ALL_SERVICE);
// 	if (data.error) return { notFound: true };
// 	return { props: { services: data.payload } };
// }
import axiosInstance from "../../utils/axios";
import { FETCH_ALL_SERVICE } from "../../utils/constants";
import { useState, useEffect } from "react";
import AxiosInterceptors from "@/components/ApiList/AxiosInterceptors";
import ApiList from "@/components/ApiList/ApiList";
import ApiHeader from '@/components/ApiList/ApiHeader'
import { RotatingLines } from "react-loader-spinner";
import Image from "next/image";
import styles from "../../styles/HomeServices.module.css";
import Loading from "@/blocks/Loading";
import Link from "next/link";
import { FIND_PERCENTAGE_FROM_VALUE } from "@/components/helper/helper";
import Head from "next/head";

export default function OfferPage() {
	const [isLoading, setisLoading] = useState(true);
	const [offerList, setofferList] = useState(null);
	const [page, setPage] = useState(1)
	const [perPage, setPerPage] = useState(10)
	const { api_getAllOffers } = ApiList()

	// ═════════════║ THIS FUNCTION GETS THE OFFERS║══════════════════
	const fetchOffers = () => {
		setisLoading(true)
		AxiosInterceptors.get(`${api_getAllOffers}?page=${page}&limit=${perPage}&q=`, ApiHeader())
			.then(function (response) {
				if (!response?.data?.error) {
					setofferList(response?.data?.data);
				}
				setisLoading(false)
			})
			.catch(function (error) {
				setisLoading(false)
			})
	};

	console.log('the offer list...', offerList)
	useEffect(() => {
		fetchOffers()
	}, []);

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
				<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
					<RotatingLines
						strokeColor="#f59e0b"
						strokeWidth="5"
						animationDuration="0.75"
						width="40"
						visible={true}
					/>
					<p className="mt-4 text-gray-600 font-medium">Loading amazing offers...</p>
				</div>
			</div>
		)
	}

	return (
		<>
			<Head>
				<title>Tailoring Service Offers in Ranchi | Save on Stitching & More – Collibet</title>
				<meta name="description" content="Grab the best deals on AC servicing, plumbing, and cleaning in Ranchi. Book local services at discounted rates with Collibet's limited-time offers." />
			</Head>
			
			{/* Hero Section */}
			<div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-5">
					<div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
					<div className="absolute top-32 right-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
					<div className="absolute -bottom-8 left-32 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
				</div>

				<div className="container relative px-6 py-16 mx-auto">
					{/* Header Section */}
					<div className="text-center mb-16">
						<h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
							Explore Our{" "}
							<span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
								Latest Offers
							</span>
						</h1>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
							Discover incredible savings on premium tailoring services. Don not miss out on these exclusive deals!
						</p>
					</div>

					{/* Offers Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{Array.isArray(offerList?.docs) && offerList?.docs?.length > 0 ? (
							offerList?.docs?.map((item, index) => (
								<Link 
									key={item?._id} 
									href={
										(item?.Package?.slug === null || !item?.Package?.slug) ?
											`/package-details?packageId=${item?.Package?._id}` :
											`/package-details?service=${item?.Package?.slug}`
									}
									className="group block transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
								>
									<div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 group-hover:border-amber-200 transition-all duration-300">
										{/* Image Container */}
										<div className="relative h-52 overflow-hidden">
											<Image
												src={item?.Package?.image}
												alt={item?.Package?.title}
												width={446}
												height={271}
												layout="responsive"
												objectFit="cover"
												loading="lazy"
												className="transform transition-transform duration-700 group-hover:scale-110"
											/>
											{/* Gradient Overlay */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											
											{/* Discount Badge */}
											<div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
												{Math.round((100 - FIND_PERCENTAGE_FROM_VALUE(item?.Package?.MRP, item?.Package?.price, 2)))}% OFF
											</div>

											{/* New Badge (Optional - for featured offers) */}
											{index < 3 && (
												<div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
													HOT DEAL
												</div>
											)}
										</div>

										{/* Content */}
										<div className="p-6">
											<h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
												{item?.Package?.title}
											</h3>
											
											{/* Price Section */}
											<div className="flex items-center justify-between">
												<div className="flex items-center space-x-2">
													<span className="text-2xl font-bold text-amber-600">
														₹{item?.Package?.price}
													</span>
													<span className="text-lg text-gray-400 line-through">
														₹{item?.Package?.MRP}
													</span>
												</div>
												<div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
													Save ₹{item?.Package?.MRP - item?.Package?.price}
												</div>
											</div>

											{/* Book Now Button */}
											<div className="mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
												Book Now & Save
											</div>
										</div>
									</div>
								</Link>
							))
						) : (
							<div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-20">
								<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-gray-200">
									<div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
										<svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
									<h3 className="text-2xl font-bold text-gray-800 mb-3">No Offers Available</h3>
									<p className="text-gray-600 mb-6">Check back soon for exciting deals and discounts!</p>
									<div className="flex items-center justify-center space-x-3 text-amber-600">
										<div className="animate-bounce">🎁</div>
										<span className="text-sm font-medium">New offers coming soon</span>
										<div className="animate-bounce animation-delay-1000">✨</div>
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Action Buttons */}
					<div className="text-center">
						<div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
							<Link href="/services/allservice" className="group">
								<button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-3 min-w-[200px]">
									<svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
									</svg>
									<span>Explore Services</span>
								</button>
							</Link>
							
							<Link href="/" className="group">
								<button className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-2xl border-2 border-gray-200 hover:border-amber-300 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-3 min-w-[200px] group-hover:border-amber-400">
									<svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0h4m0 0h3a1 1 0 001-1V10M5 10l7-7 7 7" />
									</svg>
									<span>Go Home</span>
								</button>
							</Link>
						</div>
						
						{/* Additional Info */}
						<div className="mt-8 text-center">
							<p className="text-gray-500 text-sm">
								🔥 Limited time offers • ⚡ Book now to secure your discount
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const { data } = await axiosInstance.get(FETCH_ALL_SERVICE);
	if (data.error) return { notFound: true };
	return { props: { services: data.payload } };
}
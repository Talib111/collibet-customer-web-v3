import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/ServiceOffer.module.css";
import { IndianRupee } from "lucide-react";
import { IoMdCart } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { RotatingLines } from "react-loader-spinner";
import { MdLocalOffer } from "react-icons/md";
import { useAppContext } from "context/AuthContext";
import ApiHeader from "./ApiList/ApiHeader";
import AxiosInterceptors from "./ApiList/AxiosInterceptors";
import Link from "next/link";
import ApiList from "./ApiList/ApiList";

function ServiceOffer({ setpackageDetailsModalStatus, data, setmodalData, packageType = null, analyticsURL = null }) {
	const [isLoading, setisLoading] = useState(false);
	const [currentIndex, setcurrentIndex] = useState(false);
	const router = useRouter();
	const { user } = useAppContext();
	const { api_recordAnalytics } = ApiList()
	const { id: pkgId } = router.query;
	if (!data) {
		return <p>Loading...</p>;
	}
	const { packages } = data;
	const handleAddToCart = (pkg_id, categoryId = null) => {
		setisLoading(true);
		if (packageType == 'latest') {
			router.push(`/services/${categoryId}/${pkg_id}`);
			return
		}
		router.push(`/services/${pkgId}/${pkg_id}`);
	};

	//---------------------- THIS FUNCTION CALCULATES THE DISCOUNT VALUE ----------------------
	const offerDiscountValue = (mrp, price) => {
		let pricePer = (parseInt(price) * 100) / parseInt(mrp);
		let discountPer = 100 - pricePer;
		let roundedFigure = Math.round(discountPer);
		return roundedFigure;
	};


	// ══════════════════════════════║ THIS FUNCTION LOGS THE FOOTRPINTS ║═══════════════════════════════════
	const logFootPrints = (item) => {
		item.mobileNo = user?.mobileNumber || ''
		item.name = user?.name || ''
		item.email = user?.email || ''


		AxiosInterceptors.post(api_recordAnalytics, item, ApiHeader())
			.then(function (response) {
			})
			.catch(function (error) {
				console.log('==2 error list...', error)
			})
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
			{packages?.map((pkg, index) => (
				<Link onClick={(e) => {
					e.stopPropagation();
					logFootPrints(pkg)
				}} href={
					// `/package-details?packageId=${pkg?._id}`
					(pkg?.slug === null || !pkg?.slug) ?
						`/package-details?packageId=${pkg?._id}` :
						`/package-details?service=${pkg?.slug}`
				}
					key={pkg?._id}
					className=" mb-4 md:mb-0 p-7 "
				>
					<div className="w-full max-w-sm min-h-[400px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 cursor-pointer relative">
						<div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
							<Image
								// className={styles.service_main_container_img}
								className={`w-full  sm:h-auto h-full object-cover sm:object-fill`}
								src={pkg?.image}
								alt={"image"}
								width={446}
								height={271}
								layout="responsive"
								objectFit="contain"
								loading="lazy"
							/>
						</div>
						<div className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-300 to-indigo-400">
							<div className="flex-initial">
								<h1 className="inline-block mx-3 text-lg text-white">
									{pkg?.MRP > pkg?.price && (
										<span className="text-sm line-through text-gray-200">
											₹ {pkg?.MRP}
										</span>
									)}
									<span className="ml-2 font-semibold">
										{pkg?.price === 0 && <span className="text-yellow-500 border border-yellow-500 px-2 rounded-lg">Charges On Visit</span>}
										{pkg?.price !== 0 && <span> <IndianRupee className={"inline text-sm text-white"} />{pkg?.price}</span>}</span>
								</h1>
							</div>
							<div className="flex-1 flex justify-end items-center text-white font-semibold">
								<AiFillStar className="inline text-yellow-500" /> {pkg.rating}
							</div>
						</div>

						{/* MRP MUST BE GREATER TO SHOW AS OFFER */}
						{pkg?.MRP > pkg?.price && (
							<span className="bg-red-700 absolute top-0 left-0 text-white text-sm px-2 border border-white rounded-lg italic font-serif">
								<MdLocalOffer className="inline text-white" /> Offer{" "}
								{offerDiscountValue(pkg?.MRP, pkg?.price)}% off
							</span>
						)}
						<div className="px-6 py-4">
							<h1 className="text-xl font-semibold text-gray-800 dark:text-white">
								{pkg?.title}
							</h1>
							<p className="py-2 text-gray-700 dark:text-gray-400">
								{pkg?.subtitle}
							</p>

							<div className="flex items-center justify-center mt-4">
								{isLoading && index === currentIndex ? (
									<button className="px-4 py-1 text-xs font-semibold text-indigo-600 uppercase transition-colors duration-300 transform border border-indigo-600 rounded   flex justify-center items-center">
										<RotatingLines
											strokeColor="#6A78C5"
											strokeWidth="5"
											animationDuration="0.75"
											width="25"
											visible={true}
										/>
									</button>
								) : (
									<button
										onClick={(e) => {
											e.stopPropagation();
											logFootPrints(pkg)
											setcurrentIndex(index);
											handleAddToCart(pkg?._id, pkg?.category || null);
										}}
										className="px-4 py-1 text-xs font-semibold text-indigo-600 uppercase transition-colors duration-300 transform border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white flex justify-center items-center"
									>
										<IoMdCart className="inline text-xl mr-2" />
										Book Now
									</button>
								)}
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default ServiceOffer;

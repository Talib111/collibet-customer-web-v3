import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import { AuthGuard } from "guard";
import { useAppContext } from "context/AuthContext";
import Image from "next/image";

function StaticDateTimePickerLandscape() {
	const [isLoading, setisLoading] = useState(false);
	const [packageData, setpackageData] = useState(null);
	const { packageDetailsRefreshCount } = useAppContext();


	const router = useRouter();

	//---------------------- THIS FUNCTION CALCULATES THE DISCOUNT VALUE ----------------------
	const offerDiscountValue = (mrp, price) => {
		let pricePer = (parseInt(price) * 100) / parseInt(mrp);
		let discountPer = 100 - pricePer;
		let roundedFigure = Math.round(discountPer);
		return roundedFigure;
	};

	const handleAddToCart = (categoryId, pkg_id) => {
		setisLoading(true);
		router.push(`/services/${categoryId}/${pkg_id}`);
	};

	useEffect(() => {
		let packageItem = JSON.parse(localStorage.getItem("packageData"));
		console.log("the package data is..", packageItem);
		setpackageData(packageItem);
	}, [packageDetailsRefreshCount]);

	return (
		<AuthGuard>
			<Layout>
				<section className="overflow-hidden">
					<div className="w-full md:text-center font-semibold text-xl pl-4 md:pl-0 text-gray-700">
						Package Details
					</div>
					<div className="mx-auto max-w-5xl px-5 pt-6 pb-20  md:py-24">
						<div className="mx-auto flex flex-wrap items-center lg:w-4/5">
							<div className="lg:w-1/2 p-10">
								<Image
									height={100}
									width={100}
									alt="collibet packages"
									className="w-full rounded object-cover"
									src={packageData?.image}
								/>
							</div>

							{/* --------------------- THIS SHOWS OFFER LABEL ---------------------- */}
							{packageData?.MRP > packageData?.price && (
								<span className="absolute top-20 left-0 bg-red-700 mt-4  text-white text-sm px-2 border border-white rounded-lg italic font-serif">
									✨&nbsp;&nbsp; Offer{" "}
									{offerDiscountValue(packageData?.MRP, packageData?.price)}%
									off
								</span>
							)}

							<div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
								<h2 className="text-sm font-semibold tracking-widest text-gray-500">
									...
								</h2>
								<h1 className="my-2 text-3xl font-semibold text-black">
									{packageData?.title}
								</h1>
								<p className="leading-relaxed">{packageData?.subtitle}</p>
								<div className="my-4 flex items-center">
									{/* <span className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500" />
                    ))}
                    <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
                  </span> */}
								</div>
								{/* <p className="leading-relaxed">
                  {packageData?.subtitle}
                </p> */}
								<div className="mb-5 mt-6border-b-2 border-gray-100 pb-5 border-b">
									<div className="mr-3 text-md font-semibold">Features</div>
									<div className="flex flex-col items-center mt-2">
										{Array.isArray(packageData?.features) &&
											packageData?.features?.map((fItem) => (
												<div className="text-sm pr-2 mb-2 justify-center">
													<Star size={16} className="text-yellow-500 inline" />{" "}
													{fItem}
												</div>
											))}
									</div>
								</div>
								<div className="flex items-center justify-between">
									{packageData?.MRP > packageData?.price && (
										<span className="title-font text-xl font-bold text-gray-700 line-through">
											₹{packageData?.MRP}
										</span>
									)}
									<span className="title-font text-xl font-bold text-gray-900">
										₹{packageData?.price}
									</span>
									<button
										onClick={(e) => {
											e.stopPropagation();
											handleAddToCart(
												packageData?.category?._id,
												packageData?._id
											);
										}}
										type="button"
										className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
									>
										Book Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</AuthGuard>
	);
}

export default StaticDateTimePickerLandscape;

"use client";
import React, { useEffect, useState } from "react";
import Service from "@/blocks/Service";
import Loading from "@/blocks/Loading";
import ApiList from "../ApiList/ApiList";
import ApiHeader from "../ApiList/ApiHeader";
import AxiosInterceptors from "../ApiList/AxiosInterceptors";
import LazyImage from "../Image";
import { useRouter } from "next/navigation";
import { ChevronsRight } from "lucide-react";
import Head from "next/head";

const Services = ({ services, type, setcategoryModal }) => {
	const [categoryList, setcategoryList] = useState(null);
	const [randomBanner, setrandomBanner] = useState(null);
	const { api_getRandomBannerByKey } = ApiList()
	const router = useRouter()

	// ════════════════════════║ THIS FUNCTION SORT THE CATEGORYLIST BY updatedAt BY LATEST║═════════════════════════════
	const sortCategory = () => {
		const sortedArray = [...services].sort((a, b) => {
			const dateA = new Date(a.updatedAt);
			const dateB = new Date(b.updatedAt);
			return dateB - dateA;
		});
		setcategoryList(sortedArray);
	};

	// ═════════════║ THIS FUNCTION GETS THE DYANMIC BANNERS║══════════════════
	const fetchrandomBanner = () => {
		AxiosInterceptors.get(`${api_getRandomBannerByKey}/HOME_SCREEN_WEB`, ApiHeader())
			.then(function (response) {
				if (!response?.data?.error) {
					setrandomBanner(response?.data?.data);
				}
			})
			.catch(function (error) { })
	};

	useEffect(() => {
		sortCategory();
		fetchrandomBanner()
	}, []);

	return (
		<>
			<Head>
				<title>Best Custom Tailoring Services in Ranchi | Stitching, Alteration & Designer Fit – Collibet</title>
				<meta name="description" content="Experience all-in-one tailoring services in Ranchi—custom stitching, alterations, designer blouses, ethnic wear, and formal wear tailoring—only with Collibet’s professional tailors." />
			</Head>
			<section className="bg-white md:mt-10">

				{randomBanner?.status==1 && <div className='w-4/5 mx-auto'>
					<h2 className="text-xl font-semibold text-gray-800 xl:text-2xl mb-1 cursor-pointer group">
						<button onClick={() => router.push(randomBanner?.navLink || '/')} className="text-orange-500 group-hover:border-b group-hover:border-b-orange-500">| {randomBanner?.bannerTitle} <ChevronsRight className="inline text-orange-500" /></button>
					</h2>
					<LazyImage
						onClick={() => router.push(randomBanner?.navLink || '/')}
						src={randomBanner?.imageURL || '/abc.png'}
						layout="responsive"
						className="border broder-white rounded-lg cursor-pointer"
					/>
				</div>}

				<div className="container px-4 py-12 mx-auto text-center">
					<h1 className="text-3xl font-semibold text-gray-800 xl:text-5xl">
						Services You Need At{" "}
						<span className="text-green-500">Super Fast Speed</span>
					</h1>

					{/* ══════════════════════════════║ FOR PAGE CASE SHOW ONLY EIGTH CATEGORIES ║═══════════════════════════════════ */}
					{type === "page" && (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
							{Array.isArray(categoryList) && categoryList.length > 0 ? (
								categoryList.map(
									(service, index) =>
										index < 8 && <Service key={service?._id} service={service} />
								)
							) : (
								<div className="col-span-1 md:col-span-2 lg:col-span-3 w-full flex justify-center items-center">
									<Loading />
								</div>
							)}
						</div>
					)}

					{/* ══════════════════════════════║ FOR MODAL CASE SHOW ALL ║═══════════════════════════════════ */}
					{type === "modal" && (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
							{Array.isArray(categoryList) && categoryList.length > 0 ? (
								categoryList.map((service, index) => (
									<Service key={service?._id} service={service} />
								))
							) : (
								<div className="col-span-1 md:col-span-2 lg:col-span-3 w-full flex justify-center items-center">
									<Loading />
								</div>
							)}
						</div>
					)}

					{type === "page" && (
						<div className="md:text-right font-semibold md:pr-4 text-gray-700 hover:text-indigo-500">
							<button onClick={() => setcategoryModal(true)}>More {">>"}</button>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Services;

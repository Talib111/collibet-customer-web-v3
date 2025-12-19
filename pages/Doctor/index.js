import Layout from "@/components/Layout/Layout";
import React, { useState, useEffect } from "react";
import "swiper/css";
import data from "./doctor";
import Image from "next/image";
import AxiosInterceptors from "@/components/ApiList/AxiosInterceptors";
import ApiHeader from "@/components/ApiList/ApiHeader";
import ApiList from "@/components/ApiList/ApiList";

const Doctor = () => {
	const [dynamicData, setdynamicData] = useState(null)
	const [isLoading, setisLoading] = useState(false)
	const { api_getDynamicContent } = ApiList()

	// ══════════════════════════════║ THIS FUNCTION FETCHES DYANAMIC CONTENT ║═══════════════════════════════════
	const fetchMasterList = () => {
		setisLoading(true)
		setisLoading(true)
		AxiosInterceptors.get(api_getDynamicContent, ApiHeader())
			.then(function (response) {
				console.log('dyanmic data came...', response)
				if (response?.data?.error === false) {
					let oneData = response?.data?.payload?.docs.filter((item) => {
						return item?.key === 'doctor'
					})

					console.log('filtered data...', oneData)
					setdynamicData(oneData[0])
				}
			})
			.catch(function (error) {
				console.log('==2 error list...', error)
			}).finally(() => {
				setisLoading(false)
			})
	}

	useEffect(() => {
		fetchMasterList()
	}, [])



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
								{dynamicData?.title}
							</h1>
							<p className="mt-5 text-base sm:text-lg md:text-xl lg:text-md xl:text-xl text-gray-600 text-center">
								{dynamicData?.subtitle}
							</p>
						</div>
					</div>


					<div className="px-4 py-10 sm:px-8 md:px-12 lg:px-20 xl:px-40">
						<div className="p-4">
							<h1 className="text-xl sm:text-2xl text-black md:text-3xl font-bold text-left">
								Details :
							</h1>
							<p className="mt-5 text-base sm:text-lg md:text-xl lg:text-md xl:text-xl text-gray-600 text-left">
								{dynamicData?.description}
							</p>
						</div>
					</div>
				</div>

			</Layout>
	);
};

export default Doctor;

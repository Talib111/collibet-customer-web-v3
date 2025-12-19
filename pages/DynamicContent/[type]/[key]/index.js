import Layout from "@/components/Layout/Layout";
import React, { useState } from "react";
import "swiper/css";
import Image from "next/image";
import { useRouter } from "next/router";
import { RotatingLines } from "react-loader-spinner";


const Doctor = () => {
	const [isLoading, setisLoading] = useState(true);
	const router = useRouter();
	const { type, key } = router.query;

	const dynamicData = key ? JSON.parse(decodeURIComponent(key)) : {};

	return (
		<Layout>
			<div className="text-center flex flex-col sm:flex-row">
				<div className="flex justify-center w-full relative md:p-10">
					{isLoading && (
						<div className="w-full h-96 flex justify-center items-center absolute left-0 top-0">
							<RotatingLines
								strokeColor="#6C7AC6"
								strokeWidth="5"
								animationDuration="0.75"
								width="50"
								visible={true}
							/>
						</div>
					)}
					<Image
						width={1500}
						height={1500}
						className="object-cover w-full h-full border-b rounded-md border-b-gray-300"
						src={dynamicData?.image}
						onLoad={() => setisLoading(false)}
						alt="heroimg"
					/>
				</div>

				<div>
					<div className="px-4 py-10 sm:px-8 md:px-12 lg:px-20 xl:px-40">
						<div className="p-4">
							<h1 className="text-3xl sm:text-4xl text-black md:text-5xl font-bold text-left">
								{dynamicData?.title}
							</h1>
							<p className="mt-5 text-base sm:text-lg md:text-xl lg:text-md xl:text-xl text-gray-600 text-left">
								{dynamicData?.subtitle}
							</p>
						</div>
					</div>

					<div className="px-4 py-10 pt-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
						<div className="p-4">
							<h1 className="text-xl sm:text-2xl text-black md:text-3xl font-bold text-left">
								Details :
							</h1>
							<p className="mt-5 text-base sm:text-lg md:text-xl lg:text-md xl:text-xl text-gray-600 text-left">
								{dynamicData?.desc}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Doctor;

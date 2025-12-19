import React, { useState, useEffect } from "react";
import data from "./footerCard.json";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import ApiList from "../ApiList/ApiList";
import ApiHeader from "../ApiList/ApiHeader";
import AxiosInterceptors from "../ApiList/AxiosInterceptors";
import { useRouter } from "next/router";

const FooterCards = () => {
	const [dynamicList, setdynamicList] = useState(null);
	const [isLoading, setisLoading] = useState(null);
	const router = useRouter();
	const { api_getDynamicContentList } = ApiList();
	// ═════════════║ THIS FUNCTION FETCHES DYNAMIC CONTENT LIST ║══════════════════
	const fetchDynamicContent = () => {
		setisLoading(true);
		AxiosInterceptors.get(api_getDynamicContentList, ApiHeader())
			.then(function (response) {
				console.log("Fetching dynamic list", response?.data?.data);
				if (!response?.data?.error) {
					setdynamicList(response?.data?.payload?.docs);
				} else {
				}
			})
			.catch(function (error) {})
			.finally(() => {
				setisLoading(false);
			});
	};

	useEffect(() => {
		fetchDynamicContent();
	}, []);

	return (
		<section className="">
			<div className="container px-6 py-10 mx-auto text-center">
				<h2 className="text-3xl font-semibold text-gray-800 xl:text-4xl mt-10">
					Your source of&nbsp;
					<span className="text-[#FDBF34]">quick & reliable</span>&nbsp;
					Informations.
				</h2>
				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
					{Array.isArray(dynamicList) &&
						dynamicList?.map((item, index) => (
							<Link
								href={`/DynamicContent/${item?.key}/${encodeURIComponent(
									JSON.stringify({
										title: item?.title,
										subtitle: item?.subtitle,
										desc: item?.description,
										image: item?.thumbnail,
									})
								)}`}
							>
								<div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 border cursor-pointer md:border md:border-gray-300">
									<div className="p-4 w-full  h-full overflow-hidden ">
										<Image
											className="object-cover object-center w-full h-full "
											src={item?.thumbnail || ""}
											alt={`Content-Image-${index}`}
											width={348}
											height={164}
										/>
									</div>

									<div className="px-6 py-4">
										<h1 className="text-xl font-semibold text-gray-800 dark:text-white">
											{item?.title}
										</h1>
										<p className="py-2 text-gray-700 dark:text-gray-400">
											{item?.subtitle}
										</p>

										<div className="flex items-center justify-end mt-4 text-gray-700 dark:text-gray-200">
											<Link
												href={`/DynamicContent/${
													item?.key
												}/${encodeURIComponent(
													JSON.stringify({
														title: item?.title,
														subtitle: item?.subtitle,
														desc: item?.description,
														image: item?.thumbnail,
													})
												)}`}
											>
												<button
													type="button"
													className="rounded-md bg-gradient-to-r from-indigo-300 to-indigo-400 px-3 py-2 text-sm font-semibold text-white shadow-sm float-right"
												>
													{" "}
													Explore{" "}
													<BsArrowRightShort className="inline text-white" />{" "}
												</button>
											</Link>
										</div>
									</div>
								</div>
							</Link>
						))}
				</div>
			</div>
		</section>
	);
	return (
		<section className="">
			<div className="container px-6 py-10 mx-auto">
				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
					{data.map((item, index) => (
						<Link className="relative rounded-md" href={`/${item.link}`}>
							<div
								style={{
									backgroundImage:
										"url(https://res.cloudinary.com/simplotel/image/upload/x_0,y_22,w_544,h_327,r_0,c_crop,q_80,fl_progressive/w_550,f_auto,c_fit/ananta-hotels-resorts/_MG_3238_1_kimlrx)",
								}}
								className="absolute top-0 left-0 w-full h-full bg-gray-400 opacity-40 rounded-md"
							></div>
							<div className="absolute top-0 left-0 w-full h-full  rounded-md flex justify-center items-center">
								{/* <div className='bg-black w-[90%] h-[90%] opacity-80'></div> */}
							</div>

							<div
								key={index}
								className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group  hover:bg-gray-800 rounded-xl bg-transparent"
							>
								<h1 className="mt-4 text-2xl font-semibold text-gray-300 capitalize dark:text-white group-hover:text-white">
									{item.title}
								</h1>

								<p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
									{item.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default FooterCards;

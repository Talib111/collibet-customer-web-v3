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
import Head from "next/head";

export default function BlogPage() {
	const [isLoading, setisLoading] = useState(true);
	const [blogList, setblogList] = useState(null);
	const [page, setPage] = useState(1)
	const [perPage, setPerPage] = useState(10)
	const { api_getAllBlogs } = ApiList()

	// ═════════════║ THIS FUNCTION GETS THE OFFERS║══════════════════
	const fetchBlogs = () => {
		setisLoading(true)
		AxiosInterceptors.get(`${api_getAllBlogs}?page=${page}&limit=${perPage}&q=`, ApiHeader())
			.then(function (response) {
				if (response?.data?.success) {
					setblogList(response?.data?.data);
				}
				setisLoading(false)
			})
			.catch(function (error) {
				setisLoading(false)
			})
	};


	useEffect(() => {
		fetchBlogs()
	}, []);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-96">
				<RotatingLines
					strokeColor="white"
					strokeWidth="5"
					animationDuration="0.75"
					width="25"
					visible={true}
				/>
			</div>
		)
	}

	return (
		<>
			<Head>
				<title>Home Care Tips & Service Guides for Ranchi | Collibet Blog</title>
				<meta name="description" content="Explore home maintenance tips, seasonal service checklists, and expert DIY guides tailored for Ranchi homes on the Collibet blog." />
			</Head>
			<div className="container px-4 py-12 mx-auto text-center">
				<h1 className="text-3xl font-semibold text-gray-800 xl:text-5xl text-center w-full">
					Explore Our{" "}
					<span className="text-amber-500">Blogs</span>
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
					{Array.isArray(blogList?.docs) && blogList?.docs?.length > 0 ? (
						blogList?.docs?.map(
							(item, index) =>
							(
								<Link key={item?._id} className=" p-4 mb-2 md:mb-0" href={
									`/blog-details?blogId=${item?._id}`
								}>
									<div
										className={
											"bg-gray-200 p-2 rounded-lg flex justify-center items-center flex-col group"
										}
									>
										<div className="w-full  h-40 overflow-hidden shadow-sm border">
											<Image
												src={item?.thumbnail || ''}
												alt={item?.title}
												width={446}
												height={271}
												layout="responsive"
												objectFit="contain"
												loading="lazy"
											/>
										</div>
										<div className={styles.service_main_container_txt_container}>
											<p className={`font-semibold text-gray-900 text-left`}>
												{item?.title}
											</p>
											<p className={`text-xs text-left line-clamp-2`}>
												{item?.subtitle}
											</p>
										</div>
									</div>
								</Link>
							)
						)
					) : (
						<div className="col-span-1 md:col-span-2 lg:col-span-3 w-full flex justify-center items-center">
							No Blogs Found !
						</div>
					)}
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

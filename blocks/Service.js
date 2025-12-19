import React from "react";
import Image from "./Image";
import Link from "next/link";
import styles from "../styles/HomeServices.module.css";


const Service = ({ service }) => {
	const { _id, thumbnail, title, slug } = service;
	console.log('the service is..',service)

	return (
		// <Link  className=" p-4 mb-2 md:mb-0" href={`/services/${_id}`}>
		<Link className=" p-4 mb-2 md:mb-0" href={
			(slug === null || !slug) ?
				`/category-details?categoryId=${_id}` :
				`/category-details?category=${slug}`
		}>
			<div
				className={
					"bg-gray-200 p-2 rounded-lg flex justify-center items-center flex-col group"
				}
			>
				{/* <div className={`h-auto `}> */}
				{/* <div className="bg-gray-300  rounded-full flex justify-center items-center h-48 w-48 overflow-hidden border border-transparent group-hover:border-green-400"> */}
				<div className="w-full  h-full overflow-hidden shadow-sm border">
					<Image
						// className={styles.service_main_container_img || ""}
						// src={'/Images/cleaner.png'}
						src={thumbnail}
						alt={title}
						width={446}
								height={271}
						layout="responsive"
						objectFit="contain"
						loading="lazy"
					/>
				</div>
				{/* </div> */}
				{/* </div> */}
				<div className={styles.service_main_container_txt_container}>
					<p className={`font-semibold text-gray-900 text-left`}>
						{title}
					</p>
					{/* <p className={styles.service_main_container_p_2}>{slug}</p> */}
				</div>
			</div>
		</Link>
	);
};

export default Service;

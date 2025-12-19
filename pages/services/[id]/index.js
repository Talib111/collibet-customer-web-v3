import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import { FETCH_ALL_SERVICE, FETCH_SERVICE } from "../../../utils/constants";
import Layout from "@/components/Layout/Layout";
import ServiceOffer from "@/components/ServiceOffer";
import Loading from "@/blocks/Loading";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper/core";
import Slide from "@/components/service/Slider";
import Top from "@/components/service/Top";
import PackageDetailsModal from "@/components/PackageDetailsModal";
import AxiosInterceptors from "@/components/ApiList/AxiosInterceptors";
import ApiHeader from "@/components/ApiList/ApiHeader";
import SpacerHorizontal from "@/components/UI/SpacerHorizontal";
import ApiList from "@/components/ApiList/ApiList";

SwiperCore.use([Autoplay]);

export const ServiceDetailPage = ({ servicedetail, analyticsURL, categoryId }) => {
	const [packageDetailsModalStatus, setpackageDetailsModalStatus] = useState(false);
	const [modalData, setmodalData] = useState(null);
	const [faqList, setfaqList] = useState(null);
	const [thumbnailList, setthumbnailList] = useState(null);
	const { api_getFaqByEntityId,api_getAllThumbnails } = ApiList()

	const handleModalClose = () => {
		setpackageDetailsModalStatus(false)
		setmodalData(null)
	}

	// ═════════════║ THIS FUNCTION GETS FAQ LIST FOR THIS PACKAGE║══════════════════
	const fetchFaqlist = () => {
		AxiosInterceptors.get(`${api_getFaqByEntityId}?entityId=${categoryId}&faqType=CATEGORY`, ApiHeader())
			.then(function (response) {
				if (!response?.data?.error) {
					setfaqList(response?.data?.data);
				}
			})
			.catch(function (error) { })
	};

  // ═════════════║ THIS FUNCTION GETS THE THUMBNAIL DATA║══════════════════
	const fetchThumbnails = () => {
		AxiosInterceptors.get(`${api_getAllThumbnails}?entityId=${categoryId}&entityType=CATEGORY`, ApiHeader())
			.then(function (response) {
				if (!response?.data?.error) {
					setthumbnailList(response?.data?.data);
				}
			})
			.catch(function (error) { })
	};


	useEffect(() => {
		fetchFaqlist()
		fetchThumbnails()
	}, [])


	return (
		<Layout>
			<PackageDetailsModal
				packageDetailsModalStatus={packageDetailsModalStatus}
				setpackageDetailsModalStatus={setpackageDetailsModalStatus}
				handleModalClose={handleModalClose}
				modalData={modalData}
			/>

			<section className="bg-white">
				{servicedetail && servicedetail?.length > 0 ? (
					servicedetail.map((service) => (
						<Top thumbnailList={thumbnailList} key={service?._id} data={service} />
					))
				) : (
					<Loading />
				)}
			</section>


			<section className="rounded-lg   p-4 text-center flex justify-center">
				{servicedetail && servicedetail?.length > 0 ? (
					servicedetail.map((service) => (
						<Slide key={service?._id} data={service} />
					))
				) : (
					<Loading />
				)}
			</section>

			<section className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 xl:px-20">
				{servicedetail && servicedetail?.length > 0 ? (
					servicedetail?.map((service) => (
						<ServiceOffer
							setpackageDetailsModalStatus={setpackageDetailsModalStatus}
							key={service?._id}
							data={service}
							setmodalData={setmodalData}
							analyticsURL={analyticsURL}
						/>
					))
				) : (
					<Loading />
				)}

				<div className='mt-4' >
					<div className="w-full">
						<div
							className="flex justify-between w-full py-2 text-left text-lg font-medium text-gray-700 focus:outline-none"
						> Frequently Asked Questions ({faqList?.docs?.length})
						</div>
						<div className="mt-2 text-lg text-gray-700">
							<SpacerHorizontal variant='secondary' />
							<div className='pt-4'>
								{faqList?.docs?.map((item, index) => (
									<div key={item?._id} className="flex gap-2 mb-4">
										<div>{index + 1}</div>
										<div>
											<div className='text-sm font-semibold text-yellow-600'>{item?.question}
											</div>
											<p className='text-sm font-semibold text-gray-600 '>{item?.answer}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

			</section>
		</Layout>
	);
};

export async function getServerSidePaths() {
	const { data } = await axiosInstance.get(FETCH_ALL_SERVICE);

	if (data?.error) {
		return { notFound: true };
	}

	const servicedetail = data?.payload?.map((service) => ({
		params: { id: service?._id },
	}));

	return {
		paths: servicedetail,
		fallback: "blocking",
	};
}

export async function getServerSideProps({ params }) {
	const { id } = params;
	const { data } = await axiosInstance.get(`${FETCH_SERVICE}/${id}`);

	if (data?.error) {
		return {
			notFound: true,
		};
	}

	const servicedetail = [data?.payload]; // Wrap the service data in an array
	const analyticsURL = data?.analyticsURL

	return {
		props: {
			servicedetail,
			analyticsURL,
			categoryId: id
		},
	};
}

export default ServiceDetailPage;

import React, { useState,useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import ServiceOffer from "@/components/ServiceOffer";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper/core";
import Top from "@/components/service/Top";
import PackageDetailsModal from "@/components/PackageDetailsModal";
import ApiList from "@/components/ApiList/ApiList";
import AxiosInterceptors from "@/components/ApiList/AxiosInterceptors";
import ApiHeader from "@/components/ApiList/ApiHeader";

SwiperCore.use([Autoplay]);

 const LatestPackage = () => {
	const [packageDetailsModalStatus, setpackageDetailsModalStatus] = useState(false);
	const [modalData, setmodalData] = useState(null);
	const [latestPackageList, setlatestPackageList] = useState(null);
	const [isLoading, setisLoading] = useState(false);
	const {api_getPopularPackages} = ApiList()

	const handleModalClose = () => {
		setpackageDetailsModalStatus(false)
		setmodalData(null)
	}

	// ══════════════════════════════║ THIS FUNCTION UPDATES PROFILE INFO ║═══════════════════════════════════
    const fetchLatesPackages = () => {
		setisLoading(true)
        AxiosInterceptors.get(api_getPopularPackages, ApiHeader())
            .then(function (response) {
                console.log('update profile response...', response)
                if (response?.data?.error === false) {
                    console.log('profile updated...')
					setlatestPackageList(response?.data?.payload)
                }
            })
            .catch(function (error) {
                console.log('==2 error list...', error)
            }).finally(() => {
                setisLoading(false)
            })
    }

	useEffect(() => {
	 fetchLatesPackages()
	}, [])
	
	console.log('lates package list...',latestPackageList)

	

	return (
		<Layout>
			<PackageDetailsModal
				packageDetailsModalStatus={packageDetailsModalStatus}
				setpackageDetailsModalStatus={setpackageDetailsModalStatus}
				handleModalClose={handleModalClose}
				modalData={modalData}
			/>

			<section className="bg-white">
				{ (
					[1].map((service) => (
						<Top key={service._id} data={{title:'Latest Services',video:'https://res.cloudinary.com/dor3gao8l/video/upload/v1713942854/COLLIBET%20HOME%20SERVICES/Brown_Minimalist_Moodboard_Home_Decor_Inspiration_Video_1_rvxrgu.mp4'}} />
					))
				) }
			</section>


			<section className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 xl:px-20">
				 {
						<ServiceOffer
							setpackageDetailsModalStatus={setpackageDetailsModalStatus}
							key={111}
							data={{packages:latestPackageList}}
							setmodalData={setmodalData}
							packageType={'latest'}
						/>
					}
			</section>
		</Layout>
	);
};

export default LatestPackage;

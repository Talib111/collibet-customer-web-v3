import Feature from "@/components/Home/Feature";
import { Section3 } from "@/components/Home/Section3";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import Layout from "@/components/Layout/Layout";
import axiosInstance from "../utils/axios";
import { FETCH_ALL_SERVICE } from "../utils/constants";
import FooterCards from "@/components/Home/FooterCards";
import { useRef, useState, useEffect } from "react";
import SuggestionBot from "@/components/SuggetionBot/SuggetionBot";
import Hero3 from "@/components/Home/Hero3";
import { useAppContext } from "context/AuthContext";

export default function Home({ services }) {
	const [categoryModal, setcategoryModal] = useState(false);
	const [isLoading, setisLoading] = useState(true);
	const categoreyRef = useRef();
	const { isLogoutLoader, setisLogoutLoader } = useAppContext()
	useEffect(() => {
		if (categoryModal) {
			if (!categoreyRef.current.open) {
				categoreyRef.current.showModal();
			}
		} else {
			if (categoreyRef.current.open) {
				categoreyRef.current.close();
			}
		}
	}, [categoryModal]);

	//-------------- THIS IS ACTIVATING LOADER PREVIEW-------------
	useEffect(() => {
		setTimeout(() => {
			setisLoading(false)
		}, 1000);
	}, [isLoading])

	//-------------- THIS IS ACTIVATING LOADER PREVIEW IN CASE OF LOGOUT-------------
	useEffect(() => {
		setisLoading(true)
		setTimeout(() => {
			setisLogoutLoader(false)
		}, 2000);

	}, [isLogoutLoader])




	return (
			<div className="overflow-y-hidden">
				{/* ══════════════════════════════║ DIALOG TO OPEN SERVICES MODAL ║═══════════════════════════════════ */}
				<dialog ref={categoreyRef} className="bg-transparent w-full md:w-3/4">
					<div
						style={{ zIndex: 9999999 }}
						className="relative bg-white rounded-lg  border-2 border-gray-50 w-full"
					>
						<button
							onClick={() => setcategoryModal(false)}
							type="button"
							className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white"
						>
							<svg className="w-5 h-5" fill="currentColor">
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
						<div className="px-2 text-left">
							<Services type="modal" services={services} />
						</div>
					</div>
				</dialog>

				<Layout>
					<Hero3 setcategoryModal={setcategoryModal} />
					<Services
						type="page"
						setcategoryModal={setcategoryModal}
						services={services}
					/>
					<Section3 />
					<FooterCards />
					<Feature />
					<Testimonials />
					<SuggestionBot />
				</Layout>
			</div>
	);
}

export async function getServerSideProps() {
	const { data } = await axiosInstance.get(FETCH_ALL_SERVICE);
	if (data.error) return { notFound: true };
	return { props: { services: data.payload } };
}

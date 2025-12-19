import React from "react";
import Image from "next/image";
import FeedbackModal from "pages/Dashboard/bookings/feedback";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import Review from "@/components/service/Review";

function Cartpage() {
	const router = useRouter();
	const { id: pkgId } = router.query;

	return (
		<Layout>
			<section className="py-6 bg-lime-50">
				<div className="mx-auto max-w-5xl p-8 md:p-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="w-full h-full overflow-hidden glassy-service rounded-lg shadow-xl dark:bg-gray-800">
							<h1 className="py-4 text-5xl font-bold  text-black text-center uppercase dark:text-white">
								Massage Therapy
							</h1>
							<p className="text-2xl font-bold text-center text-gray-700 dark:text-gray-900">
								Relaxing Massage
							</p>
							<p className="text-xl text-red-600 text-center dark:text-green-600">
								Rating: 4.9
							</p>
							<div className="mt-6 text-center">
								<p className="text-4xl font-light">Aromatherapy oils</p>
								<p className="text-4xl font-light">Deep tissue massage</p>
								<p className="text-4xl font-light">Stress relief</p>
							</div>
							<div className="mt-6 text-center">
								<p className="text-xl font-light">On Monday, 3 June at </p>
								<p className="text-xl font-light text-green-500"> 3:00 pm</p>
							</div>
						</div>

						<div className="w-full h-full overflow-hidden glassy-service rounded-lg shadow-xl dark:bg-gray-800">
							<div className="relative h-80 md:h-80 flex items-center justify-center">
								<Image
									width={300}
									height={300}
									src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1687209068/msp_ryzgqy.png"
									alt=""
								/>
							</div>

							<div className="flex items-center justify-between px-8 py-8 md:py-10">
								<h1 className="text-3xl font-bold text-green-500 border border-green-500 rounded p-3">
									$400
								</h1>
								<button
									onClick={() =>
										router.push(
											`/services/${pkgId}/DateTimePicker/cart/congrats`
										)
									}
									className="px-8 py-4 text-xl font-semibold text-white uppercase transition-colors duration-300 transform bg-green-700 rounded hover:bg-green-600 focus:bg-green-600 focus:outline-none"
								>
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="flex bg-lime-50 rounded-lg shadow-lg dark:bg-gray-800">
					<div className="w-2/3 p-6 md:p-4 flex justify-center  items-center">
						<section className="bg-white dark:bg-gray-900 glassy-service shadow-xl">
							<div className="container px-6 py-10 mx-auto ">
								<Review />
							</div>
						</section>
					</div>
					<div class="w-2/3">
						<FeedbackModal />
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Cartpage;

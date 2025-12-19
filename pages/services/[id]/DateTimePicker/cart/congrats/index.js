import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";

export const CongratsPage = () => {
	const router = useRouter();
	const { id: pkgId } = router.query;
	return (
			<Layout>
				<section className="py-10 bg-blue-50">
					<div className="mx-auto max-w-4xl bg-white shadow-xl glassy-service p-20">
						<div className="mx-auto max-w-2xl  text-center">
							<div className="isolate flex justify-center -space-x-2">
								<Image
									width={300}
									height={300}
									src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1691051512/Yellow-Minimalist-Congrats-Ins-unscreen_wavlqa.gif"
									alt="Article"
								/>
							</div>

							<a
								href="#"
								className="block mt-2 text-3xl font-semibold text-gray-800 text-center"
							>
								Your order is complete!
							</a>
							<p className="mt-4 text-base text-gray-600 text-center dark:text-gray-400">
								You will be receiving a confirmation email with order details.
							</p>
							<div className="mt-6">
								<div className="flex items-center justify-center">
									<button
										onClick={() =>
											router.push(
												`/services/${pkgId}/DateTimePicker/cart/congrats/userprofile`
											)
										}
										className="bg-white flex items-center text-gray-700 justify-center gap-x-3 text-base sm:text-lg border-purple-700 rounded-3xl hover:bg-purple-100 duration-300 transition-colors border px-6 py-2"
									>
										<Image
											width={24}
											height={24}
											src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1691048973/compass_ufdydq.png"
											alt="Explore more classes"
										/>
										<span className="text-purple-700">
											Explore more classes
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
	);
};

export default CongratsPage;

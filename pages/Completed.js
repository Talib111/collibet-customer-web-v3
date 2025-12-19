import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";

export const Completed = () => {
	const router = useRouter();
	return (
		<Layout>
			<section className="py-10 bg-blue-50">
				<div className="mx-auto max-w-4xl bg-white shadow-xl  p-20">
					<div className="mx-auto max-w-2xl  text-center bg-white">
						<div className="isolate flex justify-center -space-x-2">
							<Image
								width={300}
								height={300}
								src="/congrats.svg"
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
							You will be receiving a confirmation notification with order
							details
						</p>
						<div className="mt-6">
							<div className="flex items-center justify-center">
								<button
									onClick={
										() => router.push(`/Dashboard/bookings`)
									}
									className=" bg-gradient-to-r from-indigo-300 to-indigo-400 flex items-center text-white justify-center gap-x-3 text-base sm:text-lg border-purple-700 rounded-3xl hover:bg-purple-600 duration-300 transition-colors border px-6 py-2 hover:shadow-xl"
								>
									<span className="">View Bookings</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Completed;

import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";

function Thankyou() {
	const router = useRouter();
	return (
		<div>
			<Layout>
				<section className="py-10 ">
					<div className="mx-auto max-w-4xl bg-white shadow-2xl glassy-service p-20">
						<div className="mx-auto max-w-2xl  text-center">
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
								Thank you!
							</a>
							<a
								href="#"
								className="block mt-2 text-3xl font-semibold text-gray-800 text-center"
							>
								For Feedback
							</a>
							<p className="mt-4 text-base text-gray-600 text-center dark:text-gray-400">
								By making your voice heard, you help us improve Collibet.
							</p>
							<div className="user-actions mt-4">
								<button
									onClick={() => router.push("/")}
									className="btn-primary bg-teal-400 hover:bg-teal-500 text-white py-4 px-8 rounded"
								>
									Go Home
								</button>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</div>
	);
}

export default Thankyou;

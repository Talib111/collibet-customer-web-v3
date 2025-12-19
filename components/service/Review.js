import React from "react";
import Image from "next/image";

function review() {
	return (
		<div>
			<div className="mt-6 md:flex md:items-center md:justify-between">
				<div>
					<h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
						What our clients are saying
					</h1>
					<div className="flex mx-auto mt-6">
						<span className="inline-block w-40 h-1 bg-cyan-600 rounded-full"></span>
						<span className="inline-block w-3 h-1 mx-1 bg-cyan-700 rounded-full"></span>
						<span className="inline-block w-1 h-1 bg-cyan-800 rounded-full"></span>
					</div>
				</div>
			</div>

			<section class="grid grid-cols-2 gap-8 mt-8 xl:mt-12 lg:grid-cols-2  xl:grid-cols-2 h-80 overflow-y-auto">
				{/* Add scroll bar to the review section */}

				<div className="mx-auto max-w-xl rounded-md bg-gray-100 p-1 ">
					<div className="flex flex-col rounded-md bg-white">
						<div className="flex flex-1 flex-col justify-between p-8">
							<div className="mb-4 flex space-x-2">
								{Array.from({ length: 5 }).map((_, i) => (
									<span key={i}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="h-6 w-6 text-yellow-500"
										>
											<path
												fillRule="evenodd"
												d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
								))}
							</div>
							<div className="flex-1 pt-2">
								<blockquote>
									<p className="text-lg text-gray-800">
										“Finally, I&apos;ve found a template that covers all bases
										for a bootstrapped startup. We were able to launch in days,
										not months.”
									</p>
								</blockquote>
							</div>

							<div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
								<div className="flex items-center">
									<Image
										width={100}
										height={100}
										className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
										src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1688844683/Rectangle_6_1_djc3fy.png"
										alt=""
									/>
									<div className="ml-3 min-w-0">
										<p className="truncate text-base font-semibold text-gray-800">
											Theresa Webb
										</p>
										<p className="truncate text-base text-gray-500">
											Web Designer
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto max-w-xl rounded-md bg-gray-100 p-1">
					<div className="flex flex-col rounded-md bg-white">
						<div className="flex flex-1 flex-col justify-between p-8">
							<div className="mb-4 flex space-x-2">
								{Array.from({ length: 5 }).map((_, i) => (
									<span key={i}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="h-6 w-6 text-yellow-500"
										>
											<path
												fillRule="evenodd"
												d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
								))}
							</div>
							<div className="flex-1 pt-2">
								<blockquote>
									<p className="text-lg text-gray-800">
										“Finally, I&apos;ve found a template that covers all bases
										for a bootstrapped startup. We were able to launch in days,
										not months.”
									</p>
								</blockquote>
							</div>

							<div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
								<div className="flex items-center">
									<Image
										width={100}
										height={100}
										className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
										src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1688847154/Rectangle_6_2_uvelee.png"
										alt=""
									/>
									<div className="ml-3 min-w-0">
										<p className="truncate text-base font-semibold text-gray-800">
											Theresa Webb
										</p>
										<p className="truncate text-base text-gray-500">
											Web Designer
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto max-w-xl rounded-md bg-gray-100 p-1">
					<div className="flex flex-col rounded-md bg-white">
						<div className="flex flex-1 flex-col justify-between p-8">
							<div className="mb-4 flex space-x-2">
								{Array.from({ length: 5 }).map((_, i) => (
									<span key={i}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="h-6 w-6 text-yellow-500"
										>
											<path
												fillRule="evenodd"
												d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
								))}
							</div>
							<div className="flex-1 pt-2">
								<blockquote>
									<p className="text-lg text-gray-800">
										“Finally, I&apos;ve found a template that covers all bases
										for a bootstrapped startup. We were able to launch in days,
										not months.”
									</p>
								</blockquote>
							</div>

							<div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
								<div className="flex items-center">
									<Image
										width={100}
										height={100}
										className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
										src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1688847155/Rectangle_7_2_lzo4bp.png"
										alt=""
									/>
									<div className="ml-3 min-w-0">
										<p className="truncate text-base font-semibold text-gray-800">
											Theresa Webb
										</p>
										<p className="truncate text-base text-gray-500">
											Web Designer
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Rest of the reviews */}
			</section>
		</div>
	);
}

export default review;

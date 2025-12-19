import React from "react";
import Buttons from "../service/Button";

function Inputfield() {
	return (
		<div className="item shadow-xl glassy-service rounded-lg p-4 flex flex-col items-center justify-center">
			<section className="p-4 bg-white border border-gray-400 rounded-md shadow-md dark:bg-gray-800">
				<h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white mb-2">
					Account settings
				</h2>

				<form>
					<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
						<div>
							<label
								className="text-gray-700 dark:text-gray-200"
								htmlFor="username"
							>
								First Name
							</label>
							<input
								id="username"
								type="text"
								className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring"
							/>
						</div>

						<div>
							<label
								className="text-gray-700 dark:text-gray-200"
								htmlFor="emailAddress"
							>
								Last Name
							</label>
							<input
								id="emailAddress"
								type="email"
								className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring"
							/>
						</div>
					</div>

					<div className="py-1">
						<label
							htmlFor="email"
							className="block text-sm text-gray-800 dark:text-gray-300"
						>
							Email Address
						</label>
						<div className="relative flex items-center mt-1">
							<span className="absolute">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6 mx-2 text-gray-400 dark:text-gray-500"
								>
									{/* SVG path data */}
								</svg>
							</span>
							<input
								type="email"
								placeholder="john@example.com"
								className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring"
							/>
						</div>
					</div>

					<div className="py-1">
						<label
							htmlFor="address"
							className="block text-sm text-gray-800 dark:text-gray-300"
						>
							Address
						</label>
						<div className="relative flex items-center mt-1">
							<input
								type="text"
								placeholder="Your Address"
								className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring"
							/>
						</div>
					</div>

					<div className="py-1">
						<label
							htmlFor="contact"
							className="block text-sm text-gray-800 dark:text-gray-300"
						>
							Contact
						</label>
						<div className="relative flex items-center mt-1">
							<input
								type="text"
								placeholder="91 999999999"
								className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
						<Buttons />
						<Buttons />
					</div>

					<div className="flex justify-end mt-4">
						<button className="px-8 py-2.5 mx-2 leading-5 text-white transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-green-400 focus:outline-none focus:bg-green-600">
							Cancel
						</button>
						<button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-green-400 focus:outline-none focus:bg-green-600">
							Save
						</button>
					</div>
				</form>
			</section>
		</div>
	);
}

export default Inputfield;

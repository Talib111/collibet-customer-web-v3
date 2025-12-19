import React from "react";
import { useRouter } from "next/router";

function Walletbottom() {
	const router = useRouter();
	const { id: pkgId } = router.query; 
	return (
		<div>
			<div className="content flex justify-center items-center flex-col p-8">
				<p className="flex items-start -mx-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6 mx-2 text-red-500 "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>

					<a
						className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400 "
						href="#"
					>
						Kanta Toli Ranchi, Jharkhand,
					</a>
				</p>

				<div className="user-actions mt-4">
					<button
						onClick={() => router.push(`/services/${pkgId}/DateTimePicker/cart/congrats`)}
						className="btn-primary bg-teal-400 hover:bg-teal-500 text-white py-4 px-20 rounded"
					>
						Pay Online to Book Slot
					</button>
				</div>
			</div>
		</div>
	);
}

export default Walletbottom;

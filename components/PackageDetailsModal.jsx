import React, { useEffect, useRef, useState } from "react";
import { IndianRupee } from "lucide-react";
import { GoDotFill } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";
import { RotatingLines } from "react-loader-spinner";
import { MdLocalOffer } from "react-icons/md";
import Image from "next/image";


function PackageDetailsModal(props) {
	const [isLoading, setisLoading] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const packageDetailsRef = useRef();
	const router = useRouter();
	const { id: pkgId } = router.query;

	useEffect(() => {
		if (props?.packageDetailsModalStatus) {
			if (!packageDetailsRef.current.open) {
				packageDetailsRef.current.showModal();
			}
		} else {
			if (packageDetailsRef.current.open) {
				packageDetailsRef.current.close();
			}
		}
	}, [props?.packageDetailsModalStatus]);

	const handleAddToCart = (pkg_id) => {
		setisLoading(true);
		router.push(`/services/${pkgId}/${pkg_id}`);
	};

	const handleMouseMove = (e) => {
		if (window.innerWidth < 500) {
			return;
		}
		const boundingRect = e.target.getBoundingClientRect();
		const x = (e.clientX - boundingRect.left) / boundingRect.width;
		const y = (e.clientY - boundingRect.top) / boundingRect.height;
		setPosition({ x, y });
	};

	//---------------------- THIS FUNCTION CALCULATES THE DISCOUNT VALUE ----------------------
	const offerDiscountValue = (mrp, price) => {
		let pricePer = (parseInt(price) * 100) / parseInt(mrp);
		let discountPer = 100 - pricePer;
		let roundedFigure = Math.round(discountPer);
		return roundedFigure;
	};


	return (
		<dialog ref={packageDetailsRef} className="bg-transparent w-full  md:px-20">
			<div
				style={{ zIndex: 9999999 }}
				class="relative bg-white rounded-lg  border-2 border-gray-50 w-full"
			>
				{/* MRP MUST BE GREATER TO SHOW AS OFFER */}
				{props?.modalData?.MRP > props?.modalData?.price && (
							<span className="bg-red-700 absolute top-0 left-0 text-white text-sm px-2 border border-white rounded-lg italic font-serif">
								<MdLocalOffer className="inline text-white" /> Offer{" "}
								{offerDiscountValue(props?.modalData?.MRP, props?.modalData?.price)}% off
							</span>
						)}
				<button
					onClick={() => props?.handleModalClose(false)}
					type="button"
					class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white"
				>
					<svg class="w-5 h-5" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
				<div class="px-2 text-left">
					<div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
						<h1 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">
							Package Description
						</h1>

						<div className="flex flex-col md:flex-row">
							<div className="flex-1 flex justify-center items-center md:py-10">
								<Image
								height={100}
								width={100}
									onMouseMove={handleMouseMove}
									style={{
										transformOrigin: `${position.x * 100}% ${
											position.y * 100
										}%`,
									}}
									className="object-cover object-center w-auto md:h-[60vh] md:transform md:hover:scale-150 cursor-crosshair"
									src={props?.modalData?.image}
									alt="avatar"
								/>
							</div>
							<div className="flex-1">
								<div className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-300 to-indigo-400">
									<div className="flex-1">
										<h1 className="mx-3 text-lg font-semibold text-white">
										{props?.modalData?.price===0 && <span className="text-yellow-500 border border-yellow-500 px-2 rounded-lg">Charges On Visit</span>}
										{props?.modalData?.price !==0 && <span> <IndianRupee className={"inline text-sm text-white"} />{props?.modalData?.price}</span>}
										</h1>
									</div>
									<div className="flex-1 flex justify-end text-white font-semibold items-center">
										<AiFillStar className="inline text-yellow-500" />
										{props?.modalData?.rating}
									</div>
								</div>
								<div className="px-6 py-4">
									<h1 className="text-xl font-semibold text-gray-800 dark:text-white">
										{props?.modalData?.title}
									</h1>
									<p className="py-2 text-gray-700 dark:text-gray-400">
										{props?.modalData?.subtitle}
									</p>
									<hr />

									<h1 className="text-lg font-semibold text-gray-700 mt-4">
										Features
									</h1>

									{Array.isArray(props?.modalData?.features) &&
										props?.modalData?.features?.map((item, index) => (
											<div
												key={`features${index}`}
												className="flex items-center mt-4 text-gray-700 dark:text-gray-200"
											>
												<GoDotFill className="inline mr-2" />
												<h1 className="px-2 text-sm">{item}</h1>
											</div>
										))}
								</div>

								<div className="flex items-center justify-center mt-4 mb-10">
									{isLoading ? (
										<button className="px-4 py-1 text-xs font-semibold text-indigo-600 uppercase transition-colors duration-300 transform border border-indigo-600 rounded   flex justify-center items-center">
											<RotatingLines
												strokeColor="#6A78C5"
												strokeWidth="5"
												animationDuration="0.75"
												width="25"
												visible={true}
											/>
										</button>
									) : (
										<button
											onClick={() => handleAddToCart(props?.modalData._id)}
											className="px-2 py-1 text-xs font-semibold text-indigo-600 uppercase transition-colors duration-300 transform border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white"
										>
											<IoMdCart className="inline text-xl" /> Book now
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</dialog>
	);
}

export default PackageDetailsModal;

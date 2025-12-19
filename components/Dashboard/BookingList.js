import React, { useEffect, useState } from "react";
import axiosInstance from "utils/axios";
import { FETCH_BOOKING } from "utils/constants";
import { useRouter } from "next/router";
import { RotatingLines } from "react-loader-spinner";
import Link from "next/link";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Button from "../UI/Button";

function BookingList() {
	const [bookingData, setBookingData] = useState([]);
	const [activeBookings, setactiveBookings] = useState(null);
	const [pastBookings, setpastBookings] = useState(null);
	const [flag, setFlag] = useState(true);
	const [orderDetailsData, setOrderDetailsData] = useState({});
	const [orderDate, setOrderDate] = useState(null);
	const [isLoading, setisLoading] = useState(false);
	const router = useRouter();

	const fetchBookingData = async () => {
		setisLoading(true);
		try {
			const response = await axiosInstance.get(FETCH_BOOKING); // Replace with your API endpoint
			console.log(response.data);
			setBookingData(response.data.payload);
			if (
				response.data.error === true ||
				response.data.message === "Please Signin again, your token is expired!"
			) {
				alert("You have to LogIN again");
				router.push("/");
				return;
			}
			filterData(response.data.payload)
			setisLoading(false);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const filterData = (data) => {

		const tempActiveBookings = data.filter(element => {
			// If there is only one item in the servicesBooked array and it has isServiceDone set to false, return true
			if (element?.servicesBooked?.length === 1) {
				return element.servicesBooked[0]?.cart?.isServiceDone === false;
			}
			// If there are multiple items in the servicesBooked array, check if at least one item contains both true and false values
			else {
				const hasTrueAndFalse = element?.servicesBooked.some(item => item?.cart?.isServiceDone === false)
				// &&
				// 	element?.servicesBooked.some(item => item?.cart?.isServiceDone === false);
				return hasTrueAndFalse;
			}
		});


		const tempPastBookings = data.filter(element => {
			return element?.servicesBooked.every(item => item?.cart?.isServiceDone);
		});

		setactiveBookings(tempActiveBookings)
		setpastBookings(tempPastBookings)

	}

	console.log('active booking', activeBookings?.length)
	console.log('past booking', pastBookings?.length)

	useEffect(() => {
		fetchBookingData();
	}, []);

	console.log(bookingData);

	const formatCustomDate = (isoDate) => {
		const date = new Date(isoDate);
		const options = {
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric",
		};
		const formattedDate = date.toLocaleDateString(undefined, options);

		const day = date.getDate();
		const daySuffix =
			day === 1 || day === 21 || day === 31
				? "st"
				: day === 2 || day === 22
					? "nd"
					: day === 3 || day === 23
						? "rd"
						: "th";

		return formattedDate.replace(/\d+(?=\s)/, `$&${daySuffix}`);
	};



	return (
		<>
			<div className="flex items-center gap-x-3 bg-gradient-to-r from-indigo-300 to-indigo-400 h-40"></div>
			<section className="container px-4 mx-auto -mt-40 md:-mt-40 ">
				{/* <div className="flex items-center gap-x-3 bg-gradient-to-r from-indigo-300 to-indigo-400">
					<h2 className="text-xl md:text-3xl font-semibold text-white">
						My Bookings
					</h2>
				</div> */}
				{/* TABLE SECTION */}
				{isLoading && (
					<div className="w-full h-40 flex justify-center items-center">
						<RotatingLines
							strokeColor="white"
							strokeWidth="5"
							animationDuration="0.75"
							width="50"
							visible={true}
						/>
					</div>
				)}
				{!isLoading && (
					<div>
						<div className="flex flex-col mt-6">
							<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">

								{/* ════════════════════║ ACTIVE BOOKINGS   ║═════════════════════════ */}
								<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
									<h1 className="font-semibold text-xl text-gray-300 mb-2 px-2">Active Bookings({activeBookings?.length || 0})</h1>
									{Array.isArray(activeBookings) && activeBookings?.length !== 0 &&
										<>
											<div className="hidden md:block overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
												<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
													<thead className="bg-gray-50 dark:bg-gray-800">
														<tr>
															<th
																scope="col"
																className="px-3 text-center py-3.5 tesemiboldfont-normal rtl:text-right text-gray-800 dark:text-gray-400"
															>
																<span>#</span>
															</th>
															<th
																scope="col"
																className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
															>
																<span>Order No.</span>
															</th>
															<th
																scope="col"
																className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
															>
																<span>Services</span>
															</th>
															<th
																scope="col"
																className="px-2 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
															>
																<span>Total Service</span>
															</th>
															<th
																scope="col"
																className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
															>
																<span>Date</span>
															</th>
															<th
																scope="col"
																className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
															>
																<span>Payment Mode</span>
															</th>
															<th
																scope="col"
																className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
															>
																<span>Action</span>
															</th>
														</tr>
													</thead>
													<tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
														{Array.isArray(activeBookings) &&
															activeBookings?.map((data, index) => (
																<tr key={`bookingMob${index}`}>
																	<td className="px-3 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																		<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
																			<h2 className="text-sm font-normal text-emerald-500">
																				{index + 1}
																			</h2>
																		</div>
																	</td>
																	<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																		<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
																			<Link
																				href={`/Dashboard/bookings/${data?.orderId}`}
																			>
																				<h2 className="text-sm font-normal text-blue-500 hover:underline">
																					{data?.orderId}
																				</h2>
																			</Link>
																		</div>
																	</td>
																	<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																		<div className="items-left px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800 flex flex-col gap-1">
																			{data?.servicesBooked?.map((item) => (
																				<div>
																					<span className="bg-yellow-50 border border-yellow-500 px-2 rounded-full text-xs font-semibold">{item?.package?.title}</span>
																				</div>
																			))}
																		</div>
																	</td>
																	<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																		<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">

																			<h2 className="text-sm font-normal text-emerald-500">
																				{data?.servicesBooked?.length}
																			</h2>
																		</div>
																	</td>
																	<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																		<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
																			<h2 className="text-sm font-normal text-emerald-500">
																				{data?.createdAt !== undefined
																					? formatCustomDate(data.createdAt)
																					: null}
																			</h2>
																		</div>
																	</td>
																	<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																		<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
																			<h2 className="text-sm font-normal text-emerald-500">
																				{data?.isCOD ? (
																					<span className="bg-yellow-50 text-yellow-600 italic font-serif px-2 rounded-lg">
																						COD
																					</span>
																				) : (
																					<span className="bg-green-50 text-green-400 italic font-serif px-2 rounded-lg">
																						Online
																					</span>
																				)}
																			</h2>
																		</div>
																	</td>
																	<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																		<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
																			<Link
																				href={`/Dashboard/bookings/${data?.orderId}`}
																			>
																				<Button className="bg-indigo-400 font-semibold hover:bg-indigo-600">View Details</Button>
																			</Link>

																		</div>
																	</td>
																</tr>

															))}
													</tbody>
												</table>
											</div>
											{/* --------- ACTIVE BOOKING MOBILE SCREEN LAYOUT ---------- */}
											<div className="md:hidden overflow-hidden  dark:border-gray-700 md:rounded-lg px-2">
												{Array.isArray(activeBookings) &&
													activeBookings?.map((data, index) => (
														<div key={index} className="bg-white shadow-md rounded-lg mb-4 md:mb-0">
															<Link href={`/Dashboard/bookings/${data?.orderId}`}
															>
																<div className="p-4">
																	<h2 className="text-lg font-semibold text-gray-800 mb-2">
																		{data?.orderId}
																	</h2>
																	<div className="text-sm text-gray-600 mb-2 flex">
																		<div>Services : </div>
																		<div>{data?.servicesBooked?.map((item) => (
																			<span className="ml-2 text-xs font-semibold bg-amber-50 border border-amber-500 px-2 rounded-full">{item?.package?.title},<br /></span>
																		))}</div>
																	</div>
																	<p className="text-sm text-gray-600 mb-2">
																		Total Service: {data?.servicesBooked?.length}
																	</p>
																	<p className="text-sm text-gray-600 mb-2">
																		Date: {data?.createdAt !== undefined ? formatCustomDate(data.createdAt) : null}
																	</p>
																	<p className="text-sm text-gray-600 mb-2">
																		Payment Mode: {data?.isCOD ? (
																			<span className="bg-yellow-50 text-yellow-600 italic font-serif px-2 rounded-lg">
																				COD
																			</span>
																		) : (
																			<span className="bg-green-50 text-green-400 italic font-serif px-2 rounded-lg">
																				Online
																			</span>
																		)}
																	</p>
																	<p className="text-sm text-gray-600 mb-2">
																		Status: {data?.orderStatus}
																	</p>
																</div>
															</Link>
														</div>
													))}
											</div>
										</>
									}

									{Array.isArray(activeBookings) && activeBookings?.length == 0 &&
										<div className="overflow-hidden border bg-white border-gray-200 dark:border-gray-700 md:rounded-lg pb-10">
											<div className="mt-10 font-semibold text-red-400 text-lg flex justify-center items-center text-center">
												No Active Service, Want to book Service
											</div>
											<div className="flex justify-center items-center">
												<Link href="/services/allservice">
													<button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-indigo-500 rounded-lg hover:bg-indigo-700 lg:mx-0 lg:w-auto focus:outline-none hover:shadow-xl">
														Book Service
													</button>
												</Link>
											</div>
										</div>
									}
								</div>
								{/* ════════════════════║ PAST BOOKINGS   ║═════════════════════════ */}
								{Array.isArray(pastBookings) && pastBookings?.length !== 0 &&
									<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 mt-10">
										<h1 className="font-semibold text-xl text-gray-600 mb-2 px-2">Booking History({pastBookings?.length || 0})</h1>
										<div className="hidden md:block overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
											<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
												<thead className="bg-gray-50 dark:bg-gray-800">
													<tr>
														<th
															scope="col"
															className="px-3 text-center py-3.5 tesemiboldfont-normal rtl:text-right text-gray-800 dark:text-gray-400"
														>
															<span>#</span>
														</th>
														<th
															scope="col"
															className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
														>
															<span>Order No.</span>
														</th>
														<th
															scope="col"
															className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
														>
															<span>Services</span>
														</th>
														<th
															scope="col"
															className="px-2 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
														>
															<span>Total Service</span>
														</th>
														<th
															scope="col"
															className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
														>
															<span>Date</span>
														</th>
														<th
															scope="col"
															className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
														>
															<span>Payment Mode</span>
														</th>
														<th
															scope="col"
															className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-800 dark:text-gray-400"
														>
															<span>Status</span>
														</th>
													</tr>
												</thead>
												<tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
													{Array.isArray(pastBookings) &&
														pastBookings?.map((data, index) => (
															<tr key={`bookingBig${index}`}>
																<td className="px-3 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																	<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
																		<h2 className="text-sm font-normal text-emerald-500">
																			{index + 1}
																		</h2>
																	</div>
																</td>
																<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																	<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
																		<Link
																			href={`/Dashboard/bookings/${data?.orderId}`}
																		>
																			<h2 className="text-sm font-normal text-blue-500 hover:underline">
																				{data?.orderId}
																			</h2>
																		</Link>
																	</div>
																</td>
																<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																	<div className="items-left px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800 flex flex-col gap-1">
																		{data?.servicesBooked?.map((item) => (
																			<div>
																				<span className="bg-yellow-50 border border-yellow-500 px-2 rounded-full text-xs font-semibold">{item?.package?.title}</span>
																			</div>
																		))}
																	</div>
																</td>
																<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																	<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">

																		<h2 className="text-sm font-normal text-emerald-500">
																			{data?.servicesBooked?.length}
																		</h2>
																	</div>
																</td>
																<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																	<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
																		<h2 className="text-sm font-normal text-emerald-500">
																			{data?.createdAt !== undefined
																				? formatCustomDate(data.createdAt)
																				: null}
																		</h2>
																	</div>
																</td>
																<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																	<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
																		<h2 className="text-sm font-normal text-emerald-500">
																			{data?.isCOD ? (
																				<span className="bg-yellow-50 text-yellow-600 italic font-serif px-2 rounded-lg">
																					COD
																				</span>
																			) : (
																				<span className="bg-green-50 text-green-400 italic font-serif px-2 rounded-lg">
																					Online
																				</span>
																			)}
																		</h2>
																	</div>
																</td>
																<td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
																	<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
																		<h2 className="text-sm font-normal text-emerald-500">
																			{data?.orderStatus}
																		</h2>
																	</div>
																</td>
															</tr>
														))}
												</tbody>
											</table>
										</div>

										{/* --------- PAST BOOKING MOBILE SCREEN LAYOUT ---------- */}
										<div className="md:hidden overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
											{Array.isArray(pastBookings) &&
												pastBookings?.map((data, index) => (
													<div key={index} className="bg-white shadow-md rounded-lg mb-4 md:mb-0">
														<Link href={`/Dashboard/bookings/${data?.orderId}`}>
															<div className="p-4">
																<h2 className="text-lg font-semibold text-gray-800 mb-2">
																	{data?.orderId}
																</h2>
																<div className="text-sm text-gray-600 mb-2 flex">
																	<div>Services : </div>
																	<div>{data?.servicesBooked?.map((item) => (
																		<span className="ml-2 text-xs font-semibold bg-amber-50 border border-amber-500 px-2 rounded-full">{item?.package?.title},<br /></span>
																	))}</div>
																</div>
																<p className="text-sm text-gray-600 mb-2">
																	Total Service: {data?.servicesBooked?.length}
																</p>
																<p className="text-sm text-gray-600 mb-2">
																	Date: {data?.createdAt !== undefined ? formatCustomDate(data.createdAt) : null}
																</p>
																<p className="text-sm text-gray-600 mb-2">
																	Payment Mode: {data?.isCOD ? (
																		<span className="bg-yellow-50 text-yellow-600 italic font-serif px-2 rounded-lg">
																			COD
																		</span>
																	) : (
																		<span className="bg-green-50 text-green-400 italic font-serif px-2 rounded-lg">
																			Online
																		</span>
																	)}
																</p>
																<p className="text-sm text-gray-600 mb-2">
																	Status: {data?.orderStatus}
																</p>
															</div>
														</Link>
													</div>
												))}
										</div>
									</div>
								}
							</div>
						</div>
					</div>
				)}
			</section>
			{/* SPACR */}
			<div className="mt-40"></div>
		</>
	);
}

export default BookingList;

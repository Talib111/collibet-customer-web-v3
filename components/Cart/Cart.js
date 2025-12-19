import { useEffect, useState, useCallback } from "react";
import styles from "../../styles/Cart.module.css"; // Import your CSS module
import {
	CREATE_ORDER_API,
	CREATE_ORDER_API_POST_V2,
	CREATE_ORDER_OFFLINE_API,
	DELETE_CART_ITEM,
	FETCH_CART_DETAILS2,
	FETCH_PROFILE,
	UPDATE_ITEM_COUNT,
	VERIFY_ORDER_API,
	API_UPDATE_EMAIL
} from "../../utils/constants";
import axiosInstance from "../../utils/axios";
import { MapPin, Pencil, Minus, Plus, Coins, Check, X } from "lucide-react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import useRazorpay from "react-razorpay";
import { RotatingLines } from "react-loader-spinner";
import Link from "next/link";
import { useAppContext } from "context/AuthContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { allowNumberCharacterDashInput } from "../Snippets/PowerupFunctions";
import CommonConfirmModal from "@/components/CommonConfirmModal";
import moment from "moment";
import ApiHeader from "../ApiList/ApiHeader";
import Button from "../UI/Button";
import Image from "next/image";
import UpdateEmailPopup from "./UpdateEmailPopup";

function Cart() {
	const [Razorpay, isLoaded] = useRazorpay();
	const { isLogoutLoader, setCartCount, user, initialize } = useAppContext();
	const [commonConfirmModalStatus, setcommonConfirmModalStatus] =
		useState(false);
	const [apiData, setApiData] = useState(null);
	const [isLoadingCoupon, setisLoadingCoupon] = useState(null);
	const [fullData, setfullData] = useState(null);
	const [subTotal, setSubTotal] = useState(0);
	const [gst, setGST] = useState(null);
	const [totalAmount, setTotalAmount] = useState(null);
	const [profileData, setProfileData] = useState([]);
	const [isLoading, setisLoading] = useState(false);
	const [isLoadingOnline, setisLoadingOnline] = useState(false);
	const [emailModalStatus, setemailModalStatus] = useState(false);
	const [isLoadingOffline, setisLoadingOffline] = useState(false);
	const [isLoadingDelete, setisLoadingDelete] = useState(false);
	const [deleteItemId, setdeleteItemId] = useState(null);
	const [hasPassedService, sethasPassedService] = useState(false);
	const [coinUseStatus, setcoinUseStatus] = useState(false)
	const [couponAppliedStatus, setCouponAppliedStatus] = useState(false);
	const [emailSubmitLoading, setemailSubmitLoading] = useState(false);
	const [email, setemail] = useState('');



	const router = useRouter();

	let validationSchema = yup.object({
		coupon: yup.string(),
	});

	const initialValues = {
		coupon: "",
	};

	const formik = useFormik({
		initialValues: initialValues,
		enableReinitialize: true,
		onSubmit: (values) => {
			console.log("form values", formik.values);
			if (formik.values?.coupon?.length === 0) {
				toast.error("Please Enter Coupon !");
				return;
			}
			// fetchData(values?.coupon)
			// uploadImageHelper(values)
		},
		validationSchema,
	});

	//    ═════════════║🔰 THIS FUNCTION HANDLES ONCHANGE EVENT 🔰║══════════════════
	const handleOnChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		{
			name == "coupon" &&
				formik.setFieldValue(
					"coupon",
					allowNumberCharacterDashInput(value, formik.values.coupon, 15)
				);
		}
	};

	useEffect(() => {
		initialize()
		const fetchProfile = async () => {
			try {
				const res = await axiosInstance.get(FETCH_PROFILE);
				// console.log(res.data);
				setProfileData(res.data.payload);
				if (!res?.data?.payload?._id) {
					toast.error(res?.data?.message || "Please create profile");
					router.push("/Dashboard/profile");
					return;
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchProfile();
	}, []);

	// console.log(profileData)

	const calculateTotals = (data) => {
		let sum = 0;
		let totalgst = 0;

		for (var i = 0; i < data?.length; i++) {
			sum += data[i].package.price;
			if (data[i].package.gst) {
				totalgst += (data[i].package.gst * data[i].package.price) / 100;
			}
		}

		// Update state with the calculated sum
		setSubTotal(sum);
		setGST(totalgst);
		setTotalAmount(sum + totalgst);
	};


	const fetchData = async () => {
		setisLoading(true);
		sethasPassedService(false);
		try {
			const response = await axiosInstance.get(FETCH_CART_DETAILS2); // Replace with your API endpoint
			setfullData(response.data);
			if (response.data?.message != 'No item in cart, Please add some items') {
				checkForPasedService(response?.data?.payload);
			}
			setApiData(response.data.payload);
			setCartCount(response.data?.payload?.length || 0);
			if (response?.data?.error)
				return toast.error(response.data.message || "SOMETHING_WENT_WRONG");
			// calculateTotals(response.data.payload);
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setisLoading(false);
		}
	};


	// ═════════════════║  THIS FUNCTION RESTRICTS EMAIL UPDATE AT BOOKING ║══════════════════════
	const updateEmail = async () => {
		setemailSubmitLoading(true)
		let requestBody = {
			email: email,
		};
		try {
			const response = await axiosInstance.post(API_UPDATE_EMAIL, requestBody, ApiHeader()); // Replace with your API endpoint
			if (response?.data?.error === false) {
				window.location.reload()
				toast.success(result.data.message);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setemailSubmitLoading(false);
		}
	};

	// ═════════════════║  THIS FUNCTION UPDATES ITEM COUNT║══════════════════════
	const updateItemCount = async (itemCount, cartId) => {
		setisLoading(true)
		let requestBody = {
			itemCount,
			serviceId: cartId
		};
		try {
			const response = await axiosInstance.post(UPDATE_ITEM_COUNT, requestBody, ApiHeader()); // Replace with your API endpoint
			if (response?.data?.error === false)
				fetchData()
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setisLoading(false);
		}
	};

	const fetchCouponData = async (e, isCoinUsed) => {
		e.preventDefault();
		let url = FETCH_CART_DETAILS2;

		url = `${FETCH_CART_DETAILS2}/?couponCode=${formik.values?.coupon}&coinUseStatus=${isCoinUsed}`;
		setisLoadingCoupon(true);
		try {
			const response = await axiosInstance.get(url); // Replace with your API endpoint
			if (response?.data?.error) {
				fetchData();
			} else {
				// formik.values?.length !== 0 ? toast.success(response.data.message) : "";
				setfullData(response.data);
				checkForPasedService(response?.data?.payload);
				setApiData(response.data.payload);
				setCartCount(response.data?.payload?.length || 0);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setisLoadingCoupon(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

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

	const deleteItem = async (cartID) => {
		setisLoadingDelete(true);
		const { cartId } = cartID;
		console.log(cartID);
		try {
			const { data } = await axiosInstance.post(DELETE_CART_ITEM, {
				cartId: cartID,
			});
			console.log("API Response:", data);
			fetchData();
			if (data?.error == false) {
				toast.success(data?.message);
				setisLoadingDelete(false);
				setdeleteItemId(null);
				setcommonConfirmModalStatus(false);
				return;
			}
			if (data?.error == true)
				return toast.error(data.message || "Something went Wrong");
			calculateTotals(apiData.filter((item) => item.id !== itemId));
		} catch (error) {
			console.error("Error submitting data:", error);
			setisLoadingDelete(false);
			setcommonConfirmModalStatus(false);
		}
	};

	const openRazorpayPage = async ({
		currency,
		id,
		amount,
		key_id,
		cartIds,
		beforeDiscountAmount,
		discountAmount,
		discountPercentage,
	}) => {
		var options = {
			description: "Service Booking Charge",
			image: profileData.userImage,
			currency: currency,
			key: key_id,
			amount: Math.round(amount * 100),
			name: "Collibet",
			order_id: id,
			prefill: {
				email: profileData?.email,
				contact: profileData?.mobileNumber,
				name: profileData?.name,
			},
			theme: { color: "#3399cc" },
			handler: (response) => {
				console.log("Payment success:", response);
				_verifyOrder({
					...response,
					amount: Math.round(amount),
					id: id,
					cartIds: cartIds,
					beforeDiscountAmount: beforeDiscountAmount,
					discountAmount: discountAmount,
					discountPercentage: discountPercentage,
					coinUseStatus: coinUseStatus,
					couponCode: formik.values?.coupon
				});
			},
		};
		const rzpay = new Razorpay(options);
		rzpay.on("payment.failed", function (response) {
			return toast.error("Payment Failed, Please try again later");
		});
		rzpay.open();
	};

	const handleOnlinePay = useCallback(async () => {
		//_____________________ THIS RESTRICTS IF EMAIL IS NOT UPDATED ___________________
		if (!user?.email) {
			setemailModalStatus(true)
			console.log('email not updated..')
			return
		}

		setisLoadingOnline(true);
		let url = CREATE_ORDER_API_POST_V2;
		if (formik.values?.coupon?.length !== 0) {
			url = CREATE_ORDER_API_POST_V2
		}
		try {
			let requestBody = {
				totalPayableAmount: fullData?.totalPayableAmount
			}
			const { data } = await axiosInstance.post(url, requestBody);
			console.log('at online pay', data);
			if (data?.error) {
				return toast.error(data?.message || "SOMETHING_WENT_WRONG");
			}

			openRazorpayPage({
				id: data?.id,
				currency: data?.currency,
				amount: data?.amountInRupees,
				key_id: data?.key_id,
				cartIds: data?.cartIds,
				beforeDiscountAmount: data?.beforeDiscountAmount,
				discountAmount: data?.discountAmount,
				discountPercentage: data?.discountPercentage,
			});
		} catch (error) {
			console.error("Error fetching order:", error);
			toast.error(error?.response?.message || "SOMETHING_WENT_WRONG");
		} finally {
			setisLoadingOnline(false);
		}
	}, [Razorpay, openRazorpayPage]);

	const _verifyOrder = async (postData) => {
		try {
			const { data } = await axiosInstance.post(VERIFY_ORDER_API, postData);
			if (data?.error) {
				return toast.error(data?.message || "SOMETHING_WENT_WRONG");
			}
			console.log({
				_verifyOrder: data,
			});
			console.log("Order verification success:", data);
			toast.success(data?.message, false);
			setCartCount(0);
			fetchData();
			router.push("./Completed");
		} catch (error) {
			console.error("Order verification error:", error);
			toast.error(error?.response?.message || "SOMETHING_WENT_WRONG");
		}
	};


	const handleOfflinePay = async (e) => {
		e.preventDefault();

		//_____________________ THIS RESTRICTS IF EMAIL IS NOT UPDATED ___________________
		if (!user?.email) {
			setemailModalStatus(true)
			console.log('email not updated..')
			return
		}

		setisLoadingOffline(true);
		let requestBody = {
			coinUseStatus: coinUseStatus
		}

		if (formik.values?.coupon?.length !== 0) {
			requestBody.couponCode = formik.values?.coupon
		}
		try {
			const { data } = await axiosInstance.post(
				CREATE_ORDER_OFFLINE_API,
				requestBody
			);
			if (data?.error)
				return toast.error(data?.message || "SOMETHING_WENT_WRONG");
			console.log({
				payload: data,
			});
			setCartCount(0);
			fetchData();

			if (!data?.error) {
				toast.success(data?.message || "Successfull");
				router.push("./Completed");
			}
			// if (data?.error) return toast.error(data?.message || SOMETHING_WENT_WRONG);
			// dispatch({ type: SET_CART_COUNT, payload: data?.cartCount });
			// _navigateToOrderStatusPage();
		} catch (error) {
			console.log({ error });
			toast.error(error?.response?.message || SOMETHING_WENT_WRONG);
		}
	};

	//═════════════════════║ THIS FUNCTION HANDLES THE PAY BUTTON IF NO PAST PRODUCTS ║════════════════════════  
	// const checkForPasedService = (payload) => {
	// 	const currentTimeStampInMS = Date.now();

	// 	payload.forEach((element) => {
	// 		const selectedDateObjectTimeStamp = new Date(element?.selectedDate);
	// 		let year = selectedDateObjectTimeStamp.getFullYear();
	// 		let month = selectedDateObjectTimeStamp.getMonth();
	// 		let day = selectedDateObjectTimeStamp.getDate();

	// 		let [hours, minutes] = element?.selectedTime.split(":");
	// 		let hour = parseInt(hours);

	// 		let formatedObject = new Date(year, month, day, hour);
	// 		let selectedTimeStampInMS = formatedObject.getTime();

	// 		if (currentTimeStampInMS > selectedTimeStampInMS) {
	// 			sethasPassedService(true);
	// 		}
	// 	});
	// };

	const checkForPasedService = (payload) => {
		const currentTimeStampInMS = Date.now();
		let hasAnyPassedService = false;

		payload.forEach((element) => {
			const selectedDateObjectTimeStamp = new Date(element?.selectedDate);
			let year = selectedDateObjectTimeStamp.getFullYear();
			let month = selectedDateObjectTimeStamp.getMonth();
			let day = selectedDateObjectTimeStamp.getDate();

			// Parse the time string (assuming format like "5:00 PM - 6:00 PM")
			let startTime = element?.selectedTime.split(" - ")[0];
			let [timeValue, period] = startTime.split(" ");
			let [hours, minutes] = timeValue.split(":");

			// Convert hours to 24-hour format
			let hour = parseInt(hours);
			if (period.toUpperCase() === "PM" && hour < 12) {
				hour += 12;
			} else if (period.toUpperCase() === "AM" && hour === 12) {
				hour = 0;
			}

			// Include minutes in the date object
			let minute = parseInt(minutes);

			// Create the date object with all components
			let formatedObject = new Date(year, month, day, hour, minute);
			let selectedTimeStampInMS = formatedObject.getTime();

			if (currentTimeStampInMS > selectedTimeStampInMS) {
				hasAnyPassedService = true;
			}
		});

		sethasPassedService(hasAnyPassedService);
	};

	// ═════════════════════║ THIS FUNCTION RUNS FROM JSX TO SHOW OR HIDE PAST MESSAGE ║════════════════════════  
	// const isPastService = (selectedTimeStamp, selectedTime) => {
	// 	const currentTimeStampInMS = Date.now();

	// 	const selectedDateObjectTimeStamp = new Date(selectedTimeStamp);
	// 	let year = selectedDateObjectTimeStamp.getFullYear();
	// 	let month = selectedDateObjectTimeStamp.getMonth();
	// 	let day = selectedDateObjectTimeStamp.getDate();

	// 	let [hours, minutes] = selectedTime.split(":");
	// 	let hour = parseInt(hours);

	// 	console.log("YEAR | ", year);
	// 	console.log("MONTH | ", month);
	// 	console.log("DATE | ", day);
	// 	console.log("HOUR | ", hour);

	// 	let formatedObject = new Date(year, month, day, hour);
	// 	let selectedTimeStampInMS = formatedObject.getTime();

	// 	if (currentTimeStampInMS > selectedTimeStampInMS) {
	// 		return true;
	// 	}
	// };

	const isPastService = (selectedTimeStamp, selectedTime) => {
		const currentTimeStampInMS = Date.now();

		// Parse the selected timestamp
		const selectedDateObjectTimeStamp = new Date(selectedTimeStamp);
		let year = selectedDateObjectTimeStamp.getFullYear();
		let month = selectedDateObjectTimeStamp.getMonth();
		let day = selectedDateObjectTimeStamp.getDate();

		// Parse the time string (assuming format "5:00 PM - 6:00 PM")
		// We only care about the start time
		let startTime = selectedTime.split(" - ")[0];
		let [timeValue, period] = startTime.split(" ");
		let [hours, minutes] = timeValue.split(":");

		// Convert hours to 24-hour format
		let hour = parseInt(hours);
		if (period.toUpperCase() === "PM" && hour < 12) {
			hour += 12;
		} else if (period.toUpperCase() === "AM" && hour === 12) {
			hour = 0;
		}

		// Include minutes in the date object
		let minute = parseInt(minutes);

		console.log("YEAR | ", year);
		console.log("MONTH | ", month);
		console.log("DATE | ", day);
		console.log("HOUR | ", hour);
		console.log("MINUTE | ", minute);

		// Create the date object with all components
		let formatedObject = new Date(year, month, day, hour, minute);
		let selectedTimeStampInMS = formatedObject.getTime();



		return currentTimeStampInMS > selectedTimeStampInMS;
	};


	return (
		<>
			{/* ═════════════════════║ THIS CONFIRMS THE DELTE OF PACKAGES FROM CART ║════════════════════════  */}
			<CommonConfirmModal
				title={`Want to remove package from cart ?`}
				callBack={() => deleteItem(deleteItemId)}
				isLoading={isLoadingDelete}
				commonConfirmModalStatus={commonConfirmModalStatus}
				setcommonConfirmModalStatus={setcommonConfirmModalStatus}
			/>

			<UpdateEmailPopup
				profileFormModalStatus={emailModalStatus}
				setprofileFormModalStatus={setemailModalStatus}
				updateEmail={updateEmail}
				email={email}
				setemail={setemail}
				isLoading={emailSubmitLoading}
			/>

			{/* <AuthGuard> */}
			<div className="mx-auto max-w-7xl px-2  bg-red shadow-xl md:px-10 md:pt-4 md:pb-10 md:my-10 md:border border-gray-400">
				<div className="mx-auto max-w-2xl py-2 lg:max-w-7xl">
					<h1 className="text-center md:text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
						Package Cart
					</h1>

					{/* THIS IS LOADER */}
					{isLoading && (
						<div className="w-full h-40 flex justify-center items-center">
							<RotatingLines
								strokeColor="#6C7AC6"
								strokeWidth="5"
								animationDuration="0.75"
								width="50"
								visible={true}
							/>
						</div>
					)}

					{/* THIS SHOWS THE NO PACKAGE FOUND IN CASE OF 0 ITEM */}
					{!isLoading && !Array.isArray(apiData) && (
						<>
							<div className="mt-10 font-semibold text-red-400 text-lg flex justify-center items-center text-center">
								No Package Found, Please add some packages
							</div>
							<div className="flex justify-center items-center">
								<Link href="/services/allservice">
									<button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-indigo-500 rounded-lg hover:bg-indigo-700 lg:mx-0 lg:w-auto focus:outline-none hover:shadow-xl">
										Book Service
									</button>
								</Link>
							</div>
						</>
					)}

					{/* SPACER */}
					{/* <div className="mb-20"></div> */}

					{!isLoading && Array.isArray(apiData) && apiData?.length !== 0 && (
						<form className="mt-2 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
							<section
								aria-labelledby="cart-heading"
								className="rounded-lg bg-white lg:col-span-8"
							>
								<h2 id="cart-heading" className="sr-only">
									Items in your shopping cart
								</h2>
								<ul role="list" className="divide-y divide-gray-200">
									{Array.isArray(apiData) &&
										apiData?.map((data, index) => (
											<div key={data?._id} className>
												<li className="flex py-6 sm:py-6 ">
													<div className="flex-shrink-0">
														<Image
															height={100}
															width={100}
															src={data?.package?.image}
															alt="Nike Air Force 1 07 LV8"
															className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
														/>
													</div>
													<div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
														<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
															<div>
																<div className="flex justify-between">
																	<h3 className="text-sm">
																		<Link
																			href={
																				// `/package-details?packageId=${data?.package?._id}`
																				(data?.package?.slug === null || !data?.package?.slug) ?
																					`/package-details?packageId=${data?.package?._id}` :
																					`/package-details?service=${data?.package?.slug}`

																			}
																			className="font-semibold text-black hover:text-indigo-500"
																		>
																			{data?.package?.title}
																		</Link>
																	</h3>
																</div>
																<div className="mt-1 flex text-sm">
																	{/* <p className="text-sm text-gray-500">
																		{data.selectedDate !== undefined
																			? `${formatCustomDate(
																				data?.selectedDate
																			)} at ${moment(
																				data?.selectedTime,
																				"HH:mm"
																			).format("h:mm A")}` + " "
																			: null}
																	</p> */}
																	<p className="text-sm text-gray-500">
																		{data?.selectedDate !== undefined
																			? `${formatCustomDate(
																				data?.selectedDate
																			)} at ${moment(data?.selectedTime?.split(' - ')[0], "h:mm A").format("h:mm a")}` + " "
																			: null}
																	</p>
																</div>
																<div className="mt-1 flex items-end">
																	<p className="text-sm font-medium text-gray-500 line-through">
																		{" "}
																		{(data?.package?.price !== undefined && data?.package?.price !== 0)
																			? (data?.package?.MRP)?.toLocaleString(
																				"en-US",
																				{
																					style: "currency",
																					currency: "INR",
																					minimumFractionDigits: 2,
																				}
																			) + " "
																			: null}
																	</p>
																	<p className="font-semibold text-gray-900 ml-2">
																		{/* &nbsp;&nbsp;₹{data?.package?.price} */}
																		{data?.package?.price === 0 && (
																			<span className="text-cyan-400 border border-cyan-400 px-2 rounded-lg">
																				Charges On Visit
																			</span>
																		)}
																		{data?.package?.price !== 0 && (
																			<span>
																				{" "}
																				₹ {data?.package?.price}
																			</span>
																		)}
																	</p>
																	{/* &nbsp;&nbsp;<p className="text-sm font-medium text-green-500">5% Off</p> */}
																</div>
																<div className="mt-1 flex items-end">
																	<button
																		type="button"
																		className="flex items-center space-x-1 px-4 py-1 pl-0 border-b border-b-white hover:border-b-red-400"
																	>
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width={12}
																			height={12}
																			viewBox="0 0 24 24"
																			fill="none"
																			stroke="currentColor"
																			strokeWidth={2}
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			className="text-red-500"
																		>
																			<path d="M3 6h18" />
																			<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
																			<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
																		</svg>

																		<div
																			onClick={() => {
																				// deleteItem(data._id);

																				setdeleteItemId(data?._id);
																				setcommonConfirmModalStatus(true);
																			}}
																			className="text-xs font-medium text-red-500"
																		>
																			Remove
																		</div>
																	</button>

																	<div className="flex items-center border-gray-100">
																		<Button
																			isLoading={isLoading}
																			disabled={data?.itemCount <= 1}
																			variant="outline"
																			size="icon"
																			className="rounded-r-none"
																			onClick={() => updateItemCount(data?.itemCount - 1, data?._id)}
																		>
																			<Minus className="h-4 w-4" />
																		</Button>
																		<div className="px-4 py-2 border-y">{data?.itemCount}</div>
																		<Button
																			isLoading={isLoading}
																			variant="outline"
																			size="icon"
																			className="rounded-l-none"
																			onClick={() => updateItemCount(data?.itemCount + 1, data?._id)}
																		>
																			<Plus className="h-4 w-4" />
																		</Button>
																	</div>
																</div>
																{isPastService(
																	data?.selectedDate,
																	data?.selectedTime
																) && (
																		<div className="text-red-400 text-xs">
																			Service date has been passed, Remove this
																			item
																		</div>
																	)}
															</div>
														</div>
													</div>
												</li>
												<div className="mb-2 flex">
													<div className="min-w-24 flex">
														{/* <button type="button" className="h-7 w-7">
                            -
                          </button>
                          <input type="text" className="mx-1 h-7 w-9 rounded-md border text-center" defaultValue={1} />
                          <button type="button" className="flex h-7 w-7 items-center justify-center">
                            +
                          </button> */}
													</div>
													<div className="ml-6 flex text-sm">
														{/* <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            </svg>
                            <span onClick={() => { deleteItem(data._id) }} className="text-xs font-medium text-red-500">Remove</span>
                          </button> */}
													</div>
												</div>
											</div>
										))}
								</ul>
							</section>
							<section
								aria-labelledby="summary-heading"
								className="mt-4 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
							>
								<h2
									id="summary-heading"
									className=" font-semibold border-b border-gray-200 px-4 py-3 text-lg  text-gray-900 sm:p-4"
								>
									Price Details
								</h2>
								<div>
									<dl className=" space-y-1 px-2 py-4">
										{/* <div className="flex items-center justify-between">
											<dt className="text-sm text-gray-800">Price (3 item)</dt>
											<dd className="text-sm font-medium text-gray-900">
												₹ {subTotal}
											</dd>
										</div> */}
										<div className="flex items-center justify-between">
											<dt className="text-sm text-gray-800">
												Price ({apiData?.length} item)
											</dt>
											<dd className="text-sm font-medium text-gray-900">
												₹ {fullData?.totalAmount}
											</dd>
										</div>
										<div className="flex items-center justify-between pt-4">
											<dt className="flex items-center text-sm text-gray-800">
												<span>Tax & Other Charges</span>
											</dt>
											{/* <dd className="text-sm font-medium text-green-700">
												₹ {gst}
											</dd> */}
											<dd className="text-sm font-medium text-gray-900">
												₹ {fullData?.totalTaxOtherChargeAmount}
											</dd>
										</div>
										{/* <div className="flex items-center justify-between py-4">
											<dt className="flex text-sm text-gray-800">
												<span>Total Amount</span>
											</dt>
											<dd className="text-sm font-medium text-green-700">
												{fullData?.beforeDiscountAmount}
											</dd>
										</div> */}
										<div className="flex items-center justify-between py-4">
											<dt className="flex text-sm text-gray-800">
												<span>Discount</span>
											</dt>
											<dd className="text-sm font-medium text-green-700">
												₹{fullData?.totalDiscountAmount}
											</dd>
										</div>
										<div className="flex items-center justify-between border-y border-dashed py-4 ">
											<dt className="text-base font-medium text-gray-900">
												Total Payable
											</dt>
											<dd className="text-base font-medium text-gray-900">
												₹ {fullData?.totalPayableAmount}
											</dd>
										</div>
									</dl>
								</div>

								{/* ____________________________ COIN APPLY ___________________________ */}
								<div className="mt-4 shadow-md p-3 py-1 flex items-center justify-between border-pink-100 bg-white max-w-md">
									<div className="flex items-center gap-3">
										<div className="p-1.5 bg-blue-50 rounded-full">
											<Coins className="h-5 w-5 text-blue-500" />
										</div>
										<div className="flex flex-col">
											<span className=" text-md font-medium text-blue-500 border rounded-lg text-center border-blue-500 flex gap-1 justify-center items-center">{user?.myCoins}</span>
											<h3 className="text-xs font-medium">Available Coins</h3>
										</div>
									</div>
									{user?.myCoins !== 0 && !coinUseStatus && <button onClick={(e) => {
										fetchCouponData(e, !coinUseStatus)
										setcoinUseStatus(!coinUseStatus)

									}} size="sm" className="bg-black hover:bg-black  Capitalize text-white font-bold hover:shadow-lg shadow-md text-xs px-4 py-2 rounded outline-none focus:outline-none mb-1 w-auto">
										Use My Coins
									</button>}
									{user?.myCoins !== 0 && coinUseStatus && <button onClick={(e) => {
										fetchCouponData(e, !coinUseStatus)
										setcoinUseStatus(!coinUseStatus)
									}} size="sm" className="bg-green-500 hover:bg-green-700 active:bg-green-600 Capitalize text-white font-bold hover:shadow-lg shadow-md text-xs px-4 py-2 rounded outline-none focus:outline-none mb-1 w-auto">
										<Check size={15} className="inline mr-1" /> Applied
									</button>}
								</div>


								<div className="w-full">
									<div className="w-full">
										{/* ════════════════════║ APPLY COUPON SECTION   ║═════════════════════════ */}
										<div
											className={`${styles.cart_sub_container_2_1_1}`}
											style={{
												display: "flex",
												justifyContent: "space-between",
												cursor: "pointer",
												padding: "10px 0px",
												marginTop: "6px",
											}}
										>
											<form
												onChange={handleOnChange}
												onSubmit={formik.handleSubmit}
											>
												<div className="grid grid-cols-12 space-x-3">
													<div className="form-group col-span-9 mb-0">
														<input
															{...formik.getFieldProps("coupon")}
															type="text"
															className={
																"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10"
															}
															placeholder="Enter Coupon"
														/>
														<span className="text-red-600 absolute text-xs">
															{formik.touched.coupon && formik.errors.coupon
																? formik.errors.coupon
																: null}
														</span>
													</div>

													{!couponAppliedStatus && <div className="col-span-3">
														{isLoadingCoupon ? (
															<button className="w-full px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight  rounded  hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center h-10">
																<RotatingLines
																	strokeColor="white"
																	strokeWidth="5"
																	animationDuration="0.75"
																	width="25"
																	visible={true}
																/>
															</button>
														) : (
															<button
																// disabled
																type="button"
																onClick={(e) => {
																	if (formik.values.coupon == '') {
																		toast.error('Enter coupon code')
																		return
																	}
																	setCouponAppliedStatus(true)
																	fetchCouponData(e, coinUseStatus)
																}}
																className="w-full px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight  rounded  hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out h-10"
															>
																Apply
															</button>
														)}
													</div>}
													{couponAppliedStatus && <div className="col-span-3">

														<button
															type="button"
															onClick={(e) => {
																formik.setFieldValue('coupon', '')
																setCouponAppliedStatus(false)
																fetchData()
															}}
															className="w-full px-2  py-2.5 bg-red-500 text-white  text-xs leading-tight  rounded  hover:bg-red-500 hover:shadow-lg focus:bg-red-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-lg transition duration-150 ease-in-out h-9 flex"
														>
															Applied <X size={16} />
														</button>
													</div>}
												</div>
											</form>
										</div>

										<div
											className={styles.cart_sub_container_2_1_1}
											onClick={() => {
												router.push("/Dashboard/profile");
											}}
											style={{
												display: "flex",
												justifyContent: "space-between",
												cursor: "pointer",
												border: "0.5px solid #ccc",
												padding: "10px 0px",
												marginTop: "50px",
											}}
										>
											<div>
												<MapPin
													className={styles.cart_sub_container_2_1_1_mapPin}
													style={{ marginLeft: "30px" }}
												/>
											</div>

											<div
												style={{
													display: "flex",
													justifyContent: "left",
													width: "100%",
													padding: "0px 10px",
												}}
											>
												<p style={{ textAlign: "left" }}>
													{profileData.address}
												</p>
											</div>
											<div>
												<Pencil
													className={styles.cart_sub_container_2_1_1_pencil}
													style={{ marginRight: "30px" }}
												/>
											</div>
										</div>
										{/* <div className={styles.cart_sub_container_2_2_1} onClick={toggleDropdown} style={{ display: 'flex', justifyContent: 'space-between', border: '0.5px solid #ccc', padding: '10px 0px', cursor: 'pointer' }}>
                    <div><CreditCard className={styles.cart_sub_container_2_1_1_card} style={{ marginLeft: '30px' }} /></div>
                    <div className={styles.container}>
                      <div
                        className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}
                      // onClick={toggleDropdown}
                      >
                        Payment Mode {selectedOption}
                        <div className={styles.options}>
                          <div className={styles.optionRow}>
                            <button
                              className={`${styles.option} ${selectedOption === 'Online' ? styles.selected : ''
                                }`}
                              onClick={() => handleOptionSelect('Online')}
                            >
                              Online
                            </button>
                          </div>
                          <div className={styles.optionRow}>
                            <button
                              className={`${styles.option} ${selectedOption === 'Offline' ? styles.selected : ''
                                }`}
                              onClick={() => handleOptionSelect('Offline')}
                            >
                              Offline
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Pencil className={styles.cart_sub_container_2_1_1_pencil} style={{ marginRight: '30px' }} />
                    </div>
                  </div> */}
										{/* <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                    {selectedOption === 'Online' ?
                      <button type='button' className={styles.cart_sub_container_2_2_1_btn} onClick={handleOnlinePay}>Pay Online to Book Slot</button>
                      :
                      <button type='button' className={styles.cart_sub_container_2_2_1_btn} onClick={handleOfflinePay} >Book Slot, pay at the time of service</button>
                    }
                  </div> */}
										{!hasPassedService && (
											<div
												style={{
													marginTop: "20px",
													display: "flex",
													justifyContent: "center",
													flexDirection: "column",
												}}
											>
												{isLoadingOnline ? (
													<button
														disabled
														type="button"
														className={`${styles.cart_sub_container_2_2_1_btn}  flex justify-center items-center`}
													>
														<RotatingLines
															strokeColor="white"
															strokeWidth="5"
															animationDuration="0.75"
															width="25"
															visible={true}
														/>
													</button>
												) : (
													<button
														type="button"
														className={styles.cart_sub_container_2_2_1_btn}
														onClick={() => {
															handleOnlinePay();
														}}
													>
														Pay Online to Book Slot
													</button>
												)}

												<div className="text-center my-1 italic font-serif">
													Or
												</div>

												{isLoadingOffline ? (
													<button
														type="button"
														disabled
														className={`bg-yellow-500 h-10 rounded-sm shadow-xl font-semibold flex justify-center items-center`}
													>
														<RotatingLines
															strokeColor="black"
															strokeWidth="5"
															animationDuration="0.75"
															width="25"
															visible={true}
														/>
													</button>
												) : (
													<button
														type="button"
														className={`bg-yellow-500 h-10 rounded-sm shadow-xl font-semibold`}
														onClick={(e) => {
															handleOfflinePay(e);
														}}
													>
														Book Slot, pay at the time of service
													</button>
												)}
											</div>
										)}
									</div>
								</div>
							</section>
						</form>
					)}
				</div>
			</div>

			{/* <div>
        <div className={styles.cart_main_container}>
          <div className={styles.cart_main_sub_container_1}>
            {apiData?.map(data => (
              <div className={styles.cart_sub_container_1}>
                <div style={{ display: 'flex' }}>
                  <div className={styles.cart_super_container_1}>
                    <Image className={styles.cart_super_container_1_img} src={data.package.image} alt="Image" width={130} height={50} />
                  </div>
                  <div className={styles.cart_super_container_2}>
                  
                    <p className={styles.cart_super_container_2_p_1}>{data.package.title}</p>
                    <p className={styles.cart_super_container_2_p_2}> on {" "}
                      {data.selectedDate !== undefined
                        ? formatCustomDate(data.selectedDate) + " "
                        : null}
                     
                    </p>
                    <p className={styles.cart_super_container_2_p_3}>at {convertTo12HourFormat(data.selectedTime)}</p>
                    {data?.package?.gst ?
                      <p className={styles.cart_super_container_2_p_4}>GST {data?.package?.gst} %</p>
                      : null
                    }
                  </div>
                </div>
                <div className={styles.cart_super_container_3}>
                  <div className={styles.cart_super_container_3_1}>
                    <p className={styles.cart_super_container_3_1_p_1}>
                      {data.package.price !== undefined ? (data.package.price).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'INR',
                        minimumFractionDigits: 2,
                      }) + ' ' : null}
                    </p>
                  </div>
                  <div className={styles.cart_super_container_3_2}>
                    <Trash onClick={() => { deleteItem(data._id) }} className={styles.cart_trash_icon} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cart_sub_container_2}>
            <div className={styles.cart_sub_container_2_1}>
              <div className={styles.cart_sub_container_2_1_1} onClick={() => { router.push('/Dashboard') }} style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', border: '0.5px solid #ccc', padding: '10px 0px', marginTop: '50px' }}>
                <div><MapPin className={styles.cart_sub_container_2_1_1_mapPin} style={{ marginLeft: '30px' }} /></div>
                <div style={{ display: 'flex', justifyContent: 'left', width: '100%', padding: '0px 10px' }}>
                  <p style={{ textAlign: 'left' }}>{profileData.address}</p>
                </div>
                <div>
                  <Pencil className={styles.cart_sub_container_2_1_1_pencil} style={{ marginRight: '30px' }} />
                </div>
              </div>
              <div className={styles.cart_sub_container_2_2_1} onClick={toggleDropdown} style={{ display: 'flex', justifyContent: 'space-between', border: '0.5px solid #ccc', padding: '10px 0px', cursor: 'pointer' }}>
                <div><CreditCard className={styles.cart_sub_container_2_1_1_card} style={{ marginLeft: '30px' }} /></div>
                <div className={styles.container}>
                  <div
                    className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}
                  >
                    Payment Mode {selectedOption}
                    <div className={styles.options}>
                      <div className={styles.optionRow}>
                        <button
                          className={`${styles.option} ${selectedOption === 'Online' ? styles.selected : ''
                            }`}
                          onClick={() => handleOptionSelect('Online')}
                        >
                          Online
                        </button>
                      </div>
                      <div className={styles.optionRow}>
                        <button
                          className={`${styles.option} ${selectedOption === 'Offline' ? styles.selected : ''
                            }`}
                          onClick={() => handleOptionSelect('Offline')}
                        >
                          Offline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Pencil className={styles.cart_sub_container_2_1_1_pencil} style={{ marginRight: '30px' }} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                <table className={styles.table}>
                  <tbody>
                    <tr className={styles.row}>
                      <td className={styles.cell}>Subtotal</td>
                      <td style={{ display: 'flex', justifyContent: 'right' }} className={styles.cell}><IndianRupee style={{ width: '16px' }} className={styles.rupee_icon} /> {subTotal}</td>
                    </tr>
                    <tr className={styles.row}>
                      <td className={styles.cell}>GST</td>
                      <td style={{ display: 'flex', justifyContent: 'right' }} className={styles.cell}><IndianRupee style={{ width: '16px' }} className={styles.rupee_icon} /> {gst}</td>
                    </tr>
                    <tr className={styles.row}>
                      <td className={styles.cell}><b>Total</b></td>
                      <td style={{ display: 'flex', justifyContent: 'right' }} className={styles.cell}><IndianRupee style={{ width: '16px' }} /> <b>{totalAmount}</b></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                {selectedOption === 'Online' ?
                  <button className={styles.cart_sub_container_2_2_1_btn} onClick={handleOnlinePay}>Pay Online to Book Slot</button>
                  :
                  <button className={styles.cart_sub_container_2_2_1_btn} onClick={handleOfflinePay} >Book Slot, pay at the time of service</button>
                }
              </div>
            </div>
        
          </div>
        </div>
      </div> */}
			{/* </AuthGuard> */}
		</>
	);
}

export default Cart;

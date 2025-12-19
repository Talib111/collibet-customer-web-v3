import Layout from "@/components/Layout/Layout";
import { AuthGuard } from "guard";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "utils/axios";
import {
	BOOKING_DETAIL,
	CANCEL_SERVICE,
	CREATE_POST_ORDER_API,
	FETCH_PENDING_AMOUNT_DETAILS,
	SOMETHING_WENT_WRONG,
	VERIFY_POST_ORDER_API,
} from "utils/constants";
import { RotatingLines } from "react-loader-spinner";
import moment from "moment";

import {
	Card,
	CardBody,
	Typography,
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Textarea,
} from "@material-tailwind/react";
import { Calendar, Info, MapPin, PhoneCall, Pin, TrashIcon } from "lucide-react";
import Link from "next/link";
import { HiEmojiHappy } from "react-icons/hi";
import CommonConfirmModal from "@/components/CommonConfirmModal";
import Image from "next/image";
import ApiHeader from "@/components/ApiList/ApiHeader";
import { useRouter } from "next/router";
import useRazorpay from "react-razorpay";
import styles from "../../../styles/Cart.module.css";
import { useAppContext } from "context/AuthContext";

export function Service({ service, _getDetail }) {
	console.log({ service });
	const [open, setOpen] = React.useState(false);
	const [cancelReason, setCancelReason] = useState(null);
	const [isLoadingCancel, setisLoadingCancel] = useState(false);
	const [isLoadingPaymentInitiate, setisLoadingPaymentInitiate] =
		useState(null);
	const [commonConfirmModalStatus, setcommonConfirmModalStatus] =
		useState(false);




	const handleOpen = () => setOpen(!open);

	const cancelService = async (id) => {
		setisLoadingCancel(true);
		try {
			const { data } = await axiosInstance.post(`${CANCEL_SERVICE}/${id}`, {
				serviceId: service.cart._id,
				cancelReason: cancelReason,
			});
			if (data?.error)
				return toast.error(data?.message || SOMETHING_WENT_WRONG);
			console.log({
				data: data,
			});
			setOpen(false);
			toast.success("Cancelled Successfully");
			_getDetail();
		} catch (error) {
			console.log({ error });
			toast.error(error?.response?.message || SOMETHING_WENT_WRONG);
		} finally {
			setisLoadingCancel(false);
		}
	};

	const postPaymentRefund = () => {
		setcommonConfirmModalStatus(false);
	};



	return (
		<>
			{/* ═════════════════════║ THIS COMPONENT CONFIRMS ENABLE DISABLE ║════════════════════════  */}
			<CommonConfirmModal
				title={`Want to initiate the payment ?`}
				callBack={postPaymentRefund}
				isLoading={isLoadingPaymentInitiate}
				commonConfirmModalStatus={commonConfirmModalStatus}
				setcommonConfirmModalStatus={setcommonConfirmModalStatus}
			/>
			<Card className="w-ful flex-col border border-gray-300 px-4 py-2 md:py-4 shadow-xl bg-gray-white">

				{/* </CardHeader> */}
				<CardBody className="flex bg-gray-100 md:bg-gray-300 justify-evenly">
					<Image
						width={200}
						height={200}
						src={service?.package?.image}
						alt="card-image"
						className="object-cover w-28 h-28 border rounded-full overflow-hidden bg-gray-200"
					/>

					<div className="pl-4 md:px-4">
						<Typography
							variant="h5"
							color="blue-gray"
							className="mb-2 text-left"
						>
							<Link
								// href={`/package-details?packageId=${service?.package?._id}`}
								href={
									(service?.package?.slug === null || !service?.package?.slug) ?
										`/package-details?packageId=${service?.package?._id}` :
										`/package-details?service=${service?.package?.slug}`
								}
								className="cursor-pointer hover:text-indigo-400 font-semibold text-black"
							>
								{service?.package?.title}
							</Link>
						</Typography>
						<Typography color="gray" className="mb-2 font-normal">
							{service?.package?.subtitle}
						</Typography>
						<Typography color="gray" className="mb-2 font-normal">
							itemcount : {service?.cart?.itemCount}
						</Typography>
					</div>
				</CardBody>

				<Dialog open={open} handler={handleOpen}>
					<div className="flex items-center justify-between">
						<DialogHeader>Cancel Reasons</DialogHeader>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="mr-3 h-5 w-5"
							onClick={handleOpen}
						>
							<path
								fillRule="evenodd"
								d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<DialogBody divider>
						<div className="grid gap-6">
							<Textarea
								label="Message"
								value={cancelReason}
								onChange={(e) => setCancelReason(e.target.value)}
							/>
						</div>
					</DialogBody>
					<DialogFooter className="space-x-2">
						<Button variant="outlined" color="red" onClick={handleOpen}>
							close
						</Button>
						{isLoadingCancel ? (
							<Button variant="gradient" color="green">
								<RotatingLines
									strokeColor="white"
									strokeWidth="10"
									animationDuration="0.75"
									width="20"
									visible={true}
								/>
							</Button>
						) : (
							<Button
								variant="gradient"
								color="green"
								onClick={() => cancelService(service?._id)}
							>
								Submit Cancel Request
							</Button>
						)}
					</DialogFooter>
				</Dialog>

				{/* -------------------- SHOW THIS BLOCK IF NOT ITEM CANCELED  -------------------- */}
				{service?.cart?.serviceStatus !== "CANCELLED" && (
					<div className="flex justify-between w-80 mt-2 px-2 items-center">
						<span
							onClick={handleOpen}
							variant="text"
							color="red"
							className="text-sm text-gray-800 flex items-left gap-2  "
						>
							Service Status :
						</span>

						{service?.cart?.isServiceDone === false ? (
							<span className="ml-4 flex-1 flex items-left gap-2 font-semibold text-green-400">
								Active
							</span>
						) : (
							<span className="flex items-center gap-2 font-semibold text-red-400">
								Completed
							</span>
						)}
					</div>
				)}

				<div className="space-y-2 mt-4 px-2 w-80 text-sm">
					<div className="flex justify-between">
						<span className=""><PhoneCall size={15} className="inline-flex items-center mr-2" />{service?.cart?.currentMobileNo || 'N/A'}</span>
					</div>
					<div className="flex justify-between">
						<span className=""><Pin size={15} className="inline-flex items-center mr-2" />{service?.cart?.currentLandmark || 'N/A'}</span>
					</div>
					<div className="flex justify-between">
						<span className=""><MapPin size={15} className="inline-flex items-center mr-2" />{service?.cart?.currentAddress || 'N/A'}</span>
					</div>
				</div>

				<div className="flex justify-between w-80 mt-2 px-2 items-center">
					<span
						variant="text"
						color="red"
						className="text-sm text-gray-800 flex items-left gap-2  "
					>
						Payment Mode :
					</span>



					{service?.cart?.isPaid ? (
						<span className="flex-1 flex items-left ml-4 md:items-center gap-2 font-semibold text-green-400">
							Online Paid
						</span>
					) : (
						<span className="flex-1 flex items-left ml-4 md:items-center gap-2 font-semibold text-gray-700">
							COD
						</span>
					)}
				</div>

				{/* -------------------- SHOW THIS BLOCK IF ITEM CANCELED  -------------------- */}
				{service?.cart?.serviceStatus === "CANCELLED" && (
					<div className="flex justify-between w-80 mt-2 px-2 items-center">
						<span
							onClick={handleOpen}
							variant="text"
							color="red"
							className="flex items-left gap-2  "
						>
							Status :
						</span>
						<span className="ml-4 flex-1 flex text-sm md:text-lg items-left gap-2 font-semibold text-red-400 italic">
							Cancelled{" "}
							<small className="text-green-400 text-sm">
								{service?.cart?.isPaid &&
									service?.cart?.cancelOrderStatus === 1 &&
									"(Refund Initiated)"}
								{service?.cart?.isPaid &&
									service?.cart?.cancelOrderStatus === 2 &&
									"(Payment Refunded)"}
							</small>
						</span>
					</div>
				)}
				{/* -------------------- SHOW THIS BLOCK IF RESHEDULE BY MANAGEMENT   -------------------- */}
				{service?.cart?.serviceStatus === "MANAGEMENT_RE" && (
					<div className="flex justify-between w-80 mt-2 px-2 items-center">
						<span
							onClick={handleOpen}
							variant="text"
							color="red"
							className="flex items-left gap-2  "
						>
							Status
						</span>
						<span className="flex text-sm items-center gap-2 font-semibold text-indigo-400 italic">
							Re-scheduled by service employee
						</span>
					</div>
				)}

				{/* -------------------- ACTION BUTTONS -------------------- */}
				<div className="flex justify-left w-80 mt-2">
					{service?.cart?.isServiceDone === false &&
						service?.cart?.serviceStatus !== "CANCELLED" && (
							<Button
								onClick={handleOpen}
								variant="text"
								color="red"
								className="flex-initial flex items-center gap-2  hover:bg-gray-300 py-2 px-4 border"
							>
								Cancel
								<TrashIcon size={16} />
							</Button>
						)}

					{/* ════════════════════║ THIS ACTIVATES FEEDBACK BUTTON IF SERVICE DONE  ║═════════════════════════ */}
					{service?.cart?.isServiceDone && (
						<Link
							href={{
								pathname: `/Dashboard/bookings/feedback`,
								query: {
									Data: JSON.stringify({
										packageId: service?.package?._id,
										employeeId: service?.cart?.employee?._id,
										serviceId: service?.cart?.serviceId,
										categoryId: service?.cart?.category,
									}),
								},
							}}
							className="inline-block flex-1"
						>
							<Button
								variant="text"
								color="black"
								className="ml-4 flex items-center gap-2 bg-indigo-400 text-white hover:bg-indigo-500 py-2 px-4 border"
							>
								Feedback
								<HiEmojiHappy size={16} />
							</Button>
						</Link>
					)}

					{service?.cart?.isServiceDone === false &&
						service?.cart?.serviceStatus !== "CANCELLED" ? (
						// <Link
						// 	href={`/Dashboard/bookings/reshedule/${service.cart._id}`}
						// 	className="inline-block text-gray-700 "
						// >
						<Link className="inline-block text-gray-700 " href={`/slot-selection?packageId=null&categoryId=${service?.cart?.category}&isReschedule=true&cartId=${service?.cart?._id}`}>
							<Button
								// onClick={handleOpen}
								variant="text"
								color="black"
								className="ml-4 flex-1 flex items-center gap-2  hover:bg-gray-300 py-2 px-4 text-gray-700 border"
							>
								Reshedule
								<Calendar size={16} />
							</Button>
						</Link>
					) : null}
				</div>

				{!service?.cart?.isServiceDone &&
					service?.cart?.serviceStatus !== "CANCELLED" && (
						<h1 className="text-left text-black my-2 mt-4">
							<span className=" px-2 py-1 rounded-lg text-sm text-gray-800">
								<div className="w-3 h-3 bg-green-400 inline-block rounded-full mr-2 "></div>
								{service?.cart?.employee?.name ? (
									<span>
										<b>{service?.cart?.employee?.name}</b> will visit for
										service at{" "}
										{new Date(service?.cart?.selectedDate).toLocaleDateString()}{" "}
										{service?.cart?.selectedTime}
									</span>
								) : (
									<span>
										Selected date & time:{" "}
										{new Date(service?.cart?.selectedDate).toLocaleDateString()}{" "}
										{moment(service?.cart?.selectedTime?.split(' - ')[0], "h:mm A").format("h:mm a")}
									</span>
								)}{" "}
							</span>
						</h1>
					)}
			</Card>
		</>
	);
}

const Index = ({ bookingId }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [Data, setData] = useState(null);
	const [Razorpay, isLoaded] = useRazorpay();
	const [isLoadingOnline, setisLoadingOnline] = useState(false);
	const { user } = useAppContext();
	const [pendingAmountData, setpendingAmountData] = useState(null);


	console.log('the booking id...', bookingId)

	const _getDetail = async () => {
		setIsLoading(true);
		try {
			const { data } = await axiosInstance.get(
				`${BOOKING_DETAIL}/${bookingId}`,
				ApiHeader()
			);
			if (data?.error)
				return toast.error(data?.message || SOMETHING_WENT_WRONG);

			setData(data?.payload);
		} catch (error) {
			console.log({ error });
			toast.error(error?.response?.message || SOMETHING_WENT_WRONG);
		} finally {
			setIsLoading(false);
		}
	};

	const getPendingAmountDetails = async () => {
		setIsLoading(true);
		try {
			const { data } = await axiosInstance.get(
				`${FETCH_PENDING_AMOUNT_DETAILS}/${Data?._id}`,
				ApiHeader()
			);
			if (data?.error)
				return toast.error(data?.message || SOMETHING_WENT_WRONG);

			setpendingAmountData(data?.data);
		} catch (error) {
			console.log({ error });
			toast.error(error?.response?.message || SOMETHING_WENT_WRONG);
		} finally {
			setIsLoading(false);
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
			image: user?.userImage,
			currency: currency,
			key: key_id,
			amount: Math.round(amount * 100),
			name: "Collibet",
			order_id: id,
			prefill: {
				email: user?.email,
				contact: user?.mobileNumber,
				name: user?.name,
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
					orderTableId: Data?._id
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
		if (user?.address === undefined || user?.address === "") {
			toast.error("Update your address details first");
			return;
		}

		setisLoadingOnline(true);
		let url = CREATE_POST_ORDER_API;

		try {
			const { data } = await axiosInstance.post(url, {
				orderId: Data?._id,
				amount: Data?.totalAmount * 100,
				totalPayableAmount: Data?.totalPayableAmount,
				currency: "INR",
			});
			console.log('at online pay', data);
			if (data?.error) {
				return toast.error(data?.message || "SOMETHING_WENT_WRONG");
			}

			openRazorpayPage({
				id: data?.id,
				currency: data?.currency,
				amount: Data?.totalAmount,
				key_id: data?.key_id,
				cartIds: data?.cartIds,
				beforeDiscountAmount: Data?.totalAmount,
				discountAmount: Data?.totalAmount,
				discountPercentage: 0,
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
			const { data } = await axiosInstance.post(VERIFY_POST_ORDER_API, postData);
			if (data?.error) {
				return toast.error(data?.message || "SOMETHING_WENT_WRONG");
			}

			toast.success(data?.message, false);
			_getDetail()
			getPendingAmountDetails()
		} catch (error) {
			console.error("Order verification error:", error);
			toast.error(error?.response?.message || "SOMETHING_WENT_WRONG");
		}
	};

	useEffect(() => {
		_getDetail();
	}, []);
	useEffect(() => {
		if (Data?._id) {
			getPendingAmountDetails()
		}
	}, [Data?._id]);

	return (
		<AuthGuard>
			<Layout>
				<div className="text-center font-bold text-2xl underline">
					Booked Services
				</div>

				<div className="mt-12 mb-12 px-1 md:px-20">
					<div className=" grid grid-cols-1 md:grid-cols-12 gap-5  border border-gray-400 p-2 md:p-4">
						{isLoading && (
							<div className="col-span-12 h-40 flex justify-center items-center">
								<RotatingLines
									strokeColor="#6C7AC6"
									strokeWidth="5"
									animationDuration="0.75"
									width="50"
									visible={true}
								/>
							</div>
						)}
						{!isLoading && (
							<>
								<div className="col-span-1 md:col-span-6  grid-cols-12">
									<h4 className="text-gray-700 text-left font-semibold text-2xl col-span-12">
										Booking Details
									</h4>
									<div className="col-span-12 md:col-span-4">
										<dl className=" space-y-1 px-2 py-2">
											<>
												<div className="flex items-center justify-between py-4">
													<dt className="flex text-sm text-gray-800">
														<span>Total Amount</span>
													</dt>
													<dd className="text-sm font-medium text-gray-700">
														₹{pendingAmountData?.orderDetails?.totalAmount}
													</dd>
												</div>
												<div className="flex items-center justify-between py-4">
													<dt className="flex text-sm text-gray-800">
														<span>Tax & Other Charges</span>
													</dt>
													<dd className="text-sm font-medium text-gray-700">
														₹{pendingAmountData?.orderDetails?.taxAndOtherCharges}
													</dd>
												</div>
												<div className="flex items-center justify-between py-4">
													<dt className="flex text-sm text-gray-800">
														<span>Discount</span>
													</dt>
													<dd className="text-sm font-medium text-gray-700">
														₹{pendingAmountData?.orderDetails?.discountAmount}
													</dd>
												</div>
											</>
											<div className="flex items-center justify-between border-y border-dashed py-4 ">
												<dt className="text-base font-semibold text-gray-800 ">
													Final Amount
												</dt>

												<dd className="text-base font-semibold text-gray-800">
													₹{pendingAmountData?.orderDetails?.finalAmount}
												</dd>
											</div>
											<div className="flex items-center justify-between py-4 ">
												<dt className="text-base text-gray-800 ">
													Paid Amount
												</dt>

												<dd className="text-base text-gray-800">
													₹{pendingAmountData?.paidAmount}
												</dd>
											</div>
											<div className="flex items-center justify-between border-t border-dashed py-4">
												<dt className="text-base font-semibold text-amber-600 ">
													Remaining Amount
												</dt>

												<dd className="text-base font-semibold text-amber-600">
													₹{pendingAmountData?.remainingAmount}
												</dd>
											</div>
										</dl>

									</div>
									{isLoadingOnline ? (
										<button
											disabled
											type="button"
											className={`bg-green-500 hover:bg-green-700 active:bg-green-600 uppercase text-white font-bold hover:shadow-lg shadow-md text-xs px-4 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 w-1/2  flex justify-center items-center`}
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
										!Data?.isAmountPaid && pendingAmountData?.remainingAmount !== 0 && <>
											<div className="flex items-center gap-1 mb-2 text-xs"><Info size={15} className="inline" />Your payment is pending</div>
											<button
												onClick={handleOnlinePay}
												className="bg-green-500 hover:bg-green-700 active:bg-green-600 uppercase text-white font-bold hover:shadow-lg shadow-md text-xs px-4 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 w-1/2"
												type="button"
												style={{ transition: "all .15s ease" }}
											>
												Pay Now
											</button>
										</>
									)}
								</div>

								<div className="col-span-1 md:col-span-6 grid grid-cols-1 md:grid-cols-1 gap-5 px-1 md:px-10">
									<div className="col-span-1 md:col-span-1 text-gray-700 text-left font-semibold text-2xl">
										All Services
									</div>
									{Array.isArray(Data?.servicesBooked) &&
										Data?.servicesBooked?.map((service) => (
											<Service _getDetail={_getDetail} service={service} />
										))}
								</div>
							</>
						)}
					</div>
				</div>

			</Layout>
		</AuthGuard>
	);
};

export const getServerSideProps = async (context) => {
	const { id } = context.params;

	return {
		props: {
			bookingId: id,
		},
	};
};

export default Index;

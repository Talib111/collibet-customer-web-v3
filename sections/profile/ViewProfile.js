import ProfileFormModal from "@/components/Dashboard/ProfileFormModal";
import { useAppContext } from "context/AuthContext";
import React, { useState } from "react";
import Link from "next/link";
import ApiList from "@/components/ApiList/ApiList";
import AxiosInterceptors from "@/components/ApiList/AxiosInterceptors";
import ApiHeader from "@/components/ApiList/ApiHeader";
import CommonUploadFilePopup from "@/components/CommonUploadFilePopup";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineLogout } from "react-icons/ai";
import { nullToNA } from "@/components/Snippets/PowerupFunctions";

export default function ViewProfile() {
	const { logout, user } = useAppContext();
	const [profileFormModalStatus, setprofileFormModalStatus] = useState(false);
	const [isLoading, setisLoading] = useState(false);
	const { api_updateProfile, api_postSingleImage } = ApiList();
	const [packageImage, setpackageImage] = useState(null);
	const [uploadFilePopupStatus, setuploadFilePopupStatus] = useState(false);
	const route = useRouter();

	console.log('the user is..',user)

	// ══════════════════════════════║ THIS FUNCTION UDPATE CUSTOMER DETAILS BY ID ║═══════════════════════════════════
	const updateCustomerDetails = (values, imageUrl = null) => {
		setisLoading(true);
		let requestBody = {
			name: values?.fullName,
			mobileNumber: values?.mobileNo,
			email: values?.email,
			pinCode: values?.pincode,
			gender: values?.gender,
			address: values?.address,
			landmark: values?.landmark,
			stateId: values?.stateId,
			stateName: values?.stateName,
			districtId: values?.districtId,
			districtName: values?.districtName
		};


		//------------ THIS RUNS IN CASE OF IMAGE UPLOAD ------------
		if (imageUrl !== null) {
			requestBody.image = imageUrl;
		}

		//------------ THIS RUNS IN CASE OF DIRECT UPDATE ------------
		if (imageUrl === null) {
			requestBody.image = user?.userImage;
		}

		AxiosInterceptors.post(`${api_updateProfile}`, requestBody, ApiHeader())
			.then((response) => {
				if (!response?.data?.error) {
					toast.success("Details updated successfully");
					route.reload();

				} else {
					if (imageUrl !== null) {
						toast.error("Update profile details first, then update image");
						return;
					}
					toast.error(response?.data?.message);
				}
			})
			.catch((err) => {
				toast.error("Something went wrong");
			})
			.finally(() => {
				setisLoading(false);
				handleModalClose();
			});
	};

	//------------- THIS FUNCTION HANDLES LOGOUT --------------
	const handleLogout = async () => {
		await logout();
		route.push("/");
	};

	// ════════════════════════║ THIS IS HELPER FUNCTION TO UPLOADE SINGLE IMAGE ║═════════════════════════════
	const uploadImageHelper = (values) => {

		//---------------- SETTING THE CURRENT ID DATA TO PARSE TO ADD EDIT APIS -------------
		let currentIdValues = {
			fullName: user?.name,
			mobileNo: user?.mobileNumber,
			email: user?.email,
			pincode: user?.pinCode,
			gender: user?.gender,
			address: user?.address,
			landmark: user?.landmark,
		};

		setisLoading(true);
		let fd = new FormData();
		fd.append("image", packageImage);

		AxiosInterceptors.post(api_postSingleImage, fd, ApiHeader)
			.then((response) => {
				console.log("--2-- After POST image", response);
				if (response?.data?.error === false) {
					updateCustomerDetails(
						currentIdValues,
						response?.data?.payload?.full_url
					);
				} else {
					toast.error(response?.data?.message);
					setisLoading(false);
				}
			})
			.catch((err) => {
				toast.error("Something went wrong");
			});
	};

	const handleModalClose = () => {
		setprofileFormModalStatus(false);
		setuploadFilePopupStatus(false);
	};

	return (
		<>
			<Toaster />
			<ProfileFormModal
				profileFormModalStatus={profileFormModalStatus}
				setprofileFormModalStatus={setprofileFormModalStatus}
				updateCustomerDetails={updateCustomerDetails}
				isLoading={isLoading}
			/>

			<CommonUploadFilePopup
				title="Image Upload"
				uploadFilePopupStatus={uploadFilePopupStatus}
				setuploadFilePopupStatus={setuploadFilePopupStatus}
				isLoading={isLoading}
				setpackageImage={setpackageImage}
				commonImageUrl={user?.userImage}
				uploadImageHelper={uploadImageHelper}
				handlePackageModalClose={handleModalClose}
			/>
			<main className="">
				<section className="block" style={{ height: "200px" }}>
					<div className=" bg-gradient-to-r from-indigo-300 to-indigo-400 relative top-0 w-full h-full bg-center bg-cover">
						<span
							id="blackOverlay"
							className="w-full h-full absolute opacity-50 bg-black"
						></span>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
						style={{ height: "70px" }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-gray-300 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
				</section>

				<section className="py-10 relative" style={{ marginTop: "-200px" }}>
					<div className="container mx-auto px-4">
						<div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
							<div className="flex">
								<h3 className="pl-4 pt-4 font-semibold text-gray-700 text-lg flex-1">
									Profile Information
								</h3>
								<div className="pl-4 pt-4 font-semibold  text-lg flex-1 text-right pr-10">
									<button
										className="cursor-pointer text-red-400 hover:bg-red-400 hover:text-blue-600  font-semibold hover:underline"
										onClick={handleLogout}
									>
										Logout <AiOutlineLogout className="inline mr-2" />
									</button>
								</div>
							</div>
							<div className="px-6 md:flex justify-center items-center">
								<div className="flex-1 flex flex-col w-full justify-center items-center pt-10">
									<img
										alt="..."
										src={
											user?.userImage ||
											"https://res.cloudinary.com/dor3gao8l/image/upload/v1698219598/COLLIBET%20HOME%20SERVICES/default%20profile%20pic/default_profile_pic_d8v4o7.png"
										}
										className="shadow-xl rounded-full border h-40 w-40 overflow-hidden rel"
									/>
									<h3 className="text-3xl font-semibold leading-normal  text-gray-800 text-center">
										{nullToNA(user?.name)}
									</h3>
								</div>

								<div className=" flex-1 text-left flex justify-center items-left flex-col">
									<div className="px-5 md:px-20">
										<div className="mb-2 text-gray-700 mt-10 flex">
											<span className="flex-1"> mobile :</span>{" "}
											<span className="font-semibold flex-1">
												{nullToNA(user?.mobileNumber)}
											</span>
										</div>
										<div className="mb-2 text-gray-700 flex">
											<span className="flex-1"> Gender :</span>{" "}
											<span className="font-semibold flex-1">{nullToNA(user?.gender)}</span>
										</div>
										<div className="mb-2 text-gray-700 flex">
											<span className="flex-1"> email :</span>{" "}
											<span className="font-semibold flex-1 flex-wrap">{nullToNA(user?.email)}</span>
										</div>

										<div className="mb-2 text-gray-700 flex">
											<span className="flex-1"> Landmark :</span>{" "}
											<span className="font-semibold flex-1">{nullToNA(user?.landmark)}</span>
										</div>
										<div className="mb-2 text-gray-700 flex">
											<span className="flex-1"> Address :</span>{" "}
											<span className="font-semibold flex-1">{nullToNA(user?.address)}</span>
										</div>
										<div className="mb-2 text-gray-700 flex">
											<span className="flex-1"> PinCode :</span>{" "}
											<span className="font-semibold flex-1">{nullToNA(user?.pinCode)}</span>
										</div>
										<div className="mb-2 text-gray-700 flex">
											<span className="flex-1"> State :</span>{" "}
											<span className="font-semibold flex-1">{nullToNA(user?.stateName) || 'N/A'}</span>
										</div>
										<div className="mb-2 text-gray-700 flex">
											<span className="flex-1"> District :</span>{" "}
											<span className="font-semibold flex-1">{nullToNA(user?.districtName) || 'N/A'}</span>
										</div>
									</div>

									<div className="mb-2 text-gray-700 mt-10 space-x-2 md:px-20">
										<button
											onClick={() => setprofileFormModalStatus(true)}
											className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
											type="button"
											style={{ transition: "all .15s ease" }}
										>
											Update Profile
										</button>

										<button
											onClick={() => setuploadFilePopupStatus(true)}
											className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
											type="button"
											style={{ transition: "all .15s ease" }}
										>
											Update Image <FiEdit className="inline" />
										</button>
									</div>
								</div>


							</div>
							<div className="mt-10 py-10 border-t border-gray-300 text-center">
								<div className="flex flex-wrap justify-center">
									<div className="w-full lg:w-9/12 px-4">
										<p className="mb-4 text-lg leading-relaxed text-gray-800">
											Need any service ? We are ready to serve you in not time
										</p>
										<Link
											className="col-span-12 md:col-span-3 p-4 mb-2 md:mb-0 text-indigo-600 hover:bg-gray-300 hover:rounded-sm"
											href={`/services/allservice`}
										>
											Book Service
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

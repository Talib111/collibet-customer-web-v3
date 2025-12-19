import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/createProfile.module.css";
import { allowNumberInput } from "@/components/Snippets/PowerupFunctions";
import AxiosInterceptors from "@/components/ApiList/AxiosInterceptors";
import ApiList from "@/components/ApiList/ApiList";
import ApiHeader from "@/components/ApiList/ApiHeader";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import { useSearchParams } from "next/navigation";

const PassCode = () => {
	const router = useRouter();
	const [passCode, setpassCode] = useState("");
	const [isLoading, setisLoading] = useState("");
	const { api_createPassCode } = ApiList();
	const search = useSearchParams();
	const isForgetPassword = search.get("isForgetPassword");

	const handleInputChange = (event) => {
		setpassCode(allowNumberInput(event.target.value, passCode, 6));
	};

	// ══════════════════════════════║ THIS FUNCTION CREATE PASSCODE ║═══════════════════════════════════
	const postCreatePassCode = (values, imageUrl) => {
		if (passCode?.length < 6 || passCode?.length > 6)
			return toast.error("Passcode need to be 6 digit");
		setisLoading(true);
		let requestBody = {
			token: localStorage.getItem("generatedToken"),
			mobile: localStorage.getItem("currentMobileNo"),
			pin: passCode,
		};

		if (isForgetPassword == 'true') {
			requestBody.isForgetPassword = true
		}

		AxiosInterceptors.post(api_createPassCode, requestBody, ApiHeader())
			.then(function (response) {
				if (response?.data?.success) {
					toast.success(response?.data?.message || "Registered successfully");
					window.localStorage.clear()
					window.location.href='/login'
				} else {
					toast.error(response?.data?.message);
				}
			})
			.catch(function (error) {
				toast.error("Something went wrongg !");
				console.log("==2 error list...", error);
			})
			.finally(() => {
				setisLoading(false);
			});
	};

	return (
		<div>
			<section className="bg-white dark:bg-gray-900">
				<div className="flex justify-center min-h-screen">
					<div
						className="hidden bg-cover lg:block lg:w-2/5"
						style={{
							backgroundImage: "url('/images/login_banner.png')",
						}}
					></div>

					<div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
						<div className="w-full">
							<h1 className="text-3xl font-semibold tracking-wider text-gray-800 capitalize ">
								Set Password
							</h1>
							<h5 className="text-lg md:text-xl tracking-wider text-gray-700 md:text-gray-800 capitalize mt-4">
								Please enter a secure 6 digit password. It will be used for
								further login.
							</h5>

							<form className="mt-6">
								<div className="">
									<div className="">
										<label
											className={
												"form-label inline-block mb-1 text-gray-600 text-sm font-semibold"
											}
											htmlFor="firstName"
										>
											PassCode
										</label>
										<input
											className={
												"form-control block w-full md:w-3/5 px-3 2xl:py-1.5 py-1 2xl:text-base text-xl font-normal text-gray-700  bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
											}
											type="text"
											name="passCode"
											value={passCode}
											min={6}
											minLength={6}
											max={6}
											maxLength={6}
											onChange={handleInputChange}
										/>
										<div className={styles.underline}></div>
									</div>

									<div className="mt-4 flex justify-center md:justify-start">
										{isLoading ? (
											<button
												className="rounded-md bg-[#6573C3] px-10 py-2 text-lg font-semibold text-white shadow-xl hover:bg-[#6573C3]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6573C3] flex justify-center items-center"
												type="button"
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
												className="rounded-md bg-[#6573C3] px-10 py-2 text-lg font-semibold text-white shadow-xl hover:bg-[#6573C3]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6573C3]"
												type="submit"
												onClick={postCreatePassCode}
											>
												Submit
											</button>
										)}
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PassCode;

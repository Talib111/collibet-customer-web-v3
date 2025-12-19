import React from "react";
import { BiArrowBack } from "react-icons/bi";
import SendOtp from "../sections/auth/SendOtp";
import VerifyOtp from "../sections/auth/VerifyOtp";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Cart.module.css";
import Head from "next/head";

const SigningUp = () => {
	const [page, setPage] = React.useState(0);
	const [data, setData] = React.useState({
		mobileNumber: "",
		otp: "",
		token: "",
	});

	const makeRequest = (newData) => {
		console.log(newData);
	};
	const handleNextStep = (newData, finalStep = false) => {
		setData({ ...data, ...newData });
		if (finalStep) {
			makeRequest(newData);
			return;
		}
		setPage(page + 1);
	};
	const handlePrevStep = (newData) => {
		setData({ ...data, ...newData });
		setPage(page - 1);
	};
	const stepData = [
		<SendOtp
			next={handleNextStep}
			data={data}
			setData={setData}
			isSignup={true}
		/>,
		<VerifyOtp
			next={handleNextStep}
			prev={handlePrevStep}
			data={data}
			setData={setData}
		/>,
	];

	return (

		<>
			<Head>
				<title>Sign Up on Collibet | Book Tailoring Services in Ranchi Easily</title>
				<meta name="description" content="Create your free Collibet account and instantly book AC repair, plumbing, cleaning, and more services from trusted professionals in Ranchi." />
			</Head>
			<div className="w-screen h-screen flex justify-center items-center overflow-hidden bg-[#8F9CAF]">
				<div className="flex w-full max-w-sm mx-auto  rounded-lg shadow-lg  lg:max-w-4xl overflow-hidden">
					<div
						className="hidden bg-cover lg:block lg:w-1/2"
						style={{ backgroundImage: `url(/Images/homeBnr3.png)` }}
					/>
					<div className="w-full px-6 py-20 md:px-8 lg:w-1/2 bg-white">
						<div className="flex justify-center mx-auto">
							<Image
								className="w-auto h-20 border border-[#755698] rounded-full shadow-xl"
								width={80}
								height={80}
								src="/collibet_logo.png"
								alt=""
							/>
						</div>
						<p className="mt-3 text-3xl text-center text-gray-800 font-bold">
							Welcome to Collibet!
						</p>

						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b border-b-gray-400  md:w-2/6" />
							<h1 className="text-xs text-center text-gray-500 uppercase ">
								Sign Up
							</h1>
							<span className="w-1/5 border-b border-b-gray-400  md:w-2/6" />
						</div>
						<div className="mt-8">{stepData[page]}</div>
						<div className="text-center mt-2 text-md">
							<span>Already have an account?</span>
							<Link href="/login">
								<span className="pl-2 font-medium text-indigo-600 leading-5 text-cente  lg:mx-0 ">
									Log-In
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SigningUp;

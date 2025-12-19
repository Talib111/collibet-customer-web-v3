import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "sections/auth/LoginForm";
import Head from "next/head";

const LogIn = () => {

	return (
		<>
			<Head>
				<title>Login to Collibet Ranchi | Manage Local Tailoring Service Bookings</title>
				<meta name="description" content="Log in to your Collibet account to book, reschedule, or track your tailoring service appointments in Ranchi — AC, plumbing, electrical & more." />
			</Head>
			<div className='w-screen h-screen flex justify-center items-center overflow-hidden bg-[#8F9CAF]'>
				<div className="flex w-full max-w-sm mx-auto  rounded-lg shadow-lg  lg:max-w-4xl overflow-hidden">
					<div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url(/Images/homeBnr3.png)` }} />
					<div className="w-full px-6 py-10 md:px-8 lg:w-1/2 bg-white">
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
							Welcome back!
						</p>

						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b border-b-gray-400  md:w-2/6" />
							<h1 className="text-xs text-center text-gray-500 uppercase ">Log In</h1>
							<span className="w-1/5 border-b border-b-gray-400  md:w-2/6" />
						</div>
						<div className="mt-8">
							<LoginForm />
						</div>
						<div className="text-center mt-2 text-md"><span>Don&apos;t have an account?</span><Link
							href="/signup"
						><span className="pl-2 font-medium text-indigo-600 leading-5 text-cente capitalize lg:mx-0 ">
								Sign-Up
							</span>
						</Link></div>
					</div>
				</div>
			</div>
		</>
	)

};

export default LogIn;

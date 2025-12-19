import React from "react";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { Phone } from "lucide-react";
import Head from "next/head";

const Contact = () => {
	return (
		<>
			<Head>
				<title>Contact Collibet Ranchi | Support for Local Service Bookings</title>
				<meta name="description" content="Need help with your Collibet booking in Ranchi? Reach out to our local support team for service queries, rescheduling, or feedback." />
			</Head>
			<Layout>
				<header className="bg-black py-10 font-poppins ">
					<div className="container  flex flex-col px-5 py-5 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center bg-white ">
						<div className="flex items-center justify-center w-full h-60 md:h-96 lg:w-1/2 px-20 ">
							<Image
								className="object-cover w-screen md:w-full h-full md:h-full max-w-xl md:rounded-md border border-black"
								width={500}
								height={500}
								src="/terms.jpg"
								alt="glasses photo"
							/>
						</div>

						<div className="w-full lg:w-1/2">
							<div className="lg:max-w-lg">
								<h1 className="text-3xl font-semibold tracking-wide text-gray-900  lg:text-4xl">
									Contact US
								</h1>
								<p className="mt-4 text-gray-900 dark:text-gray-900 ">
									Thank you for your interest in Collibet tailoring service software.
									We are here to assist you and provide any information you may
									need. Please feel free to reach out to our dedicated support
									team using the following contact information:
								</p>
								<div className="grid gap-6 mt-8 sm:grid-cols-2">
									<div className="flex items-center text-gray-800 -px-3  dark:text-gray-900">
										<span className="mx-3">Customer support Phone :</span>
									</div>

									<div className="flex items-center text-gray-900 -px-3 dark:text-gray-900">
										<a href="tel:7260030404" className="mx-3 font-semibold hover:underline">
											<Phone className="inline" /> +91-7260030404
										</a>
									</div>

									<div className="flex items-center text-gray-800 -px-3 dark:text-gray-900">
										<span className="mx-3">Email :</span>
									</div>

									<div className="flex items-center text-gray-800 -px-3 dark:text-gray-900">
										<a href="mailto:support@collibet.com" className="mx-3 font-semibold hover:underline">
											support@collibet.com
										</a>
									</div>

									<div className="flex items-center text-gray-800 -px-3 dark:text-gray-900">
										<span className="mx-3">Working hours :</span>
									</div>

									<div className="items-center text-gray-800 -px-3 dark:text-gray-900">
										<div className="mx-3 font-semibold">Monday to Sunday</div>
										<div className="mx-3 font-semibold">(9:00AM to 06:00PM)</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</header>

				<div className="bg-white">
					<div className="container px-6 py-8 mx-auto">
						<div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
							<div className="w-full p-8 space-y-8 text-center bg-white border border-black rounded-lg ">
								<p className="font-medium text-gray-900 uppercase ">
									General Inquiries:
								</p>

								<p className="font-medium text-gray-900 ">
									For general inquiries or information about our tailoring service
									software, please email us at [Insert General Inquiry Email
									Address]. Our knowledgeable team will respond to your inquiry
									as soon as possible.
								</p>
							</div>

							<div className="w-full p-8 space-y-8 text-center bg-black border border-black rounded-lg">
								<p className="font-medium text-white uppercase">
									Sales Inquiries:
								</p>

								<p className="font-medium text-gray-100">
									If you are interested in learning more about our tailoring service
									software or would like to request a demo, please contact our
									sales team at [Insert Sales Email Address]. They will be
									delighted to assist you with any questions and guide you
									through the features and benefits of our software.
								</p>
							</div>

							<div className="w-full p-8 space-y-8 text-center bg-white border border-black rounded-lg">
								<p className="font-medium text-black uppercase ">
									Technical Support:
								</p>

								<p className="font-medium text-gray-900">
									For technical support or assistance with our tailoring service
									software, please contact our dedicated support team via phone
									or email. They are available to help you troubleshoot issues,
									provide guidance, and ensure that you have a smooth experience
									with our software
								</p>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Contact;

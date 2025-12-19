import React from "react";
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";

function Faqsection() {
	const [activeIndex, setActiveIndex] = useState(null);
	console.log('testing-10')

	const toggleAccordion = (index) => {
		if (index === activeIndex) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};

	const faqData = [
		{
			question: "What is Collibet and how does it work in Ranchi?",
			answer:
				"Collibet is Ranchi’s reliable Tailoring service brand, offering professional solutions like stitching, tailoring and more — all delivered by our in-house trained experts. You book, we handle the rest.",
		},
		{
			question: "Which services does Collibet provide in Ranchi?",
			answer:
				"From ladies tailoring to home cleaning, AC servicing, vehicle washing, plumbing, and electrical repairs — Collibet delivers a wide range of doorstep services in Ranchi. Every service is executed by our own trusted team.",
		},

		{
			question: "Are Collibet’s professionals verified and trained?",
			answer:
				"Yes. Every technician and service expert at Collibet is background-verified, professionally trained, and committed to quality. We take pride in offering a safe, skilled, and dependable service experience in every Ranchi home.",
		},

		{
			question: "How do I book a service with Collibet in Ranchi?",
			answer:
				"Booking with Collibet is simple and convenient. You can schedule a service directly through our website at https://collibet.com or by using the Collibet mobile app, available on both Android and iOS. Just select your service, choose a time slot, and our trained professionals will be at your doorstep — right on time, anywhere in Ranchi.",
		},

		{
			question: "Does Collibet offer customer support in Ranchi?",
			answer:
				"Absolutely. Our dedicated Ranchi support team is here to help you before, during, and after every service. You can reach us via the Contact Us page or call us directly — we’re always ready to assist.",
		},

		{
			question: "Can I book urgent or same-day services with Collibet?",
			answer:
				"Yes, depending on the service and slot availability, Collibet offers urgent and same-day service options in most parts of Ranchi. We know emergencies can’t wait — and neither do we.",
		},

		{
			question: "Do I need to register to use Collibet services?",
			answer:
				"Yes, creating a free Collibet account lets you book services easily, manage appointments, and receive service updates. It’s quick, secure, and designed to make your experience seamless.",
		},
	];

	return (
		<>
			<Head>
				<title>FAQs | Tailoring Service Support for Collibet Users </title>
				<meta name="description" content="Find answers to your tailoring service booking questions in Ranchi. Learn about payments, rescheduling, and service guarantees with Collibet." />
			</Head>
			<Layout>
				<section className="bg-white  lg:py-5 lg:flex lg:justify-center font-poppins">
					<div className="overflow-hidden bg-white dark:bg-blue-500 lg:mx-8 lg:flex lg:max-w-4xl lg:w-full  ">
						<div className="lg:w-1/2">
							<div
								className="h-70 bg-cover lg:h-full"
								style={{
									backgroundImage: "url('/faq.jpg')",
								}}
							></div>
						</div>

						<div className="max-w-xl px-6 py-12 bg-black lg:max-w-5xl lg:w-1/2">
							<h1 className="text-2xl font-semibold text-white  md:text-3xl">
								Frequently Asked <span className="text-white">Questions</span>
							</h1>

							<p className="mt-4 text-white dark:text-gray-300">
								We offer a wide range of tailoring services including plumbing,
								electrical work, landscaping, cleaning, remodeling, painting,
								pest control, and more.
							</p>
						</div>
					</div>
				</section>

				<div className="p-4 md:p-20 bg-white">
					<div className="w-full md:w-1/2 mx-auto">
						<ul className="space-y-4">
							{faqData.map((faq, index) => (
								<li key={index} className="bg-white rounded shadow p-4">
									<button
										className="flex justify-between items-center w-full focus:outline-none"
										onClick={() => toggleAccordion(index)}
									>
										<span className="font-semibold">{faq.question}</span>
										<span
											className={`transition-transform transform ${activeIndex === index ? "rotate-180" : "rotate-0"
												}`}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 text-gray-800"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
												/>
											</svg>
										</span>
									</button>
									{activeIndex === index && (
										<div className="mt-2">
											<p className="text-gray-700">{faq.answer}</p>
										</div>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Faqsection;

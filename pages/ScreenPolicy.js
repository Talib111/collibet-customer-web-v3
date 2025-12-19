//---------------------- THIS PAGE IS ACCESSED FROM MOBILE APP ----------------------
import React from "react";
import Image from "next/image";

const ScreenPolicy = () => {
	return (
		<>
			<header className="bg-white  font-poppins">
				<div className="container px-8 pt-16 mx-auto">
					<div className="items-center lg:flex">
						<div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
							<Image
								width={500}
								height={500}
								className="w-full h-full lg:max-w-xl"
								src="/terms.jpg"
								alt="Catalogue-pana.svg"
							/>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="lg:max-w-lg">
								<h1 className="text-3xl font-semibold text-gray-900  lg:text-4xl">
									Privacy & <span className="text-gray-500 ">Policy</span>
								</h1>

								<p className="mt-3  text-gray-600 ">
									At Collibet, we are committed to protecting your privacy and
									safeguarding your personal information. This Privacy Policy
									outlines how we collect, use, disclose, and protect your data
									when you engage with our tailoring services. By using our services,
									you consent to the practices described in this Privacy Policy.
								</p>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="px-10 py-10">
				<h2 className="text-2xl font-bold mb-10">
					How We Use Your Information
				</h2>
				<p className="mb-2">
					We use the collected information for the following purposes:
				</p>
				<ul className="list-decimal ml-8 mb-6 py-5">
					<li>
						<span className="font-bold">Service Delivery:</span> to provide and
						fulfill the requested tailoring services, schedule appointments, and
						communicate with you regarding service updates or changes.
					</li>
					<li>
						<span className="font-bold">Customer Support:</span> to address your
						inquiries, respond to your requests, and provide assistance or
						information related to our services.
					</li>
					<li>
						<span className="font-bold">Billing and Payment:</span> to process
						payments, issue invoices, and manage financial transactions for the
						services provided.
					</li>
					<li>
						<span className="font-bold">Improving our Services:</span> to
						analyze usage patterns, gather feedback, and enhance the quality,
						functionality, and user experience of our tailoring services.
					</li>
				</ul>

				<h2 className="text-2xl font-bold mb-10">
					Data Disclosure and Sharing
				</h2>
				<p className="mb-2">
					We may share your personal information in the following circumstances:
				</p>
				<ul className="list-decimal ml-8 my-6 py-5">
					<li>
						<span className="font-bold">Service Providers:</span> We may
						disclose your information to trusted third-party service providers
						who assist us in delivering our tailoring services, such as technicians,
						contractors, or software providers. These providers are
						contractually bound to handle your information securely and solely
						for the purpose of providing the requested services.
					</li>
					<li>
						<span className="font-bold">Legal Compliance:</span> We may disclose
						your information if required to do so by law, regulation, or legal
						process, or if we believe that such disclosure is necessary to
						protect our rights, property, or safety, or the rights, property, or
						safety of others.
					</li>
					<li>
						<span className="font-bold">Consent:</span> We may share your
						information with your consent or at your direction, such as when you
						authorize us to share your feedback or testimonials.
					</li>
				</ul>

				<p className="mb-6">
					Our website or service may contain links to third-party websites or
					resources. We are not responsible for the privacy practices or content
					of such third-party sites. We encourage you to review the privacy
					policies of those sites before providing any personal information.
				</p>

				<p>
					<span className="font-bold">Updates to the Privacy Policy:</span> We
					reserve the right to update or modify this Privacy Policy at any time.
					We will notify you of any material changes by posting the updated
					policy on our website or through other communication channels. It is
					your responsibility to review the Privacy Policy periodically and stay
					informed about any updates.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-6 lg:grid-cols-2  px-2 py-2 md:px-12 md:py-12 lg:px-22 lg:py-22">
				<div className="flex max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg ">
					<div
						className="w-1/3 bg-contain"
					></div>
					<div className="w-2/3 p-4 md:p-4 flex flex-col justify-between">
						<h1 className="text-xl font-bold text-gray-800 ">
							Information Collection:
						</h1>
						<p className="mt-2 text-sm text-gray-600 ">
							We collect personal information such as name, address, and contact
							details when you engage with our tailoring services.
						</p>
					</div>
				</div>

				<div className="flex max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg ">
					<div
						className="w-1/3 bg-contain"
					></div>
					<div className="w-2/3 p-4 md:p-4 flex flex-col justify-between">
						<h1 className="text-xl font-bold text-gray-800 ">
							Purpose of Collection:
						</h1>
						<p className="mt-2 text-sm text-gray-600 ">
							We use your information to provide and improve our tailoring services,
							communicate with you, and process payments.
						</p>
					</div>
				</div>

				<div className="flex max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg ">
					<div
						className="w-1/3 bg-cover"
					></div>
					<div className="w-2/3 p-4 md:p-4 flex flex-col justify-between">
						<h1 className="text-xl font-bold text-gray-800 ">Data Security:</h1>
						<p className="mt-2 text-sm text-gray-600 ">
							We implement measures to protect your personal information from
							unauthorized access or disclosure.
						</p>
					</div>
				</div>

				<div className="flex max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg ">
					<div
						className="w-1/3 bg-cover"
						
					></div>
					<div className="w-2/3 p-4 md:p-4 flex flex-col justify-between">
						<h1 className="text-xl font-bold text-gray-800 ">Data Sharing:</h1>
						<p className="mt-2 text-sm text-gray-600 ">
							We may share your information with trusted service providers to
							facilitate the delivery of our services.
						</p>
					</div>
				</div>

				<div className="flex max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg ">
					<div
						className="w-1/3 bg-cover"
						
					></div>
					<div className="w-2/3 p-4 md:p-4 flex flex-col justify-between">
						<h1 className="text-xl font-bold text-gray-800 ">Data Retention:</h1>
						<p className="mt-2 text-sm text-gray-600 ">
							We retain your information for as long as necessary to fulfill the
							purposes outlined in our privacy policy.
						</p>
					</div>
				</div>

				<div className="flex max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg ">
					<div
						className="w-1/3 bg-cover"
					
					></div>
					<div className="w-2/3 p-4 md:p-4 flex flex-col justify-between">
						<h1 className="text-xl font-bold text-gray-800 ">Third-Party Links:</h1>
						<p className="mt-2 text-sm text-gray-600 ">
							Our services may contain links to third-party websites, and we are
							not responsible for their privacy practices.
						</p>
					</div>
				</div>

				<div className="flex max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg ">
					<div
						className="w-1/3 bg-cover"
						
					></div>
					<div className="w-2/3 p-4 md:p-4 flex flex-col justify-between">
						<h1 className="text-xl font-bold text-gray-800 ">Policy Updates:</h1>
						<p className="mt-2 text-sm text-gray-600">
							We may update our privacy policy from time to time, and the
							updated version will be posted on our website.
						</p>
					</div>
				</div>

				<div className="flex max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg ">
					<div
						className="w-1/3 bg-cover"
					
					></div>
					<div className="w-2/3 p-4 md:p-4 flex flex-col justify-between">
						<h1 className="text-xl font-bold text-gray-800 ">Contact Us:</h1>
						<p className="mt-2 text-sm text-gray-600 ">
							If you have any questions or concerns about our privacy practices,
							please contact us using the provided contact information.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default ScreenPolicy;

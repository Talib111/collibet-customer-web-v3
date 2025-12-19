// import React from "react";
// import Layout from "@/components/Layout/Layout";
// import Image from "next/image";
// import Head from "next/head";

// const Policy = () => {
// 	return (
// 		<>
// 			<Head>
// 				<title>Privacy Policy | Your Data Security with Collibet in Ranchi</title>
// 				<meta name="description" content="Learn how Collibet protects your personal information while providing trusted home services in Ranchi. Transparency and safety guaranteed." />
// 			</Head>
// 			<Layout>
// 				{/* Hero Section */}
// 				<header className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-poppins overflow-hidden relative">
// 					<div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
// 					<div className="container px-4 sm:px-6 lg:px-8 pt-16 pb-20 mx-auto relative">
// 						<div className="items-center lg:flex lg:gap-12">
// 							<div className="w-full lg:w-1/2 order-2 lg:order-1">
// 								<div className="max-w-2xl">
// 									<div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
// 										<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
// 											<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// 										</svg>
// 										Privacy Protected
// 									</div>
// 									<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
// 										Privacy &
// 										<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Policy</span>
// 									</h1>
// 									<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
// 										At Collibet, we are committed to protecting your privacy and
// 										safeguarding your personal information. This Privacy Policy
// 										outlines how we collect, use, disclose, and protect your
// 										data when you engage with our home services.
// 									</p>

// 								</div>
// 							</div>
// 							<div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
// 								<div className="relative">
// 									<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-6 opacity-20"></div>
// 									<Image
// 										width={600}
// 										height={600}
// 										className="relative w-full max-w-lg mx-auto h-auto rounded-3xl shadow-2xl"
// 										src="/terms.jpg"
// 										alt="Privacy Policy Illustration"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</header>

// 				{/* Key Points Section */}
// 				<section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
// 					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
// 						<div className="text-center mb-16">
// 							<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
// 								Key Privacy Principles
// 							</h2>
// 							<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
// 								Understanding how we protect and handle your personal information
// 							</p>
// 						</div>

// 						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// 							<div className="group">
// 								<div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full">
// 									<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
// 										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// 										</svg>
// 									</div>
// 									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
// 										Data Security
// 									</h3>
// 									<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
// 										We implement industry-standard security measures to protect your
// 										personal information from unauthorized access, disclosure,
// 										alteration, or destruction with advanced encryption protocols.
// 									</p>
// 								</div>
// 							</div>

// 							<div className="group md:col-span-2 lg:col-span-1">
// 								<div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full">
// 									<div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
// 										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// 										</svg>
// 									</div>
// 									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
// 										Information We Collect
// 									</h3>
// 									<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
// 										We collect contact information, service details, and appointment data
// 										necessary to provide our home services effectively while maintaining
// 										transparency about our data collection practices.
// 									</p>
// 								</div>
// 							</div>

// 							<div className="group md:col-span-2 lg:col-span-1">
// 								<div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full">
// 									<div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
// 										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm6 3a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h8a2 2 0 012 2v6z" />
// 										</svg>
// 									</div>
// 									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
// 										Data Retention
// 									</h3>
// 									<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
// 										We retain your personal information only for as long as necessary
// 										to fulfill our service obligations and comply with legal requirements,
// 										ensuring responsible data management.
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</section>

// 				{/* Detailed Sections */}
// 				<section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
// 					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
// 						<div className="max-w-4xl mx-auto">
// 							<div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 lg:p-12 mb-12">
// 								<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
// 									<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
// 										<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
// 										</svg>
// 									</div>
// 									How We Use Your Information
// 								</h2>
// 								<p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
// 									We use the collected information for the following purposes:
// 								</p>
// 								<div className="space-y-6">
// 									{[
// 										{
// 											title: "Service Delivery",
// 											description: "To provide and fulfill the requested home services, schedule appointments, and communicate with you regarding service updates or changes."
// 										},
// 										{
// 											title: "Customer Support",
// 											description: "To address your inquiries, respond to your requests, and provide assistance or information related to our services."
// 										},
// 										{
// 											title: "Billing and Payment",
// 											description: "To process payments, issue invoices, and manage financial transactions for the services provided."
// 										},
// 										{
// 											title: "Improving our Services",
// 											description: "To analyze usage patterns, gather feedback, and enhance the quality, functionality, and user experience of our home services."
// 										}
// 									].map((item, index) => (
// 										<div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
// 											<div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
// 												{index + 1}
// 											</div>
// 											<div>
// 												<h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
// 												<p className="text-gray-600 dark:text-gray-300">{item.description}</p>
// 											</div>
// 										</div>
// 									))}
// 								</div>
// 							</div>

// 							<div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 lg:p-12">
// 								<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
// 									<div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
// 										<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
// 										</svg>
// 									</div>
// 									Data Disclosure and Sharing
// 								</h2>
// 								<p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
// 									We may share your personal information in the following circumstances:
// 								</p>
// 								<div className="space-y-6">
// 									{[
// 										{
// 											title: "Service Providers",
// 											description: "We may disclose your information to trusted third-party service providers who assist us in delivering our home services, such as technicians, contractors, or software providers. These providers are contractually bound to handle your information securely and solely for the purpose of providing the requested services."
// 										},
// 										{
// 											title: "Legal Compliance",
// 											description: "We may disclose your information if required to do so by law, regulation, or legal process, or if we believe that such disclosure is necessary to protect our rights, property, or safety, or the rights, property, or safety of others."
// 										},
// 										{
// 											title: "Consent",
// 											description: "We may share your information with your consent or at your direction, such as when you authorize us to share your feedback or testimonials."
// 										}
// 									].map((item, index) => (
// 										<div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
// 											<div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
// 												{index + 1}
// 											</div>
// 											<div>
// 												<h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
// 												<p className="text-gray-600 dark:text-gray-300">{item.description}</p>
// 											</div>
// 										</div>
// 									))}
// 								</div>

// 								<div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded-r-xl">
// 									<p className="text-gray-700 dark:text-gray-300">
// 										Our website or service may contain links to third-party websites or
// 										resources. We are not responsible for the privacy practices or
// 										content of such third-party sites. We encourage you to review the
// 										privacy policies of those sites before providing any personal
// 										information.
// 									</p>
// 								</div>

// 								<div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 rounded-r-xl">
// 									<h4 className="font-bold text-gray-900 dark:text-white mb-2">Updates to the Privacy Policy</h4>
// 									<p className="text-gray-700 dark:text-gray-300">
// 										We reserve the right to update or modify this Privacy Policy at any
// 										time. We will notify you of any material changes by posting the
// 										updated policy on our website or through other communication
// 										channels. It is your responsibility to review the Privacy Policy
// 										periodically and stay informed about any updates.
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</section>

// 				{/* Summary Cards */}
// 				<section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
// 					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
// 						<div className="text-center mb-16">
// 							<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
// 								Privacy Policy Summary
// 							</h2>
// 							<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
// 								Quick overview of our key privacy practices and policies
// 							</p>
// 						</div>

// 						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// 							{[
// 								{
// 									title: "Information Collection",
// 									description: "We collect personal information such as name, address, and contact details when you engage with our home services.",
// 									icon: "📊",
// 									color: "blue"
// 								},
// 								{
// 									title: "Purpose of Collection",
// 									description: "We use your information to provide and improve our home services, communicate with you, and process payments.",
// 									icon: "🎯",
// 									color: "green"
// 								},
// 								{
// 									title: "Data Security",
// 									description: "We implement measures to protect your personal information from unauthorized access or disclosure.",
// 									icon: "🔒",
// 									color: "purple"
// 								},
// 								{
// 									title: "Data Sharing",
// 									description: "We may share your information with trusted service providers to facilitate the delivery of our services.",
// 									icon: "🤝",
// 									color: "indigo"
// 								},
// 								{
// 									title: "Data Retention",
// 									description: "We retain your information for as long as necessary to fulfill the purposes outlined in our privacy policy.",
// 									icon: "⏱️",
// 									color: "orange"
// 								},
// 								{
// 									title: "Third-Party Links",
// 									description: "Our services may contain links to third-party websites, and we are not responsible for their privacy practices.",
// 									icon: "🔗",
// 									color: "teal"
// 								},
// 								{
// 									title: "Policy Updates",
// 									description: "We may update our privacy policy from time to time, and the updated version will be posted on our website.",
// 									icon: "🔄",
// 									color: "pink"
// 								},
// 								{
// 									title: "Contact Us",
// 									description: "If you have any questions or concerns about our privacy practices, please contact us using the provided contact information.",
// 									icon: "📞",
// 									color: "cyan"
// 								}
// 							].map((item, index) => (
// 								<div key={index} className="group">
// 									<div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 h-full border border-gray-200 dark:border-gray-700">
// 										<div className="text-3xl mb-4">{item.icon}</div>
// 										<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
// 											{item.title}
// 										</h3>
// 										<p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
// 											{item.description}
// 										</p>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</section>

// 				{/* Contact Section */}
// 				{/* <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
// 				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
// 					<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
// 						Have Questions About Our Privacy Policy?
// 					</h2>
// 					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
// 						We're here to help you understand how we protect your privacy and handle your data.
// 					</p>
// 					<div className="flex flex-col sm:flex-row gap-4 justify-center">
// 						<button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
// 							Contact Privacy Team
// 						</button>
// 						<button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
// 							Download Full Policy
// 						</button>
// 					</div>
// 				</div>
// 			</section> */}
// 			</Layout>
// 		</>
// 	);
// };

// export default Policy;


/* =============================
      PRIVACY POLICY – TAILORING
   ============================= */

import React from "react";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Head from "next/head";

const Policy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Your Data Safety with Collibet Tailoring Services</title>
        <meta
          name="description"
          content="Learn how Collibet Tailoring protects your personal measurements, style preferences, and order details. Transparent tailoring service privacy policy."
        />
      </Head>

      <Layout>

        {/* HERO */}
        <header className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-poppins overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>

          <div className="container px-4 sm:px-6 lg:px-8 pt-16 pb-20 mx-auto relative">
            <div className="items-center lg:flex lg:gap-12">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="max-w-2xl">

                  <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Privacy Protected
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                    Privacy &
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {" "}Policy
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    At Collibet Tailoring Services, your personal measurements,
                    design preferences, and order details are handled with utmost
                    confidentiality. Our Privacy Policy explains how we collect and
                    safeguard your tailoring-related data.
                  </p>

                </div>
              </div>

              <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-6 opacity-20"></div>
                  <Image
                    width={600}
                    height={600}
                    className="relative w-full max-w-lg mx-auto h-auto rounded-3xl shadow-2xl"
                    src="/terms.jpg"
                    alt="Tailoring Privacy Illustration"
                  />
                </div>
              </div>

            </div>
          </div>
        </header>

        {/* ==========================
           KEY POINTS – TAILORING
        ========================== */}
        <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Key Privacy Principles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                How we protect your measurements, design choices, and tailoring records
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* BOX 1 */}
              <div className="group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Secure Measurements Storage
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Your body measurements, fitting preferences, and style notes are stored securely
                    and used ONLY for stitching and alteration purposes.
                  </p>
                </div>
              </div>

              {/* BOX 2 */}
              <div className="group md:col-span-2 lg:col-span-1">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Information We Collect
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We collect your name, contact details, body measurements,
                    garment order details, pickup/delivery address, and fabric preferences—
                    strictly to provide tailoring services.
                  </p>
                </div>
              </div>

              {/* BOX 3 */}
              <div className="group md:col-span-2 lg:col-span-1">
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm6 3a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h8a2 2 0 012 2v6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Data Retention
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Your measurements are retained only to support future orders or alterations.
                    You may request deletion anytime.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================
         TAILORING DETAILS (USE CASES)
        ========================== */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">

            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 lg:p-12 mb-12">

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                How We Use Your Information
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Your data helps us personalize and deliver the best tailoring experience:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Stitching & Alteration",
                    description:
                      "Your measurements and garment preferences are used strictly to stitch, alter, or repair your clothes accurately."
                  },
                  {
                    title: "Pickup & Delivery Coordination",
                    description:
                      "We use your contact and address details to schedule fabric pickup, trial sessions, and final delivery of stitched garments."
                  },
                  {
                    title: "Order Tracking & Updates",
                    description:
                      "We send updates about order progress, trial requests, delivery schedules, and payment confirmations."
                  },
                  {
                    title: "Service Improvements",
                    description:
                      "Your feedback helps us enhance measurement accuracy, fit quality, and tailoring features."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* ==========================
                 DATA SHARING – TAILORING
            ========================== */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 lg:p-12">

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                Data Sharing & Disclosure
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We share your information only when required:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Partner Tailors or Designers",
                    description:
                      "If your garment requires specialty stitching or embroidery, your measurements and design notes may be shared with partner tailors—only to complete your order."
                  },
                  {
                    title: "Legal Requirements",
                    description:
                      "Information may be shared if required by law or to protect our business from fraud."
                  },
                  {
                    title: "Customer Approval",
                    description:
                      "We share your pictures, reviews, or outfit showcases ONLY when you give explicit consent."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded-r-xl">
                <p className="text-gray-700 dark:text-gray-300">
                  Our website may contain links to fabric stores, fashion blogs, or third-party
                  tailoring resources. Their privacy policies may differ, and we do not take
                  responsibility for their practices.
                </p>
              </div>

              <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 rounded-r-xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Policy Updates</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  We may update this Privacy Policy occasionally. All changes will be posted here.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ==========================
           SUMMARY CARDS – UPDATED
        ========================== */}
        <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">

            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Tailoring Privacy Policy Summary
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A quick overview of how we protect your tailoring-related data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Measurements Protection",
                  description: "Your body measurements are securely stored and used only for tailoring.",
                  icon: "📏"
                },
                {
                  title: "Order Purpose Only",
                  description: "Data is used for stitching, alterations, pickup, trial, and delivery.",
                  icon: "🧵"
                },
                {
                  title: "Secure Data Handling",
                  description: "Your photos, design references, and garment samples are confidential.",
                  icon: "🔒"
                },
                {
                  title: "Trusted Sharing",
                  description: "Shared only with partner tailors involved in your order.",
                  icon: "🤝"
                },
                {
                  title: "Data Retention",
                  description: "Measurements kept only to support future orders.",
                  icon: "📁"
                },
                {
                  title: "Fabric Links",
                  description: "External sites have separate privacy policies.",
                  icon: "🔗"
                },
                {
                  title: "Policy Updates",
                  description: "Privacy terms may change occasionally.",
                  icon: "🔄"
                },
                {
                  title: "Support",
                  description: "Contact us for any privacy-related questions.",
                  icon: "📞"
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 h-full border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </Layout>
    </>
  );
};

export default Policy;

// import Layout from "@/components/Layout/Layout";
// import Head from "next/head";
// import Image from "next/image";

// export default function About() {
// 	return (
// 		<>
// 			<Head>
// 				<title>About Collibet | Local Home Service Platform for Ranchi</title>
// 				<meta name="description" content="Collibet is Ranchi's trusted home services platform offering everything from AC repair to plumbing. Learn about our mission to simplify home care in Ranchi." />
// 			</Head>
// 			<Layout>
// 				{/* Hero Section */}
// 				<div className="relative min-h-screen flex flex-col overflow-hidden">
// 					{/* Background with Overlay */}
// 					<div className="absolute inset-0 z-0">
// 						<div className="h-1/2 md:block hidden relative">
// 							<Image
// 								width={500}
// 								height={500}
// 								src="https://res.cloudinary.com/dor3gao8l/image/upload/v1713943536/COLLIBET%20HOME%20SERVICES/office-620817_1280_22_n4hywv.jpg"
// 								alt="Collibet Office"
// 								className="object-cover w-full h-full"
// 							/>
// 							<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
// 						</div>
// 						<div className="h-1/2 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
// 					</div>

// 					{/* Mobile Background */}
// 					<div className="md:hidden absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100">
// 						<div className="absolute inset-0 opacity-10">
// 							<div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
// 							<div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
// 						</div>
// 					</div>

// 					{/* Content Card */}
// 					<div className="relative z-10 flex items-center justify-center min-h-screen px-4">
// 						<div className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-white/20 transform hover:scale-105 transition-all duration-500">
// 							{/* Decorative Elements */}
// 							<div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-80"></div>
// 							<div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-60"></div>
							
// 							{/* Header */}
// 							<div className="text-center mb-8">
// 								<div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-4 border border-amber-200">
// 									<span className="text-amber-700 font-semibold text-sm tracking-wide uppercase">Our Story</span>
// 								</div>
// 								<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
// 									About Us
// 								</h1>
// 								<div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
// 							</div>

// 							{/* Content */}
// 							<p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-light max-w-3xl mx-auto">
// 								Welcome to <span className="font-semibold text-amber-600">Collibet</span>, your trusted partner for all your home
// 								service needs. With years of experience and a commitment to
// 								excellence, we take pride in delivering top-notch services to
// 								homeowners like you.
// 							</p>

// 							{/* Stats or Features */}
// 							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
// 								<div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
// 									<div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
// 										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// 										</svg>
// 									</div>
// 									<h3 className="font-semibold text-gray-800">Fast Service</h3>
// 									<p className="text-sm text-gray-600 mt-1">Quick response time</p>
// 								</div>
// 								<div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
// 									<div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
// 										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// 										</svg>
// 									</div>
// 									<h3 className="font-semibold text-gray-800">Quality Work</h3>
// 									<p className="text-sm text-gray-600 mt-1">Professional standards</p>
// 								</div>
// 								<div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
// 									<div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
// 										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
// 										</svg>
// 									</div>
// 									<h3 className="font-semibold text-gray-800">Fair Pricing</h3>
// 									<p className="text-sm text-gray-600 mt-1">Transparent costs</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Mission & Services Section */}
// 				<div className="relative bg-gradient-to-br from-gray-50 to-white py-20">
// 					{/* Background Pattern */}
// 					<div className="absolute inset-0 opacity-5">
// 						<div className="absolute top-20 right-20 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl"></div>
// 						<div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl"></div>
// 					</div>

// 					<div className="container mx-auto px-4 relative z-10">
// 						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
// 							{/* Mission Card */}
// 							<div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
// 								<div className="text-center mb-6">
// 									<div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
// 										<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
// 										</svg>
// 									</div>
// 									<h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
// 									<div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
// 								</div>
// 								<p className="text-lg text-gray-600 leading-relaxed text-center">
// 									At Collibet, our mission is to provide exceptional home
// 									services that enhance the comfort, convenience, and
// 									functionality of your living space. We strive to exceed
// 									customer expectations by offering reliable, efficient, and
// 									cost-effective solutions tailored to your specific needs.
// 								</p>
// 								<div className="mt-6 flex justify-center">
// 									<div className="flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
// 										<span className="text-amber-600 font-medium text-sm">Excellence Driven</span>
// 										<div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
// 									</div>
// 								</div>
// 							</div>

// 							{/* Services Card */}
// 							<div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
// 								<div className="text-center mb-6">
// 									<div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
// 										<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
// 										</svg>
// 									</div>
// 									<h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
// 									<div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
// 								</div>
// 								<p className="text-lg text-gray-600 leading-relaxed text-center">
// 									We offer a comprehensive range of home services to address
// 									various aspects of your home. From plumbing and electrical
// 									work to HVAC maintenance and appliance repairs, our skilled
// 									technicians are trained to handle it all. We understand the
// 									importance of a well-maintained home, and our goal is to
// 									ensure.
// 								</p>
// 								<div className="mt-6 flex justify-center">
// 									<div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
// 										<span className="text-blue-600 font-medium text-sm">Complete Solutions</span>
// 										<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Why Choose Us Section */}
// 				<div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 relative overflow-hidden">
// 					{/* Background Effects */}
// 					<div className="absolute inset-0 opacity-10">
// 						<div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
// 						<div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
// 					</div>

// 					<div className="container mx-auto px-4 relative z-10">
// 						<div className="text-center mb-16">
// 							<div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
// 								<span className="text-amber-400 font-semibold text-sm tracking-wide uppercase">Our Advantage</span>
// 							</div>
// 							<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
// 								Why Choose <span className="text-amber-400">Us?</span>
// 							</h1>
// 							<div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
// 							<p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed">
// 								There are several reasons why homeowners trust Collibet for their
// 								home service needs:
// 							</p>
// 						</div>

// 						{/* Features Grid */}
// 						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
// 							{/* Feature 1 */}
// 							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
// 								<div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
// 									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// 									</svg>
// 								</div>
// 								<h3 className="text-xl font-bold text-white mb-3">Local Experts</h3>
// 								<p className="text-gray-300 leading-relaxed">Deep understanding of unique home service requirements</p>
// 							</div>

// 							{/* Feature 2 */}
// 							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
// 								<div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
// 									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// 									</svg>
// 								</div>
// 								<h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
// 								<p className="text-gray-300 leading-relaxed">Round-the-clock customer support for all your emergency needs</p>
// 							</div>

// 							{/* Feature 3 */}
// 							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
// 								<div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
// 									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
// 									</svg>
// 								</div>
// 								<h3 className="text-xl font-bold text-white mb-3">Trusted Service</h3>
// 								<p className="text-gray-300 leading-relaxed">Verified professionals with insurance coverage and quality guarantee</p>
// 							</div>

// 							{/* Feature 4 */}
// 							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
// 								<div className="w-14 h-14 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
// 									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
// 									</svg>
// 								</div>
// 								<h3 className="text-xl font-bold text-white mb-3">Fair Pricing</h3>
// 								<p className="text-gray-300 leading-relaxed">Transparent pricing with no hidden costs or surprise charges</p>
// 							</div>

// 							{/* Feature 5 */}
// 							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
// 								<div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
// 									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// 									</svg>
// 								</div>
// 								<h3 className="text-xl font-bold text-white mb-3">Quick Response</h3>
// 								<p className="text-gray-300 leading-relaxed">Fast booking and same-day service availability for urgent repairs</p>
// 							</div>

// 							{/* Feature 6 */}
// 							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
// 								<div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
// 									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
// 									</svg>
// 								</div>
// 								<h3 className="text-xl font-bold text-white mb-3">Quality Work</h3>
// 								<p className="text-gray-300 leading-relaxed">Skilled technicians delivering exceptional results with modern tools</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* CTA Section */}
// 				<div className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
// 					<div className="container mx-auto px-4 text-center">
// 						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
// 							Ready to Experience the Difference?
// 						</h2>
// 						<p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
// 							Join thousands of satisfied customers who trust Collibet for their home service needs.
// 						</p>
// 					</div>
// 				</div>
// 			</Layout>
// 		</>
// 	);
// }


import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";

export default function About() {
	return (
		<>
			<Head>
				<title>About Collibet | Premium Tailoring Services in Ranchi</title>
				<meta name="description" content="Collibet is Ranchi's trusted tailoring platform offering custom stitching, alterations, and designer wear. Learn about our mission to deliver perfect fits." />
			</Head>
			<Layout>
				{/* Hero Section */}
				<div className="relative min-h-screen flex flex-col overflow-hidden">
					{/* Background with Overlay */}
					<div className="absolute inset-0 z-0">
						<div className="h-1/2 md:block hidden relative">
							<Image
								width={500}
								height={500}
								src="https://res.cloudinary.com/dor3gao8l/image/upload/v1713943536/COLLIBET%20HOME%20SERVICES/office-620817_1280_22_n4hywv.jpg"
								alt="Collibet Tailoring Studio"
								className="object-cover w-full h-full"
							/>
							<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
						</div>
						<div className="h-1/2 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
					</div>

					{/* Mobile Background */}
					<div className="md:hidden absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100">
						<div className="absolute inset-0 opacity-10">
							<div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
							<div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
						</div>
					</div>

					{/* Content Card */}
					<div className="relative z-10 flex items-center justify-center min-h-screen px-4">
						<div className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-white/20 transform hover:scale-105 transition-all duration-500">
							{/* Decorative Elements */}
							<div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-80"></div>
							<div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-60"></div>
							
							{/* Header */}
							<div className="text-center mb-8">
								<div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-4 border border-amber-200">
									<span className="text-amber-700 font-semibold text-sm tracking-wide uppercase">Our Story</span>
								</div>
								<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
									About Us
								</h1>
								<div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
							</div>

							{/* Content */}
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-light max-w-3xl mx-auto">
								Welcome to <span className="font-semibold text-amber-600">Collibet</span>, your trusted partner for all your tailoring
								and clothing alteration needs. With years of experience and a commitment to
								excellence, we take pride in delivering perfectly fitted garments and
								exceptional craftsmanship to customers like you.
							</p>

							{/* Stats or Features */}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
								<div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
									<div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
									<h3 className="font-semibold text-gray-800">Quick Turnaround</h3>
									<p className="text-sm text-gray-600 mt-1">Fast stitching service</p>
								</div>
								<div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
									<div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
									<h3 className="font-semibold text-gray-800">Perfect Fit</h3>
									<p className="text-sm text-gray-600 mt-1">Precise measurements</p>
								</div>
								<div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
									<div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
										</svg>
									</div>
									<h3 className="font-semibold text-gray-800">Fair Pricing</h3>
									<p className="text-sm text-gray-600 mt-1">Transparent costs</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Mission & Services Section */}
				<div className="relative bg-gradient-to-br from-gray-50 to-white py-20">
					{/* Background Pattern */}
					<div className="absolute inset-0 opacity-5">
						<div className="absolute top-20 right-20 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl"></div>
						<div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl"></div>
					</div>

					<div className="container mx-auto px-4 relative z-10">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
							{/* Mission Card */}
							<div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
								<div className="text-center mb-6">
									<div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
										<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
										</svg>
									</div>
									<h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
									<div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
								</div>
								<p className="text-lg text-gray-600 leading-relaxed text-center">
									At Collibet, our mission is to provide exceptional tailoring
									services that enhance your style, confidence, and
									comfort. We strive to exceed customer expectations by offering
									precise fitting, quality craftsmanship, and
									personalized solutions tailored to your unique measurements and preferences.
								</p>
								<div className="mt-6 flex justify-center">
									<div className="flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
										<span className="text-amber-600 font-medium text-sm">Craftsmanship Excellence</span>
										<div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
									</div>
								</div>
							</div>

							{/* Services Card */}
							<div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
								<div className="text-center mb-6">
									<div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
										<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
										</svg>
									</div>
									<h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
									<div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
								</div>
								<p className="text-lg text-gray-600 leading-relaxed text-center">
									We offer a comprehensive range of tailoring services to address
									all your clothing needs. From custom stitching and alterations
									to designer blouse making and suit fitting, our skilled
									tailors are trained to handle it all. We understand the
									importance of a perfect fit, and our goal is to
									ensure every garment complements your body perfectly.
								</p>
								<div className="mt-6 flex justify-center">
									<div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
										<span className="text-blue-600 font-medium text-sm">Complete Tailoring</span>
										<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Why Choose Us Section */}
				<div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 relative overflow-hidden">
					{/* Background Effects */}
					<div className="absolute inset-0 opacity-10">
						<div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
						<div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
					</div>

					<div className="container mx-auto px-4 relative z-10">
						<div className="text-center mb-16">
							<div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
								<span className="text-amber-400 font-semibold text-sm tracking-wide uppercase">Our Advantage</span>
							</div>
							<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Why Choose <span className="text-amber-400">Us?</span>
							</h1>
							<div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
							<p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed">
								There are several reasons why customers trust Collibet for their
								tailoring and alteration needs:
							</p>
						</div>

						{/* Features Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
							{/* Feature 1 */}
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
								<div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Local Experts</h3>
								<p className="text-gray-300 leading-relaxed">Deep understanding of Ranchi fashion preferences and fabric choices</p>
							</div>

							{/* Feature 2 */}
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
								<div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Quick Service</h3>
								<p className="text-gray-300 leading-relaxed">Fast turnaround times with express stitching options available</p>
							</div>

							{/* Feature 3 */}
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
								<div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Skilled Tailors</h3>
								<p className="text-gray-300 leading-relaxed">Experienced professionals trained in traditional and modern techniques</p>
							</div>

							{/* Feature 4 */}
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
								<div className="w-14 h-14 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Fair Pricing</h3>
								<p className="text-gray-300 leading-relaxed">Transparent pricing with no hidden costs or surprise charges</p>
							</div>

							{/* Feature 5 */}
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
								<div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Perfect Measurements</h3>
								<p className="text-gray-300 leading-relaxed">Precise measuring techniques ensuring ideal fit every time</p>
							</div>

							{/* Feature 6 */}
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
								<div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Quality Stitching</h3>
								<p className="text-gray-300 leading-relaxed">Premium craftsmanship with attention to every detail and finishing</p>
							</div>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Ready to Get the Perfect Fit?
						</h2>
						<p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
							Join thousands of satisfied customers who trust Collibet for their tailoring needs.
						</p>
					</div>
				</div>
			</Layout>
		</>
	);
}
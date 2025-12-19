// import { useAppContext } from "context/AuthContext";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { DiAndroid, DiApple } from "react-icons/di";

// const DownloadApp2 = () => {
// 	const { logout } = useAppContext();

// 	const handleLogout = async () => {
// 		await logout();
// 	};

// 	return (
// 		<div>
// 			<section className="bg-[#333333] ">
// 				<div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
// 					<div className="flex justify-center">
// 						<Image
// 						height={100}
// 						width={100}
// 							className="h-80 w-80 sm:w-[16rem] sm:h-[16rem] flex-shrink-0 object-cover rounded-full"
// 							src="/download.jpg"
// 							alt=""
// 						/>
// 					</div>

// 					<div className="flex flex-col items-center mt-6 xl:items-start xl:mt-0">
// 						<h2 className="text-2xl font-semibold tracking-tight text-gray-100 xl:text-3xl md:px-10">
// 							Download our free mobile app
// 						</h2>

// 						<p className="block max-w-2xl mt-4 text-gray-400 md:px-10">
// 							You can get access of all service and can track your booking
// 							status on our mobile app which is availabe on play store and app
// 							store very easily
// 						</p>

// 						<div className="mt-6 sm:-mx-2 md:px-10">
// 							<a
// 								href='https://apps.apple.com/in/app/collibet/id6471412332'
// 								target='_blank'
// 								className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-blue-400 dark:bg-bule-500 dark:hover:bg-blue-400 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
// 							>
// 								<DiApple />

// 								<span className="mx-2">Get it on the App Store</span>
// 							</a>

// 							<a
// 								href='https://play.google.com/store/apps/details?id=com.collibetv3&hl=en'
// 								target='_blank'
// 								className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-gray-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
// 							>
// 								<DiAndroid />

// 								<span className="mx-2">Get it on Play Store</span>
// 							</a>
// 						</div>
// 					</div>
// 					<div className="flex flex-row items-center mt-6 xl:items-start xl:mt-0 w-full md:w-auto">
// 						<div className="flex-1  flex flex-col px-4 md:px-0">
// 							<h4 className="text-gray-100">Links</h4>
// 							<Link
// 								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
// 								href="/"
// 							>
// 								Home
// 							</Link>
// 							<Link
// 								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
// 								href="/AboutUs"
// 							>
// 								About Us
// 							</Link>
// 							<Link
// 								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
// 								href="/ContactUs"
// 							>
// 								Contact Us
// 							</Link>
// 							{/* <Link className='text-gray-400 hover:text-white hover:underline text-sm mt-2' href="/team">Team</Link> */}
// 						</div>
// 						<div className="flex-initial flex flex-col md:ml-10 px-4 md:px-0">
// 							<h4 className="text-gray-100">Links</h4>
// 							<Link
// 								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
// 								href="/Policy"
// 							>
// 								Privacy Policy
// 							</Link>
// 							<Link
// 								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
// 								href="/Term&Condition"
// 							>
// 								Terms
// 							</Link>
// 							<Link
// 								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
// 								href="/Faq"
// 							>
// 								FAQ
// 							</Link>
// 							{/* <Link className='text-gray-400 hover:text-white hover:underline text-sm mt-2' href="/home">Help</Link> */}
// 						</div>
// 						<div className="hidden md:flex flex-initial flex-col md:ml-10">
// 							<h4 className="text-gray-100  ">Contacts</h4>
// 							<p className="text-gray-400 text-sm mt-2">+91 7260030404</p>
// 							<p className="text-gray-400 text-sm mt-2">collibet.com</p>
// 							<p
// 								onClick={handleLogout}
// 								className="text-gray-400 text-sm mt-2 cursor-pointer hover:underline"
// 							>
// 								Log Out
// 							</p>
// 						</div>
// 					</div>

// 					<div className="md:hidden border-b w-full my-6"></div>

// 					<div>
// 						<h4 className="text-gray-100 md:hidden">Contacts</h4>
// 					</div>
// 					<div className="md:hidden flex-initial flex flex-row justify-between items-center w-full">
// 						<p className="flex-1 text-gray-400 text-sm mt-2">+91 7260030404</p>
// 						<p className="flex-1 text-gray-400 text-sm mt-2 text-center">
// 							collibet.com
// 						</p>
// 						<p
// 							onClick={handleLogout}
// 							className="flex-1 text-gray-400 text-sm mt-2 cursor-pointer hover:underline text-right"
// 						>
// 							Log Out
// 						</p>
// 					</div>
// 				</div>
// 			</section>
// 		</div>
// 	);
// };

// export default DownloadApp2;
import { useAppContext } from "context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DiAndroid, DiApple } from "react-icons/di";
import { 
	FaInstagram, 
	FaFacebook, 
	FaLinkedin, 
	FaYoutube, 
	FaTwitter, 
	FaWhatsapp, 
	FaEnvelope 
} from "react-icons/fa";

const DownloadApp2 = () => {
	const { logout } = useAppContext();

	const handleLogout = async () => {
		await logout();
	};

	const socialLinks = [
		{ icon: FaInstagram, href: "https://www.instagram.com/collibet_services/", label: "Instagram", color: "hover:text-pink-500" },
		{ icon: FaFacebook, href: "https://www.facebook.com/people/Collibet/61552122944834/", label: "Facebook", color: "hover:text-blue-500" },
		{ icon: FaLinkedin, href: "https://www.linkedin.com/company/collibet-info-services-pvt-ltd/", label: "LinkedIn", color: "hover:text-blue-400" },
		{ icon: FaYoutube, href: "https://www.youtube.com/@CollibetPvtLtd", label: "YouTube", color: "hover:text-red-500" },
		{ icon: FaTwitter, href: "https://x.com/collibetsupport", label: "X (Twitter)", color: "hover:text-blue-400" },
		{ icon: FaWhatsapp, href: "https://wa.link/z6tz81", label: "WhatsApp", color: "hover:text-green-500" },
		{ icon: FaEnvelope, href: "mailto:Support@collibet.com", label: "Email", color: "hover:text-yellow-500" },
	];

	return (
		<div>
			<section className="bg-[#333333] ">
				<div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
					<div className="flex justify-center">
						<Image
						height={100}
						width={100}
							className="h-80 w-80 sm:w-[16rem] sm:h-[16rem] flex-shrink-0 object-cover rounded-full"
							src="/download.webp"
							alt=""
						/>
					</div>

					<div className="flex flex-col items-center mt-6 xl:items-start xl:mt-0">
						<h2 className="text-2xl font-semibold tracking-tight text-gray-100 xl:text-3xl md:px-10">
							Download our free mobile app
						</h2>

						<p className="block max-w-2xl mt-4 text-gray-400 md:px-10">
							You can get access of all service and can track your booking
							status on our mobile app which is availabe on play store and app
							store very easily
						</p>

						<div className="mt-6 sm:-mx-2 md:px-10">
							<a
								href='https://apps.apple.com/in/app/collibet/id6471412332'
								target='_blank'
								className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-blue-400 dark:bg-bule-500 dark:hover:bg-blue-400 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
							>
								<DiApple />

								<span className="mx-2">Get it on the App Store</span>
							</a>

							<a
								href='https://play.google.com/store/apps/details?id=com.collibetv3&hl=en'
								target='_blank'
								className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-gray-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
							>
								<DiAndroid />

								<span className="mx-2">Get it on Play Store</span>
							</a>
						</div>
					</div>
					<div className="flex flex-row items-center mt-6 xl:items-start xl:mt-0 w-full md:w-auto">
						<div className="flex-1  flex flex-col px-4 md:px-0">
							<h4 className="text-gray-100">Links</h4>
							<Link
								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
								href="/"
							>
								Home
							</Link>
							<Link
								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
								href="/AboutUs"
							>
								About Us
							</Link>
							<Link
								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
								href="/ContactUs"
							>
								Contact Us
							</Link>
							{/* <Link className='text-gray-400 hover:text-white hover:underline text-sm mt-2' href="/team">Team</Link> */}
						</div>
						<div className="flex-initial flex flex-col md:ml-10 px-4 md:px-0">
							<h4 className="text-gray-100">Links</h4>
							<Link
								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
								href="/Policy"
							>
								Privacy Policy
							</Link>
							<Link
								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
								href="/Term&Condition"
							>
								Terms
							</Link>
							<Link
								className="text-gray-400 hover:text-white hover:underline text-sm mt-2"
								href="/Faq"
							>
								FAQ
							</Link>
							{/* <Link className='text-gray-400 hover:text-white hover:underline text-sm mt-2' href="/home">Help</Link> */}
						</div>
						<div className="hidden md:flex flex-initial flex-col md:ml-10">
							<h4 className="text-gray-100">Contacts</h4>
							<p className="text-gray-400 text-sm mt-2">+91 7260030404</p>
							<p className="text-gray-400 text-sm mt-2">collibet.com</p>
							<p
								onClick={handleLogout}
								className="text-gray-400 text-sm mt-2 cursor-pointer hover:underline"
							>
								Log Out
							</p>
						</div>
						<div className="hidden md:flex flex-initial flex-col md:ml-10">
							<h4 className="text-gray-100">Follow Us</h4>
							<div className="flex flex-wrap gap-3 mt-2">
								{socialLinks.map((social, index) => {
									const Icon = social.icon;
									return (
										<a
											key={index}
											href={social.href}
											target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
											rel="noopener noreferrer"
											className={`text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
											title={social.label}
										>
											<Icon size={20} />
										</a>
									);
								})}
							</div>
						</div>
					</div>

					<div className="md:hidden border-b w-full my-6"></div>

					<div className="md:hidden w-full">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h4 className="text-gray-100">Contacts</h4>
							</div>
							<div>
								<h4 className="text-gray-100">Follow Us</h4>
							</div>
						</div>
						<div className="flex justify-between items-start">
							<div className="flex flex-col space-y-2">
								<p className="text-gray-400 text-sm">+91 7260030404</p>
								<p className="text-gray-400 text-sm">collibet.com</p>
								<p
									onClick={handleLogout}
									className="text-gray-400 text-sm cursor-pointer hover:underline"
								>
									Log Out
								</p>
							</div>
							<div className="flex flex-wrap gap-3 max-w-[120px]">
								{socialLinks.map((social, index) => {
									const Icon = social.icon;
									return (
										<a
											key={index}
											href={social.href}
											target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
											rel="noopener noreferrer"
											className={`text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
											title={social.label}
										>
											<Icon size={18} />
										</a>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default DownloadApp2;
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart, HiOutlineSearch } from "react-icons/hi";
import { useAppContext } from "context/AuthContext";
import { Home } from "lucide-react";
import ApiList from "../ApiList/ApiList";
import ApiHeader from "../ApiList/ApiHeader";
import AxiosInterceptors from "../ApiList/AxiosInterceptors";
import { toast } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import { MdLocalPhone } from "react-icons/md";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setisLoading] = useState(false);
	const [showImageLogoutBtn, setshowImageLogoutBtn] = useState(false);
	const [searchBoxStatus, setsearchBoxStatus] = useState(false);
	const [searchBoxList, setsearchBoxList] = useState(null);
	const [searchValue, setsearchValue] = useState("");
	const router = useRouter();
	const { isAuthenticated, cartCount, user, setpackageDetailsRefreshCount } = useAppContext();
	const { api_searchPackages } = ApiList();

	//------------- THIS FUNCTION HANDLES LOGOUT --------------
	const handleNavigateToProfile = async () => {
		router.push("/Dashboard/profile");
	};


	//--------------  THIS FUNCTION SEARCHES THE PACKAGE LIST -------
	const funcSearchPackages = (searchText) => {
		if (searchValue?.length <= 0) return;
		setisLoading(true);
		let url = `${api_searchPackages}?page=1&query=${searchValue}`;
		AxiosInterceptors.get(url, ApiHeader())
			.then((response) => {
				console.log("after package response", response);
				if (response?.data?.error === false) {
					setsearchBoxList(response?.data?.payload?.docs);
				} else {
					toast.error(response?.data?.message);
				}
			})
			.catch((err) => {
				toast.error("Something went wrong");
			})
			.finally(() => {
				setisLoading(false);
			});
	};

	const handleChange = (e) => {
		setsearchValue(e.target.value);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	console.log("the user..", user);

	return (
		<nav className="p-2 w-100 lg:flex lg:justify-between lg:items-center">
			<div className="flex items-center justify-between">
				<Link href="/">
					<Image
						width={50}
						height={50}
						src="/collibet_logo.png"
						alt="logo"
					/>
				</Link>

				{/* ═════════════════════║ SEARCH BAR FOR SMALL AND BIG BOTH ║════════════════════════ */}
				<form
					onSubmit={(e) => {
						e.preventDefault(); 
						funcSearchPackages(); // Call the search function
					}}
					className="w-full md:w-96 flex md:bg-gray-400 justify-end items-center rounded-sm md:ml-10"
				>
					<input
						className={`hidden md:block form-control  transition-all w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-xl font-normal text-gray-700  bg-clip-padding border border-solid border-gray-400 rounded  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-xs`}
						type="text"
						name="passCode"
						value={searchValue}
						onChange={(e) => handleChange(e)}
						placeholder="search"
					/>
					<button
						className="hidden md:block h-full p-2 cursor-pointer hover:bg-black hover:text-white"
					>
						{isLoading ? (
							<span>
								{" "}
								<RotatingLines
									strokeColor="white"
									strokeWidth="5"
									animationDuration="0.75"
									width="25"
									visible={true}
								/>
							</span>
						) : (
							<HiOutlineSearch className="text-2xl" />
						)}
					</button>
					<div className="md:hidden h-full p-2 cursor-pointer">
						<HiOutlineSearch
							onClick={() => setsearchBoxStatus(!searchBoxStatus)}
							className="text-2xl"
						/>
					</div>
				</form>

				{/* ═════════════════════║ SEARCH BOX AREA FOR MOBILE ║════════════════════════ */}
				{searchBoxStatus && (
					<div className="block md:hidden absolute top-0 left-0 w-full h-auto bg-gray-300 z-50 px-4 pt-4">
						<div className="flex mb-4">
							<div className="flex-initial">Search Packages</div>
							<div className="flex-1 flex justify-end items-center">
								<button
									onClick={() => setsearchBoxStatus(!searchBoxStatus)}
									type="button"
									class=" text-red-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center pr-2"
								>
									❌
								</button>
							</div>
						</div>
						<div className="w-full md:w-96 flex md:bg-gray-400 justify-end items-center rounded-sm md:ml-10 relative">
							<input
								className={` form-control  transition-all w-full px-3 py-2 2xl:py-1.5 2xl:text-base text-md font-normal text-gray-700  bg-clip-padding border border-solid border-gray-400 rounded  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-xs`}
								type="text"
								name="passCode"
								value={searchValue}
								onChange={(e) => setsearchValue(e.target.value)}
								placeholder="search"
							/>

							<div className="absolute top-2 right-2 h-full">
								{isLoading ? (
									<RotatingLines
										strokeColor="black"
										strokeWidth="5"
										animationDuration="0.75"
										width="25"
										visible={true}
									/>
								) : (
									<HiOutlineSearch
										onClick={() => funcSearchPackages()}
										className="text-2xl"
									/>
								)}
							</div>
						</div>
						{/* SPACER */}
						<div className="mt-2"></div>
						{/* --------------- SEARCH BOX LISTING ------------ */}
						<div>
							{Array.isArray(searchBoxList) &&
								searchBoxList?.map((item) => (
									<div
										// onClick={() => router.push(`/package/${encodeURIComponent(JSON.stringify(item))}`)}
										onClick={() => {
											setsearchBoxStatus(false)
											localStorage.setItem("packageData", JSON.stringify(item));
											setpackageDetailsRefreshCount(prev => prev + 1)
											router.push(`/package/1`);
										}}
										className="flex justify-left items-center mb-2 bg-white p-2 rounded-lg"
									>
										<div className="flex-initial space-y-2">
											<div className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full overflow-hidden">
												<Image
													width={100}
													height={100}
													className="h-10 w-10 float-right cursor-pointer"
													src={item?.image}
													alt="Dan_Abromov"
												/>
											</div>
										</div>

										<div className="flex-1 ml-4">
											<div className="text-md font-semibold text-gray-800">
												{item?.title}
											</div>

											<div className="flex text-sm justify-left items-center text-gray-500">
												{item?.subtitle}
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				)}

				{/* ═════════════════════║ SEARCH BOX AREA FOR BIG SCREEN ║════════════════════════ */}
				{!searchBoxStatus && (
					<div
						className={`hidden md:block absolute top-16 left-0 w-full h-auto transition-all bg-gray-300 z-50`}
					>
						{/* SPACER */}
						{/* --------------- SEARCH BOX LISTING ------------ */}

						{Array.isArray(searchBoxList) && searchBoxList?.length !== 0 && (
							<div className="px-4">
								<div className="mt-6"></div>
								<div className="flex my-4">
									<div onClick={funcSearchPackages} className="flex-initial">
										Search Result
									</div>
									<div className="flex-1 flex justify-end items-center">
										<button
											onClick={() => setsearchBoxList(null)}
											type="button"
											class=" text-red-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center pr-2"
										>
											❌
										</button>
									</div>
								</div>
								{Array.isArray(searchBoxList) &&
									searchBoxList?.map((item) => (
										<Link key={item?._id} href={
											(item?.slug === null || !item?.slug) ?
												`/package-details?packageId=${item?._id}` :
												`/package-details?service=${item?.slug}`
										}
											className="flex justify-left items-center mb-3 cursor-pointer bg-white rounded-lg px-4 hover:bg-gray-400 group py-2"
										>
											<div className="flex-initial space-y-2">
												<div className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full overflow-hidden">
													<Image
														width={100}
														height={100}
														className="h-10 w-10 float-right cursor-pointer"
														src={item?.image}
														alt="Dan_Abromov"
													/>
												</div>
											</div>

											<div className="flex-1 ml-4">
												<div className="text-md font-semibold text-gray-800 group-hover:text-white">
													{item?.title}
												</div>

												<div className="flex justify-left items-center text-gray-500 group-hover:text-white">
													{item?.subtitle}
												</div>
											</div>
										</Link>
									))}
							</div>
						)}
					</div>
				)}

				<div className="flex md:hidden">
					{/* --------------- HIDING CART FOR MOBILE IF NOT LOGGED IN ------------ */}
					{isAuthenticated && (
						<Link href={"/Cart"}>
							<div className="relative mx-2">
								<HiShoppingCart className="inline text-gray-700 text-3xl" />
								<div className="bg-red-600 w-4 h-4 rounded-full flex justify-center items-center text-white text-xs absolute -top-2 -right-2">
									{cartCount}
								</div>
							</div>
						</Link>
					)}

					<button
						type="button"
						className="text-gray-500 px-2 py-1 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
						aria-label="toggle menu"
						onClick={toggleMenu}
					>
						{!isOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			<div
				className={`${isOpen ? "hidden" : "hidden"
					}  inset-x-0 z-20 w-full lg:px-6 py-4 transition-all duration-300 ease-in-out bg-gray-100 shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center text-md flex-wrap`}
			>
				<div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-4 lg:space-y-0 flex-wrap">
					<Link
						className="text-black font-semibold  flex justify-center items-center  duration-300 transform lg:mx-4 transition-all"
						style={{ cursor: "pointer" }}
						href="tel:7260030404"
					>
						{" "}
						<MdLocalPhone className="inline animate-pulse" /> &nbsp;+91 7260030404{" "}
					</Link>
					<Link
						className="text-gray-700  duration-300 transform lg:mx-3 border-b-2 transition-all"
						style={{ cursor: "pointer" }}
						href="/"
					>
						{" "}
						Home{" "}
					</Link>

					<Link
						className="text-gray-700  duration-300 transform lg:mx-3   border-b-2 transition-all  border-transparent hover:border-white"
						href="/services/allservice"
					>
						{" "}
						Services{" "}
					</Link>
					<Link
						className="text-gray-700  duration-300 transform lg:mx-3   border-b-2 transition-all  border-transparent hover:border-white"
						href="/offer"
					>
						{" "}
						Offer{" "}
					</Link>
					<Link
						className="text-gray-700  duration-300 transform lg:mx-3   border-b-2 transition-all  border-transparent hover:border-white"
						href="/blog"
					>
						{" "}
						Blogs{" "}
					</Link>
					<Link
						className="text-gray-700  duration-300 transform lg:mx-3   border-b-2 transition-all  border-transparent hover:border-white"
						href="/AboutUs"
					>
						{" "}
						About{" "}
					</Link>
				</div>
				{isAuthenticated ? (
					<>
						<Link
							className="text-gray-700  duration-300 transform lg:mx-4   border-b-2 transition-all border-transparent hover:border-white"
							href="/Notifications"
						>
							{" "}
							Notifications
						</Link>
						<Link href={"/Dashboard/bookings"}>
							<span
								className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-green-500 rounded-lg lg:mt-0 hover:bg-gray-700 lg:w-auto"
								style={{ marginRight: "30px" }}
							>
								{" "}
								Bookings{" "}
							</span>
						</Link>

						<Link href={"/Cart"}>
							<span className="relative mr-4">
								<HiShoppingCart className="inline text-gray-700 text-3xl" />
								<div className="bg-red-600 w-4 h-4 rounded-full flex justify-center items-center text-white text-xs absolute -top-2 right-0">
									{cartCount}
								</div>
							</span>
						</Link>

						<div className="hidden md:block relative">
							<Image
							title="View Profile"
								width={200}
								height={200}
								onClick={() => {
									handleNavigateToProfile();
								}}
								class="object-cover w-10 h-10 rounded-full border-2 border-gray-800 cursor-pointer transform hover:scale-105 inline"
								src={
									user?.userImage ||
									"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
								}
								alt=""
							/>
							{showImageLogoutBtn && (
								<div className="absolute right-0 top-10 bg-white border border-black h-10 w-32 rounded-md flex justify-center items-center">
									<span
										className="bg-gray-300 px-3 py-1 shadow-md text-xs rounded-lg cursor-pointer hover:bg-indigo-600 hover:text-white hover:shadow-xl"
										onClick={() => handleNavigateToProfile()}
									>
										Logout
									</span>
								</div>
							)}
						</div>
					</>
				) : (
					<>
						<Link href={"/login"}>
							<span
								className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-black rounded-lg lg:mt-0 hover:bg-gray-700 lg:w-auto"
								style={{ marginRight: "30px" }}
							>
								{" "}
								Login
							</span>
						</Link>
						<Link href={"/signup"}>
							<span
								className="block px-6 py-2 mt-4 text-sm text-center text-white capitalize bg-black rounded-lg lg:mt-0 hover:bg-gray-700 lg:w-auto"
								style={{ marginRight: "30px" }}
							>
								{" "}
								Sign Up
							</span>
						</Link>
					</>
				)}
			</div>
			{isOpen ? (
				<aside className=" flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto fixed top-0 left-0 bottom-0 z-50 bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
					<div className="flex justify-between items-center">
						<Link href="/">
							<Image
								width={50}
								height={50}
								src="/collibet_logo.png"
								alt="logo"
							/>
						</Link>
						<Link href="tel:7260030404" className="font-semibold text-indigo-500"><MdLocalPhone className="inline animate-pulse" /> &nbsp;+91 7260030404{" "}	</Link>
					</div>

					<div className="flex flex-col justify-between flex-1 mt-6">
						<nav>
							<Link
								class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
								style={{ cursor: "pointer" }}
								href="/"
							>
								{" "}
								<Home className="w-5 h-5 mr-4" /> Home{" "}
							</Link>
							<Link
								class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								href="/services/allservice"
							>
								<svg
									class="w-5 h-5"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>

								<span class="mx-4 font-medium">Services</span>
							</Link>
							<Link
								class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								href="/offer"
							>
								<svg
									class="w-5 h-5"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>

								<span class="mx-4 font-medium">Offers</span>
							</Link>
							{isAuthenticated && (
								<Link
									class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									href="/Dashboard/profile"
								>
									<svg
										class="w-5 h-5"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>

									<span class="mx-4 font-medium">Profile</span>
								</Link>
							)}

							<Link
								class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								href="/AboutUs"
							>
								<svg
									class="w-5 h-5"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>

								<span class="mx-4 font-medium">About</span>
							</Link>
							{/* <Link
								class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								href="/ContactUs"
							>
								<svg
									class="w-5 h-5"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>

								<span class="mx-4 font-medium">Contact</span>
							</Link> */}
							{isAuthenticated && (
								<Link
									class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									href="/Dashboard/bookings"
								>
									<svg
										class="w-5 h-5"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>

									<span class="mx-4 font-medium">Bookings</span>
								</Link>
							)}
							{isAuthenticated && (
								<Link
									class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
									href="/Notifications"
								>
									<svg
										class="w-5 h-5"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>

									<span class="mx-4 font-medium">Notifications</span>
								</Link>
							)}

							<hr class="my-2 border-gray-200 dark:border-gray-600" />
							{isAuthenticated && (
								<div
									class="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-red-400 rounded-lg lg:mt-0 hover:bg-gray-700 lg:w-auto"
									onClick={() => handleNavigateToProfile()}
								>
									<span class="mx-4 font-medium">Logout</span>
								</div>
							)}
							{!isAuthenticated && (
								<div
									class="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-black rounded-lg lg:mt-0 hover:bg-gray-700 lg:w-auto"
									onClick={() => router.push("/login")}
								>
									<span class="mx-4 font-medium">Login</span>
								</div>
							)}
							{!isAuthenticated && (
								<div
									class="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-black rounded-lg lg:mt-0 hover:bg-gray-700 lg:w-auto"
									onClick={() => router.push("/signup")}
								>
									<span class="mx-4 font-medium">Sign Up</span>
								</div>
							)}
						</nav>

						<span href="#" class="flex items-center px-4 -mx-2">
							<Image
								width={100}
								height={100}
								class="object-cover mx-2 rounded-full h-9 w-9"
								src={user?.userImage}
								alt="avatar"
							/>
							<span class="mx-2 text-gray-800 dark:text-gray-200 font-semibold w-20 truncate">
								{user?.name &&
									(user?.name?.length <= 5
										? user?.name
										: `${user?.name.substring(0, 5)}..`)}
							</span>
						</span>
					</div>
				</aside>
			) : null}
		</nav>
	);
};

export default Header;

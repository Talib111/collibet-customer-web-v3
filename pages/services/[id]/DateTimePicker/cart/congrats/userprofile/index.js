import React, { useState } from "react";
import Avatar from "@/components/service/Avatar";
import Inputfield from "@/components/userprofile/Inputfield";
import Layout from "@/components/Layout/Layout";
import Booking from "@/components/userprofile/Booking";
import Wallet from "@/components/userprofile/Wallet";

const menuItems = [
	{ id: "Details", icon: "user", text: "Details" },
	{ id: "Wallet", icon: "wallet", text: "Wallet" },
	{ id: "Booking", icon: "book", text: "Booking" },
];

const Dashboard = () => {
	const [activeNavItem, setActiveNavItem] = useState("Details");

	const handleNavItemClick = (navItem) => {
		setActiveNavItem(navItem);
	};

	return (
		<Layout>
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<div className="flex flex-col md:flex-row w-4/5 md:w-3/5 lg:w-4/5 h-full bg-white shadow-md rounded-lg overflow-hidden">
					{/* Left-side Menu */}
					<div className="leftside-menu flex flex-col md:w-1/3 bg-gray-200 shadow-2xl glassy-service">
						<Avatar />
						<hr className="h-px my-6 bg-gray-400 border-none dark:bg-gray-700" />

						<nav className="flex flex-col items-center justify-center mt-10 md:mt-20">
							{/* Nav items */}
							{menuItems.map((item) => (
								<NavItem
									key={item.id}
									active={activeNavItem === item.id}
									onClick={() => handleNavItemClick(item.id)}
								>
									<div className="text-lg ml-2 flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6 mr-2"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d={
													item.icon === "user"
														? "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
														: item.icon === "wallet"
														? "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
														: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
												}
											/>
										</svg>
										<span>{item.text}</span>
									</div>
								</NavItem>
							))}
						</nav>

						<nav className="flex flex-col items-center justify-center mt-10 md:mt-20">
							<NavItem>
								<div className="text-lg ml-2 flex">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6 mr-2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
										/>
									</svg>
									<hr className="h-px my-6 bg-gray-400 border-none dark:bg-gray-700" />
									Logout
								</div>
							</NavItem>
						</nav>
					</div>

					<div className="flex flex-col md:w-4/5 p-1 md:p-8 items-center justify-center">
						{activeNavItem === "Details" && <Inputfield />}

						{activeNavItem === "Booking" && <Booking />}
						{activeNavItem === "Wallet" && <Wallet />}
					</div>
				</div>
			</div>
		</Layout>
	);
};

const NavItem = ({ children, active, onClick }) => {
	return (
		<div
			className={`w-full px-6 py-4 text-gray-700 text-sm font-semibold uppercase tracking-wide cursor-pointer hover:bg-white ${
				active ? "bg-white text-green-300" : ""
			}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default Dashboard;

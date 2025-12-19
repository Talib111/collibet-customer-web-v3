import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/Dashboard.module.css"; // Import your CSS module
import { useRouter } from "next/router";
import Image from "next/image";
import { Contact2, Wallet, BookDown, LogOut } from "lucide-react";
import BookingSection from "./BookingSection";
import { toast } from "react-toastify";
import { useAppContext } from "context/AuthContext";

const Dashboard = () => {
	const router = useRouter();

	const { logout, user, updateProfile } = useAppContext();

	const handleLogout = async () => {
		await logout();
	};

	const [flag, setFlag] = useState(0);
	const [userData, setUserData] = useState(user);

	const handleInputChange = (event) => {
		const { name, value, type } = event.target;
		if (type === "radio") {
			setUserData((prevValues) => ({
				...prevValues,
				[name]: value,
			}));
		} else {
			setUserData((prevValues) => ({
				...prevValues,
				[name]: value,
			}));
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const { name, address, email, pinCode, gender } = userData;
			await updateProfile(name, address, email, pinCode, gender);
		} catch (error) {
			toast.error(error || "Something went Wrong");
		}
	};

	const [isUpperSectionOpen, setIsUpperSectionOpen] = useState(false);

	const toggleUpperSection = () => {
		setIsUpperSectionOpen(!isUpperSectionOpen);
	};

	

	return (
		<div style={{ backgroundColor: "#D0D0D0" }}>
			<div className={styles.db_container_main}>
				<div className={styles.db_sub_container_1}>
					<div
						className={`${styles.hamburger} ${isUpperSectionOpen ? styles.open : ""
							}`}
						onClick={toggleUpperSection}
					>
						<div className={styles.hamburger_line}></div>
						<div className={styles.hamburger_line}></div>
						<div className={styles.hamburger_line}></div>
					</div>
					<div
						className={`${styles.upper_section} ${isUpperSectionOpen ? styles.open : ""
							}`}
					>
						{/* Your upper section content goes here */}
						{/* </div> */}
						<div className={styles.db_sub_container_1_box_1}>
							<div className={styles.db_sub_container_1_box_1_img_container}>
								<Image
									src={userData?.userImage}
									alt="Image"
									width={150}
									height={100}
									className={styles.db_sub_container_1_box_1_img}
								/>
							</div>
							<div className={styles.db_sub_container_1_box_1_name_cotainer}>
								<div className={styles.db_sub_container_1_box_1_name}>
									<p className={styles.db_sub_container_1_box_1_name_p1}>
										{userData?.name}
									</p>
									<p className={styles.db_sub_container_1_box_1_name_p2}>
										{userData?.mobileNumber}
									</p>
									<p className={styles.db_sub_container_1_box_1_name_p2}>
										{userData?.email}
									</p>
								</div>
								<div className={styles.db_sub_container_1_box_1_name}>
									<p className={styles.db_sub_container_1_box_1_name_p3}>
										Edit Image
									</p>
								</div>
							</div>
						</div>
						<div className={styles.db_sub_container_1_box_2}>
							<button
								onClick={() => {
									setFlag(0)
									setIsUpperSectionOpen(!isUpperSectionOpen);
								}}
								className={`${styles.db_sub_container_1_box_2_btn} ${flag === 0 ? styles.db_sub_container_1_box_2_btn_active : ""
									}`}
							>
								<Contact2
									style={{
										marginTop: "-4px",
										width: "32px",
										height: "32px",
										marginRight: "10px",
									}}
								/>
								Edit Profile
							</button>
							<button
								onClick={() => {
									setFlag(1)
									setIsUpperSectionOpen(!isUpperSectionOpen);
								}}
								className={`${styles.db_sub_container_1_box_2_btn} ${flag === 1 ? styles.db_sub_container_1_box_2_btn_active : ""
									}`}
							>
								<Wallet
									style={{
										marginTop: "-4px",
										width: "32px",
										height: "32px",
										marginRight: "20px",
									}}
								/>{" "}
								Payments
							</button>
							<button
								onClick={() => {
									setFlag(2)
									setIsUpperSectionOpen(!isUpperSectionOpen);
								}}
								className={`${styles.db_sub_container_1_box_2_btn} ${flag === 2 ? styles.db_sub_container_1_box_2_btn_active : ""
									}`}
							>
								<BookDown
									style={{
										marginTop: "-4px",
										width: "32px",
										height: "32px",
										marginRight: "30px",
									}}
								/>{" "}
								Booking
							</button>
						</div>
						<div className={styles.db_sub_container_1_box_3}>
							{/* {isAuthenticated && <button */}
							{<button
								className={styles.db_sub_container_1_box_3_btn}
								onClick={handleLogout}
							>
								<LogOut
									style={{
										marginTop: "-4px",
										width: "32px",
										height: "32px",
										marginRight: "15px",
									}}
								/>
								LogOut
							</button>}

						</div>
					</div>
				</div>
				{flag === 0 ? (
					<div className={styles.db_sub_container_2}>
						<div className={styles.db_sub_container_2_form_container}>
							<div className={styles.db_sub_container_2_input_container}>
								<label
									className={styles.db_sub_container_2_input_label}
									htmlFor="firstName"
								>
									Name
								</label>
								<input
									className={styles.db_sub_container_2_input}
									type="text"
									name="name"
									value={userData?.name || ""}
									onChange={handleInputChange}
								/>
								<div className={styles.underline}></div>
							</div>
							<div className={styles.db_sub_container_2_input_container}>
								<label
									className={styles.db_sub_container_2_input_label}
									htmlFor="lastName"
								>
									Email
								</label>
								<input
									className={styles.db_sub_container_2_input}
									type="email"
									name="email"
									value={userData?.email || ""}
									onChange={handleInputChange}
								/>
								<div className={styles.underline}></div>
							</div>
							<div className={styles.db_sub_container_2_input_container}>
								<label
									className={styles.db_sub_container_2_input_label}
									htmlFor="address"
								>
									Address
								</label>
								<textarea
									className={styles.db_sub_container_2_textarea}
									type="text"
									name="address"
									value={userData?.address || ""}
									onChange={handleInputChange}
								></textarea>
								<div className={styles.underline}></div>
							</div>
							<div className={styles.db_sub_container_2_input_container}>
								<label
									className={styles.db_sub_container_2_input_label}
									htmlFor="lastName"
								>
									Pin Code
								</label>
								<input
									className={styles.db_sub_container_2_input}
									type="number"
									name="pinCode"
									value={userData?.pinCode || ""}
									onChange={handleInputChange}
								/>
								<div className={styles.underline}></div>
							</div>
							<div className={styles.db_sub_container_2_input_container}>
								<label className={styles.db_sub_container_2_input_label}>
									Gender
								</label>
								<div className={styles.radio_container}>
									<label className={styles.radio_label}>
										<input
											type="radio"
											name="gender"
											value="male"
											checked={userData.gender === "male"}
											onChange={handleInputChange}
											className={styles.radio_input}
										/>
										<span className={styles.radio_custom}></span> Male
									</label>
									<label className={styles.radio_label}>
										<input
											type="radio"
											name="gender"
											value="female"
											checked={userData.gender === "female"}
											onChange={handleInputChange}
											className={styles.radio_input}
										/>
										<span className={styles.radio_custom}></span> Female
									</label>
									<label className={styles.radio_label}>
										<input
											type="radio"
											name="gender"
											value="other"
											checked={userData.gender === "other"}
											onChange={handleInputChange}
											className={styles.radio_input}
										/>
										<span className={styles.radio_custom}></span> Other
									</label>
								</div>
							</div>
							<div className={styles.submit_button_container}>
								<button
									className={styles.submit_button}
									type="submit"
									onClick={handleSubmit}
								>
									Submit
								</button>
							</div>
						</div>
					</div>
				) : flag === 1 ? (
					<div className={styles.db_sub_container_3}>
						<h1>Nothing here !!!</h1>
					</div>
				) : (
					<div className={styles.db_sub_container_3}>
						{userData.bookings === 0 ? (
							<p>You haven&apos;t booked anything till now!!!</p>
						) : (
							<BookingSection />
						)}

						{/* <h1>Nothing here !!!</h1> */}
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import { toast } from "react-toastify";
import { AuthGuard } from "guard";
import ApiList from "@/components/ApiList/ApiList";
import DayTimePicker from "@/components/DayTimePicker";
import moment from "moment";
function StaticDateTimePickerLandscape() {
	const { api_cartAdd } = ApiList();

	const router = useRouter();
	const { id, PackageId } = router.query;

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (!localStorage.getItem("token")) {
				router.push("/signup");
			}
		}
	}, []);

	const [isScheduling, setIsScheduling] = useState(false);
	const [isScheduled, setIsScheduled] = useState(false);
	const [scheduleErr, setScheduleErr] = useState("");

	const handleBookNow = async (dateTime, selectedTime, currentMobileNo, currentLandmark, currentAddress) => {
		setIsScheduling(true);
		try {
			const response = await fetch(api_cartAdd, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify({
					packageId: PackageId,
					categoryId: id,
					selectedDate: moment(dateTime).toISOString(),
					selectedTime: selectedTime,
					currentMobileNo,
					currentLandmark,
					currentAddress,
				}),
			});

			if (response.ok) {
				console.log("Data successfully sent to API.");
				toast.success("Data successfully added to cart.");
				setIsScheduled(true);
				router.push("/Cart");
			} else {
				console.error("Failed to send data to API.");
				setIsScheduling(false);
			}
		} catch (error) {
			console.error("Error:", error);
			setScheduleErr(JSON.stringify(error));
		}

	};


	return (
		<AuthGuard>
			<Layout>
				<div className="w-full bg-white">
					<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
						<div className="inline-flex items-center space-x-2">
							<span className="font-bold text-2xl">Appointment</span>
						</div>
						<div className="grow items-start">
							<ul className="ml-12 inline-flex space-x-8">
								<a
									className="text-sm font-semibold cursor-pointer text-gray-800 hover:text-gray-900"
									onClick={() => router.back()}
								>
									Go Back |
								</a>
							</ul>
						</div>
					</div>
				</div>

				<h1 className="text-4xl sm:text-3xl font-bold m-5 text-center">
					Select a{" "}
					<span className="text-4xl sm:text-3xl font-bold text-green-800">
						Date
					</span>{" "}
					and{" "}
					<span className="text-4xl sm:text-3xl font-bold text-red-800">
						Time
					</span>
				</h1>

				<DayTimePicker
					onConfirm={handleBookNow}
					isScheduling={isScheduling}
					isScheduled={isScheduled}
				/>
			</Layout>
		</AuthGuard>
	);
}

export default StaticDateTimePickerLandscape;

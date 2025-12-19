import React, { useState } from "react";
import { useRouter } from "next/router";
import {
	RESCHEDULE_BOOKING_API,
	SOMETHING_WENT_WRONG,
} from "../../../../utils/constants";
import Layout from "@/components/Layout/Layout";
import moment from "moment";

import axiosInstance from "utils/axios";
import { toast } from "react-toastify";
import DayTimePicker from "@/components/DayTimePicker";

function StaticDateTimePickerLandscape({ serviceId }) {
	const router = useRouter();

	const [isScheduling, setIsScheduling] = useState(false);
	const [isScheduled, setIsScheduled] = useState(false);
	const [scheduleErr, setScheduleErr] = useState("");

	const handleBookNow = async (dateTime, selectedTime, currentMobileNo, currentLandmark, currentAddress) => {
		setIsScheduling(true);
		try {
			const { data } = await axiosInstance.post(RESCHEDULE_BOOKING_API, {
				selectedDate: moment(dateTime).toISOString(),
				selectedTime: selectedTime,
				cartId: serviceId,
				currentMobileNo,
				currentLandmark,
				currentAddress,
			});
			if (data?.error)
				return toast.error(data?.message || SOMETHING_WENT_WRONG);
			console.log({
				data: data,
			});
			setIsScheduled(true);
			toast.success("Rescheduled successfully!");
			router.push("/Dashboard/bookings");
		} catch (error) {
			console.error("Error:", error);
			setScheduleErr(JSON.stringify(error));
		}

	};


	return (
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

			<div>
				<DayTimePicker
					onConfirm={handleBookNow}
					isScheduling={isScheduling}
					isScheduled={isScheduled}
				/>
			</div>
		</Layout>
	);
}

export const getServerSideProps = async (context) => {
	const { id } = context.params;
	return {
		props: {
			serviceId: id,
		},
	};
};

export default StaticDateTimePickerLandscape;

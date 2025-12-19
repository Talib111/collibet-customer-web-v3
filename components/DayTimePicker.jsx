import { useEffect, useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Calendar, ChevronLeftIcon } from "lucide-react";
import moment from "moment";
import Loading from "@/blocks/Loading";
import ApiList from "./ApiList/ApiList";
import ApiHeader from "./ApiList/ApiHeader";
import AxiosInterceptors from "./ApiList/AxiosInterceptors";
import { useAppContext } from "context/AuthContext";
import { allowCharacterNumberSpaceCommaInput, allowNumberInput } from "./Snippets/PowerupFunctions";

export default function DayTimePicker({
	onConfirm,
	isScheduling,
	isScheduled,
}) {
	const { user } = useAppContext();
	const [selected, setSelected] = useState();
	const [selectedTime, setSelectedTime] = useState("");
	const [timeConfig, settimeConfig] = useState(null);
	const [timeSlots, setTimeSlots] = useState([]);
	const [currentMobileNo, setcurrentMobileNo] = useState(user?.mobileNumber)
	const [currentLandmark, setcurrentLandmark] = useState(user?.landmark)
	const [currentAddress, setcurrentAddress] = useState(user?.address)
	const { api_getAllSlots } = ApiList()
	const handleTimeChange = (event) => {
		const selectedValue = event.target.value;
		setSelectedTime(selectedValue);
	};




	useEffect(() => {
		// Function to generate time slots
		const generateTimeSlots = () => {
			const now = new Date();
			const selectedDate = selected || now;
			const isToday = format(selectedDate, "yyyy-MM-dd") === format(now, "yyyy-MM-dd");
			const currentTime = isToday ? now.getHours() * 60 + now.getMinutes() : 0;

			// Calculate nearest 90 minutes from the current time for today
			const nearestNinetyMinutes = isToday ? Math.ceil((currentTime + 90) / 30) * 30 : 0;
			const startTime = nearestNinetyMinutes < 24 * 60 ? nearestNinetyMinutes : 0; // Ensure it doesn't exceed end time
			const endTime = 24 * 60; // End time for the day
			const slots = [];

			for (let i = startTime; i < endTime; i += 30) {
				const hours = Math.floor(i / 60);
				const minutes = i % 60;
				const timeString = `${hours}:${minutes === 0 ? "00" : minutes}`;

				const slot = {
					value: timeString,
					label: timeString,
					disabled: i < currentTime && isToday,
				};
				slots.push(slot);
			}

			setTimeSlots(slots);
		};

		// Initialize time slots
		generateTimeSlots();
	}, [selected]);


	// ══════════════════════════════║ THIS FUNCTION FETCHES THE TIME CONFIG ║═══════════════════════════════════
	const fetchTimeSlots = () => {
		AxiosInterceptors.get(api_getAllSlots, ApiHeader())
			.then(function (response) {
				if (response?.data?.error === false) {
					settimeConfig(response?.data?.data?.docs)
				}
			})
			.catch(function (error) {
				console.log('==2 error list...', error)
			}).finally(() => {
			})
	}

	useEffect(() => {
		fetchTimeSlots()
	}, [])



	const TimePicker = () => {
		return (
			<div className="w-full mx-2 md:mx-20 bg-white p-6 rounded-md shadow-md">
				<div
					className="flex flex-row cursor-pointer mb-4 justify-start items-center"
					onClick={() => setSelected(null)}
				>
					<ChevronLeftIcon color="black" size={"18"} className="mr-4" />
					Go Back
				</div>
				<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-1">

					{timeSlots
						.filter(slot => {
							const [hours, minutes] = slot.value.split(":").map(Number);
							const totalMinutes = hours * 60 + minutes;
							return totalMinutes >= 9 * 60 && totalMinutes <= 18 * 60;
						})
						.map((slot) => (
							<button
								key={slot.value}
								className={`p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${slot.disabled
									? "bg-gray-300 cursor-not-allowed"
									: "bg-white hover:bg-blue-100"
									}`}
								onClick={() =>
									handleTimeChange({ target: { value: slot.value } })
								}
								disabled={slot.disabled}
							>
								{moment(slot.label, "HH:mm").format("h:mm A")}
							</button>
						))}
				</div>
			</div>
		);
	};

	let footer = <p></p>;
	if (selected) {
		footer = (
			<div className="bg-purple-300 flex justify-center align-center text-white">
				You had selected {format(selected, "PP")},
			</div>
		);
	}

	if (isScheduling) {
		return (
			<div className="w-full flex justify-center items-center">
				<Loading />
			</div>
		);
	}

	if (isScheduled)
		return (
			<div className="bg-purple-300 flex justify-center align-center shadow-lg">
				Your booking is confirmed at {moment(selected).format("DD/MM/YYYY")} at{" "}
				{selectedTime}
			</div>
		);
	if (selectedTime)
		return (
			<div className="bg-white flex-col h-auto mx-2 md:mx-20 my-20 mt-10 flex justify-center align-center shadow-lg">

				<h6 className="text-center text-xl font-semibold">
					<Calendar className="inline" size={40} /> Confirm Booking at{" "}
					<span className="text-blue-500">
						{moment(selected).format("DD/MM/YYYY")}
					</span>{" "}
					at{" "}
					<span className="text-blue-500">
						{moment(selectedTime, "HH:mm").format("h:mm A")}
					</span>
				</h6>

				<div className="flex justify-center items-center flex-col gap-1  w-1/2 mx-auto mt-4">
					<div className="text-left w-full font-semibold text-sm text-gray-500">Current Mobile No.</div>
					<input
						className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						type="text"
						name="address"
						value={currentMobileNo}
						onChange={(e) => {
							setcurrentMobileNo(allowNumberInput(e.target.value, currentMobileNo, 10))
						}}
					/>
				</div>
				<div className="flex justify-center items-center flex-col gap-1  w-1/2 mx-auto mt-4">
					<div className="text-left w-full font-semibold text-sm text-gray-500">Current Landmark.</div>
					<input
						className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						type="text"
						name="address"
						value={currentLandmark}
						onChange={(e) => {
							setcurrentLandmark(allowCharacterNumberSpaceCommaInput(e.target.value, currentLandmark, 50))
						}}
					/>
				</div>
				<div className="flex justify-center items-center flex-col gap-1  w-1/2 mx-auto mt-4">
					<div className="text-left w-full font-semibold text-sm text-gray-500">Current Address</div>
					<textarea
						className="w-full   px-3 py-2 text-gray-700 border-2 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
						type="text"
						name="address"
						value={currentAddress}
						onChange={(e) => {
							setcurrentAddress(allowCharacterNumberSpaceCommaInput(e.target.value, currentAddress, 200))
						}}
						placeholder="eg: abc colony, ranchi"
						rows={4}
					></textarea>
				</div>

				<div className="text-center mt-10 mb-10">
					<button
						onClick={() => onConfirm(selected, selectedTime, currentMobileNo, currentLandmark, currentAddress)}
						class="group relative w-64 inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
					>
						<span class="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

						<span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
							Confirm Booking
						</span>
					</button>
				</div>
			</div>
		);
	return (
		<div className="flex justify-center align-center md:mx-20">
			{!selected ? (
				<DayPicker
					mode="single"
					selected={selected}
					onSelect={(date) =>
						moment(date).isBefore(new Date(), 'day')
							? alert("Please select today or future date")
							: setSelected(date)
					}
					footer={footer}
				/>
			) : (
				<TimePicker />
			)}
		</div>
	);
}

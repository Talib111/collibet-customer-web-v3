import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SuggestionBot = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [selectedQuestion, setSelectedQuestion] = useState(null);

	const togglePopup = () => {
		console.log("working here");
		setShowPopup(!showPopup);
		// setSelectedQuestion(null); // Reset selected question when closing the popup
	};

	const questionsAndAnswers = {
		"How to book any service?": <div>👉🏽Step-1 :  Login to the collibet website or signup if not registered.<br></br>👉🏽Step-2 : Click any category to explore. <br></br>👉🏽Step-3 : Click desired service to book.<br></br>👉🏽Step-4 : Select date and time. <br></br>👉🏽Step-5 : Pay service fee online or select COD option.</div>,
		"How to track any service?": <div>👉🏽Step-1 :  Login to the collibet website.<br></br>👉🏽Step-2 : Click on bookings. <br></br>👉🏽Step-3 : Click the service you want to track from the list.<br></br>👉🏽Step-4 : View your service status there.</div>,
		"How to cancel a service?": <div>👉🏽Step-1 :  Login to the collibet website.<br></br>👉🏽Step-2 : Click on bookings. <br></br>👉🏽Step-3 : Click the service you want to cancel.<br></br>👉🏽Step-4 : Click the cancel button to cancel the service.</div>,
		"How to Re-Schedule a service?": <div>👉🏽Step-1 :  Login to the collibet website.<br></br>👉🏽Step-2 : Click on bookings. <br></br>👉🏽Step-3 : Click the service you want to reschedule.<br></br>👉🏽Step-4 : Click on reschedule button.<br></br>👉🏽Step-5 : Select new date and time.</div>,
	};

	const questions = Object.keys(questionsAndAnswers);

	const handleQuestionClick = (question) => {
		setSelectedQuestion(question);
	};

	return (
		<div
			className={`fixed bottom-20 right-20 md:bottom-36 md:right-36 z-50 ${
				selectedQuestion && showPopup && "top-20"
			}`}
		>
			{/* ══════════════════════════════║ THIS IS CHATBOT BUTTON ║═══════════════════════════════════ */}
			{!showPopup && (
				<button
					onClick={() => togglePopup()}
					className="absolute top-0 left-0 bg-gradient-to-r from-gray-300 to-gray-400 w-12 h-12 md:w-16 md:h-16  rounded-full flex justify-center items-center border shadow-3xl p-2 transform hover:scale-110 cursor-pointer"
				>
					<Image
						className="h-auto"
						src="/Images/robot.png"
						alt="robot"
						width={40}
						height={40}
					/>
				</button>
			)}

			{/* {showPopup && ( */}
			<div
				className={`relative ${
					showPopup ? "h-auto w-[80vw] md:w-[35vw] p-4 py-10" : "h-0 w-0"
				}  bg-white shadow-md  rounded-md transition-all overflow-hidden duration-500 mx-auto -right-10 overflow-y-auto`}
			>
				<button
					onClick={() => togglePopup()}
					className="absolute top-4 right-4"
				>
					X
				</button>
				{selectedQuestion ? (
					<div className="w-[78vw] md:w-[32vw]">
						<h2 className="text-lg font-bold">{selectedQuestion}</h2>
						<p  className="leading-8">{questionsAndAnswers[selectedQuestion]}</p>
						<button
							onClick={() => setSelectedQuestion(null)}
							className="mt-4 bg-blue-500 text-white px-3 py-1 rounded-md"
						>
							<AiOutlineArrowLeft className="inline text-white text-lg" /> Back
						</button>
					</div>
				) : (
					<div className="w-[78vw] md:w-[32vw] overflow-hidden">
						<div className="flex">
							{" "}
							<Image
								className="h-auto"
								src="/Images/robot.png"
								alt="robot"
								width={24}
								height={16}
							/>
							<h2 className="text-lg font-bold ml-4">How may i help you ?</h2>
						</div>
						<ul className="mt-2 ml-8">
							{questions.map((question, index) => (
								<li
									key={index}
									onClick={() => handleQuestionClick(question)}
									className="cursor-pointer hover:text-blue-500 mb-2"
								>
									{index + 1}. {question} 👆
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			{/* )} */}
		</div>
	);
};

export default SuggestionBot;

import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ADD_REVIEW_API, SOMETHING_WENT_WRONG } from "utils/constants";
import axiosInstance from "utils/axios";
import Rating from "react-rating";
import {  StarIcon } from "lucide-react";

const FeedbackModal = () => {
	const router = useRouter();
	const [Data, setData] = useState(null);
	const [title, settitle] = useState("");
	const [description, setdescription] = useState("");
	const [employeeRating, setemployeeRating] = useState(4);
	const [serviceRating, setserviceRating] = useState(4);
	useEffect(() => {
		if (router?.query?.Data) setData(JSON.parse(router?.query?.Data));
	}, [router?.query]);

	const handleSubmit = async () => {
		try {
			console.log({ Data });
			const { data } = await axiosInstance.post(ADD_REVIEW_API, {
				title,
				description,
				employeeRating,
				serviceRating,
				packageId: Data?.packageId,
				employeeId: Data?.employeeId,
				serviceId: Data?.serviceId,
				categoryId: Data?.categoryId,
			});
			if (data?.error)
				return toast.error(data?.message || SOMETHING_WENT_WRONG);
			console.log({
				data: data,
			});
			router.push("/Thankyou");
			return;
		} catch (error) {
			console.log({ error });
			toast.success(error?.response?.message || SOMETHING_WENT_WRONG);
		} finally {
		}
	};
	return (
			<section className="py-10 ">
				<div className="mx-auto max-w-4xl bg-white shadow-xl glassy-service p-10">
					<main className="flex justify-center items-center flex-col py-6">
						<div className="card-layout layout-medium bg-white border border-gray-400 shadow-lg rounded-lg w-full mx-4 my-8">
							<div className="content flex justify-center items-center flex-col p-8">
								<h1 className="title font-bold text-2xl text-gray-800">
									Give feedback
								</h1>
								<p className="text-center text-gray-800">
									Please Rate Employee
								</p>

								<div className="emojis flex justify-center items-center  mt-4">
									<Rating
										initialRating={4}
										onChange={(rating) => {
											console.log({ rating });
											setemployeeRating(rating);
										}}
										key={"123"}
										emptySymbol={
											<StarIcon href="#icon-star-empty" className="icon" />
										}
										fullSymbol={
											<StarIcon
												href="#icon-star-full"
												className="icon text-yellow-500"
												fill="rgb(255, 235, 59)"
											/>
										}
									/>
								</div>
								<p className="text-center text-gray-800">Please Rate Service</p>

								<div className="emojis flex justify-center items-center  mt-4">
									<Rating
										initialRating={4}
										onChange={(rating) => {
											setserviceRating(rating);
										}}
										key={"6577656776765"}
										emptySymbol={
											<StarIcon href="#icon-star-empty" className="icon" />
										}
										fullSymbol={
											<StarIcon
												href="#icon-star-full"
												className="icon text-yellow-500"
												fill="rgb(255, 235, 59)"
											/>
										}
									/>
								</div>

								<h3 className="font-bold mt-4">
									Do you have any thoughts you’d like to share?
								</h3>
								<input
									className="w-full max-w-md p-4 border-2 border-teal-500 rounded mt-4"
									name="users-feedback"
									id="users-feedback"
									value={title}
									placeholder="Title"
									onChange={(e) => settitle(e.target.value)}
								></input>
								<textarea
									className="w-full max-w-md p-4 border-2 border-teal-500 rounded mt-4"
									name="users-feedback"
									placeholder="Description"
									id="users-feedback"
									value={description}
									onChange={(e) => setdescription(e.target.value)}
								></textarea>

								<h3 className="font-bold mt-4">
									May we follow you up on your feedback?
								</h3>

								<div className="user-actions mt-4">
									<button
										onClick={() => handleSubmit()}
										className="btn-primary bg-teal-400 hover:bg-teal-500 text-white py-4 px-8 rounded"
									>
										Publish Feedback
									</button>
								</div>
							</div>
						</div>
					</main>
				</div>
			</section>
	);
};

export default FeedbackModal;

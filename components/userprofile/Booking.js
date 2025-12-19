import React, { useState } from "react";
import Image from "next/image";
import data from "./dummy.json";
import { ButtonsVisit } from "@/components/service/Button";

function Booking() {
	const itemsPerPage = 3;
	const [currentPage, setCurrentPage] = useState(1);
	const [people, setPeople] = useState(data);

	const lastIndex = currentPage * itemsPerPage;
	const firstIndex = lastIndex - itemsPerPage;
	const currentItems = people.slice(firstIndex, lastIndex);

	const handleNextPage = () => {
		setCurrentPage((prev) => prev + 1);
	};

	const handlePrevPage = () => {
		setCurrentPage((prev) => prev - 1);
	};

	return (
		<section className="mx-auto w-full max-w-7xl px-4 py-4  ">
			<div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between  md:space-y-0 ">
				<div
					type="button"
					className="rounded-lg bg-green-300 px-3 py-2 text-md font-semibold text-white shadow-sm"
				>
					Booking
				</div>
			</div>
			<div className="mt-6 flex flex-col p-5 shadow-xl glassy-service ">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 overflow-x-auto">
						<div className="overflow-hidden border border-gray-200 md:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-4 py-3.5 md:text-left text-center text-sm font-normal text-gray-700"
										>
											<span>Service</span>
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 md:px-12 text-left text-sm font-normal text-gray-700"
										>
											Details
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
										>
											Order ID
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
										>
											Status
										</th>
										<th scope="col" className="relative px-4 py-3.5">
											<span className="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									{currentItems.map((person, index) => (
										<tr key={person.id || index}>
											<td className="whitespace-nowrap px-4 py-4 md:text-left text-center">
												<div className="flex items-center">
													<div className="h-20 w-20 flex-shrink-0">
														<Image
															width={300}
															height={300}
															className="h-20 w-20 object-cover"
															src={person.image}
															alt=""
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">
															{person.name1}
														</div>
														<div className="text-sm text-gray-700">
															{person.email1}
														</div>
														<div className="text-sm text-gray-700">
															{person.email2}
														</div>
													</div>
												</div>
											</td>
											<td className="whitespace-nowrap px-4 py-4 md:px-12 text-left">
												<div className="text-sm text-gray-900 ">
													{person.title}
												</div>
												<div className="text-sm text-gray-700">
													{person.department}
												</div>
												<div className="text-sm text-green-700">
													{person.department1}
												</div>
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
												{person.role}
											</td>
											<td className="whitespace-nowrap px-4 py-4">
												<span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
													Active
												</span>
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
												<ButtonsVisit />
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center pt-6">
				{currentPage > 1 && (
					<a
						href="#"
						onClick={handlePrevPage}
						className="mx-1 text-sm font-semibold text-gray-900"
					>
						<span className="hidden lg:block">&larr; Previous</span>
						<span className="block lg:hidden">&larr;</span>
					</a>
				)}
				{currentPage < Math.ceil(people.length / itemsPerPage) && (
					<a
						href="#"
						onClick={handleNextPage}
						className="mx-1 flex items-center  rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
					>
						Next &rarr;
					</a>
				)}
			</div>
		</section>
	);
}

export default Booking;

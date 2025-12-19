import React, { useState } from "react";
import Image from "next/image";
import Walletbottom from "@/components/service/Walletbottom";
import data from "./dummy2.json";
import { ButtonsDelete } from "@/components/service/Button";

function Cart() {
	const itemsPerPage = 3;
	const [currentPage, setCurrentPage] = useState(1);

	const people = data;

	const lastIndex = currentPage * itemsPerPage;
	const firstIndex = lastIndex - itemsPerPage;
	const currentItems = people.slice(firstIndex, lastIndex);

	return (
		<section className="mx-auto w-full max-w-6xl px-4 py-4  ">
			<div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between  md:space-y-0 ">
				<div
					type="button"
					className="rounded-lg bg-teal-400 px-3 py-2 text-2xl font-semibold text-white shadow-sm"
				>
					Wish List
				</div>
			</div>
			<div className="mt-6 flex flex-col shadow-xl glassy-service p-4">
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
											Time
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
										>
											Price
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
														<div className="text-lg font-medium text-gray-900">
															{person.name1}
														</div>
													</div>
												</div>
											</td>
											<td className="whitespace-nowrap px-4 py-4 md:px-12 text-left">
												<div className="text-sm text-gray-900 ">
													{person.department}
												</div>
												<div className="text-sm text-gray-700">
													{person.title}
												</div>
												<div className="text-sm text-">
													{person.department1}
												</div>
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-sm text-green-700">
												{person.role}
											</td>

											<td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
												<ButtonsDelete />
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<Walletbottom />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cart;

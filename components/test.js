import { Star, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const ServiceOffer = ({data}) => {
	const [bigImage, setBigImage] = useState("");
	const [selectedCard, setSelectedCard] = useState(null);

	const [images, setImages] = useState(data.payload.images);
	const [packages, setPackages] = useState(data.payload.packages);

	const handleImageClick = (imageUrl, index) => {
		setBigImage(imageUrl);
		setSelectedCard(packages[index]);
	};

	return (
		<>
			<style>
				{`
          .scrollbar-hidden::-webkit-scrollbar {
            width: 0.5em;
          }

          .scrollbar-hidden::-webkit-scrollbar-track {
            background-color: transparent;
          }

          .scrollbar-hidden::-webkit-scrollbar-thumb {
            background-color: transparent;
          }
        `}
			</style>

			<div className="relative flex flex-col md:flex-row">
				<div className="relative w-full md:w-1/2">
					<div className="grid gap-4 py-10">
						<div>
							<Image
								width={500}
								height={500}
								className="h-auto max-w-full rounded-lg"
								src={bigImage}
								alt=""
							/>
						</div>
						<div className="grid grid-cols-5 gap-4">
							{images.map((imageUrl, index) => (
								<div key={index}>
									<Image
										width={500}
										height={500}
										className="h-auto max-w-full rounded-lg cursor-pointer"
										src={imageUrl}
										alt=""
										onClick={() => handleImageClick(imageUrl, index)}
									/>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="w-full md:w-1/2 h-screen overflow-y-auto p-10 scrollbar-hidden">
					<h2 className="text-lg font-bold tracking-widest text-gray-500">
						{selectedCard?.title}
					</h2>
					<h1 className="my-4 text-3xl md:text-6xl font-semibold text-black">
						{selectedCard?.subtitle}
					</h1>
					<div className="my-4 flex items-center">
						<span className="flex items-center space-x-1">
							{[...Array(5)].map((_, i) => (
								<Star key={i} size={20} className="text-yellow-500" />
							))}
							<span className="ml-3 text-lg font-semibold">4 Reviews</span>
						</span>
					</div>
					<p className="leading-relaxed text-base md:text-lg">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
						rem amet repudiandae neque adipisci eum enim, natus illo inventore
						totam?
					</p>
					<div className="mb-5 mt-6 flex flex-col md:flex-row items-center md:items-start border-b-2 border-gray-100 pb-5">
						<div className="mb-5 mt-6 flex flex-col md:flex-row items-center md:items-start border-b-2 border-gray-100 pb-5">
							<div className="flex flex-col md:flex-row items-center md:items-start">
								<span className="mr-3 text-lg font-semibold">Features</span>
							</div>
							<div className="mt-3 md:mt-0 ml-0 md:ml-auto">
								<ul className="space-y-2">
									{selectedCard?.features.map((feature, index) => (
										<li key={index} className="flex items-center">
											<svg
												className="w-4 h-4 text-green-500 mr-2"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
												<polyline points="22 4 12 14.01 9 11.01"></polyline>
											</svg>
											<p className="text-base md:text-lg">{feature}</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row items-center md:items-start justify-between">
						<span className="title-font text-xl md:text-2xl font-bold text-gray-900">
							₹{selectedCard?.price}
						</span>
						<button
							type="button"
							className="m-4 md:mt-0 rounded-md bg-black px-4 py-3 text-base md:text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceOffer;




          <article className="border border-gray-200 p-5">
            <div className="flex items-center m-4 py-5 space-x-4">
              <Image
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-5.jpg"
                alt=""
              />
              <div className="space-y-1 font-medium dark:text-white">
                <p>
                  Jese Leos{" "}
                  <time
                    dateTime="2014-08-16 19:00"
                    className="block text-sm text-gray-500 dark:text-gray-400"
                  >
                    Joined on August 2014
                  </time>
                </p>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <h3 className="ml-2 text-sm font-semibold text-gray-900">
                Thinking to buy another one!
              </h3>
            </div>
            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
              <p>
                Reviewed in the United Kingdom on{" "}
                <time dateTime="2017-03-03 19:00">March 3, 2017</time>
              </p>
            </footer>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              This is my third Invicta Pro Diver. They are just fantastic value
              for money. This one arrived yesterday and the first thing I did
              was set the time, popped on an identical strap from another
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              It is obviously not the same build quality as those very expensive
              watches. But that is like comparing a Citroën to a Ferrari.
            </p>
            <a
              href="#"
              className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Read more
            </a>
            <aside>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                19 people found this helpful
              </p>
              <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                <a
                  href="#"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Helpful
                </a>
                <a
                  href="#"
                  className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Report abuse
                </a>
              </div>
            </aside>
          </article>
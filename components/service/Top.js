import React, { useState } from "react";
import Loading from "@/blocks/Loading";
import LazyImage from "../Image";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function Top({ data, thumbnailList }) {
	const [isVideoPlayer, setisVideoPlayer] = useState(false)
	const [currentVideoUrl, setcurrentVideoUrl] = useState('')

	if (!data) {
		return <Loading />;
	}

	console.log('the thumbnail list is..', thumbnailList)

	SwiperCore.use([Autoplay]);

	const { title, subtitle } = data;
	return (
		<>
			<VideoPlayer isVideoPlayer={isVideoPlayer} setisVideoPlayer={setisVideoPlayer} currentVideoUrl={currentVideoUrl} />
			<div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center ">
				<div className="w-full lg:w-1/2">
					<div className="lg:max-w-lg">
						<h1 className="text-4xl font-bold text-red-900 tracking-wide  lg:text-4xl">
							{title} <br />
							<span className="text-4xl font-semibold tracking-wide text-black lg:text-3xl">
								{subtitle}
							</span>{" "}
						</h1>
						<div className="mt-8 space-y-5 ">
							{
								data?.features?.map((item) => (
									<p key={item} className="flex items-center -mx-2 text-gray-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 mx-2 text-green-700"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<span className="mx-2 text-gray-700">{item}</span>
									</p>
								))
							}
						</div>

					</div>
				</div>

				{/* <div className="w-full lg:w-1/2 relative ">
				<div className="aspect-w-16 aspect-h-9 ">
					<div className="w-full h-full bg-gradient-to-r from-red-800 to-yellow-500 rounded-3xl transform -rotate-0 perspective-3xl overflow-hidden shadow-2xl">
						<div className="absolute inset-0 transform rotate-0 -perspective-3xl bg-black bg-opacity-5 shadow-lg"></div>
					
						<video
							className="w-full h-full object-cover"
							autoPlay
							loop
							muted
							playsInline
						>
							<source src={video} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						<div className="absolute top-0 left-0 w-3 h-3 bg-gray-800 rounded-full transform translate-x-4 translate-y-4"></div>
						<div className="absolute top-0 right-0 w-3 h-3 bg-gray-800 rounded-full transform -translate-x-4 translate-y-4"></div>
						<div className="absolute bottom-0 left-0 w-3 h-3 bg-gray-800 rounded-full transform translate-x-4 -translate-y-4"></div>
						<div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-800 rounded-full transform -translate-x-4 -translate-y-4"></div>
					</div>
				</div>
			</div> */}

				{/* ──────────────────── THUMBNAILS SLIDER ───────────────────── */}
				<div className="w-full lg:w-1/2 overflow-hidden md:h-96 rounded-lg flex justify-center items-center ">
					<Swiper
						slidesPerView={1}
						autoplay={{
							delay: 2000,
						}}
					>
						{thumbnailList?.map((item, index) => (
							<SwiperSlide onClick={() => {
								if (item?.thumbnailType === 'VIDEO') {
									setcurrentVideoUrl(item?.thumbnailUrl)
									setisVideoPlayer(true)
								}
							}} className="flex justify-center items-center cursor-pointer" key={index}><LazyImage className={`${item?.thumbnailType === "VIDEO" ? 'h-20 w-auto m-auto md:mt-32 ' : ''}`} src={item?.thumbnailType === "VIDEO" ? '/play-button.png' : item?.thumbnailUrl} layout="responsive"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	);
}

export default Top;

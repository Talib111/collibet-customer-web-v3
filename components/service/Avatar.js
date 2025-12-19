import React from "react";
import Image from "next/image";

function Avatar() {
	
	return (
<>
<div className="avatar-container flex flex-col mt-10">
							<section className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
								<Image
									width={200}
									height={200}
									className="object-cover w-20 h-20 rounded-full"
									src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1688447433/Ellipse_9_rrfyrk.png"
									alt=""
								/>
								<div className="text-left rtl:text-right p-3">
									<h1 className="text-m font-medium text-gray-700 capitalize dark:text-white">
										MD Rehan Ansari
									</h1>
									<p className="text-sm text-red-700 dark:text-gray-400 pt-3 hover:text-red-600 cursor-pointer">
										Edit
									</p>
								</div>
							</section>
						</div>
</>
	);
}



export default Avatar;

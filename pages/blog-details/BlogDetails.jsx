// import { useEffect, useState } from 'react'
// import AxiosInterceptors from '@/components/ApiList/AxiosInterceptors'
// import { useSearchParams } from "next/navigation";
// import ApiList from '@/components/ApiList/ApiList'
// import ApiHeader from '@/components/ApiList/ApiHeader'
// import { RotatingLines } from "react-loader-spinner";
// import Image from 'next/image';

// export default function BlogDetails() {
//   const [isAccordionOpen, setIsAccordionOpen] = useState(false);
//   const [isFeaturesOpen, setisFeaturesOpen] = useState(false);
//   const [packageDetails, setpackageDetails] = useState(null);
//   const [isLoading, setisLoading] = useState(null);
//   const { api_getBlogById } = ApiList()
//   const search = useSearchParams();
//   const blogId = search.get("blogId");

//   // ═════════════║ THIS FUNCTION FETCHES PACKAGE DETAILS║══════════════════
//   const fetchBlogDetails = () => {
//     setisLoading(true);
//     AxiosInterceptors.get(`${api_getBlogById}/${blogId}`, ApiHeader())
//       .then(function (response) {
//         if (!response?.data?.error) {
//           setpackageDetails(response?.data?.data);
//         }
//       })
//       .catch(function (error) { })
//       .finally(() => {
//         setisLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchBlogDetails()
//   }, [blogId]);

//   const formatTextToHtml = (text) => {
//     if (!text) return '';

//     // First, normalize line endings and split by double line breaks to create paragraphs
//     const normalizedText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
//     const paragraphs = normalizedText.split(/\n\s*\n/);

//     return paragraphs.map(paragraph => {
//       const trimmedParagraph = paragraph.trim();
//       if (!trimmedParagraph) return '';

//       // Process each paragraph
//       let formattedParagraph = trimmedParagraph
//         // Convert single line breaks to <br> tags within paragraphs
//         .replace(/\n/g, '<br>')
//         // Convert **bold** to <strong>
//         .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
//         // Convert *italic* to <em>
//         .replace(/\*(.*?)\*/g, '<em>$1</em>')
//         // Convert URLs to links (basic)
//         .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

//       return `<p>${formattedParagraph}</p>`;
//     }).filter(p => p).join('');
//   };

//   const getPreviewHtml = (text) => {
//     return formatTextToHtml(text);
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-96">
//         <RotatingLines
//           strokeColor="white"
//           strokeWidth="5"
//           animationDuration="0.75"
//           width="25"
//           visible={true}
//         />
//       </div>
//     )
//   }

//   return (
//     <div className="bg-white rounded-lg p-6">
//       <div className="grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2">
//         <main className="grid items-start">
//           <section className="bg-background">
//             <div className="container px-10 pb-10 mx-auto">

//               <div className="grid grid-cols-1 md:grid-cols-2 relative">
//                 <div className="col-span-1 mt-4">
//                   <div className="flex justify-between">
//                     <div><h2 className='text-xl font-bold mb-2 text-amber-500'>{packageDetails?.title}</h2></div>
//                   </div>

//                   <div className="bg-[#EEEEEE] flex flex-col items-center border-4 border-white shadow-lg transition-colors duration-300 rounded-xl dark:border-gray-700 overflow-hidden">
//                     <div className="h-72 overflow-hidden">
//                       <div className="w-full overflow-hidden">
//                         <Image
//                           height={100}
//                           width={100} className="w-full h-full object-cover" src={`${packageDetails?.thumbnail}`} alt="SERVICE" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//               </div>

//               <div>
//                 <h1 className="text-lg font-semibold text-gray-700 mt-8">{packageDetails?.subtitle}</h1>
//                 {/* <p className="text-md text-gray-700 mt-2">{packageDetails?.description}</p> */}
//                 <p
//                   className="text-md text-gray-700 mt-2"
//                   dangerouslySetInnerHTML={{ __html: getPreviewHtml(packageDetails?.description) || '' }}
//                 ></p>
//               </div>

//             </div>
//           </section>
//         </main>
//       </div>
//     </div >
//   )
// }

import { useEffect, useState } from "react";
import AxiosInterceptors from "@/components/ApiList/AxiosInterceptors";
import { useSearchParams } from "next/navigation";
import ApiList from "@/components/ApiList/ApiList";
import ApiHeader from "@/components/ApiList/ApiHeader";
import { RotatingLines } from "react-loader-spinner";
import Image from "next/image";

export default function BlogDetails() {
	const [isAccordionOpen, setIsAccordionOpen] = useState(false);
	const [isFeaturesOpen, setisFeaturesOpen] = useState(false);
	const [packageDetails, setpackageDetails] = useState(null);
	const [isLoading, setisLoading] = useState(null);
	const { api_getBlogById } = ApiList();
	const search = useSearchParams();
	const blogId = search.get("blogId");

	// ═════════════║ THIS FUNCTION FETCHES PACKAGE DETAILS║══════════════════
	const fetchBlogDetails = () => {
		setisLoading(true);
		AxiosInterceptors.get(`${api_getBlogById}/${blogId}`, ApiHeader())
			.then(function (response) {
				if (!response?.data?.error) {
					setpackageDetails(response?.data?.data);
				}
			})
			.catch(function (error) {})
			.finally(() => {
				setisLoading(false);
			});
	};

	useEffect(() => {
		fetchBlogDetails();
	}, [blogId]);

	const formatTextToHtml = (text) => {
		if (!text) return "";

		// First, normalize line endings and split by double line breaks to create paragraphs
		const normalizedText = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
		const paragraphs = normalizedText.split(/\n\s*\n/);

		return paragraphs
			.map((paragraph) => {
				const trimmedParagraph = paragraph.trim();
				if (!trimmedParagraph) return "";

				// Process each paragraph
				let formattedParagraph = trimmedParagraph
					// Convert single line breaks to <br> tags within paragraphs
					.replace(/\n/g, "<br>")
					// Convert **bold** to <strong>
					.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
					// Convert *italic* to <em>
					.replace(/\*(.*?)\*/g, "<em>$1</em>")
					// Convert URLs to links (basic)
					// .replace(
					// 	/(https?:\/\/[^\s]+)/g,
					// 	'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
					// )
          // Convert $[text](url)$
          .replace(
            /\$\[([^\]]+)\]\((https?:\/\/[^\s$]+)\)\$/g,
            '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
          )
					// Convert $https://link$ to anchor tags (assuming the content is a URL)
					.replace(
						/\$(https?:\/\/[^\s$]+)\$/g,
						'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
					)
					// Auto-detect URLs not already inside <a>
					.replace(
						/(?<!href=")(https?:\/\/[^\s<]+)/g,
						'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
					);

				return `<p>${formattedParagraph}</p>`;
			})
			.filter((p) => p)
			.join("");
	};

	const getPreviewHtml = (text) => {
		return formatTextToHtml(text);
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-96">
				<RotatingLines
					strokeColor="white"
					strokeWidth="5"
					animationDuration="0.75"
					width="25"
					visible={true}
				/>
			</div>
		);
	}

	return (
		<div className="bg-white rounded-lg p-6">
			<div className="grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2">
				<main className="grid items-start">
					<section className="bg-background">
						<div className="container px-10 pb-10 mx-auto">
							<div className="grid grid-cols-1 md:grid-cols-2 relative">
								<div className="col-span-1 mt-4">
									<div className="flex justify-between">
										<div>
											<h2 className="text-xl font-bold mb-2 text-amber-500">
												{packageDetails?.title}
											</h2>
										</div>
									</div>

									<div className="bg-[#EEEEEE] flex flex-col items-center border-4 border-white shadow-lg transition-colors duration-300 rounded-xl dark:border-gray-700 overflow-hidden">
										<div className="h-72 overflow-hidden">
											<div className="w-full overflow-hidden">
												<Image
													height={100}
													width={100}
													className="w-full h-full object-cover"
													src={`${packageDetails?.thumbnail}`}
													alt="SERVICE"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div>
								<h1 className="text-lg font-semibold text-gray-700 mt-8">
									{packageDetails?.subtitle}
								</h1>
								{/* <p className="text-md text-gray-700 mt-2">{packageDetails?.description}</p> */}
								<div
									className="text-md text-gray-700 mt-2 blog-description-content"
									dangerouslySetInnerHTML={{
										__html: getPreviewHtml(packageDetails?.description) || "",
									}}
								></div>
							</div>
						</div>
					</section>
				</main>
			</div>

			{/* Add CSS styles for proper formatting */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
          .blog-description-content p {
            margin-bottom: 1rem;
            line-height: 1.6;
          }
          .blog-description-content p:last-child {
            margin-bottom: 0;
          }
          .blog-description-content strong {
            font-weight: 600;
          }
          .blog-description-content em {
            font-style: italic;
          }
          .blog-description-content a {
            color: #3b82f6;
            text-decoration: underline;
          }
          .blog-description-content a:hover {
            color: #1d4ed8;
          }
        `,
				}}
			/>
		</div>
	);
}

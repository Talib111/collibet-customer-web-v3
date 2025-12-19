// import React from "react";

// const Portfolio = () => {
//   const sectionStyle = {
//     background:
//       "url('https://res.cloudinary.com/dcxnmagjx/image/upload/v1687266724/wallpaperflare.com_wallpaper_10_kyatcq.jpg')no-repeat",
//     backgroundPosition: "top",
//   };

//   return (
//     <>
//       <style>
//         {`
//           .scrollbar-hidden::-webkit-scrollbar {
//             width: 0.5em;
//           }

//           .scrollbar-hidden::-webkit-scrollbar-track {
//             background-color: transparent;
//           }

//           .scrollbar-hidden::-webkit-scrollbar-thumb {
//             background-color: transparent;
//           }
//         `}
//       </style>

//       <div>
//         <div className="relative flex">
//           <div className="relative w-1/2 sm-w-hide h-screen overflow-hidden">
//             <h1 className="absolute p-10 font-extrabold text-lime-700 text-6xl"></h1>
//             <img
//               src="https://images.unsplash.com/photo-1683780777629-7b75e7016acc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
//               className="object-cover w-full h-full bg-fixed bg-center"
//               alt="Benny the Pup"
//             />
//           </div>

//           <div className="w-3/1 h-screen overflow-y-auto bg-black p-8 scrollbar-hidden">
//             <h1 className="mb-4 text-3xl text-center font-extrabold text-gray-800 dark:text-sky-600 md:text-5xl lg:text-6xl">
//               <span className="text-transparent text-center  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
//                 Personal
//               </span>{" "}
//               Services
//             </h1>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="grid gap-4">
//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>

//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('')",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>

//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('')",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid gap-4">
//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('')",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>

//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('')",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>

//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('')",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="m-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid gap-4">
//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('')",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>

//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('')",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>

//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('')",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid gap-4">
//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('')",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>

//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('g')",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>

//                 <div
//                   className="overflow-hidden bg-cover rounded-lg cursor-pointer h-auto max-w-full rounded-lg group"
//                   style={{
//                     backgroundImage:
//                       "url('g')",
//                   }}
//                 >
//                   <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                       Product name $Price
//                     </h2>
//                     <button
//                       type="button"
//                       className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <h1 className="m-4 text-3xl text-center font-extrabold text-gray-800 dark:text-sky-600 md:text-5xl lg:text-6xl">
//               <span className="text-transparent text-center  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
//                 New Category
//               </span>{" "}
//               Launches
//             </h1>

//             <div className="grid grid-cols-2 gap-2">
//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer group h-auto max-w-full"
//                 style={{
//                   backgroundImage:
//                     "url('')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-6xl font-semibold text-white capitalize">
//                     Product name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 m-2"
//                   >
//                     Visit
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer group h-auto max-w-full"
//                 style={{
//                   backgroundImage:
//                     "url('')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-6xl font-semibold text-white capitalize">
//                     Product name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 m-2"
//                   >
//                     Visit
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer group h-auto max-w-full"
//                 style={{
//                   backgroundImage:
//                     "url('')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-6xl font-semibold text-white capitalize">
//                     Product name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 m-2"
//                   >
//                     Visit
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer group h-auto max-w-full"
//                 style={{
//                   backgroundImage:
//                     "url(')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-6xl font-semibold text-white capitalize">
//                     Product name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 m-2"
//                   >
//                     Visit
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <h1 className="m-4 text-3xl text-center font-extrabold text-gray-800 dark:text-sky-600 md:text-5xl lg:text-6xl">
//               <span className="text-transparent text-center  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
//                 Home
//               </span>{" "}
//               Servises
//             </h1>

//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url('')"
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url(')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url(')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url(')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url(')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url(')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url(')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url('')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url(')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url(')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url('')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-auto max-w-full "
//                 style={{
//                   backgroundImage:
//                     "url('')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Product Name $Price
//                   </h2>
//                   <button
//                     type="button"
//                     className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 "
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <section className="bg-zinc-100 " >
//           <div className="container px-6 py-10 mx-auto">
//             <h1 className="text-6xl font-semibold text-center text-black capitalize lg:text-5xl dark:text-black">
//               Portfolio
//             </h1>

//             <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
//                 style={{
//                   backgroundImage:
//                     "url('https://res.cloudinary.com/dcxnmagjx/image/upload/v1687327759/roselyn-tirado-GDWmu0bFfS4-unsplash_cxlcg6.jpg')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Our Business model
//                   </h2>
//                   <p className="mt-2 text-lg tracking-wider text-lime-400 uppercase ">
//                     Our primary target market is homeowners. Specifically, those
//                     who need home repairs and improvements.
//                   </p>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
//                 style={{
//                   backgroundImage:
//                     "url('https://res.cloudinary.com/dcxnmagjx/image/upload/v1687329112/annie-gray-WEWTGkPUVT0-unsplash_vvcm5n.jpg')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Our strategy
//                   </h2>
//                   <p className="mt-2 text-lg tracking-wider text-lime-400 uppercase ">
//                     Our vision is to be the world’s largest and most trusted
//                     provider of home repairs and improvements. Three questions
//                     define our strategy for success.
//                   </p>
//                 </div>
//               </div>

//               <div
//                 className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
//                 style={{
//                   backgroundImage:
//                     "url('https://res.cloudinary.com/dcxnmagjx/image/upload/v1687327760/christopher-burns-8KfCR12oeUM-unsplash_m7whzi.jpg')",
//                 }}
//               >
//                 <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                   <h2 className="mt-4 text-xl font-semibold text-white capitalize">
//                     Our Markest
//                   </h2>
//                   <p className="mt-2 text-lg tracking-wider text-lime-400 uppercase ">
//                     HomeServe offers customers two product lines: Membership &
//                     HVAC and Home Experts. Together, these enable us to do every
//                     job in every home.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Portfolio;




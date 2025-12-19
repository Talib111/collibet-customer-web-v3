import React, { useEffect, useState } from "react";
import axiosInstance from "utils/axios";
import { useRouter } from "next/router";
import { RotatingLines } from "react-loader-spinner";
import ApiList from "../ApiList/ApiList";
import Image from "next/image";

const convertToLocalDate = (date) => {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true // Use AM/PM format
    };

    return new Date(date).toLocaleDateString(undefined, options);
}

// ════════════════════║ THIS IS CHAT CARD COMPONENT ║═════════════════════════
function ChatCard(props) {
    return (
        <div className='flex w-full space-x-2'>
           
            <Image
            height={100}
            width={100}
                className="inline h-10 w-10 rounded-full flex-initial "
                src="/favicon.jpg"
                alt="Dan_Abromov"
            />
            <div className='inline-block text-sm bg-gray-200 md:bg-gray-300 text-gray-700 p-2 rounded-lg shadow-xl flex-1'>

                <div className="font-semibold mb-2">{props?.title}</div>
                <div>{props?.message}</div>
                <div className='block text-xs relative top-8 text-gray-600 font-medium'>{convertToLocalDate(props?.createdAt)}</div>

            </div>
        </div>
    )
}

function NotificationCard() {
    const [bookingData, setBookingData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const { api_fetchNotifications } = ApiList()
    const router = useRouter();

    // ════════════════════║ THIS FETCHES NOTIFICATION LIST ║═════════════════════════
    const fetchNotifications = async () => {
        setisLoading(true);
        try {
            // const response = await axiosInstance.get(FETCH_BOOKING); // Replace with your API endpoint
            const response = await axiosInstance.get(api_fetchNotifications); // Replace with your API endpoint
            console.log(response.data);
            setBookingData(response.data.payload);
            if (
                response.data.error === true ||
                response.data.message === "Please Signin again, your token is expired!"
            ) {
                alert("You have to LogIN again");
                router.push("/");
                return;
            }
            setisLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

  

    useEffect(() => {
        fetchNotifications();
    }, []);
    return (
        <>
            <div className="flex items-center gap-x-3 bg-gradient-to-r from-indigo-300 to-indigo-400 h-40"></div>
            <section className="container px-4 mx-auto -mt-48 md:-mt-40 ">
                <div className="mt-10 mx-auto md:w-2/3 flex items-center gap-x-3 bg-gradient-to-r from-indigo-300 to-indigo-400">
                    <h2 className="text-xl md:text-3xl font-semibold text-white">
                        # My Notifications
                    </h2>
                </div>
                {/* TABLE SECTION */}
                {isLoading && (
                    <div className="w-full h-40 flex justify-center items-center">
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="50"
                            visible={true}
                        />
                    </div>
                )}
                {!isLoading && (
                    <div>
                        <div className="flex flex-col mt-6">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <   div className="mx-auto md:w-2/3 overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg bg-white p-4 md:p-10">
                                        {Array.isArray(bookingData) &&
                                            bookingData?.map((data, index) => (
                                                <>
                                                    <ChatCard title={data?.title} message={data?.body} createdAt={data?.createdAt} index={index} />
                                                    <div className='mt-10'></div>
                                                </>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            {/* <a
                                href="#"
                                className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 rtl:-scale-x-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                    />
                                </svg>
                                <span>previous</span>
                            </a> */}
                            {/* <div className="items-center hidden lg:flex gap-x-3">
                                <a
                                    href="#"
                                    className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
                                >
                                    1
                                </a>
                                <a
                                    href="#"
                                    className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                                >
                                    2
                                </a>
                                <a
                                    href="#"
                                    className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                                >
                                    3
                                </a>
                                <a
                                    href="#"
                                    className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                                >
                                    ...
                                </a>
                                <a
                                    href="#"
                                    className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                                >
                                    12
                                </a>
                                <a
                                    href="#"
                                    className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                                >
                                    13
                                </a>
                                <a
                                    href="#"
                                    className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                                >
                                    14
                                </a>
                            </div> */}
                            {/* <a
                                href="#"
                                className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                            >
                                <span>Next</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 rtl:-scale-x-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </a> */}
                        </div>
                    </div>
                )}
            </section>
            {/* SPACR */}
            <div className="mt-40"></div>
        </>
    );
}

export default NotificationCard;

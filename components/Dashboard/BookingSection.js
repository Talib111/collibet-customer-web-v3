import React, { useEffect, useState } from 'react'
import axiosInstance from 'utils/axios';
import { FETCH_BOOKING } from 'utils/constants';
import styles from '../../styles/BookingSection.module.css'; // Import your CSS module
import { CreditCard, ArrowLeft} from 'lucide-react';
import { useRouter } from "next/router";
import OrderDetails from './OrderDetails';

const BookingSection = () => {


    const [bookingData, setBookingData] = useState([]);
    const [flag, setFlag] = useState(true)
    const [orderDetailsData, setOrderDetailsData] = useState({});
    const [orderDate, setOrderDate] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);
    const [orderNumber, setOrderNumber] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchBookingData = async () => {
            try {
                const response = await axiosInstance.get(FETCH_BOOKING); // Replace with your API endpoint
                console.log(response.data)
                setBookingData(response.data.payload);
                if (response.data.error === true || response.data.message === "Please Signin again, your token is expired!") {
                    alert("You have to LogIN again");
                    router.push('/');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchBookingData();
    }, [])

    console.log(bookingData);

    const formatCustomDate = isoDate => {
        const date = new Date(isoDate);
        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        const formattedDate = date.toLocaleDateString(undefined, options);

        const day = date.getDate();
        const daySuffix =
            day === 1 || day === 21 || day === 31
                ? 'st'
                : day === 2 || day === 22
                    ? 'nd'
                    : day === 3 || day === 23
                        ? 'rd'
                        : 'th';

        return formattedDate.replace(/\d+(?=\s)/, `$&${daySuffix}`);
    };

    return (
        <div>
            {flag ?
                <>
                    {bookingData.map(data => (
                        <div onClick={() => { 
                            setFlag(false)
                            setOrderDetailsData(data.servicesBooked);
                            setOrderDate(data.createdAt);
                            setTotalAmount(data?.amount);
                            setOrderNumber(data?.orderId);
                         }} className={styles.bs_main_container}>
                            <div className={styles.bs_sub_container_1}>
                                <div className={styles.bs_super_sub_container_1_1}>
                                    <div className={styles.bs_super_sub_container_1_1_1}>
                                        <p className={styles.bs_super_sub_container_1_1_1_p_1}>Order Placed</p>
                                        <p className={styles.bs_super_sub_container_1_1_1_p_2}>
                                            {/* {data?.createdAt} */}
                                            {data?.createdAt !== undefined
                                                ? formatCustomDate(data.createdAt)
                                                : null}
                                        </p>
                                    </div>
                                    <div className={styles.bs_super_sub_container_1_1_2}>
                                        <p className={styles.bs_super_sub_container_1_1_2_p_1}>Total</p>
                                        <p className={styles.bs_super_sub_container_1_1_2_p_2}>
                                            {data?.amount !== undefined ? (data.amount / 100).toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'INR',
                                                minimumFractionDigits: 2,
                                            }) + ' ' : null}
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.bs_super_sub_container_1_2}>
                                    <p className={styles.bs_super_sub_container_1_2_p_1}>Order No.</p>
                                    <p className={styles.bs_super_sub_container_1_2_p_2}>{data?.orderId}</p>
                                </div>
                            </div>
                            <div className={styles.bs_sub_container_2}>
                                <div className={styles.bs_super_sub_container_2_1}>
                                    <div className={styles.bs_super_sub_container_2_1_1}>
                                        <p className={styles.bs_super_sub_container_2_1_1_p_1}>Order Status</p>
                                        <p className={styles.bs_super_sub_container_2_1_1_p_2}>{data?.orderStatus}</p>
                                    </div>
                                    <div className={styles.bs_super_sub_container_2_1_2}>
                                        <p className={styles.bs_super_sub_container_2_1_2_p_1}>Payment Status</p>
                                        <p className={styles.bs_super_sub_container_2_1_2_p_2}>{data?.paymentStatus}</p>
                                    </div>
                                </div>
                                <div className={styles.bs_super_sub_container_2_2}>
                                    <div className={styles.bs_super_sub_container_2_2_1}>
                                        {bookingData[2]?.isAmountPaid === true ? <p className={styles.bs_super_sub_container_2_2_1_p_1}><CreditCard style={{ width: '30px', height: '30px', margin: '0px 10px' }} />
                                            Amount Paid {"  "}
                                            {data.amount !== undefined ? (data.amount / 100).toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'INR',
                                                minimumFractionDigits: 2,
                                            }) + " " : null}
                                        </p>
                                            :
                                            bookingData[2]?.isCOD === true ? <p className={styles.bs_super_sub_container_2_2_1_p_1}><CreditCard style={{ width: '30px', height: '30px', margin: '0px 10px'}} />
                                                <b>COD Amount</b> {"  "}
                                                {data.amount !== undefined ? (data.amount / 100).toLocaleString('en-US', {
                                                    style: 'currency',
                                                    currency: 'INR',
                                                    minimumFractionDigits: 2,
                                                }) + " " : null}
                                            </p>
                                                :
                                                <p className={styles.bs_super_sub_container_2_2_1_p_1}>Unpaid</p>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </> :
                <div>
                    <div className={styles.od_head_container}>
                        <div className={styles.od_head_container_1}>
                            <p className={styles.od_head_container_1_p}>Order Details</p>
                        </div>
                        <div className={styles.od_head_container_2}>

                            <button className={styles.od_head_container_2_btn} onClick={() => { setFlag(true) }}><ArrowLeft className={styles.od_leftArrow} />Go Back</button>
                        </div>
                    </div>
                    <OrderDetails orderDetailsData={orderDetailsData} totalAmount={totalAmount} orderDate={orderDate} orderNumber={orderNumber}  />
                </div>
            }

        </div>
    )
}

export default BookingSection
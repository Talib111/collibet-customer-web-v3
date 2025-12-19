import React, { useState } from 'react';
import styles from '../../styles/OrderDetails.module.css';
import Image from 'next/image';

const OrderDetails = ({ orderDetailsData, orderNumber, orderDate, totalAmount }) => {
    console.log(orderDetailsData);
    console.log(orderNumber)
    console.log(orderDate)
    console.log(totalAmount)
    // console.log(orderDetailsData.servicesBooked[0].package);
    const [packagee, setPackagee] = useState({});
    // setPackage()


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
            <div className={styles.od_main_container}>
                <div className={styles.od_sub_container_1}>
                    <div className={styles.od_sub_container_1_1}>
                        <div className={styles.od_sub_container_1_1_1}>
                            <p className={styles.od_sub_container_1_1_1_p_1}>Order Placed</p>
                            <p className={styles.od_sub_container_1_1_1_p_2}>
                                {orderDate !== undefined
                                    ? formatCustomDate(orderDate)
                                    : null}
                            </p>
                        </div>
                        <div className={styles.od_sub_container_1_1_2}>
                            <p className={styles.od_sub_container_1_1_2_p_1}>Total</p>
                            <p className={styles.od_sub_container_1_1_2_p_2}>
                                {totalAmount !== undefined ? (totalAmount / 100).toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'INR',
                                    minimumFractionDigits: 2,
                                }) + ' ' : null}
                            </p>
                        </div>
                    </div>
                    <div className={styles.od_sub_container_1_2}>
                        <p className={styles.od_sub_container_1_2_p_1}>Order No.</p>
                        <p className={styles.od_sub_container_1_2_p_2}>{orderNumber}</p>
                    </div>
                </div>

                <div style={{
                    display: 'flex'
                }}>

                    <div className={styles.od_sub_container_2}>
                        {orderDetailsData.map(data => (
                            // <div className={styles.od_sub_container_2}>
                            <div className={styles.od_sub_container_2_1}>
                                <div className={styles.od_sub_sub_container_2_1}>
                                    <div className={styles.od_sub_container_2_1_1}>
                                        <Image src={data.package.image} alt="Image" width={150} height={100} className={styles.od_sub_container_2_1_1_img} />
                                    </div>
                                    <div className={styles.od_sub_container_2_1_2}>
                                        <p className={styles.od_sub_container_2_1_2_p_1}>{data.package.title}</p>
                                        <p className={styles.od_sub_container_2_1_2_p_2}>{data.package.subtitle}</p>
                                        {data.package.features.map(featureData => (
                                            <p className={styles.od_sub_container_2_1_2_p_3}><b style={{color:'black'}}>~</b> {featureData}</p>
                                        ))}

                                    </div>
                                </div>

                                <div >

                                    <div className={styles.od_serviceStatus_container}>
                                        <p className={styles.od_serviceStatus_p_1}>{data.cart.serviceStatus}</p>
                                    </div>
                                    <div className={styles.tableContainer}>
                                        <table className={styles.table}>
                                            {/* <tr>
                                            <th className={styles.tableHeader}>Header 1</th>
                                            <th className={styles.tableHeader}>Header 2</th>
                                        </tr> */}
                                            <tr>
                                                <td className={styles.tableCell}>Price</td>
                                                <td className={styles.tableCell}>
                                                    {data?.price !== undefined ? (data.price).toLocaleString('en-US', {
                                                        style: 'currency',
                                                        currency: 'INR',
                                                        minimumFractionDigits: 2,
                                                    }) + ' ' : null}
                                                </td>
                                            </tr>
                                            <tr className={styles.evenRow}>
                                                <td className={styles.tableCell}>Tax and Other Charges</td>
                                                <td className={styles.tableCell}>
                                                    {(data?.price * data?.gst) / 100 !== undefined ? ((data?.price * data?.gst) / 100).toLocaleString('en-US', {
                                                        style: 'currency',
                                                        currency: 'INR',
                                                        minimumFractionDigits: 2,
                                                    }) + ' ' : null}
                                                    {/* {(data?.price * data?.gst)/100} */}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ borderTop: '2px solid grey' }} className={styles.tableCell}>Total</td>
                                                <td style={{ borderTop: '2px solid grey' }} className={styles.tableCell}>
                                                    {data?.totalPrice !== undefined ? (data?.totalPrice).toLocaleString('en-US', {
                                                        style: 'currency',
                                                        currency: 'INR',
                                                        minimumFractionDigits: 2,
                                                    }) + ' ' : null}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className={styles.od_sub_container_2_2}></div> */}
                </div>
            </div>

        </div>
    )
}

export default OrderDetails
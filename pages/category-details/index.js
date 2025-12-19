import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axiosInstance from "../../utils/axios";
import { FETCH_SERVICE, FETCH_SERVICE_BY_SLUG } from "../../utils/constants";
import Layout from "@/components/Layout/Layout";
import ServiceOffer from "@/components/ServiceOffer";
import Loading from "@/blocks/Loading";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper/core";
import Slide from "@/components/service/Slider";
import Top from "@/components/service/Top";
import PackageDetailsModal from "@/components/PackageDetailsModal";
import AxiosInterceptors from "@/components/ApiList/AxiosInterceptors";
import ApiHeader from "@/components/ApiList/ApiHeader";
import SpacerHorizontal from "@/components/UI/SpacerHorizontal";
import ApiList from "@/components/ApiList/ApiList";
import Head from "next/head";

SwiperCore.use([Autoplay]);


export const ServiceDetailPage = ({ servicedetail, analyticsURL, passedCategoryId }) => {
    const [packageDetailsModalStatus, setpackageDetailsModalStatus] = useState(false);
    const [modalData, setmodalData] = useState(null);
    const [faqList, setfaqList] = useState(null);
    const [thumbnailList, setthumbnailList] = useState(null);
    const { api_getFaqByEntityId, api_getAllThumbnails } = ApiList();
    const search = useSearchParams();
    const categoryId = search.get("categoryId");
    const slug = search.get("category");

    const handleModalClose = () => {
        setpackageDetailsModalStatus(false);
        setmodalData(null);
    };

    console.log('The Service Details', servicedetail?.[0]?._id)
    console.log('the passed category', passedCategoryId)
    // Fetch FAQ list
    const fetchFaqList = () => {
        AxiosInterceptors.get(`${api_getFaqByEntityId}?entityId=${passedCategoryId || servicedetail?.[0]?._id}&faqType=CATEGORY`, ApiHeader())
            .then(response => {
                if (!response?.data?.error) {
                    setfaqList(response?.data?.data);
                }
            })
            .catch(error => { });
    };

    // Fetch Thumbnails
    const fetchThumbnails = () => {
        AxiosInterceptors.get(`${api_getAllThumbnails}?entityId=${passedCategoryId || servicedetail?.[0]?._id}&entityType=CATEGORY`, ApiHeader())
            .then(response => {
                if (!response?.data?.error) {
                    setthumbnailList(response?.data?.data);
                }
            })
            .catch(error => { });
    };

    useEffect(() => {
        if (passedCategoryId || servicedetail?.[0]?._id) {
            fetchFaqList();
            fetchThumbnails();
        }

    }, [passedCategoryId]);

    return (
        <>
            <Head>
                <title>{servicedetail?.[0]?.metaTitle || 'Collibet Categories'}</title>
                <meta name="description" content={servicedetail?.[0]?.metaDescription || 'Collibet Description'} />
            </Head>
            <Layout>
                <PackageDetailsModal
                    packageDetailsModalStatus={packageDetailsModalStatus}
                    setpackageDetailsModalStatus={setpackageDetailsModalStatus}
                    handleModalClose={handleModalClose}
                    modalData={modalData}
                />

                <section className="bg-white">
                    {servicedetail && servicedetail.length > 0 ? (
                        servicedetail.map(service => (
                            <Top thumbnailList={thumbnailList} key={service?._id} data={service} />
                        ))
                    ) : (
                        <Loading />
                    )}
                </section>

                <section className="rounded-lg p-4 text-center flex justify-center">
                    {servicedetail && servicedetail.length > 0 ? (
                        servicedetail.map(service => (
                            <Slide key={service?._id} data={service} />
                        ))
                    ) : (
                        <Loading />
                    )}
                </section>

                <section className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 xl:px-20">
                    {servicedetail && servicedetail.length > 0 ? (
                        servicedetail.map(service => (
                            <ServiceOffer
                                setpackageDetailsModalStatus={setpackageDetailsModalStatus}
                                key={service?._id}
                                data={service}
                                setmodalData={setmodalData}
                                analyticsURL={analyticsURL}
                            />
                        ))
                    ) : (
                        <Loading />
                    )}

                    <div className='mt-4'>
                        <div className="w-full">
                            <div className="flex justify-between w-full py-2 text-left text-lg font-medium text-gray-700">
                                Frequently Asked Questions ({faqList?.docs?.length})
                            </div>
                            <div className="mt-2 text-lg text-gray-700">
                                <SpacerHorizontal variant='secondary' />
                                <div className='pt-4'>
                                    {faqList?.docs?.map((item, index) => (
                                        <div key={item?._id} className="flex gap-2 mb-4">
                                            <div>{index + 1}</div>
                                            <div>
                                                <div className='text-sm font-semibold text-yellow-600'>{item?.question}</div>
                                                <p className='text-sm font-semibold text-gray-600 '>{item?.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export async function getServerSideProps({ query }) {
    const { categoryId, category } = query;
    let data = null;

    if (category) {
        const response = await axiosInstance.get(`${FETCH_SERVICE_BY_SLUG}/${category}`);
        data = response?.data;
    } else if (categoryId) {
        const response = await axiosInstance.get(`${FETCH_SERVICE}/${categoryId}`);
        data = response?.data;
    }

    if (!data || data?.error) {
        return { notFound: true };
    }

    return {
        props: {
            servicedetail: [data?.payload],
            analyticsURL: data?.analyticsURL,
            passedCategoryId: data?._id || null,
        },
    };
}

export default ServiceDetailPage;

import { useEffect, useState } from 'react'
import AxiosInterceptors from '@/components/ApiList/AxiosInterceptors'
import { useSearchParams } from "next/navigation";
import ApiList from '@/components/ApiList/ApiList'
import ApiHeader from '@/components/ApiList/ApiHeader'
import SpacerHorizontal from '@/components/UI/SpacerHorizontal'
import { RotatingLines } from "react-loader-spinner";
import { IoMdCart } from 'react-icons/io';
import Button from '@/components/UI/Button';
import Link from 'next/link';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import LazyImage from '@/components/Image';

export default function PackageDetails() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isFeaturesOpen, setisFeaturesOpen] = useState(false);
  const [packageDetails, setpackageDetails] = useState(null);
  const [faqList, setfaqList] = useState(null);
  const [isLoading, setisLoading] = useState(null);
  const [isVideoPlayer, setisVideoPlayer] = useState(false)
  const [currentVideoUrl, setcurrentVideoUrl] = useState('')
  const [thumbnailList, setthumbnailList] = useState(null);

  const { api_packageDetailsById, api_packageDetailsBySlug, api_getFaqByEntityId, api_getAllThumbnails, api_getAllThumbnailsByPackageSlug } = ApiList()
  const search = useSearchParams();
  const packageId = search.get("packageId");
  const service = search.get("service");
  SwiperCore.use([Autoplay]);

  // ═════════════║ THIS FUNCTION FETCHES PACKAGE DETAILS║══════════════════
  const fetchPackageDetails = () => {
    setisLoading(true);
    AxiosInterceptors.get(`${api_packageDetailsById}/${packageId}`, ApiHeader())
      .then(function (response) {
        if (!response?.data?.error) {
          setpackageDetails(response?.data?.data);
        }
      })
      .catch(function (error) { })
      .finally(() => {
        setisLoading(false);
      });
  };

  // ═════════════║ THIS FUNCTION FETCHES PACKAGE DETAILS BY SLUG║══════════════════
  const fetchPackageDetailsBySlug = () => {
    setisLoading(true);
    AxiosInterceptors.get(`${api_packageDetailsBySlug}/${service}`, ApiHeader())
      .then(function (response) {
        if (!response?.data?.error) {
          setpackageDetails(response?.data?.data);
        }
      })
      .catch(function (error) { })
      .finally(() => {
        setisLoading(false);
      });
  };

  // ═════════════║ THIS FUNCTION GETS FAQ LIST FOR THIS PACKAGE║══════════════════
  const fetchFaqlist = (id) => {
    AxiosInterceptors.get(`${api_getFaqByEntityId}?entityId=${id}&faqType=PACKAGE`, ApiHeader())
      .then(function (response) {
        if (!response?.data?.error) {
          setfaqList(response?.data?.data);
        }
      })
      .catch(function (error) { })
  };

  // ═════════════║ THIS FUNCTION GETS THE THUMBNAIL DATA BY ID║══════════════════
  const fetchThumbnails = () => {
    AxiosInterceptors.get(`${api_getAllThumbnails}?entityId=${packageId}&entityType=PACKAGE`, ApiHeader())
      .then(function (response) {
        if (!response?.data?.error) {
          setthumbnailList(response?.data?.data);
        }
      })
      .catch(function (error) { })
  };


  // ═════════════║ THIS FUNCTION GETS THE THUMBNAIL DATA BY ID║══════════════════
  const fetchThumbnailsByPackageSlug = () => {
    AxiosInterceptors.get(`${api_getAllThumbnailsByPackageSlug}?slug=${service}&entityType=PACKAGE`, ApiHeader())
      .then(function (response) {
        if (!response?.data?.error) {
          setthumbnailList(response?.data?.data);
        }
      })
      .catch(function (error) { })
  };


  useEffect(() => {
    // fetchThumbnails()
    if (service === null) {
      fetchPackageDetails();
      fetchThumbnails()
    } else {
      fetchPackageDetailsBySlug()
      fetchThumbnailsByPackageSlug()
    }
  }, [packageId, service]);

  useEffect(() => {
    if (packageDetails?._id) {
      fetchFaqlist(packageDetails?._id)
    }
  }, [packageDetails]);

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
    )
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <VideoPlayer isVideoPlayer={isVideoPlayer} setisVideoPlayer={setisVideoPlayer} currentVideoUrl={currentVideoUrl} />
      <div className="grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2">
        <main className="grid items-start">
          <section className="bg-background">
            <div className="container px-10 pb-10 mx-auto">

              <div className="grid grid-cols-1 md:grid-cols-2 relative">
                <div className="col-span-1 mt-4">
                  <div className="flex justify-between">
                    <div><h2 className='text-xl font-bold mb-2'>{packageDetails?.title}</h2></div>
                    <div className='font-semibold text-gray-700 text-xl'>₹{packageDetails?.price}</div>
                  </div>


                  <div className=" overflow-hidden w-auto rounded-lg flex justify-center items-center border border-white bg-gray-100 ">
                    {/* ──────────────────── THUMBNAILS SLIDER ───────────────────── */}
                    <div className="w-full ">
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
                          }} className="flex justify-center items-center cursor-pointer " key={index}><LazyImage className={`h-auto ${item?.thumbnailType === "VIDEO" ? 'h-20 w-auto m-auto md:mt-32' : 'w-full  sm:h-auto h-full object-cover sm:object-fill'}`} src={item?.thumbnailType === "VIDEO" ? '/play-button.png' : item?.thumbnailUrl} layout="responsive"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>

                </div>

                <div className="p-6 sticky top-20 left-0">
                  <h1 className="text-xl font-bold">Service Details</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {packageDetails?.MRP > packageDetails?.price && <div className="flex items-center space-x-2">
                      <span className="font-bold">MRP :</span>
                      <span>₹{packageDetails?.MRP}</span>
                    </div>}

                    {packageDetails?.price === 0 && <>
                      <div className="flex items-center space-x-2 mb-2"><span className="text-yellow-700 border border-yellow-700 px-2 rounded-lg font-semibold">Charges On Visit</span>
                      </div>
                      <div></div>
                    </>}
                    {packageDetails?.price !== 0 && <div className="flex items-center space-x-2">
                      <span className="font-bold">Price :</span>
                      <span>₹{packageDetails?.price}</span>
                    </div>}

                    <div className="flex items-center space-x-2">
                      <span className="font-bold">Status :</span>
                      <span>{packageDetails?.isActive ? <span className='bg-green-400 text-white px-4 flex justify-center items-center shadow-lg border border-white rounded-lg text-sm font-semibold'>Active</span> : <span className='bg-red-400 text-white px-4 flex justify-center items-center shadow-lg border border-white rounded-lg text-sm font-semibold'>Disabled</span>}</span>
                    </div>

                  </div>

                  <div className='mt-10'>
                    {/* <Link href={`/services/${packageDetails?.category}/${packageDetails?._id}`}> */}
                    <Link href={`/slot-selection?packageId=${packageDetails?._id}&categoryId=${packageDetails?.category}`}>
                      <Button>
                        <IoMdCart className="inline text-xl mr-2" />
                        Book Now
                      </Button>
                    </Link>
                  </div>

                </div>
              </div>

              {/* ──────────────────── TOGGLE DESCRIPTION ───────────────────── */}
              <div className='mt-10'>
                <div className="w-full">
                  <button
                    onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                    className="flex justify-between w-full py-2 text-left text-lg font-medium text-gray-700 focus:outline-none"
                  > View Description<span className={`transform transition-transform duration-200 ${isAccordionOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {isAccordionOpen && (
                    <>
                      <SpacerHorizontal variant='secondary' />
                      <div className="mt-2 text-sm font-semibold text-gray-600 ">
                        {packageDetails?.subtitle}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* ──────────────────── Feature Lists ───────────────────── */}
              <div className='mt-4' >
                <div className="w-full">
                  <button
                    onClick={() => setisFeaturesOpen(!isFeaturesOpen)}
                    className="flex justify-between w-full py-2 text-left text-lg font-medium text-gray-700 focus:outline-none"
                  > View Features ({packageDetails?.features?.length}) <span className={`transform transition-transform duration-200 ${isFeaturesOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {isFeaturesOpen && (
                    <div className="mt-2 text-lg text-gray-700">
                      <SpacerHorizontal variant='secondary' />
                      <div className='pt-4'>
                        {packageDetails?.features?.map((item, index) => (
                          <div key={item?._id} className="flex gap-2 mb-4 items-center">
                            <div>{index + 1}</div>
                            <div>
                              <div className='text-sm font-semibold text-yellow-600'>{item}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ──────────────────── FAQ Lists ───────────────────── */}
              <div className='mt-4' >
                <div className="w-full">
                  <div
                    className="flex justify-between w-full py-2 text-left text-lg font-medium text-gray-700 focus:outline-none"
                  > Frequently Asked Questions ({faqList?.docs?.length})
                  </div>
                  <div className="mt-2 text-lg text-gray-700">
                    <SpacerHorizontal variant='secondary' />
                    <div className='pt-4'>
                      {faqList?.docs?.map((item, index) => (
                        <div key={item?._id} className="flex gap-2 mb-4">
                          <div>{index + 1}</div>
                          <div>
                            <div className='text-sm font-semibold text-yellow-600'>{item?.question}
                            </div>
                            <p className='text-sm font-semibold text-gray-600 '>{item?.answer}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div >
  )
}


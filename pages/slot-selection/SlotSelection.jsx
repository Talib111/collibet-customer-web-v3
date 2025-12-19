import { useEffect, useState } from "react"
import moment from "moment"
import { ChevronLeft, Info } from "lucide-react"
import ApiList from "@/components/ApiList/ApiList"
import ApiHeader from "@/components/ApiList/ApiHeader"
import AxiosInterceptors from "@/components/ApiList/AxiosInterceptors"
import { useSearchParams } from "next/navigation";
import { useAppContext } from "context/AuthContext"
import { useRouter } from "next/router"
import toast from "react-hot-toast"
import MapClickable from "@/components/map/index"


export default function DateTimeSlotSelection() {
  const [date, setDate] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [showCalendar, setShowCalendar] = useState(true)
  const [isLoading, setisLoading] = useState(false)
  const [slotListData, setslotListData] = useState([])
  const [slotAvailableLimit, setslotAvailableLimit] = useState(null)
  const { user } = useAppContext();
  const [currentMobileNo, setcurrentMobileNo] = useState(user?.mobileNumber)
  const [currentLandmark, setcurrentLandmark] = useState(user?.landmark)
  const [currentAddress, setcurrentAddress] = useState(user?.address)
  const [selectedLatitude, setselectedLatitude] = useState(null)
  const [selectedLongitude, setselectedLongitude] = useState(null)
  const query = useSearchParams();
  const packageId = query.get("packageId")
  const categoryId = query.get("categoryId")
  const isReschedule = query.get("isReschedule")
  const cartId = query.get("cartId")
  const { api_getAllSlotsByCategory, api_cartAdd, api_rescheduleBooking, api_getSlotAvailableLimit } = ApiList()
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(new Date())

  const handleDateSelect = (selectedDate) => {
    fetchSlotList(selectedDate)
    setDate(selectedDate)
    if (selectedDate) {
      setShowCalendar(false)
    }
  }

  const handleBackToCalendar = () => {
    setShowCalendar(true)
    setSelectedSlot(null)
  }

  const fetchSlotList = (selectedDate = null) => {
    AxiosInterceptors.get(`${api_getAllSlotsByCategory}?categoryId=${categoryId}&selectedDate=${selectedDate}`, ApiHeader())
      .then(function (response) {
        if (response?.data?.success) {
          setslotListData(response?.data?.data?.docs);
        }
      })
      .catch(function (error) { })
  };

  const fetchAvailableBookingSlot = () => {
    AxiosInterceptors.get(`${api_getSlotAvailableLimit}/${categoryId}`, ApiHeader())
      .then(function (response) {
        if (response?.data?.success) {
          setslotAvailableLimit(response);
        }
      })
      .catch(function (error) { })
  };

  const addItemToCart = async () => {
    if (currentAddress == '' || currentAddress === null) {
      console.log('address not found')
      toast.error('Please select or enter address !')
      return
    }
    setisLoading(true)

    const tempDate = new Date(date ?? '');
    const localDate = new Date(tempDate.getTime() - tempDate.getTimezoneOffset() * 60000);
    const dateOnlyIso = localDate.toISOString()


    let url = api_cartAdd
    let requestBody
    if (isReschedule === "true") {
      url = api_rescheduleBooking
      requestBody = {
        cartId: cartId,
        // selectedDate: moment(date).toISOString(),
        selectedDate: dateOnlyIso,
        selectedTime: selectedSlot,
        currentMobileNo,
        currentLandmark,
        currentAddress,
        latitude: selectedLatitude || '',
        longitude: selectedLongitude || ''
      }
    } else {
      requestBody = {
        packageId: packageId,
        categoryId: categoryId,
        // selectedDate: moment(date).toISOString(),
        selectedDate: dateOnlyIso,
        selectedTime: selectedSlot,
        currentMobileNo,
        currentLandmark,
        currentAddress,
        latitude: selectedLatitude || '',
        longitude: selectedLongitude || ''
      }
    }

    AxiosInterceptors.post(url, requestBody, ApiHeader())
      .then((result) => {
        if (result.data.error === false) {
          if (isReschedule === 'true') {
            toast.success('Service Rescheduled Successfully!')
            router.push('/Dashboard/bookings')
          } else {
            toast.success('Item added to cart!')
            router.push('/Cart')
          }
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setisLoading(false);
      });
  }

  // ═════════════════║  THIS RETURNS BOOKING LIMIT FOR CURRENT DAY║══════════════════════
  const areSlotsFull = (dateString) => {
    const givenDate = moment(dateString);
    const currentDate = moment();
    const isSameDay = givenDate.isSame(currentDate, "day");
    return isSameDay
  };

  useEffect(() => {
    // fetchSlotList(
    fetchAvailableBookingSlot()
  }, [categoryId])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  console.log('the date is..', date)


  return (
    <div className="flex flex-col min-h-screen bg-white container px-4 py-12 mx-auto text-center">
      <header className="bg-yellow-100 p-4 py-2 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-800">Book Appointment</h1>
      </header>

      <main className="flex-1 p-4">
        <div className="space-y-6">
          {date && !showCalendar && (
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium text-gray-700">{moment(date).format("MMMM D, YYYY")}</p>
              <button
                onClick={handleBackToCalendar}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Change Date
              </button>
            </div>
          )}

          {showCalendar ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
              <div className="border rounded-md p-2">
                <Calendar selected={date} onSelect={handleDateSelect} />
              </div>
            </div>
          ) : (
            <div>
              {/* __________________________ SHOW SLOT IF BOOKING LIMIT IS NOT REACHED FOR CURENT DAY_________________________________ */}
              {areSlotsFull(date) && slotAvailableLimit?.data?.data?.maxBookingLimit > slotAvailableLimit?.data?.data?.totalBookedServices && <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Time Slot</label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {slotListData?.map((slot) => {

                    const [startTime] = slot?.slotData?.slot.split(" - ");

                    const slotTime = moment(startTime, "h:mm A").set({
                      year: moment(date).year(),
                      month: moment(date).month(),
                      date: moment(date).date(),
                      second: 0,
                      millisecond: 0,
                    });

                    const currentTimeMoment = moment(currentTime);
                    const isAfterNextHour = slotTime.isSameOrAfter(currentTimeMoment.add(1, "hour"));

                    return (
                      <button
                        disabled={slot?.status === 0 || !isAfterNextHour || slot?.isEnabled === false}
                        key={slot?._id}
                        className={`relative justify-start px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      ${selectedSlot === slot?.slotData?.slot
                            ? "bg-indigo-600 text-white"
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-600 hover:text-white"
                          }
                      ${slot?.isEnabled === false && "border-red-600 text-red-600 overflow-hidden cursor-not-allowed"} 
                      ${!isAfterNextHour && "border-red-600 text-red-600 hover:text-red-600 overflow-hidden cursor-not-allowed hover:bg-white  "}
                      `}
                        onClick={() => setSelectedSlot(slot?.slotData?.slot)}
                      >

                        {!isAfterNextHour && (
                          <span className="absolute -top-1 -right-1 text-[8px] text-white bg-red-500 px-1 rounded-sm">
                            Not Available
                          </span>
                        )}

                        {slot?.isEnabled === false && (
                          <span className="absolute -top-1 -right-1 text-[8px] text-white bg-red-500 px-1 rounded-sm">
                            Slot Full
                          </span>
                        )}
                        {slot?.slotData?.slot}
                      </button>
                    )
                  }

                  )}
                </div>
              </div>}

              {/* __________________________NO CONDITION FOR ANOTHER DAY_________________________________ */}
              {!areSlotsFull(date) && <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Time Slot</label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {slotListData?.map((slot) => (
                    <button
                      disabled={slot?.status === 0 || slot.isEnabled === false}
                      key={slot?._id}
                      className={`relative justify-start px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      ${selectedSlot === slot?.slotData?.slot
                          ? "bg-indigo-600 text-white"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-600 hover:text-white"
                        }
                      ${slot?.isEnabled === false && "border-red-600 text-red-600 overflow-hidden cursor-not-allowed"}`}
                      onClick={() => setSelectedSlot(slot?.slotData?.slot)}
                    >
                      {slot?.isEnabled === false && (
                        <span className="absolute -top-1 -right-1 text-[8px] text-white bg-red-500 px-1 rounded-sm">
                          Slot Full
                        </span>
                      )}
                      {slot?.slotData?.slot}
                    </button>
                  ))}
                </div>
              </div>}

              {/* __________________________ SLOT FULL MESSAGE _________________________________ */}
              {areSlotsFull(date) && slotAvailableLimit?.data?.data?.maxBookingLimit <= slotAvailableLimit?.data?.data?.totalBookedServices && <div>
                <label className="text-sm font-medium text-red-500 mb-2 border border-red-500 rounded-md p-2 flex gap-1 items-center"><Info size={18} className="inline" /> All Slots are full, Please select other days</label>
              </div>}
            </div>
          )}

          {date && selectedSlot && (
            <>
              <MapClickable setcurrentAddress={setcurrentAddress} setselectedLatitude={setselectedLatitude} setselectedLongitude={setselectedLongitude} />

              <div className="space-y-6 w-full max-w-md mx-auto mt-4">
                <div className="space-y-2">
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-500 text-left ">
                    Current Address
                  </label>
                  <textarea
                    id="address"
                    value={currentAddress}
                    onChange={(e) => setcurrentAddress(e.target.value)}
                    placeholder="eg: abc colony, ranchi"
                    rows={4}
                    className="form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md "
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-left block text-sm font-semibold text-gray-500">
                    Current Mobile No.
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    value={currentMobileNo}
                    onChange={(e) => setcurrentMobileNo(e.target.value)}
                    className="form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md h-10"
                  />
                </div>

              </div>
              <button
                onClick={addItemToCart}
                disabled={isLoading}
                className="w-full mt-4 px-4 py-2 text-sm font-medium text-black bg-[#FFEB3B] hover:bg-[#decf4b] rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Loading..." : "Confirm Booking"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

function Calendar({ selected, onSelect }) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const renderDays = () => {
    const days = []
    const totalDays = daysInMonth(currentMonth)
    const firstDay = firstDayOfMonth(currentMonth)

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>)
    }

    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      const isSelected = selected && date.toDateString() === selected.toDateString()
      days.push(
        <button
          key={i}
          onClick={() => onSelect(date)}
          className={`h-10 w-10 rounded-full flex items-center justify-center
            ${isSelected ? "bg-indigo-600 text-white" : "hover:bg-gray-200"}
            ${date < new Date().setHours(0, 0, 0, 0) ? "text-gray-400 cursor-not-allowed" : "cursor-pointer"}`
          }
          // disabled={date < new Date()}
          disabled={date < new Date().setHours(0, 0, 0, 0)}
        >
          {i}
        </button>,
      )
    }

    return days
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="p-2">
          &lt;
        </button>
        <h2 className="text-lg font-semibold">
          {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
        </h2>
        <button onClick={nextMonth} className="p-2">
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium text-gray-500">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  )
}


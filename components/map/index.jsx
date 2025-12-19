import { useState, useCallback } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { Loader2 } from "lucide-react"

const GOOGLE_MAPS_API_KEY = "AIzaSyA7xsi1TW3eYYccxqyd0T4aQXDRTmzHd8U"

const containerStyle = {
  width: "100%",
  height: "400px",
}

// Center coordinates for Kantoli, Ranchi, Jharkhand
const initialCenter = {
  lat: 23.3441,
  lng: 85.3096,
}

const GoogleMapSelector = ({ setcurrentAddress, setselectedLatitude, setselectedLongitude }) => {
  const [center, setCenter] = useState(initialCenter)
  const [selectedLocation, setSelectedLocation] = useState(initialCenter)
  const [isLoading, setIsLoading] = useState(false)

  const onMarkerDragEnd = useCallback(async (e) => {
    if (e.latLng) {
      const lat = e.latLng.lat()
      const lng = e.latLng.lng()
      await updateSelectedLocation(lat, lng)
    }
  }, [])

  const onMapClick = useCallback(async (e) => {
    if (e.latLng) {
      const lat = e.latLng.lat()
      const lng = e.latLng.lng()
      await updateSelectedLocation(lat, lng)
    }
  }, [])

  const updateSelectedLocation = async (lat, lng) => {
    setIsLoading(true)
    setSelectedLocation({ lat, lng })
    setCenter({ lat, lng })

    // Get the physical address using Geocoding service
    const geocoder = new google.maps.Geocoder()
    try {
      const result = await new Promise((resolve, reject) => {
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
          if (status === "OK" && results) {
            resolve(results)
          } else {
            reject(new Error(`Geocoding failed due to: ${status}`))
          }
        })
      })

      if (result[0]) {
        const address = result[0].formatted_address
        console.log("Selected Location:")
        console.log(`Latitude: ${lat}`)
        console.log(`Longitude: ${lng}`)
        console.log(`Address: ${address}`)
        setcurrentAddress(address)
        setselectedLatitude(lat)
        setselectedLongitude(lng)
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <div className="relative rounded-lg overflow-hidden">
      <div className="font-semibold text-amber-500">Drage & Click to Choose Address</div>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} onClick={onMapClick}>
          <Marker position={selectedLocation} draggable={true} onDragEnd={onMarkerDragEnd} />
        </GoogleMap>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        )}
      </div>
    </LoadScript>
  )
}

export default GoogleMapSelector


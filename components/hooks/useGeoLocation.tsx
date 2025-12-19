import { useGeolocated } from 'react-geolocated';

export default function useGeoLocation() {
  const {
    isGeolocationAvailable,
    isGeolocationEnabled,
    getPosition,
    coords,
    positionError,
    timestamp
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
      timeout: Infinity,
      maximumAge: 0
    },
    watchPosition: true,
    userDecisionTimeout: 5000
  });

  return {
    isGeolocationAvailable,
    isGeolocationEnabled,
    coords,
    positionError,
    timestamp,
    getPosition
  };
}

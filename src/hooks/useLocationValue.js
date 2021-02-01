import { useState, useEffect } from 'react';
import { getLocation } from '../utils/api/location';

function useLocationValue() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const request = async () => {
      const { data } = await getLocation();
      setLocation({
        latitude: data.latitude,
        longitude: data.longitude,
      });
    };
    request();
  }, []);

  return { location };
}

export default useLocationValue;

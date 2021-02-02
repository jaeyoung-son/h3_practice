import { useState, useEffect } from 'react';
import { getLocation } from '../../utils/api/location';

function useLocationValue() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await getLocation();
        setLocation({
          latitude: data.latitude,
          longitude: data.longitude,
        });
      } catch (e) {
        console.log(3);
      }
    };
    request();
  }, []);

  return { location };
}

export default useLocationValue;

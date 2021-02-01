import { useEffect, useRef } from 'react';
import './Map.css';
import { MAP_POSITION } from '../../config/config';
import useLocationValue from '../../hooks/useLocationValue';

function Map() {
  const mapElement = useRef(null);
  const { location } = useLocationValue();
  console.log(location);

  useEffect(() => {
    let map;
    if (window.google) {
      map = new window.google.maps.Map(mapElement.current, {
        center: { lat: MAP_POSITION.lat, lng: MAP_POSITION.long },
        zoom: 10,
      });
    }
  }, []);

  return <div className="map_container" ref={mapElement}></div>;
}

export default Map;

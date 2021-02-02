import { useEffect, useRef } from 'react';
import './Map.css';
import { MAP_POSITION } from '../../config/config';
import useLocationValue from '../../hooks/h3/useLocationValue';
import Button from './Button';

function Map() {
  const { location } = useLocationValue();
  const mapElement = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (window.google) {
      mapInstance.current = new window.google.maps.Map(mapElement.current, {
        center: { lat: MAP_POSITION.lat, lng: MAP_POSITION.long },
        zoom: 10,
      });
    }
  }, []);

  return (
    <>
      <div className="map_container" ref={mapElement}></div>
      <Button location={location} mapInstance={mapInstance} />
    </>
  );
}

export default Map;

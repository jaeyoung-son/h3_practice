import { useEffect, useRef } from 'react';
import './Map.css';
import { MAP_POSITION } from '../../config/config';
import useLocationValue from '../../hooks/h3/useLocationValue';
import usePolygon from '../../hooks/h3/usePolygon';
import Button from './Button';

function Map() {
  const mapElement = useRef(null);
  const mapInstance = useRef(null);

  const { location } = useLocationValue();
  const { polygonState, handleClick } = usePolygon(mapInstance, location);

  useEffect(() => {
    if (window.google) {
      mapInstance.current = new window.google.maps.Map(mapElement.current, {
        center: { lat: MAP_POSITION.lat, lng: MAP_POSITION.long },
        zoom: 10,
      });
    }
  }, []);

  return (
    <section>
      <div className="map_container" ref={mapElement}></div>
      <Button polygonState={polygonState} handleClick={handleClick} />
    </section>
  );
}

export default Map;

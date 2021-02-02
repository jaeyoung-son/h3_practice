import { useState } from 'react';
import { geoToH3, h3ToGeoBoundary, kRing, h3SetToMultiPolygon } from 'h3-js';

function usePolygon(mapInstance, location) {
  const [polygonState, setPolygonState] = useState('다각형확인');

  const checkPolygon = () => {
    const h3Index = geoToH3(location.latitude, location.longitude, 7);
    const hexBoundary = h3ToGeoBoundary(h3Index);

    const coords = hexBoundary.map((el) => ({
      lat: el[0],
      lng: el[1],
    }));

    const polygon = new window.google.maps.Polygon({
      paths: coords,
      strokeColor: 'black',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000ff',
      fillOpacity: 0.5,
    });

    polygon.setMap(mapInstance.current);
  };

  const sidePolygon = () => {
    const h3Index = geoToH3(location.latitude, location.longitude, 7);
    const h3Indexes = kRing(h3Index, 1);
    const multiPolygon = h3SetToMultiPolygon(h3Indexes);
    const coords = multiPolygon[0][0].map((el) => ({
      lat: el[0],
      lng: el[1],
    }));
    const polygon = new window.google.maps.Polygon({
      paths: coords,
      strokeColor: 'black',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#ff0000',
      fillOpacity: 0.5,
    });
    polygon.setMap(mapInstance.current);
  };

  const handleClick = () => {
    if (polygonState === '다각형확인') {
      checkPolygon();
      setPolygonState('주변다각형');
    }
    if (polygonState === '주변다각형') {
      sidePolygon();
    }
  };
  return { polygonState, handleClick };
}

export default usePolygon;

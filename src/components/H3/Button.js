import './Button.css';
import usePolygon from '../../hooks/h3/usePolygon';

function Button({ mapInstance, location }) {
  const { polygonState, handleClick } = usePolygon(mapInstance, location);

  return (
    <div className="button_container">
      <button onClick={handleClick} className="map_button">
        {polygonState}
      </button>
    </div>
  );
}

export default Button;

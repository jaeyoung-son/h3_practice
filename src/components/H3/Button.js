import './Button.css';

function Button({ polygonState, handleClick }) {
  return (
    <div className="button_container">
      <button onClick={handleClick} className="map_button">
        {polygonState}
      </button>
    </div>
  );
}

export default Button;

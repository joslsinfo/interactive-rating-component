import React, { useState } from "react";

const Buttons = ({ onClick, onMouseEnter, children }) => {
  const [number, setNumber] = useState(1);
  // Une fonction pour décrémenter
  const handleNumberClick = () => {
    setNumber(number - 1);
  };
  // Une fonction pour incrémenter
  const handleNumberMouse = () => {
    setNumber(number + 1);
  };

  return (
    <div className="button-group-container">
      {/* {children} */}
      <button
        className="btn-number"
        onMouseEnter={handleNumberMouse}
        onClick={handleNumberClick}
      >
        {number}
      </button>
      <button
        className="btn-number"
        onMouseEnter={handleNumberMouse}
        onClick={handleNumberClick}
      >
        {number + 1}
      </button>
      <button
        className="btn-number"
        onMouseEnter={handleNumberMouse}
        onClick={handleNumberClick}
      >
        {number + 2}
      </button>
      <button
        className="btn-number"
        onMouseEnter={handleNumberMouse}
        onClick={handleNumberClick}
      >
        {number + 3}
      </button>
      <button
        className="btn-number"
        onMouseEnter={handleNumberMouse}
        onClick={handleNumberClick}
      >
        {number + 4}
      </button>
    </div>
  );
};

export default Buttons;

import React, { useState } from "react";

const IncrementButton = () => {
  const [countNumber, setCountNumber] = useState(1);

  const handleChangeCountNumberClick = () => {
    setCountNumber(countNumber + 1);
  };

  return (
    <div className="btn-counter">
      <button className="btn-submit" onClick={handleChangeCountNumberClick}>
        Number : {countNumber}
      </button>
    </div>
  );
};

export default IncrementButton;

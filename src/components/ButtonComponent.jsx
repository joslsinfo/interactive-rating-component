import React, { useState } from "react";
// import React from "react";

const ButtonComponent = ({ src, alt, loading = "lazy", children }) => {
  const [message, setMessage] = useState("");
  const handleButtonClick = (e) => {
    // alert(e.target.innerHTML);
    // alert("You click me!");
    // console.log(e);

    setMessage("Message envoyé avec succès !");
  };

  const handleButtonMouse = (e) => {
    // setMessage("");
    setMessage(
      <div className="message">
        <img className="image2" src={src} alt={alt} loading={loading} /> <br />
        <span className="paraSpan">Thank you !</span>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    );
  };

  return (
    <div>
      <p className="textColor">{message}</p> <br />
      <button
        className="btn-submit"
        onClick={handleButtonClick}
        onMouseLeave={handleButtonMouse}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;

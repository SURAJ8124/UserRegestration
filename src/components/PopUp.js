import React from "react";

function PopUp({ message,showPopUp }) {
  const handleOnClick = () => {
    window.location.href="/";
  };

  return (
    <div className={`popup ${showPopUp ? "show" : ""}`}>
    <div className="popup-inner">
      <p>{message}</p>
      <button onClick={handleOnClick}>Close</button>
    </div>
  </div>
  );
}

export default PopUp;

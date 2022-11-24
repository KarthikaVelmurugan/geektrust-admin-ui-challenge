/* Custom Toast Component */

import React, { useEffect, useState } from "react";
import "./CustomAlert.css"
const CustomAlert = ({ alert, setAlert }) => {
  const MINUTE_MS = 4000;
  useEffect(() => {
    if (alert.type === "error") {
      document.getElementById("alert").style.backgroundColor =
        "rgb(243, 72, 72)";
    }
    else if (alert.type === "success") {
      document.getElementById("alert").style.backgroundColor =
        "#5841a8";
    }
    
    /* Controlling the auto close */  
    
    setInterval(() => {
      setAlert({
        active: false,
        type: null,
        message: null,
      });
    }, MINUTE_MS);
  });

  /* Handle the close icon click */
  
  const handleClose = () => {
    setAlert({
      active: false,
      type: null,
      message: null,
    });
  };
  return (
    <div
      className={alert && alert.active === true ? "alert" : "hidden"}
      id="alert"
    >
      <span className="closebtn" onClick={handleClose}>
        {/* &times; */}
      </span>
      {alert.message}
    </div>
  );
};

export default CustomAlert;
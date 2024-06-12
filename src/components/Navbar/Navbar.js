import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      {/* left  */}
      <div className="navbar-logo-container">
        <p>LOGO</p>
      </div>
      {/* right  */}
      <div className="navbar-options-container">
        <p>Hi, Name!</p>
        <p>Home</p>
        <button className="navbar-btn">Logout</button>
      </div>
    </div>
  );
}
export default Navbar;

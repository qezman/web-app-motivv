import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../styles/style.css";

export default function NavBar() {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  let Logo =
    "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
  return (
    <nav style={{ backgroundColor: "#134a7c" }}>
      <div className="d-flex justify-content-around align-items-center px-3 py-2 pt-4">
        <img src={Logo} alt="" width="100px" height="auto" />

        <div className="d-flex justify-content-around align-items-center white pt-3 ">
          <p>Motivv Products</p>
          <p className="pl-2">Pricing</p>
        </div>

        <button className="btn-nav">🚀 Get Curriculum</button>
      </div>
    </nav>
  );
}

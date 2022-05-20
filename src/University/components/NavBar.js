import React, { useState } from "react";
import "../styles/style.css";
import { DropDown } from "../../DesignSchool/components/Dropdown/Dropdown";
import { ReactComponent as DropDownSvg } from "../../assets/dropdown.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [dropdownShow, setDropdownShow] = useState(false);
  let Logo =
    "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
  return (
    <nav style={{ backgroundColor: "#134a7c" }}>
      <div className="d-flex justify-content-around align-items-center px-3 py-2 pt-4">
        <Link to="/">
          <img src={Logo} alt="" width="100px" height="auto" />
        </Link>

        {/* <div className="d-flex justify-content-around align-items-center white pt-3 ">
          <p>Motivv Products</p>
          <p className="pl-2">Pricing</p>
        </div> */}

        <div className="navbar mot-school-nav">
          <span
            className="mot-school-link"
            onClick={() => setDropdownShow(!dropdownShow)}
            style={{ color: "white" }}
          >
            Motivv Products
            <DropDownSvg />
          </span>
          <DropDown state={dropdownShow} />
        </div>
        <div
          className="sm-mot-school-nav"
          onClick={() => setDropdownShow(!dropdownShow)}
        >
          <DropDownSvg />
          <DropDown state={dropdownShow} />
        </div>

        <button className="btn-nav">🚀 Get Curriculum</button>
      </div>
    </nav>
  );
}

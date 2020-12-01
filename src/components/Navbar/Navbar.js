import React from "react";
import { Logo, Profile } from "../../SvgComponents";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="container">
        <div className="d-flex flex-space-between align-items-center pt-1 pb-1 ">
          <div className="logo d-flex align-items-center">
            <Logo width={60} height={61} />
            <div className="bold-font">Intugine</div>
          </div>
          <div className="nav-links d-flex align-items-center">
            <div className="bold-font cursor-pointer">Home</div>
            <div className="ml-1 bold-font cursor-pointer">Brands</div>
            <div className="ml-1 bold-font cursor-pointer">Transporters</div>
            <div className="d-flex ml-1 align-items-center">
              <div className="profile-container d-flex flex-center cursor-pointer">
                <Profile width={27} height={26} />
              </div>
              <i className="fa fa-angle-down ml-1 bold-font nav-link-icon cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

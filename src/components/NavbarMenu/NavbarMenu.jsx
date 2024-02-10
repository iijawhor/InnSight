import React from "react";
import "./NavbarMenu.css";
function NavbarMenu() {
  return (
    <div className="navbarMenuComponent">
      <div className="navbarMenuAuthenticationOption">
        <button className="navbarMenuComponentOptionButton">Sign Up</button>
        <button className="navbarMenuComponentOptionButton">Sign In</button>
      </div>
      <div className="navbarMenuOptions">
        <button className="navbarMenuComponentOptionLink">
          InnSight your home
        </button>
        <button className="navbarMenuComponentOptionLink">Help center</button>
      </div>
    </div>
  );
}

export default NavbarMenu;

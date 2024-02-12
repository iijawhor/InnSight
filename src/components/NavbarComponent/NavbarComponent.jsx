import React, { useState } from "react";
import "./NavbarComponent.css";
import {
  Logo,
  MenuIcon,
  LanguageIcon,
  AccountCircleIcon,
  NavbarMenu
} from "../../exports/export";
function NavbarComponent() {
  const [active, setActive] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const navbarLinks = [
    {
      name: "Stays",
      slug: "/stays",
      id: 1
    },
    {
      name: "Experiences",
      slug: "/experiences",
      id: 2
    },
    {
      name: "OnlineExperiences",
      slug: "/online-experiences",
      id: 3
    }
  ];
  const handleActive = (id) => {
    setActive(id === active ? null : id);
  };
  return (
    <section className="navbarComponent">
      <div className="navbarRight">
        <Logo className="navbarLogo" />
        <p className="navbarItem navbarRightInnSightHome">InnSight Home</p>
        <LanguageIcon
          className="navbarIcon navbarItem"
          style={{
            color: "black",
            fontSize: "18px",
            margin: "0",
            padding: "0"
          }}
        />
        <div className="navbarMenu" onClick={() => setToggleMenu(!toggleMenu)}>
          <MenuIcon
            className="navbarIcon navbarItem"
            style={{
              color: "black",
              fontSize: "18px",
              margin: "0",
              padding: "0"
            }}
          />
          <AccountCircleIcon
            className="navbarIcon navbarItem"
            style={{
              color: "black",
              fontSize: "18px",
              margin: "0",
              padding: "0"
            }}
          />
        </div>
        {toggleMenu && <NavbarMenu />}
      </div>
      <div className="navbarItemContainer">
        <ul className="navbarItems">
          {navbarLinks.map((navbarItems) => (
            <li
              className={`navbarItem ${
                navbarItems.id === active ? "active" : ""
              }`}
              key={navbarItems.id}
              onClick={() => handleActive(navbarItems.id)}
            >
              {navbarItems.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default NavbarComponent;

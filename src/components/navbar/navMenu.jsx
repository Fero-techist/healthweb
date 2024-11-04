import React from "react";
import { Link } from "react-scroll";

const NavMenu = ({ menu, handleMenu, clicked }) => {
  return (
    <Link
      to={menu.path} // Scroll to the section with this ID
      smooth={true} // Enables smooth scrolling
      duration={500} // Adjusts scrolling speed in ms
      offset={-70} // Optional: Offset for fixed headers
      className={`${clicked === menu ? "text-deepBlue" : ""} cursor-pointer`}
      onClick={() => handleMenu(menu)}
    >
      {menu.text}
    </Link>
  );
};

export default NavMenu;

import React from "react";

const NavMenu = ({ menu, handleMenu, clicked }) => {
  return (
    <div
      className={`${clicked === menu ? "text-deepBlue" : ""} cursor-pointer`}
      onClick={() => handleMenu(menu)}
    >
      {menu.text}
    </div>
  );
};

export default NavMenu;

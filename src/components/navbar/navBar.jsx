import React, { useState } from "react";
import Button from "../auth/button";
import NavMenu from "./navMenu";
import { RiMenu3Fill } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";

const navMenu = [
  { id: 1, path: "", text: "Home" },
  { id: 2, path: "", text: "Services" },
  { id: 3, path: "", text: "Doctors" },
  { id: 4, path: "", text: "About Us" },
  { id: 5, path: "", text: "Contact Us" },
];

const NavBar = ({ handleSignUp }) => {
  const [isClicked, setIsClicked] = useState(navMenu[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = (menu) => {
    setIsClicked(menu);
  };

  const hanldeMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-center justify-between lg:px-24 px-4 py-4">
      <h1 className="font-bold text-deepBlue">
        Hospital <span className="text-deepGrey">logo</span>
      </h1>
      <ul className="md:flex hidden items-center gap-5 font-semibold">
        {navMenu.map((item) => (
          <NavMenu
            menu={item}
            key={item.id}
            handleMenu={handleMenu}
            clicked={isClicked}
          />
        ))}
      </ul>

      {/* Autn button */}
      <div className="md:flex hidden items-center gap-3">
        <Button text={"Sign In"} css={"font-semibold py-2 text-white"} />
        <Button
          text={"Sign Up"}
          css={
            "font-semibold py-2 bg-white border-[1px] border-deepBlue text-deepBlue"
          }
          onClick={handleSignUp}
        />
        {/* <SignUpBtn signUp={"Sign Up"} /> */}
      </div>

      {/* mobile-menu */}
      <div className="block md:hidden text-2xl" onClick={hanldeMobileMenu}>
        {isOpen ? <LiaTimesSolid /> : <RiMenu3Fill />}
      </div>

      {/* mobile-menu */}
      {isOpen && (
        <section className="bg-white px-2 h-[100vh] w-[70%] py-4 flex md:flex flex-col gap-8 lg:hidden fixed z-20 top-0">
          <div className="lg:text-2xl text-lg font-extrabold md:font-bold flex items-center relative gap-1">
            <h1 className="font-bold text-deepBlue">
              Hospital <span className="text-deepGrey">logo</span>
            </h1>
          </div>

          <ul className="flex flex-col gap-4 text-deepGrey font-medium">
            {navMenu.map((item) => (
              <NavMenu
                menu={item}
                key={item.id}
                handleMenu={handleMenu}
                clicked={isClicked}
              />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default NavBar;

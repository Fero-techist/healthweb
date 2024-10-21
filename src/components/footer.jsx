import React from "react";

function Footer() {
  return (
    <div className="bg-lightGrey py-12 md:px-24 px-6 flex md:flex-row flex-col gap-8 md:gap-0 items-start justify-between ">
      <div className="md:w-[40%] w-[100%] flex flex-col gap-3">
        <h1 className="font-bold text-2xl text-deepBlue">
          Hospital <span className="text-deepGrey">logo</span>
        </h1>

        <p className="text-xl">Card Title</p>
        <p>
          Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sit rhoncus imperdiet nisi.
        </p>
      </div>

      <ul className="flex flex-col gap-2">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
      <ul className="flex flex-col gap-2">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>

      <ul className="flex flex-col gap-2">
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </div>
  );
}

export default Footer;

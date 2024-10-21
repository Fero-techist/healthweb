import React from "react";

const Button = ({ text, css, icon, onClick }) => {
  return (
    <div
      className={`bg-deepBlue flex items-center gap-2 px-7 rounded-lg cursor-pointer ${css}`}
      onClick={onClick}
    >
      {text}
      {icon}
    </div>
  );
};

export default Button;

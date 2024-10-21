import React from "react";

const Services = ({ service, isSelected, handleSelected, setIsSelected }) => {
  return (
    <div className="flex items-center md:gap-3 gap-1 overflow-x-scroll md:overflow-hidden justify-center my-4 md:mx-24 pl-24 md:pl-0">
      {service.map((item) => (
        <div
          className={`shadow-lg rounded-lg  px-4 py-3 text-center md:w-[20rem] w-[8rem] cursor-pointer h-[6rem] flex items-center justify-center flex-col md:h-[10rem]  ${
            isSelected === item ? "bg-deepBlue text-white" : "bg-white"
          }`}
          onClick={() => handleSelected(item)}
          key={item.id}
        >
          <img
            src={item.icon}
            className={`md:w-10 w-5 mx-auto mb-5 ${
              isSelected === item ? "text-white" : "text-deepBlue"
            }`}
            alt=""
          />
          <p className="md:text-[0.8rem] text-[0.6rem] md:w-[10rem] w-[5rem]">
            {item.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;

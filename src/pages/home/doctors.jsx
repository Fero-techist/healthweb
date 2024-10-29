import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/auth/button";

const Doctors = ({ doctor, docRef }) => {
  const navigate = useNavigate();

  const handleBookAppointment = (doctorId) => {
    navigate(`/book-appointment/${doctorId}`);
  };

  return (
    <div
      className="flex items-center justify-center"
      ref={docRef}
    >
      <div className="grid items-center gap-10 justify-center md:grid-cols-2 grid-cols-1">
        {doctor.map((item) => (
          <div
            className="flex flex-col gap-4 py-4 px-4 rounded-lg items-center shadow-lg w-[20rem] h-[27rem]"
            key={item.id}
          >
            <div className="bg-deepBlue w-[15rem] h-[15rem] rounded-lg">
              <img
                src={item.img}
                alt=""
                className=""
              />
            </div>
            <h1 className="font-semibold">Dr. {item.name}</h1>
            <p>{item.category}</p>
            <img
              src="assets/Raiting.png"
              alt="Rating"
            />
            <Button
              css="bg-white rounded-2xl text-deepBlue border-[1px] border-deepBlue py-2 px-6"
              text="Book an appointment"
              onClick={() => handleBookAppointment(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;

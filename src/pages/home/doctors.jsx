// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Button from "../../components/auth/button";

// const Doctors = ({ doctor, docRef }) => {
//   // const navigate = useNavigate();

//   // const handleBookAppointment = (doctorId) => {
//   //   navigate(`/bookingappointment/${doctorId}`);
//   // };

//   return (
//     <div
//       className="flex items-center justify-center"
//       ref={docRef}
//     >
//       <div className="grid items-center gap-10 justify-center md:grid-cols-2 grid-cols-1">
//         {doctor.map((item) => (
//           <div
//             className="flex flex-col gap-4 py-4 px-4 rounded-lg items-center shadow-lg w-[20rem] h-[27rem]"
//             key={item.id}
//           >
//             <div className="bg-deepBlue w-[15rem] h-[15rem] rounded-lg">
//               <img
//                 src={item.img}
//                 alt=""
//                 className=""
//               />
//             </div>
//             <h1 className="font-semibold">Dr. {item.name}</h1>
//             <p>{item.category}</p>
//             <img
//               src="assets/Raiting.png"
//               alt="Rating"
//             />
//             <Link to={`/BookingAppointment/${item.id}`}>
//               <Button
//                 css="bg-white rounded-2xl text-deepBlue border-[1px] border-deepBlue py-2 px-6"
//                 text="Book an appointment"
//               />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Doctors;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/auth/button";

const Doctors = ({ doctor, docRef }) => {
  return (
    <div
      className="flex items-center justify-center"
      ref={docRef}
    >
      <div className="grid items-center gap-10 justify-center md:grid-cols-2 grid-cols-1">
        {doctor.map((item) => (
          <div
            className="flex flex-col gap-8 py-4 px-4 rounded-lg items-center shadow-lg w-[30rem]"
            key={item.id}
          >
            <div className="bg-deepBlue w-[18rem] h-[18rem] rounded-lg flex items-center justify-center">
              <img
                src={item.img}
                alt={`Profile of Dr. ${item.name}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h1 className="font-semibold">Dr. {item.name}</h1>
            <p>{item.category}</p>
            <img
              src="assets/Raiting.png"
              alt="Doctor Rating"
              className="w-[5rem]" // Example class, adjust as needed
            />
            <Link to={`/BookingAppointment/${item.id}`}>
              <Button
                css="bg-white hover:bg-deepBlue hover:text-white rounded-2xl text-deepBlue border-[1px] border-deepBlue py-2 px-6"
                text="Book an appointment"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default Doctors;

// import React from "react";
// import Home from "./pages/home/home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BookingAppointment from "./pages/home/BookingAppointment";

// const doctors = [
//   {
//     id: 1,
//     category: "Optician",
//     img: "/assets/doc1.png",
//     name: "Charles Roberts",
//   },
//   {
//     id: 2,
//     category: "Optician",
//     img: "/assets/doc2.png",
//     name: "Harry Littleton",
//   },
//   {
//     id: 3,
//     category: "Optician",
//     img: "/assets/doc3.png",
//     name: "Sharina Khan",
//   },
//   {
//     id: 4,
//     category: "Optician",
//     img: "/assets/doc4.png",
//     name: "Sanjeev Khapor",
//   },
//   {
//     id: 5,
//     category: "Surgeons",
//     img: "/assets/doc3.png",
//     name: "Harry Littleton",
//   },
//   {
//     id: 6,
//     category: "Surgeons",
//     img: "/assets/doc4.png",
//     name: "Sharina Khan",
//   },
//   {
//     id: 7,
//     category: "Surgeons",
//     img: "/assets/doc2.png",
//     name: "Charles Roberts",
//   },
//   {
//     id: 8,
//     category: "Surgeons",
//     img: "/assets/doc1.png",
//     name: "Harry Littleton",
//   },
//   {
//     id: 9,
//     category: "Cardiologists",
//     img: "/assets/doc2.png",
//     name: "Sharina Khan",
//   },
//   {
//     id: 10,
//     category: "Cardiologists",
//     img: "/assets/doc4.png",
//     name: "Charles Roberts",
//   },
//   {
//     id: 11,
//     category: "Cardiologists",
//     img: "/assets/doc1.png",
//     name: "Harry Littleton",
//   },
//   {
//     id: 12,
//     category: "Cardiologists",
//     img: "/assets/doc3.png",
//     name: "Sharina Khan",
//   },

//   {
//     id: 14,
//     category: "Physiotherapists",
//     img: "/assets/doc2.png",
//     name: "Harry Littleton",
//   },
//   {
//     id: 15,
//     category: "Physiotherapists",
//     img: "/assets/doc3.png",
//     name: "Sharina Khan",
//   },
//   {
//     id: 13,
//     category: "Physiotherapists",
//     img: "/assets/doc1.png",
//     name: "Charles Roberts",
//   },
//   {
//     id: 16,
//     category: "Physiotherapists",
//     img: "/assets/doc4.png",
//     name: "Charles Roberts",
//   },
// ];

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<Home />}
//         />
//         <Route
//           path="/BookingAppointment/:doctorId"
//           element={<BookingAppointment doctors={doctors} />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingAppointment from "./pages/home/BookingAppointment";
import DoctorLogin from "./pages/home/DoctorLogin";
import DoctorDashboard from "./pages/home/DoctorDashboard";



const doctors = [
  {
    id: 1,
    category: "Optician",
    img: "/assets/Bdoc.png",
    name: "Charles Roberts",
  },
  {
    id: 2,
    category: "Optician",
    img: "/assets/doc2.png",
    name: "Harry Littleton",
  },
  {
    id: 3,
    category: "Optician",
    img: "/assets/doc3.png",
    name: "Sharina Khan",
  },
  {
    id: 4,
    category: "Optician",
    img: "/assets/doc4.png",
    name: "Sanjeev Khapor",
  },

  {
    id: 5,
    category: "Surgeons",
    img: "/assets/female.png",
    name: "Harry Littleton",
  },
  {
    id: 6,
    category: "Surgeons",
    img: "/assets/doc4.png",
    name: "Sharina Khan",
  },
  {
    id: 7,
    category: "Surgeons",
    img: "/assets/male.png",
    name: "Charles Roberts",
  },
  {
    id: 8,
    category: "Surgeons",
    img: "/assets/doc1.png",
    name: "Harry Dave",
  },
  {
    id: 9,
    category: "Cardiologists",
    img: "/assets/doc2.png",
    name: "Sharina Khan",
  },
  {
    id: 10,
    category: "Cardiologists",
    img: "/assets/doc4.png",
    name: "Charles Roberts",
  },
  {
    id: 11,
    category: "Cardiologists",
    img: "/assets/doc1.png",
    name: "Harry Littleton",
  },
  {
    id: 12,
    category: "Cardiologists",
    img: "/assets/doc3.png",
    name: "Sharina Khan",
  },
  {
    id: 14,
    category: "Physiotherapists",
    img: "/assets/doc2.png",
    name: "Harry Littleton",
  },
  {
    id: 15,
    category: "Physiotherapists",
    img: "/assets/doc3.png",
    name: "Sharina Khan",
  },
  {
    id: 13,
    category: "Physiotherapists",
    img: "/assets/doc1.png",
    name: "Charles Roberts",
  },
  {
    id: 16,
    category: "Physiotherapists",
    img: "/assets/doc4.png",
    name: "George Roberts",
  },
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home doctors={doctors} />} // Pass doctors to Home if needed
        />
        <Route
          path="/BookingAppointment/:doctorId"
          element={<BookingAppointment doctors={doctors} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

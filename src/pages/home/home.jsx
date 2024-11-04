// import React, { Fragment, useRef, useState } from "react";
// import NavBar from "../../components/navbar/navBar";
// import { IoPlayOutline } from "react-icons/io5";
// import { MdOutlineArrowRightAlt } from "react-icons/md";
// import Search from "../../components/Search";
// import Services from "../../components/services";
// import Testimonial from "./testimonial";
// import Footer from "../../components/footer";
// import Doctors from "./doctors";
// import SignUp from "./auth/signUp";
// import Button from "../../components/auth/button";

// const services = [
//   { id: 1, category: "Optician", icon: "/assets/icon1.png" },
//   { id: 2, category: "Surgeons", icon: "/assets/icon2.png" },
//   { id: 3, category: "Cardiologists", icon: "/assets/icon3.png" },
//   { id: 4, category: "Physiotherapists", icon: "/assets/icon4.png" },
// ];

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

// const defaultDoctors = doctors.filter((item) => item.category === "Surgeons");
// const Home = () => {
//   const doctorRef = useRef(null);
//   const [service, setService] = useState(services);
//   const [isSelected, setIsSelected] = useState(services[1]);
//   const [doctor, setDoctor] = useState(defaultDoctors);
//   const [isSignUp, setIsSetSignUp] = useState(false);
//   const [docName, setDocName] = useState("");
//   const [docCategory, setDocCategory] = useState("");

//   const handleSignUp = () => {
//     setIsSetSignUp(!isSignUp);
//     console.log("hello");
//     // alert("working");
//   };

//   const handleSelected = (service) => {
//     setIsSelected(service);
//     setDoctor(doctors.filter((item) => item.category === service.category));
//   };

//   return (
//     <div className="relative">
//       <NavBar handleSignUp={handleSignUp} />
//       {/* Sign Up page */}
//       {isSignUp && <SignUp setIsSetSignUp={setIsSetSignUp} />}

//       {/* hero-section */}
//       <section
//         id="home"
//         className="lg:px-24 px-4 py-9 flex md:flex-row flex-col gap-12 md:gap-0 items-center justify-between"
//       >
//         <div className="flex flex-col gap-4 text-4xl font-[600]">
//           <h1 className="text-deepBlue text-center md:text-left w-[100%]">
//             We care <br></br>
//             <span className="text-deepGrey">about your health</span>
//           </h1>
//           <p className="text-lightGrey text-sm font-normal lg:w-[60%] text-center md:text-left">
//             Good health is the state of mental, physical and social well being
//             and it does not just mean absence of diseases.
//           </p>

//           {/* links */}
//           <div className="text-base flex flex-col md:flex-row items-center gap-4 my-5">
//             <Button
//               text={"Book an appointment"}
//               css={"font-normal w-[17rem] py-3 text-white"}
//               icon={<MdOutlineArrowRightAlt />}
//             />

//             <p className="flex items-center gap-2">
//               {" "}
//               <IoPlayOutline /> <span>Watch videos</span>
//             </p>
//           </div>

//           <p className="text-sm font-normal text-center md:text-left">
//             Become a member of our community{" "}
//             <span className="text-deepBlue">Sign Up</span>
//           </p>
//         </div>

//         <img
//           src="assets/hero-image.png"
//           className="w-[35rem]"
//           alt=""
//         />
//       </section>

//       <Search
//         docName={docName}
//         docCategory={docCategory}
//         setDocName={setDocName}
//         setDocCategory={setDocCategory}
//         // doctor={doctor}
//         setDoctor={setDoctor}
//         doctors={doctors}
//         doctorRef={doctorRef}
//       />
//       {/* imagetotext.info*/}

//       {/* Medical Services */}
//       <section
//         id="services"
//         className="text-center my-24"
//       >
//         <h1 className="md:text-3xl my-8 text-2xl font-medium">
//           Our Medical Services
//         </h1>
//         <p className="text-lightGrey md:text-sm text-[0.7rem] lg:w-[20%] w-[60%] mx-auto pt-3">
//           We are dedicated to serve you best medical services
//         </p>

//         <Services
//           service={service}
//           isSelected={isSelected}
//           handleSelected={handleSelected}
//           setIsSelected={setIsSelected}
//           doctor={doctor}
//         />
//       </section>

//       {/* Doctors */}
//       <section id="doctors">
//         <h1 className="text-3xl my-8 font-medium text-center">
//           Meet our Doctors
//         </h1>
//         <p className="text-lightGrey text-sm text-center mb-5">
//           Well qualified Doctors are ready to serve you
//         </p>
//         <Doctors
//           doctor={doctor}
//           doctorRef={doctorRef}
//         />

//         <Button
//           text="See more"
//           css={"font-normal w-[8.5rem] py-3 text-white mx-auto my-8"}
//         />
//       </section>

//       {/* Testimonial */}
//       <section className="my-14">
//         <h1 className="text-3xl font-medium text-center">
//           Patients Testimonial
//         </h1>
//         <p className="text-lightGrey text-sm text-center mb-5">
//           Let's see what our happy Patients says
//         </p>

//         <Testimonial />
//       </section>

//       {/* footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { useRef, useState } from "react";
import NavBar from "../../components/navbar/navBar";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Search from "../../components/Search";
import Services from "../../components/services";
import Testimonial from "./testimonial";
import Footer from "../../components/footer";
import Doctors from "./doctors";
import SignUp from "./auth/signUp";
import Button from "../../components/auth/button";

const services = [
  { id: 1, category: "Optician", icon: "/assets/icon1.png" },
  { id: 2, category: "Surgeons", icon: "/assets/icon2.png" },
  { id: 3, category: "Cardiologists", icon: "/assets/icon3.png" },
  { id: 4, category: "Physiotherapists", icon: "/assets/icon4.png" },
];

const Home = ({ doctors }) => {
  const doctorRef = useRef(null);
  const [service, setService] = useState(services);
  const [isSelected, setIsSelected] = useState(services[1]);
  const [doctor, setDoctor] = useState(
    doctors.filter((item) => item.category === "Surgeons")
  );
  const [isSignUp, setIsSetSignUp] = useState(false);
  const [docName, setDocName] = useState("");
  const [docCategory, setDocCategory] = useState("");

  const handleSignUp = () => {
    setIsSetSignUp(!isSignUp);
  };



  const handleSelected = (service) => {
    setIsSelected(service);
    // Update doctor list based on selected category only if no search input
    if (!docName && !docCategory) {
      setDoctor(doctors.filter((item) => item.category === service.category));
    }
  };

  // Search function that updates doctor list based on search criteria
  const handleSearch = () => {
    const filteredDoctors = doctors.filter(
      (item) =>
        item.name.toLowerCase().includes(docName.toLowerCase()) &&
        item.category.toLowerCase().includes(docCategory.toLowerCase())
    );
    setDoctor(filteredDoctors);
  };

  return (
    <div className="relative">
      <NavBar handleSignUp={handleSignUp} />
      {isSignUp && <SignUp setIsSetSignUp={setIsSetSignUp} />}
      

      {/* Hero Section */}
      <section
        id="home"
        className="lg:px-24 px-4 py-12 flex md:flex-row flex-col gap-12 md:gap-0 items-center justify-between"
      >
        <div className="flex flex-col gap-4 text-4xl font-[600]">
          <h1 className="text-deepBlue text-center md:text-left w-[100%]">
            We care <br />
            <span className="text-deepGrey">about your health</span>
          </h1>
          <p className="text-lightGrey text-sm font-normal lg:w-[60%] text-center md:text-left">
            Good health is the state of mental, physical, and social well-being
            and it does not just mean the absence of diseases.
          </p>

          {/* Links */}
          <div className="text-base flex flex-col md:flex-row items-center gap-4 my-5">
            <Button
              text={"Book an appointment"}
              css={"font-normal w-[17rem] py-3 text-white"}
              icon={<MdOutlineArrowRightAlt />}
            />

            <p className="flex items-center gap-2">
              <IoPlayOutline /> <span>Watch videos</span>
            </p>
          </div>

          <p className="text-sm font-normal text-center md:text-left">
            Become a member of our community{" "}
            <span className="text-deepBlue">Sign Up</span>
          </p>
        </div>

        <img
          src="assets/hero-image.png"
          className="w-[35rem]"
          alt="Hero"
        />
      </section>

      {/* Search Section */}
      <Search
        css={" py-8 hover:bg-deepBlue"}
        docName={docName}
        docCategory={docCategory}
        setDocName={setDocName}
        setDocCategory={setDocCategory}
        setDoctor={setDoctor}
        doctors={doctors}
        doctorRef={doctorRef}
        onSearch={handleSearch} // Trigger handleSearch on search
      />

      {/* Medical Services Section */}
      <section
        id="services"
        className="text-center py-24"
      >
        <h1 className="md:text-3xl py-8 text-2xl font-medium">
          Our Medical Services
        </h1>
        <p className="text-lightGrey md:text-sm text-[0.7rem] lg:w-[20%] w-[60%] mx-auto pt-3">
          We are dedicated to serving you with the best medical services
        </p>

        <Services
          service={service}
          isSelected={isSelected}
          handleSelected={handleSelected}
          setIsSelected={setIsSelected}
          doctor={doctor}
        />
      </section>

      {/* Doctors Section */}
      <section id="doctors">
        <h1 className="text-3xl py-8 font-medium text-center">
          Meet our Health Professionals
        </h1>
        <p className="text-lightGrey text-sm text-center mb-5">
          Well-qualified Doctors are ready to serve you
        </p>
        <Doctors
          doctor={doctor}
          docRef={doctorRef}
        />

        <Button
          text="See more"
          css={
            "font-normal hover:bg-white hover:text-deepBlue hover:border-deepBlue w-[8.5rem] py-3 text-white mx-auto my-8"
          }
        />
      </section>

      {/* Testimonial Section */}
      <section className="py-14">
        <h1 className="text-3xl font-medium text-center">
          Patients Testimonial
        </h1>
        <p className="text-lightGrey text-sm text-center mb-5">
          Let's see what our happy patients have to say
        </p>

        <Testimonial />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

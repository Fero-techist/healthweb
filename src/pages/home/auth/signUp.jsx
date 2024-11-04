import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import Button from "../../../components/auth/button";

const SignUp = ({ setIsSetSignUp }) => {
  const closeSignUp = () => {
    setIsSetSignUp(false);
    console.log("sign");
  };
  return (
    <div className="h-[100vh] bg-deepGrey bg-opacity-15 w-[100%] flex items-center justify-center fixed top-0 z-30">
      <LiaTimesSolid
        className="absolute md:top-8 md:right-36 top-12 right-44 bg-white rounded-full p-2 text-4xl cursor-pointer"
        onClick={closeSignUp}
      />
      <div className="bg-white rounded-lg shadow-lg lg:w-[70%] w-[90%] h-[28rem] md:h-[30rem] flex items-center">
        <div className="lg:w-[50%] bg-deepBlue h-[100%] hidden md:flex flex-col py-3 px-12">
          <h1 className="font-medium text-white relative">
            Hospital <span className="text-deepGrey">logo</span>
            <div className="absolute top-60  left-60 transform -translate-x-1/2 -translate-y-1/2 bg-white w-16 h-16 md:w-24 md:h-24 rounded-full shadow-lg"></div>
          </h1>
        </div>
        <div className="lg:w-[50%] w-[100%]">
          <form
            action=""
            className="py-5 lg:px-12 px-5 flex flex-col gap-3 w-[100%]"
          >
            <h1 className="text-2xl pb-2">Sign Up For account</h1>
            <div className="flex items-center justify-between w-[100%]">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-deepGrey font-medium text-sm py-2"
                >
                  Firstname
                </label>
                <input
                  type="text"
                  placeholder="Your First name"
                  className="bg-[#DEDEDE] placeholder:text-[0.7rem] w-[9rem] md:w-[11rem] text-sm text-deepGrey text-center py-2 rounded-md outline-1 outline-deepBlue"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-deepGrey font-medium text-sm py-2"
                >
                  Lastname
                </label>
                <input
                  type="text"
                  placeholder="Your Last name"
                  className="bg-[#DEDEDE] placeholder:text-[0.7rem] w-[9rem] md:w-[11rem] text-sm text-deepGrey text-center py-2 rounded-md outline-1 outline-deepBlue"
                />
              </div>
            </div>
            {/* email address */}
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-deepGrey text-sm font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#DEDEDE] text-sm text-deepGrey text-center py-2 rounded-md outline-1 outline-deepBlue"
              />
            </div>

            {/* password */}

            <div className="flex items-center justify-between w-[100%]">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-deepGrey font-medium text-sm py-2 "
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="bg-[#DEDEDE]  placeholder:text-[0.7rem] w-[9rem] md:w-[11rem] text-deepGrey text-center py-2 rounded-md outline-1 outline-deepBlue text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-deepGrey font-medium py-2 text-sm"
                >
                  Confirm password
                </label>
                <input
                  type="text"
                  placeholder="Confirm password"
                  className="bg-[#DEDEDE]  placeholder:text-[0.7rem] w-[9rem] md:w-[11rem] text-sm text-deepGrey text-center py-2 rounded-md outline-1 outline-deepBlue"
                />
              </div>
            </div>

            <div className="flex items-center text-[0.7rem] gap-2">
              <input type="checkbox" />
              <p>
                I accept all{" "}
                <span className="text-deepBlue ">terms and conditions</span>
              </p>
            </div>

            <Button
              text="Sign Up"
              css={
                "font-semibold py-2 px-4 text-center w-[8rem] mx-auto text-white"
              }
            />
            <p className="text-[0.7rem] text-center">
              Already have an account?{" "}
              <span className="text-deepBlue">Log In</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

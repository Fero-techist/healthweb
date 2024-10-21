import React, { useState } from "react";
import Button from "./auth/button";

const Search = ({
  setDocName,
  setDocCategory,
  docName,
  docCategory,
  // doctor,
  doctors,
  setDoctor,
  doctorRef,
}) => {
  const handleSearch = () => {
    setDoctor(
      doctors.filter(
        (item) =>
          item.name.toLowerCase().trim() === docName.toLowerCase().trim() &&
          item.category.toLowerCase().trim() ===
            docCategory.toLowerCase().trim()
      )
    );
    console.log(docName, docCategory);
    setDocName("");
    setDocCategory("");

    // Scroll to the doctors component
    if (doctorRef.current) {
      doctorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-2 lg:w-[60%] w-[85%] bg-white shadow-lg rounded-lg lg:py-3 py-5 px-5 mx-auto mb-8"
      >
        <h1 className="md:text-left text-center">Find a doctor</h1>

        <div className="flex items-center md:flex-row flex-col md:gap-0 gap-3 justify-between">
          <input
            type="text"
            placeholder="Name of Doctor"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
            className="bg-[#DEDEDE] text-deepGrey text-center py-2 rounded-md outline-1 outline-deepBlue"
          />
          <input
            type="text"
            placeholder="Speciality"
            value={docCategory}
            onChange={(e) => setDocCategory(e.target.value)}
            className="bg-[#DEDEDE] text-deepGrey text-center py-2 rounded-md outline-1 outline-deepBlue"
          />
          <p>Availability</p>
          <Button
            text="Search"
            css={"py-3 text-white"}
            onClick={handleSearch}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;

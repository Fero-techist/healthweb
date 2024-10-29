import React, { useEffect, useState } from "react";

const BookingAppointment = ({ doctor }) => {
  useEffect(() => {
    console.log("Booking Appointment component loaded");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    reason: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, send `formData` to your backend or store it in a state.
    alert(`Appointment booked with Dr. ${doctor.name}`);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Book Appointment with Dr. {doctor.name}
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-2">
          Preferred Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-4">
          Reason for Appointment:
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingAppointment;

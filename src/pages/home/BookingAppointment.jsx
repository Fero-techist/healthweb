import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/auth/button";

const BookingAppointment = ({ doctors }) => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission logic, e.g., sending data to your backend
    console.log("Booking Appointment:", formData);
    // Redirect or show a success message
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-semibold mb-6">
          Book an Appointment with Dr. {doctor.name}
        </h2>

        <img
          src={doctor.img}
          alt={`Dr. ${doctor.name}`}
          className="mb-4 rounded-lg w-1/2 bg-deepBlue object-cover"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
            required
          />
          <textarea
            name="notes"
            placeholder="Additional Notes"
            value={formData.notes}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
            rows="3"
          ></textarea>
          <Button
            css="bg-deepBlue text-white rounded-md py-2"
            text="Confirm Appointment"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingAppointment;

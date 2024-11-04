// DoctorDashboard.js
import React from "react";

const DoctorDashboard = ({ loggedInDoctor, appointments }) => {
  const doctorAppointments = appointments.filter(
    (app) => app.doctorId === loggedInDoctor.id
  );

  return (
    <div>
      <h1>Welcome, Dr. {loggedInDoctor.name}</h1>
      <h2>Your Appointments:</h2>
      <ul>
        {doctorAppointments.map((appointment) => (
          <li key={appointment.id}>
            <p>User: {appointment.userName}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;

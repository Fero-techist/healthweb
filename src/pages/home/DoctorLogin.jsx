// DoctorLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorLogin = ({ doctors, setLoggedInDoctor }) => {
  const [doctorId, setDoctorId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const doctor = doctors.find(
      (doc) => doc.id === doctorId && doc.password === password
    );
    if (doctor) {
      setLoggedInDoctor(doctor);
      navigate("/doctor-dashboard");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div>
      <h2>Doctor Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Doctor ID"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default DoctorLogin;

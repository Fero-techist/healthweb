import React from "react";
  import Home from "./pages/home/home";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingAppointment from "./components/BookingAppointment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/book-appointment/:doctorId"
          element={<BookingAppointment />}
        />
      </Routes>
    </Router>
  );
};

export default App;

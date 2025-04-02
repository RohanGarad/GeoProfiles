import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import ProfileDetails from "./components/ProfileDetails";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({ latitude: 40.7128, longitude: -74.0060, address: "Pune" });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

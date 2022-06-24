import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Appoinments from "./Pages/Appoinments/Appoinments";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appoinments />} />
      </Routes>
    </div>
  );
}

export default App;

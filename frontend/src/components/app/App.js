import Login from "../login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Register from "../register/Register";
import Dashboard from "../dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;

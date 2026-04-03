import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import Transfer from "./pages/Transfer";
import Transactions from "./pages/Transactions";
import AuditorDashboard from "./components/AuditorDashboard";
import NotFound from "./pages/NotFound";
import UpdateProfile from "./pages/UpdateProfile";
import { AuditorRoute, CustomerRoute } from "./services/Gaurd";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element ={<CustomerRoute element={<Profile/>}/>}/>
        <Route path="/update-profile" element ={<CustomerRoute element={<UpdateProfile/>}/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/transactions" element={<CustomerRoute element={<Transactions/>}/>}/>
        <Route path="/transfer" element={<CustomerRoute element={<Transfer/>}/>}/>
        <Route path="/audit-dashboard" element={<AuditorRoute element={<AuditorDashboard/>}/>}/>





        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
import React, { useEffect, useState } from "react";
import {
  Input,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils/utils";
import { ToastContainer } from "react-toastify";
import Navbar from "../component/navbar";

export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logout");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Header Section */}
        <header className="flex items-center justify-between bg-black text-white h-[100vh] p-8">
          {/* Left Content */}
          <div className="w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">Welcome to <span className="text-[#30ba9d]">Trade Journal</span></h1>
            <p className="text-lg">
              Keep track of all your trades, analyze your strategies, and improve your trading performance. Record every detail of your trades and make data-driven decisions.
            </p>
            <p className="text-xl font-semibold">Logged in as: {loggedInUser}</p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 px-6 py-2 text-lg rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
          {/* Right Content */}
          <div className="w-1/2 flex items-center justify-center">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsW7tyTw7pPNsVYu95FEzPOAyYwpcb9rIB6A&s"
    alt="Trading Chart"
    className="rounded-lg shadow-lg"
    style={{ width: "80%", height: "auto", maxHeight: "400px" }}
  />
</div>

        </header>

        {/* Search Bar */}
        <div className="p-6">
          <Input
            type="text"
            placeholder="Search trades or products"
            className="w-full mb-6"
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

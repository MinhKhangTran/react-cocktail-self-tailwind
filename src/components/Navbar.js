import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-green-100 py-4 shadow-xl border-b-2 border-green-500">
      <div className="flex items-center justify-between md:w-4/5 w-11/12 mx-auto">
        <img src={logo} alt="logo" className="h-6 md:h-8" />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;

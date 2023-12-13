import React from "react";
import logo from "../assets/logo_with_name.webp";
import { NavLink, Link } from "react-router-dom";

export default function NoAccessHeader({ type, route }) {
  return (
    <header className="flex items-center justify-between ">
      <div className="h-[50px]">
        <Link to="/">
          <img src={logo} alt="Paau market logo" loading="lazy" />
        </Link>
      </div>

      <div className="invisible md:visible">
        <NavLink
          to={route}
          className="inline-block rounded-full bg-gray-50 px-5 py-1 font-bold transition-all hover:bg-jade-500 hover:text-white"
        >
          {type}
        </NavLink>
        <NavLink to="/support" className="inline-block px-5 py-1">
          Support
        </NavLink>
      </div>
    </header>
  );
}

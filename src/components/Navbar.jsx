import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between itmes-center px-10 py-4">
      <h1>Notification</h1>
      <ul className="flex gap-6 items-center">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <li>Dashboard</li>
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <li>Login</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;

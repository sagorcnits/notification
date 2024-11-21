import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  // logout function

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

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
        {user?.role === "admin" && (
          <NavLink
            to="/admin"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li>Dashboard</li>
          </NavLink>
        )}
        {user?.email ? (
          <li className="cursor-pointer" onClick={logout}>
            Logout
          </li>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li>Login</li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

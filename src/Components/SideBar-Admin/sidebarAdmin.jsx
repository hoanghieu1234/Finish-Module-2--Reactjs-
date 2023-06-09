import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebarAdmin.css";
const SidebarAdmin = () => {
  const router = useLocation()
  return (
    <div className="navbar-left-admin">
      <ul className="navbar-nav">
        <Link className="nav-link" to="/admin">
          <li className={router.pathname === "/admin" ? "nav-item active" : "nav-item"}>
            <i class="fa-solid fa-house"></i>
          </li>
        </Link>
        <Link className="nav-link" to="/admin/manager-user">
          <li className={router.pathname === "/admin/manager-user" ? "nav-item active" : "nav-item"}>
            <i class="fa-solid fa-user"></i>
          </li>
        </Link>
        <Link className="nav-link" to="/auth/login">
          <li className="nav-item">
            <i class="bx bxs-log-in-circle"></i>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SidebarAdmin;

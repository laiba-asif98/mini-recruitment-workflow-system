import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaPlus,
  FaSignOutAlt,
} from "react-icons/fa";

import "../../styles/layout.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        <h2>Recruitment</h2>
        <h2>Workflow</h2>
      </div>

      <nav className="menu">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/candidates"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaUsers />
          <span>Candidates</span>
        </NavLink>

        <NavLink
          to="/add-candidate"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaPlus />
          <span>Add Candidate</span>
        </NavLink>

        <NavLink
          to="/"
          className="menu-item"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>

      </nav>

    </div>
  );
}

export default Sidebar;
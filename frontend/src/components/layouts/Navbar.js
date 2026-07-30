// function Navbar() {
//   return (
//     <div>
//       <h2>Dashboard</h2>

//       <div>
//         <span>🔔</span>
//         <span>Admin User</span>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import { FaBell, FaUserCircle } from "react-icons/fa";

import "../../styles/layout.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-left">
        <h2>Dashboard</h2>
      </div>

      <div className="navbar-right">

        <div className="notification">
          <FaBell />
        </div>

        <div className="profile">
          <FaUserCircle className="profile-icon" />

          <div>
            <h4>Admin</h4>
            <p>Recruiter</p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
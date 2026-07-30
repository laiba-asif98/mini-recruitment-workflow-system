// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// function MainLayout({ children }) {
//   return (
//     <div>
//       <Sidebar />

//       <div>
//         <Navbar />

//         <div>{children}</div>
//       </div>
//     </div>
//   );
// }

// export default MainLayout;

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../../styles/layout.css";

function MainLayout({ children }) {
  return (
    <div className="main-layout">

      <Sidebar />

      <div className="content">

        <Navbar />

        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default MainLayout;
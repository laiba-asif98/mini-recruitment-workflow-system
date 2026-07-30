import { FaUsers } from "react-icons/fa";

function LoginLeftPanel() {
  return (
    <div className="left-panel">

      <div className="logo-box">
        <FaUsers className="logo-icon" />
      </div>

      <h1>Recruitment</h1>
      <h1>Workflow System</h1>

      <p>
        Manage candidates, recruitment workflow,
        interviews and assignments from one place.
      </p>

    </div>
  );
}

export default LoginLeftPanel;
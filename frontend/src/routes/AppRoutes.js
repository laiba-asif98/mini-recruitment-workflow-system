import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import CandidateList from "../pages/Candidates/CandidateList";
import CandidateDetail from "../pages/CandidateDetail/CandidateDetail";
import AddCandidate from "../pages/AddCandidate/AddCandidate";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/candidates" element={<CandidateList />} />
        <Route path="/candidate/:id" element={<CandidateDetail />} />
        <Route path="/add-candidate" element={<AddCandidate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
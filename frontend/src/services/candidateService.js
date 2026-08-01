import axios from "axios";

// const API = "http://localhost:5000/api/candidates";

const API =
  "https://mini-recruitment-workflow-system.onrender.com/api/candidates";

// Get All Candidates
export const getCandidates = async () => {

    const response = await axios.get(API);

    return response.data;

};

// Get Candidate By Id
export const getCandidateById = async (id) => {

    const response = await axios.get(`${API}/${id}`);

    return response.data;

};

// Add Candidate
export const addCandidate = async (candidate) => {

    const response = await axios.post(API, candidate);

    return response.data;

};

// Dashboard Stats
export const getDashboardStats = async () => {

    const candidates = await getCandidates();

    return {

        totalCandidates: candidates.length,

        applied: candidates.filter(
            item => item.status === "Applied"
        ).length,

        screening: candidates.filter(
            item => item.status === "Screening"
        ).length,

        interview: candidates.filter(
            item => item.status === "Interview Scheduled"
        ).length,

        selected: candidates.filter(
            item => item.status === "Selected"
        ).length,

        rejected: candidates.filter(
            item => item.status === "Rejected"
        ).length

    };

};

// Update Candidate
export const updateCandidate = async (id, data) => {

    const response = await axios.patch(
        `${API}/${id}`,
        data
    );

    return response.data;

};

// Delete Candidate
export const deleteCandidate = async (id) => {

    const response = await axios.delete(`${API}/${id}`);

    return response.data;

};
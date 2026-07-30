

import MainLayout from "../../components/layouts/MainLayout";
import CandidateTable from "../../components/ui/CandidateTable";

import { getCandidates } from "../../services/candidateService";


import "../../styles/candidate.css";
import { deleteCandidate } from "../../services/candidateService";
import { useEffect, useState } from "react";

function CandidateList() {

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const candidatesPerPage = 3;

    // Search + Filter
    const filteredCandidates = candidates.filter((candidate) => {

        const matchSearch =
            candidate.fullName
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            candidate.email
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchStatus =
            status === "All" ||
            candidate.status === status;

        return matchSearch && matchStatus;

    });

//     useEffect(() => {

//     getCandidates().then((data) => {

//         setCandidates(data);

//         setLoading(false);

//     });

// }, []);

useEffect(() => {

    getCandidates()

        .then((data) => {

            setCandidates(data);

        })

        .catch(() => {

            setError("Something went wrong!");

        })

        .finally(() => {

            setLoading(false);

        });

}, []);

const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this candidate?"
    );

    if (!confirmDelete) return;

    await deleteCandidate(id);

    const data = await getCandidates();

    setCandidates(data);

};

    // Pagination
    const lastCandidateIndex =
        currentPage * candidatesPerPage;

    const firstCandidateIndex =
        lastCandidateIndex - candidatesPerPage;

    const currentCandidates =
        filteredCandidates.slice(
            firstCandidateIndex,
            lastCandidateIndex
        );

    const totalPages = Math.ceil(
        filteredCandidates.length /
        candidatesPerPage
    );

    if (loading) {

    return (

        <MainLayout>

            <h2>Loading Candidates...</h2>

        </MainLayout>

    );

}

if (error) {

    return (

        <MainLayout>

            <h2>{error}</h2>

        </MainLayout>

    );

}

    
    return (

        <MainLayout>

            <div className="candidate-header">

                <h1>Candidates</h1>

                <button className="add-btn">
                    + Add Candidate
                </button>

            </div>

            <div className="filter-section">

                <input
                    type="text"
                    placeholder="Search by Name or Email"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                />

                <select
                    value={status}
                    onChange={(e) => {
                        setStatus(e.target.value);
                        setCurrentPage(1);
                    }}
                >

                    <option value="All">All Status</option>
                    <option value="Applied">Applied</option>
                    <option value="Screening">Screening</option>
                    <option value="Interview Scheduled">Interview Scheduled</option>
                    <option value="Assignment Sent">Assignment Sent</option>
                    <option value="Assignment Submitted">Assignment Submitted</option>
                    <option value="Selected">Selected</option>
                    <option value="Rejected">Rejected</option>

                </select>

            </div>

            <CandidateTable
    candidates={currentCandidates}
    onDelete={handleDelete}
/>

            <div className="pagination">

                <button
                    disabled={currentPage === 1}
                    onClick={() =>
                        setCurrentPage(currentPage - 1)
                    }
                >
                    Previous
                </button>

                {
                    [...Array(totalPages)].map((_, index) => (

                        <button
                            key={index}
                            className={
                                currentPage === index + 1
                                    ? "active-page"
                                    : ""
                            }
                            onClick={() =>
                                setCurrentPage(index + 1)
                            }
                        >
                            {index + 1}
                        </button>

                    ))
                }

                <button
                    disabled={currentPage === totalPages}
                    onClick={() =>
                        setCurrentPage(currentPage + 1)
                    }
                >
                    Next
                </button>

            </div>

        </MainLayout>

    );

}

export default CandidateList;
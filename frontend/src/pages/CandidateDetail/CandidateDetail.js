import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import MainLayout from "../../components/layouts/MainLayout";
import { candidateStatus } from "../../constants/status";
import {
    getCandidateById,
    updateCandidate
} from "../../services/candidateService";


import "../../styles/detail.css";

function CandidateDetail() {

    const { id } = useParams();

    const [candidate, setCandidate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [newNote, setNewNote] = useState("");
const [notes, setNotes] = useState([]);
const [currentStatus, setCurrentStatus] = useState("");

    useEffect(() => {

       getCandidateById(id).then((data) => {

    setCandidate(data);

    setNotes(data.notes || []);

    setCurrentStatus(data.status);

    setLoading(false);

});

    }, [id]);

    const handleAddNote = () => {

    if (!newNote.trim()) return;

    setNotes([...notes, newNote]);

    setNewNote("");

};

    if (loading) {

        return (

            <MainLayout>

                <h2>Loading...</h2>

            </MainLayout>

        );

    }

    if (!candidate) {

        return (

            <MainLayout>

                <h2>Candidate Not Found</h2>

            </MainLayout>

        );

    }

    const timeline = [
    "Applied",
    "Screening",
    "Interview Scheduled",
    "Assignment Sent",
    "Assignment Submitted",
    "Selected"
];

    return (

        <MainLayout>

            <h1 className="page-title">
                Candidate Details
            </h1>

            {/* Personal Information */}

            <div className="detail-card">

                <h2>Personal Information</h2>

                <div className="info-grid">

                    <div>
                        <label>Full Name</label>
                        <p>{candidate.fullName}</p>
                    </div>

                    <div>
                        <label>Email</label>
                        <p>{candidate.email}</p>
                    </div>

                    <div>
                        <label>Phone</label>
                        <p>{candidate.phone}</p>
                    </div>

                    <div>
                        <label>Experience</label>
                        <p>{candidate.experience}</p>
                    </div>

                    <div>
                        <label>Skills</label>
                        <p>{candidate.skills.join(", ")}</p>
                    </div>

                    <div>
                        <label>Education</label>
                        <p>{candidate.education}</p>
                    </div>

                </div>

            </div>

            {/* Recruitment Status */}

            <div className="detail-card">

                <h2>Recruitment Status</h2>

                <select
    value={currentStatus}
   onChange={async (e) => {

    const status = e.target.value;

    setCurrentStatus(status);

    await updateCandidate(candidate.id, {
        status
    });

}}
>

                    {
                        candidateStatus.map((status, index) => (

                            <option
                                key={index}
                                value={status}
                            >
                                {status}
                            </option>

                        ))
                    }

                </select>

            </div>

            {/* Recruiter Notes */}

            <div className="detail-card">

                <h2>Recruiter Notes</h2>

                <textarea
    rows="5"
    placeholder="Write recruiter notes..."
    value={newNote}
    onChange={(e) => setNewNote(e.target.value)}
/>

                <button
    className="save-btn"
    onClick={handleAddNote}
    type="button"
>
    Add Note
</button>

                {
                    notes.length > 0 ? (

                       notes.map((note, index) => (

                            <div
                                className="note-box"
                                key={index}
                            >

                                <p>{note}</p>

                            </div>

                        ))

                    ) : (

                        <p>No Notes Available</p>

                    )
                }

            </div>

            {/* Assignment */}

            <div className="detail-card">

                <h2>Assignment</h2>

                <p>
                    <strong>Title:</strong>{" "}
                    {candidate.assignment.title}
                </p>

                <p>
                    <strong>Status:</strong>{" "}
                    {candidate.assignment.status}
                </p>

                <p>
                    <strong>Score:</strong>{" "}
                    {candidate.assignment.score ?? "--"}
                </p>

            </div>

            <div className="detail-card">

    <h2>Recruitment Timeline</h2>

    <div className="timeline">

        {timeline.map((step, index) => {

            const active =
                timeline.indexOf(currentStatus) >= index;

            return (

                <div
                    key={index}
                    className={`timeline-item ${active ? "active" : ""}`}
                >

                    <div className="timeline-circle"></div>

                    <div className="timeline-content">

                        {step}

                    </div>

                </div>

            );

        })}

    </div>

</div>

        </MainLayout>

    );

}

export default CandidateDetail;
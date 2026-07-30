import { useEffect, useState } from "react";

import MainLayout from "../../components/layouts/MainLayout";
import StatCard from "../../components/ui/StatCard";
import PipelineCard from "../../components/ui/PipelineCard";
import CandidateTable from "../../components/ui/CandidateTable";

import {
    getCandidates,
    getDashboardStats
} from "../../services/candidateService";

import "../../styles/dashboard.css";

function Dashboard() {

    const [candidates, setCandidates] = useState([]);

    const [stats, setStats] = useState({

        totalCandidates: 0,
        applied: 0,
        screening: 0,
        interview: 0,
        selected: 0,
        rejected: 0

    });

    useEffect(() => {

        getCandidates().then((data) => {

            setCandidates(data);

        });

        getDashboardStats().then((data) => {

            setStats(data);

        });

    }, []);

    

    return (

        <MainLayout>

            <h1 className="dashboard-title">
                Dashboard
            </h1>

            <div className="stats-container">

                <StatCard
                    title="Total Candidates"
                    value={stats.totalCandidates}
                    color="#6d5efc"
                />

                <StatCard
                    title="In Progress"
                    value={
                        stats.applied +
                        stats.screening +
                        stats.interview
                    }
                    color="#3b82f6"
                />

                <StatCard
                    title="Selected"
                    value={stats.selected}
                    color="#10b981"
                />

                <StatCard
                    title="Rejected"
                    value={stats.rejected}
                    color="#ef4444"
                />

            </div>

            <h2 className="section-title">
                Recruitment Pipeline
            </h2>

            <div className="pipeline-container">

                <PipelineCard
                    title="Applied"
                    count={stats.applied}
                />

                <PipelineCard
                    title="Screening"
                    count={stats.screening}
                />

                <PipelineCard
                    title="Interview"
                    count={stats.interview}
                />

                <PipelineCard
                    title="Selected"
                    count={stats.selected}
                />

            </div>

            <h2 className="section-title">
                Recent Candidates
            </h2>

            <CandidateTable
                candidates={candidates.slice(0, 5)}
            />

        </MainLayout>

    );

}

export default Dashboard;
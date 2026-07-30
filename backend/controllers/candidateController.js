const candidates = require("../data/candidates");

// Get All Candidates

const getCandidates = (req, res) => {

    res.json(candidates);

};

// Get Candidate By Id

const getCandidateById = (req, res) => {

    const id = Number(req.params.id);

    const candidate = candidates.find(
        item => item.id === id
    );

    if (!candidate) {
        return res.status(404).json({
            message: "Candidate Not Found"
        });
    }

    res.json(candidate);

};

// Add Candidate

const addCandidate = (req, res) => {

    const newCandidate = {

        id: candidates.length + 1,

        ...req.body

    };

    candidates.push(newCandidate);

    res.status(201).json(newCandidate);

};

// Update Candidate

const updateCandidate = (req, res) => {

    const id = Number(req.params.id);

    const candidate = candidates.find(
        item => item.id === id
    );

    if (!candidate) {

        return res.status(404).json({
            message: "Candidate Not Found"
        });

    }

    Object.assign(candidate, req.body);

    res.json({
        message: "Candidate Updated Successfully",
        candidate
    });

};


// Delete Candidate

const deleteCandidate = (req, res) => {

    const id = Number(req.params.id);

    const index = candidates.findIndex(
        item => item.id === id
    );

    if (index === -1) {

        return res.status(404).json({
            message: "Candidate Not Found"
        });

    }

    candidates.splice(index, 1);

    res.json({
        message: "Candidate Deleted Successfully"
    });

};

module.exports = {
    getCandidates,
    getCandidateById,
    addCandidate,
    updateCandidate,
    deleteCandidate
};


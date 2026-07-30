const express = require("express");

const router = express.Router();

const {
    getCandidates,
    getCandidateById,
    addCandidate,
    updateCandidate,
    deleteCandidate
} = require("../controllers/candidateController");

// Get all candidates
router.get("/", getCandidates);

// Get candidate by ID
router.get("/:id", getCandidateById);

// Add candidate
router.post("/", addCandidate);

// Update candidate
router.patch("/:id", updateCandidate);

// delete candidate
router.delete("/:id", deleteCandidate);

module.exports = router;
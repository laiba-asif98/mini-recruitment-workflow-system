const express = require("express");
const cors = require("cors");

const candidateRoutes = require("./routes/candidates");

const app = express();

app.use(cors());

app.use(express.json());

// Home Route
app.get("/", (req, res) => {

    res.send("Mini Recruitment Workflow System Backend is Running 🚀");

});

app.use("/api/candidates", candidateRoutes);

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});
const express = require("express");
const cors = require("cors");

// Old routes
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const pledgeRoutes = require("./routes/pledgeRoutes");

// New routes
const visitorRoutes = require("./routes/visitorRoutes");
const creatorRoutes = require("./routes/creatorRoutes");
const investorRoutes = require("./routes/investorRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Root check
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Kickstarter backend is running"
    });
});

/*
==============================
Visitor Routes
==============================
*/
app.use("/", visitorRoutes);

/*
==============================
Creator Routes
==============================
*/
app.use("/", creatorRoutes);

/*
==============================
Investor Routes
==============================
*/
app.use("/", investorRoutes);

/*
==============================
Existing API Routes
==============================
*/
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/pledges", pledgeRoutes);

module.exports = app;
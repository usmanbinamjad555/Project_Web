const express = require("express");
const router = express.Router();

// Creator dashboard
router.get("/creator/home", (req, res) => {
    res.send("Creator dashboard overview");
});

// Start new campaign
router.post("/creator/new-campaign", (req, res) => {
    res.send("Create a new campaign");
});

// Edit campaign
router.put("/creator/campaign/:campaignId/edit", (req, res) => {
    res.send(`Edit campaign ${req.params.campaignId}`);
});

// Campaign perks
router.get("/creator/campaign/:campaignId/perks", (req, res) => {
    res.send(`Manage perks for campaign ${req.params.campaignId}`);
});

// Campaign updates
router.post("/creator/campaign/:campaignId/news", (req, res) => {
    res.send(`Post update for campaign ${req.params.campaignId}`);
});

// Comments and feedback
router.get("/creator/campaign/:campaignId/feedback", (req, res) => {
    res.send(`View supporter feedback for campaign ${req.params.campaignId}`);
});

// Campaign statistics
router.get("/creator/campaign/:campaignId/stats", (req, res) => {
    res.send(`Statistics for campaign ${req.params.campaignId}`);
});

// Creator account settings
router.get("/creator/account", (req, res) => {
    res.send("Creator account settings");
});

module.exports = router;
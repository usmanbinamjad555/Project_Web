const express = require("express");
const router = express.Router();

// Homepage
router.get("/", (req, res) => {
    res.send("Homepage showing highlighted campaigns");
});

// Browse all campaigns
router.get("/browse", (req, res) => {
    res.send("Browse all crowdfunding projects");
});

// Trending campaigns
router.get("/browse/trending", (req, res) => {
    res.send("Trending campaigns");
});

// Topics list
router.get("/topics", (req, res) => {
    res.send("List of campaign categories");
});

// Projects by topic
router.get("/topics/:topic", (req, res) => {
    res.send(`Projects under topic: ${req.params.topic}`);
});

// Campaign details
router.get("/campaign/:campaignId", (req, res) => {
    res.send(`Details of campaign ${req.params.campaignId}`);
});

// Search projects
router.get("/search-projects", (req, res) => {
    res.send("Search campaigns");
});

// Help/support
router.get("/support", (req, res) => {
    res.send("Help center and FAQs");
});

module.exports = router;
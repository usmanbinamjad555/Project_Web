const express = require("express");
const router = express.Router();

// Investor dashboard
router.get("/investor/home", (req, res) => {
    res.send("Investor dashboard");
});

// Discover campaigns
router.get("/investor/explore", (req, res) => {
    res.send("Explore campaigns to fund");
});

// Fund a campaign
router.post("/investor/campaign/:campaignId/fund", (req, res) => {
    res.send(`Fund campaign ${req.params.campaignId}`);
});

// Portfolio
router.get("/investor/portfolio", (req, res) => {
    res.send("Investor supported campaigns");
});

// Payment history
router.get("/investor/payments", (req, res) => {
    res.send("Investor payment history");
});

// Favorite campaigns
router.get("/investor/favorites", (req, res) => {
    res.send("Saved campaigns");
});

// Messaging
router.get("/investor/chat", (req, res) => {
    res.send("Investor messaging with creators");
});

// Account settings
router.get("/investor/account", (req, res) => {
    res.send("Investor account settings");
});

module.exports = router;
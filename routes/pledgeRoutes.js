const express = require("express");
const router = express.Router();
const { createPledge, getAllPledges } = require("../controllers/pledgeController");

router.post("/", createPledge);
router.get("/", getAllPledges);

module.exports = router;
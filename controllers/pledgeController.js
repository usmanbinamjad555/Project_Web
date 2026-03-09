const Pledge = require("../models/Pledge");
const Project = require("../models/Project");

const createPledge = async (req, res) => {
    try {
        const { backerName, amount, projectId } = req.body;

        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        const pledge = await Pledge.create({
            backerName,
            amount,
            projectId
        });

        project.raisedAmount = project.raisedAmount + amount;
        await project.save();

        res.status(201).json({
            message: "Pledge added successfully",
            pledge: pledge
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating pledge",
            error: error.message
        });
    }
};

const getAllPledges = async (req, res) => {
    try {
        const pledges = await Pledge.find().populate("projectId");

        res.status(200).json({
            message: "Pledges fetched successfully",
            pledges: pledges
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching pledges",
            error: error.message
        });
    }
};

module.exports = {
    createPledge,
    getAllPledges
};
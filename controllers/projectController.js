const Project = require("../models/Project");

const createProject = async (req, res) => {
    try {
        const { title, description, goalAmount, category, creatorName, deadline } = req.body;

        const project = await Project.create({
            title,
            description,
            goalAmount,
            category,
            creatorName,
            deadline
        });

        res.status(201).json({
            message: "Project created successfully",
            project: project
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating project",
            error: error.message
        });
    }
};

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();

        res.status(200).json({
            message: "Projects fetched successfully",
            projects: projects
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching projects",
            error: error.message
        });
    }
};

const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({
            message: "Project fetched successfully",
            project: project
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching project",
            error: error.message
        });
    }
};

const updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({
            message: "Project updated successfully",
            project: updatedProject
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating project",
            error: error.message
        });
    }
};

const deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);

        if (!deletedProject) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({
            message: "Project deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting project",
            error: error.message
        });
    }
};

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
};
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    goalAmount: {
        type: Number,
        required: true
    },

    raisedAmount: {
        type: Number,
        default: 0
    },

    category: {
        type: String,
        required: true
    },

    creatorName: {
        type: String,
        required: true
    },

    deadline: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Project", projectSchema);
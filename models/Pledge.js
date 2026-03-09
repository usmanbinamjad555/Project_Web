const mongoose = require("mongoose");

const pledgeSchema = new mongoose.Schema(
{
    backerName: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Pledge", pledgeSchema);
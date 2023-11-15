const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: [{
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: Boolean,
            required: true,
        },
    }, ],
});
const questions = mongoose.model("question", questionSchema);
module.exports = questions;
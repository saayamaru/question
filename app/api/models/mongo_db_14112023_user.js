const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    score: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    }, 
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
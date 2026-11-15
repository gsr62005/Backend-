const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
name: {
type: String,
required: true,
trim: true
},


email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
},

password: {
    type: String,
    required: true
},

role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
},

tokenVersion: {
    type: Number,
    default: 0
}

resetPasswordToken: {
    type: String
},

resetPasswordExpires: {
    type: Date
}

});

const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true  
    },
    userName : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    likedSongs : {
        //to be converted into array later
        type: String,
        default: ""
    },
    likedArtist : {
        //to be converted into array later
        type: String,
        default: ""
    }
});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;
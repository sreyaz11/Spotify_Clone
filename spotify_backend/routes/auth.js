const express = require('express');
const router = express.Router();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const {getToken} = require("../utils/helpers");

router.post("/register", async (req, res) => {
    const{email, password, firstName, lastName, userName} = req.body;

    const user = await User.findOne({email: email});
    if(user){
        return res
                .status(403)
                .json({error: "A user with thsi email address already exists"});
    }
    const hashedPassword = bcryptjs.hash(password, 10);
    const newUserData = {email, password: hashedPassword, firstName, lastName, userName};
    const newUser = await User.create(newUserData);

    const token = await getToken(email, newUser);

    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({emial: email});

    if(!user){
        return res.status(403).json({err: "Invalid Credentials"});
    }

    const isPassowrdValid = await bcryptjs.compare(password, user.password);

    if(!isPassowrdValid){
        return res.status(403).json({err: "Invalid Credentials"});
    }
    const token = await getToken(user.email, user);
    const userToReturn = {...user.toJSON(), token};
    delete userToReturn.password;
    res.status(200).json(userToReturn);
});

module.exports = router;
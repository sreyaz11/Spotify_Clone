const express = require("express");
const passport = require("passport");
const router = express.Router();

router.post("/create", passport.authenticate("user"), async (req, res) => {
    const {name, thumbnail, track} = req.body;
    if(!name || !thumbnail || !track){
        return res
                .status(301)
                .json({err : "Insufficient detail to create song"});
    }
    const artist = req.user._id;
    const songDetails = {name, thumbnail, artist, track};
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
});

module.exports = router;
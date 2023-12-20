const mongoose  = require('mongoose');

const Song = new mongoose.Schema({

});

const SongModel = new mongoose.Model("Song", Song);
module.exports = songModel;
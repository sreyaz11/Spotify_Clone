const mongoose = require('mongoose');

const PlayList = new mongoose.Schema({

});

const PlayListModel = new mongoose.Model("PlayList", PlayList);
module.exports = PlayListModel;
//db.js - logica voor verbinden met MongoDB
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/WebExp',{ useNewUrlParser: true }, function () {
    console.log('mongoose connected');
});
module.exports = db;

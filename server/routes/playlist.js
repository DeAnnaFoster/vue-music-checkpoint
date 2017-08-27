// You should put your todo schema should go here

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var ObjectId = mongoose.Schema.ObjectId;

var songSchema = new mongoose.Schema({
    artistName: { type: String, required: true },
    previewUrl: { type: String, required: true },
    artworkUrl100: { type: String, required: true },
    trackName: { type: String, required: true },
    collectionName: { type: String, required: true },
    trackPrice: { type: String, required: false },
    weight: { type: Number, required: true, default: '0' },
    // id: {type: ObjectId, ref: 'song', required: true}, //when this is added, it prevents anything from working when adding a song to list
})

var Songs = mongoose.model('Song', songSchema);

router.get('/', function (req, res, next) {
    Songs.find({})
        .then((songs) => {
            res.send(songs);
        })
        .catch(next)
})

router.get('/:songId', function (req, res, next) {
    var songId = req.params.songId;
    //console.log(songId)
    Songs.findById(songId)
        .then((song) => {
            res.send(song);
        })
        .catch(next)
})

router.post('/', function (req, res, next) {
    //console.log("body: " + req.body)
    Songs.create(req.body)
        .then((song) => {
            res.send(song);
        })
        .catch(next);
})

router.delete('/:songId', (req, res, next) => {
    var songId = req.params.songId;
    Songs.findByIdAndRemove(songId)
        .then(songId => {
            res.send({ message: 'Successfully deleted.' });
        })
        .catch(next);
})

router.put('/:songId', (req, res, next) => {
    var songId = req.params.songId;
    //console.log(req.body);

    var updatedSongObj = req.body;
    Songs.findByIdAndUpdate(songId, updatedSongObj) 
        .then(songId => {
            res.send({ message: 'Successfully Updated Song' });
        })
        .catch(next);
})


router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.json({ success: false, error: err });
    } else {
        res.json({ success: false, error: err.message });
    }
}

module.exports = router;


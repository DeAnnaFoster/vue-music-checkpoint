// You should put your todo schema should go here

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
    artistName: { type: String, required: true },
    previewUrl: { type: String, required: true },
    artworkUrl100: { type: String, required: true },
    trackName: { type: String, required: true },
    collectionName: { type: String, required: true },
    trackPrice: { type: String, required: false },
})

//object, with array of objects
//or use songs above, and tie into ID in the playlist object array
//in new schema, the song object will be type: array

var Songs = mongoose.model('Song', songSchema);

router.get('/', function (req, res, next) {
    Songs.find({})
        .then((songs) => {
            res.send(songs);
        })
        .catch(next)
})

router.post('/', function (req, res, next) {
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


// router.put('/:todoId', (req, res, next) => {
//     var todoId = req.params.todoId;

//     var updatedTodoObj = req.body;
//     Todos.findByIdAndUpdate(todoId, updatedTodoObj)
//         .then(todo => {
//             res.send({ message: 'Successfully Updated Todos' });
//         })
//         .catch(next);
// })

router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.json({ success: false, error: err });
    } else {
        res.json({ success: false, error: err.message });
    }
}

module.exports = router;


var mongoose = require('mongoose')
var connection = mongoose.connection
//mongodb://<dbuser>:<dbpassword>@ds157873.mlab.com:57873/playlist

mongoose.connect('mongodb://student:student@ds157873.mlab.com:57873/playlist', {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
})

connection.on('error', (err) =>{
  console.log('SOMETHING FAILED WHEN CONNECTING TO MLAB', err)
});

connection.once('open', () => {
  console.log('HEY WE ARE CONNECTED TO MLAB')
});
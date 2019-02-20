const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {Details, db, save} = require('../database/index.js');
//var cors = require('cors')


let app = express();
let port = 3002;


//app.use(cors())

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));


app.get('/api/movies/details', function (req, res) {
   Details.find().exec()
   .then(results => {
    if (!results){
      return res.status(500).send({})
    }
    //console.log(results);
    return res.status(200).send(results);
  })
});

app.get('/api/movies/details/jurassic-park', function (req, res) {
   Details.find({ title: "Jurassic Park"}).exec()
   .then(results => {
    if (!results){
      return res.status(500).send({})
    }
    //console.log(results);
    return res.status(200).send(results);
  })
});




app.listen(port, (error) => {
  if (error) {
    console.log(error, 'ERROR: not connected to server')
  }
  console.log(`Listening on port ${port}!`);
});


module.exports = app;



const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/details');


var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('DATABASE OPEN');});


let detailsSchema = mongoose.Schema({
  url: String,
  title: String,
  production: String,
  release_date: Date,
  starring: [String],
  summary: String,
  director: String,
  genre: [String],
  rating: String,
  runtime: String,
  rating_url: String
});

let Details = mongoose.model('Details', detailsSchema);

let save = (results) => {

  //instantiate new instance of the collection & build out entry w/cols set below
  let movieDetails = new Details ({
    url: results.url,
    title: results.title,
    production: results.production,
    release_date: results.release_date,
    starring: results.starring,
    summary: results.summary,
    director: results.director,
    genre: results.genre,
    rating: results.rating,
    runtime: results.runtime,
    rating_url: results.rating_url
  });
  //console.log(movieDetails)
  movieDetails.save(function(err) {
    if (err) {
      console.log('err saving new movie details to db')
      return handleError(err);

    }
  });

};



module.exports = {
  db,
  Details,
  save
}
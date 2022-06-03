const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    "movie_name":{type:String,required:true},
    "release_date":{type:Number,required:true},
    "rating":{type:Number,required:true},
})

const Movie = mongoose.model("movies",movieSchema);

module.exports = Movie;
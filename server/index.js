const express = require("express");
const app = express()
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const Movie = require("./models/Movie")

app.get("/movies",async (req,res)=>{
    try{
        const movies =await Movie.find();
        console.log(movies)
        res.send(movies)
    }catch(err){
        res.json(err)
    }
})

app.post("/insert", async (req,res)=>{
    try{
        const movie = await Movie.create(req.body);
        if(movie){
            console.log("movie added",req.body);
            res.send(movie)
        }
       
    }catch(err){
        res.json(err)
    }
})
app.listen(8080,()=>{
    try{
        mongoose.connect("mongodb+srv://dnyaneshm:magar123@cluster0.zt3jhwa.mongodb.net/movieApp?retryWrites=true&w=majority")
        console.log("listenting on port 8080!")
    }catch(err){
        console.log(err)
    }
})
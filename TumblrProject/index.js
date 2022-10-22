const express = require('express')
const mongoose  = require('mongoose')
const app = express()
const routes = require('./backend/routes/routeindex')
const URL = "mongodb://localhost:27017/burmaa"
const PORT = 5003

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on('open',()=>console.log("Mongodb Connected"))
mongoose.connection.on('error',(e)=> console.log(e))


app.use(routes)


app.get("/", function(req,res){
    res.send({"msg":"API working"})
})


app.get("/databasepage", function(req,res){
    
});

app.listen(PORT)
console.log("Running on http://localhost:"+PORT)
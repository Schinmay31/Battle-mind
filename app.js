const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use("/public",express.static(__dirname+"/public"));

app.get("/",function(req,res){
    res.render("home.ejs");
});
app.post("/",function(req,res){

    res.render("main.ejs");
});

app.listen(3000,function(){
    console.log("server started on port 3000");
});
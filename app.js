const { response } = require("express");
const express = require("express");

const app = express();

app.listen(3000, function(){

    console.log("Server is running on port 3000");
});

app.get("/",  function(req, res)
{

    res.send("Server is running");
});

const https = require("https");

const url =
 "https://api.openweathermap.org/data/2.5/weather?q=gothenburg&appid=620a4fbb6a5a147ee8e9ba72121b449f&units=metric";

https.get(url, function(response){
    console.log(response)
});

response.on("data", function (data){
    console.log(data);
});

const weatherData = JSON.parse(data);
    console.log(weatherData);


const temp = weatherData.main.temp;
    console.log(temp);

const weatherDescription = weatherData.weather[0].description;
    console.log(weatherDescription);

   /* app.get("/", function (req, res) {
        const url =
        "https://api.openweathermap.org/data/2.5/weather?q=gothenburg&appid=98706c3abd6a1fcd1ba2478a9e3e0502&units=metric";
        https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
        //console.log(data);
        const weaterData = JSON.parse(data);
        //console.log(weaterData);
        const temp = weaterData.main.temp;
        //console.log(temp);
        const weatherDescription =
       weaterData.weather[0].description;
        //console.log(weatherDescription);
        const icon = weaterData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/" + icon
       + "@2x.png";
        res.write("<p>The weather is currently " +
       weatherDescription + "</p>");
        res.write("<h1>The temperature is " + temp + " degree
       Celsius </h1>");
        res.write("<img src=" + imageURL + ">");
        res.send();
        });
        });
        //res.send("Server is running.");
       }); */
       
       app.post("/", function(req,res){
        console.log("Post request resived")
    });

    const bodyParser = require("body-parser");

    app.use(bodyParser.urlencoded({extend: true}));

    app.post("/", function(req,res){
        console.log(req.body.cityName);
    });

    
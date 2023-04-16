const express = require('express');
const request = require('request');

const app = express()
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

app.get('/', (req, res) => {
    let city = req.query.city;
    var request = require('request');
    request(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e3dc9cc2a000271edaeff8f4f43b7db3`, 
    function (error, response, body) {
        let data = JSON.parse(body)
        if(response.statusCode === 200){
            res.send(`The weather in your city ${city} is ${data.list[0].weather[0].description}`);
        }
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
})

app.listen(5000, () => console.log("server started on port 3000"))
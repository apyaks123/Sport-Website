var express = require('express');
var app = express();

let Ddd = new Date();
let count = 0;
app.get('/', function (req, res) {
    count++;
    res.send(`<body>
    <p>Name: Abhishek Pyakurel </p>
    <p>netId: tk3223</p>
    <p>Date and Time: ${Ddd} </p> 
    <p>This page has been visited <strong>${count} times.</strong></p></body>`);
});


port = 8000; // Or anything you'd like
host = '127.0.0.5'; // Any loopback address
app.listen(port, host, function () {
  console.log(`Date and Time app listening on IPv4: ${host}:${port}`);
});
var express = require('express');
var app = express();

let Ddd = new Date();

app.get('/', function (req, res) {
    res.send(`<body><p>Abhishek Pyakurel <br> </p>
    <p>Date and Time: </p>
    <p><strong>${Ddd} </p></body>`);
});


port = 5555; // Or anything you'd like
host = '127.0.0.1'; // Any loopback address
app.listen(port, host, function () {
  console.log(`Date and Time app listening on IPv4: ${host}:${port}`);
});
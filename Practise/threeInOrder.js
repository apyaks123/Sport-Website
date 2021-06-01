/*  Demonstration of promises to put HTTP requests for
    Node.js in a particular order.
*/
const fetch = require('node-fetch');
let site1 = {
  url: "https://www.skysports.com/",
  options: {method: "HEAD"}
};

let site2 = {
  url: "https://www.cnn.com/",
  options: {method: "HEAD"}
};

let site3 = {
  url: "https://www.bbc.com/",
  options: {method: "HEAD"}
};

let start = new Date();
fetch(site1.url, site1.options)
  .then(res => {
    // console.log(`Grotto status: ${JSON.stringify(res)}`);
    let time = (new Date() - start) / 1000;
    console.log(`Skysports status: ${res.statusText}, time: ${time}`);
    return fetch(site2.url, site2.options);
  })
  .then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`CNN status: ${res.statusText}, time: ${time}`);
    return fetch(site3.url, site3.options);
  })
  .then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`BBC status: ${res.statusText}, time: ${time}`);
  });
console.log("Starting my web requests:");

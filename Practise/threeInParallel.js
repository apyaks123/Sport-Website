



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

let p1 = fetch(site1.url, site1.options).then(res => {
  // console.log(`Skysports status: ${JSON.stringify(res)}`);
  let time = (new Date() - start) / 1000;
  return console.log(`Skysports status: ${res.statusText}, time: ${time}`);
});

let p2 = fetch(site2.url, site2.options).then(res => {
  let time = (new Date() - start) / 1000;
  return console.log(`CNN status: ${res.statusText}, time: ${time}`);
});

let p3 = fetch(site3.url, site3.options).then(res => {
  let time = (new Date() - start) / 1000;
  return console.log(
    `bbc status: ${res.statusText}, time: ${time}`
  );
});

console.log("Starting my web requests:");
Promise.all([p1, p2, p3]).then(x => {
  let time = (new Date() - start) / 1000;
  console.log(`All Finished, total time: ${time}`);
});

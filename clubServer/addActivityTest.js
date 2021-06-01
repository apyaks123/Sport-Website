/* Testing the POST /tours/add API */
const fetch = require("node-fetch");

const urlBase = require('./testURL');


function extractCookies(rawStrings) {
  let cookies = [];
  rawStrings.forEach(function (ck) {
    cookies.push(ck.split(";")[0]); // Just grabs cookie name=value part
  });
  return cookies.join(";"); // If more than one cookie join with ;
}

let addTour = {
  url: urlBase + "AddActivity",
  options: {
    method: "GET" }
    
};



async function someTests() {
  console.log("Try getting addActivity without logging in");
  try {
    let res = await fetch(addTour.url, addTour.options);
    console.log(`Add Activtity result: ${res.statusText}`);
  } catch (e) {
    console.log(`Error: ${e}\n`);
  }

 
}

someTests();

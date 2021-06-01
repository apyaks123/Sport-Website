const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');
const path = require('path');
let nRounds = 10;
let hashedUsers = [];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

// Your code here to process the passwords

users.forEach((s) =>{
    //console.log(key.password);
    let salt =  bcrypt.genSaltSync(nRounds); // New salt everytime!
    s.password =  bcrypt.hashSync(s.password, salt);
    hashedUsers.push(s);
    
  });

let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));

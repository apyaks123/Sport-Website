const { Resolver } = require('dns').promises;
const resolver = new Resolver();


console.log("Domain Name");

resolver.resolveAny('Skysports.com').then((info) => {
    console.log('All the info  for Skysports.com')
    console.log(info);
});
const { Resolver } = require('dns').promises;
const resolver = new Resolver();


console.log("Domain Name");

resolver.resolve4('Skysports.com').then((addresses) => {
    console.log('Address for Skysports.com')
    console.log(addresses);
});
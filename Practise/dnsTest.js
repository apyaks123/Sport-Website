const { Resolver } = require('dns');
const resolver = new Resolver();

let servers = resolver.getServers();
console.log("Dns servers");
console.log(servers);
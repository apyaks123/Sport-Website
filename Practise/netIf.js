const os = require('os');
let networkInterface = os.networkInterfaces();


//console.log(networkInterface);

for (let intf in networkInterface) {
    console.log(intf);

    let addresses = networkInterface[intf].filter(a => a.family === 'IPv4');
    console.log(addresses);




}
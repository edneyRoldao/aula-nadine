let client; 
let restifyClient = require('restify-clients');

function Service() {
    client = restifyClient.createJsonClient('http://localhost:3000');
}

Service.prototype.getInfo = (callback) => {
    const options = { path: '/test-cors' }
    client.get(options, callback);
}

module.exports = () => {
    return Service;
};

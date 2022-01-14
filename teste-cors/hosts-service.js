function HostClient () {}

HostClient.prototype.getHosts = () => {
    return new Promise((resolve, reject) => {
        console.log('call here');
        resolve([
            'http://localhost:3000'
        ])
    })
}

module.exports = () => {
    return HostClient;
}

const HostService = require('./hosts-service')();

module.exports = (req, res, next) => {
    const hostService = new HostService();

    hostService.getHosts().then((result) => {        
        console.log(req);

        if (result.some((host) => host === req.headers.host)) {
            next();

        } else {
            res.status(403).json({message: `O host ${req.headers.host} não tem permissão para acessar os serviços`})
        }

    }).catch((error) => {
        res.status(403).json({message: 'Ocorreu um erro no serviço de lista dos hosts permitidos'})
    });    
}

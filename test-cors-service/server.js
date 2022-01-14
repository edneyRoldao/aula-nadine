const express = require('express');
const Service = require('./service')();

const app = express();

app.use(express.json());
app.use(express.static('./static'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", '*');
    res.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})

app.get("/test-cors", (request, response) => {
    const service = new Service();

    service.getInfo((err, req, res, result) => {
        if (err) {
            return response.status(500).json({ err });
        }

        response.status(200).json({ result });
    })
});

app.listen(3030, () => console.log('Server is working'));

const cors = require('cors');
const express = require('express');
const HostService = require('./hosts-service')();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static('./static'));

const corsOptions = {
    origin: function (origin, callback) {
        new HostService().getHosts().then((result) => {        
            callback(null, result);
        }).catch((error) => {
            callback(error, null);
        });        
    }
}

app.get("/test-cors", cors(corsOptions), (req, res) => {
    res.status(200).json({message: 'Test cors'})
});

app.listen(3000, () => console.log('Server is working'));

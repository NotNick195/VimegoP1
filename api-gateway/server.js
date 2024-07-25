const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

// Route to Service A
app.use('/service-a', (req, res) => {
    const url = `http://localhost:3001${req.originalUrl.replace('/service-a', '')}`;
    axios({
        method: req.method,
        url: url,
        data: req.body
    }).then(response => {
        res.send(response.data);
    }).catch(error => {
        res.status(error.response.status).send(error.message);
    });
});

// Route to Service B
app.use('/service-b', (req, res) => {
    const url = `http://localhost:3002${req.originalUrl.replace('/service-b', '')}`;
    axios({
        method: req.method,
        url: url,
        data: req.body
    }).then(response => {
        res.send(response.data);
    }).catch(error => {
        res.status(error.response.status).send(error.message);
    });
});

// Route to Service C
app.use('/service-c', (req, res) => {
    const url = `http://localhost:3003${req.originalUrl.replace('/service-c', '')}`;
    axios({
        method: req.method,
        url: url,
        data: req.body
    }).then(response => {
        res.send(response.data);
    }).catch(error => {
        res.status(error.response.status).send(error.message);
    });
});

app.listen(port, () => {
    console.log(`API Gateway listening at http://localhost:${port}`);
});
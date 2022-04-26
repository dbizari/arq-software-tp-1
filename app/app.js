const express = require('express');
const app = express();

const PORT = 8000;
const axios = require('axios');

app.get('/', (req, res) => {
    res.send('hello there');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

const callBbox = (req, res, bboxPort) => {
    axios.get(`http://bbox:${bboxPort}/`)
        .then(result => {
            res.send(`bbox_port_called:${bboxPort} bbox_status_code:${result.status} bbox_response_body:${result.data}`);
        })
        .catch(err => {
            console.log('Error: ', err.message);
        });
}

app.get('/proxy-sync', (req, res) => {
    callBbox(req, res, 9090);
});

app.get('/proxy-async', (req, res) => {
    callBbox(req, res, 9091);
});

app.get('/heavy', (req, res) => {
    let i = 0;

    while(i < 5000000) {
        i++;
    }

    res.send('done');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

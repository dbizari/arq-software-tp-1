const express = require('express');
const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    res.send('hello there');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/proxy-sync', (req, res) => {
    // TODO: send request to sync BBOX 
});

app.get('/proxy-async', (req, res) => { 
    // TODO: send request to async BBOX 
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

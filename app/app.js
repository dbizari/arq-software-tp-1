const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('hello there');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
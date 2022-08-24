const { request } = require('express');
const express = require('express');
const app = express();

const port = 4000; // default

app.get('/', (req, res) => {
    console.log('get request has came')
    res.send('Hello, world!');
})

app.get('/customer', (req, res) => {
    res.send('Hello Customer!');
})

app.get('/items', (req, res) => {
    res.send('Hello Items!');
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
})
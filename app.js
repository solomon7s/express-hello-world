const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/first", (req, res) => res.json({
  message: 'Hello I am the first endpoint'
}));

app.get("/second", (req, res) => res.json({
  message: 'Hi There! I am the second endpoint',
  extra: 'I am an extra field for testing'
}));

app.get('/error', (req, res) => res.status(400).json({ message: 'I am just a bad error' }))

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;



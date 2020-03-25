const express = require('express');
const path = require('path');
const app = express();
const port = 3333;
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

app.use(express.static(path.join(__dirname, '../client/public')))

app.listen(port, () => console.log(`Bottom Player proxy server listening on port ${port}!`));

// bottomplayer
app.all('/songs', (req, res) => {
  proxy.web(req, res, {
    target: 'http://localhost:3000'
  });
});

// topplayer
app.all('/songData', (req, res) => {
  proxy.web(req, res, {
    target: 'http://localhost:3001'
  });
});

// sidebar
app.all('/api/mainSong', (req, res) => {
  proxy.web(req, res, {
    target: 'http://localhost:3003'
  });
});

// comments
app.all('/api/comments', (req, res) => {
  proxy.web(req, res, {
    target: 'http://localhost:4000'
  });
});
const express = require('express');
const app = express();
const port = 3333;

app.use('/static', express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Bottom Player proxy server listening on port ${port}!`));
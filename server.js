const express = require('express');
const port = process.env.port || 3000;

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

require('./app/routes')(app);

// error handling
app.use((err, req, res, next) => {
    console.error(err.message);

    if (err.status === 400) {
        res.status(400).send({ error: 'Could not decode request: JSON parsing failed' });
    }else {
        res.status(500).send({ error: 'Resource cannot found...' });
    }
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});
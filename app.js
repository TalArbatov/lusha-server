const express = require('express');
const config = require('./config')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(require('./routes') )

app.listen(config.port, () => {
    console.log(`Listening on ${config.port}`)
});

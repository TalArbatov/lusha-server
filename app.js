const express = require('express');
const path = require('path');
const config = require('./config')

//init app and apply middlewares
const app = express();
// app.use(require('./routes') )



app.listen(config.port, () => {
    console.log(`Listening on ${config.port}`)
});

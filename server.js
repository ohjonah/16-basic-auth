'use strict';

const express = require('express');
const debug = require('debug')('cfgram:server');

const errors = require('./lib/error-middleware.js');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(errors);

app.listen(PORT, () => debug(`Server up on PORT: ${PORT}`));
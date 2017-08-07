const express = require('express');
const debug = require('debug')('cfgram:server');

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => debug(`Server up on PORT: ${PORT}`));
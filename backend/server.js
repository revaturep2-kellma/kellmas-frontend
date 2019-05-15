const express = require('express');
const morgan = require('morgan');

const PORT = 8080;
const app = express();

app.use(morgan('dev'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

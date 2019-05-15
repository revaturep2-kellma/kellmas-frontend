const express = require('express');
const morgan = require('morgan');
const db = require('./db');

const PORT = 30662;
const app = express();

// Set up logger
app.use(morgan('dev'));

// Start server
app.listen(PORT, () => {
  console.log(`Server up on PORT ${PORT}`);

  db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));
});
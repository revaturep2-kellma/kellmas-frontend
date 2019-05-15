const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const db = require('./db');
const localStrategy = require('./passport/local-strategy');

const PORT = 3001;
const app = express();

// Set up logger
app.use(morgan('dev'));

// Set up passport
passport.use(localStrategy);
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
  console.log(`Server up on PORT ${PORT}`);

  db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));
});
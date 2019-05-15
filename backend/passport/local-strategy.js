const { Strategy: LocalStrategy } = require('passport-local');
const User = require('../models/user-model');

function validatePassword (password1, password2) {
  return password1 === password2;
}

const localStrategy = new LocalStrategy((username, password, done) => {
  let user;

  // Find the user with the given username
  User.findOne({ where: { username } })
    .then(results => {
      user = results;
      if (!user) {
        return Promise.reject({ message: 'Incorrect username' });
      }
      return validatePassword(password, user.password);
    })
    .then(isValid => {
      if (!isValid) {
        return Promise.reject({ message: 'Incorrect password' });
      }
      return done(null, user);
    })
    .catch(err => done(err));
});

module.exports = localStrategy;
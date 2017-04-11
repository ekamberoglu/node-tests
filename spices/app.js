var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // Check if email already exist
  // Save the user to the db

   db.saveUser({email, password});
  // db.saveUser({
  //   email: email,
  //   password: password
  // });
  
  // Send the welcome email
};
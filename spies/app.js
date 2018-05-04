var db = require('./db');
const rewire = require('rewire');

module.exports.handleSignUp = (email,password)=>{
    // Check if the email
    db.saveUser({email,password});
    // Send the welcome email
};
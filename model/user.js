'use strict';

const mongoose = require('mongoose');
const debug = require('cfgram:user');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  findHash: { type: String, unique: true}
});

userSchema.methods.generatePasswordHash = function(password) {
  debug('generatePasswordHash');

  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err);
      this.password = hash;
      resolve(this);
    });
  });
};

userSchema.methods.comparePasswordHash = function(password) {
  debug('comparePasswordHash');
  // TODO: fill this in
};

userSchema.methods.generateFindHash = function() {
  debug('generateFindHash');

  // TODO: fill this in
};

userSchema.methods.generateToken = function() {
  debug('generateToken');
  // TODO: fill this in
};

module.exports = mongoose.Schema('user', userSchema);
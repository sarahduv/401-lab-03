'use strict';

const fs = require('fs');
const faker = require('faker');
let randomName = faker.name.findName();
let showFile = null;
let path = null;

function file_read_first_time(err, data) {
  if (err) {
    showFile(err);
    return;
  }

  // we can now convert the data to an object
  const myObj = JSON.parse(data);
  myObj.firstName = randomName;

  // Save the file with the modified object
  fs.writeFile(path, JSON.stringify(myObj), after_saving_file);
}

function after_saving_file(err) {
  if (err) {
    showFile(err);
    return;
  }

  // Read the file we just saved again
  fs.readFile(path, file_read_second_time);
}

function file_read_second_time(err, data) {
  if (err) {
    showFile(err);
    return;
  } 

  showFile(null, JSON.parse(data));
}

module.exports = (filepath, callback) => {
  path = filepath;
  showFile = callback;
  fs.readFile(path, file_read_first_time);  
};

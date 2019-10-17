'use strict';

const fs = require('fs');
const faker = require('faker');
const util = require('util');
const writeFilePromise = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);

let randomName = faker.name.findName();
let showFile = null;
let path = null;

function file_read_first_time(data) {

  // we can now convert the data to an object
  const myObj = JSON.parse(data);
  myObj.firstName = randomName;

  // Save the file with the modified object
  writeFilePromise(path, JSON.stringify(myObj))
    .then(after_saving_file)
    .catch(err => {
      showFile(err);
    });  
}

function after_saving_file() {

  // Read the file we just saved again
  readFilePromise(path)
    .then(file_read_second_time)
    .catch(err => {
      showFile(err);
    });  
}

function file_read_second_time(data) {

  showFile(null, JSON.parse(data));
}

module.exports = (filepath, callback) => {
  showFile = callback;
  path = filepath;
  readFilePromise(path)
    .then(file_read_first_time)
    .catch(err => {
      showFile(err);
    });  
};

'use strict';

const editor = require('./edit-file.js');
const editor_promise = require('./edit-file-promise.js');
const editor_async = require('./edit-file-async.js');
const process = require('process');
let path = process.argv[2]; // './data/person.json';

const showFile = (err, data) => {
  if (err) {
    throw err;
  } else {    
    console.log(data);
  }
};

editor(path, showFile);
// editor_promise(path, showFile);
// editor_async(path, showFile);

'use strict';

module.exports = exports = {};

/**
* @param {String} file - the relative filepath
* @param {function} cb - error first callback function
*/

exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    cb(undefined, `{"firstName":"Kavon Eichmann V","lastName":"Scissorhands","hair":{"type":"wavy","color":"brown"},"favoriteFoods":["pizza","cupcakes","children"],"married":false,"kids":0}`);
  }
};

exports.writeFile = (file, content, cb) => {
  if( file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    cb(undefined);
  }
};
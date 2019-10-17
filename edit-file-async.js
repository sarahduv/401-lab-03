'use strict';

const fs = require('fs');
const faker = require('faker');
const util = require('util');
const writeFilePromise = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);

let randomName = faker.name.findName();

async function startEditing(path, showFile) {
  const data = await readFilePromise(path);
 
  // we can now convert the data to an object
  const myObj = JSON.parse(data);
  myObj.firstName = randomName;

  // Save the file with the modified object
  await writeFilePromise(path, JSON.stringify(myObj))

  // Read the file we just saved again
  const data2 = await readFilePromise(path);
  showFile(null, JSON.parse(data2));
}

module.exports = (path, showFile) => {
  startEditing(path, showFile).catch(err => showFile(err));
}

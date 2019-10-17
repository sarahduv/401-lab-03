'use strict';

const fs = require('fs');

const editor = require('../edit-file-promise.js');

jest.mock('fs');

describe('tests our generic logs from handler', () => {

  it('Testing doCallback', (done) => {
    let testData = 'hello';
    let myHandler = (err, data) => {
      expect(err).toBe(null);
      done();
    }
    editor('../person.json', myHandler);
  })

  it('Testing a bad path', (done) => {
    let myHandler = (err, data) => {
      expect(err).toBe('Invalid File');
      done();
    }
    editor('../bad_person.json', myHandler);
  })
});


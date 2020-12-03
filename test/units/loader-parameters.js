'use strict';

var assert = require('assert');
var yaml = require('../..');

suite('loader parameters', function () {
  var testStr = 'test: 1 \ntest: 2';
  var expected =  [ { test: 2 } ];
  var result;

  test('loadAll(input, options)', function () {
    result = yaml.loadAll(testStr, { json: true });
    assert.deepStrictEqual(result, expected);

    result = [];
    yaml.loadAll(testStr, function (doc) {
      result.push(doc);
    }, { json: true });
    assert.deepStrictEqual(result, expected);
  });

  test('loadAll(input, null, options)', function () {
    result = yaml.loadAll(testStr, null, { json: true });
    assert.deepStrictEqual(result, expected);

    result = [];
    yaml.loadAll(testStr, function (doc) {
      result.push(doc);
    }, { json: true });
    assert.deepStrictEqual(result, expected);
  });

  test('loadAll(input, options)', function () {
    result = yaml.loadAll(testStr, { json: true });
    assert.deepStrictEqual(result, expected);

    result = [];
    yaml.loadAll(testStr, function (doc) {
      result.push(doc);
    }, { json: true });
    assert.deepStrictEqual(result, expected);
  });

  test('loadAll(input, null, options)', function () {
    result = yaml.loadAll(testStr, null, { json: true });
    assert.deepStrictEqual(result, expected);

    result = [];
    yaml.loadAll(testStr, function (doc) {
      result.push(doc);
    }, { json: true });
    assert.deepStrictEqual(result, expected);
  });
});

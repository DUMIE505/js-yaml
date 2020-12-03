'use strict';


var assert = require('assert');
var yaml   = require('../../');


test('BOM strip', function () {
  assert.deepStrictEqual(yaml.load('\uFEFFfoo: bar\n'), { foo: 'bar' });
  assert.deepStrictEqual(yaml.load('foo: bar\n'), { foo: 'bar' });
});

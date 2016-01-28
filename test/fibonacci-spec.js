'use strict';

const assert = require('assert');
const fib = require('../src/fibonacci');

describe('Fibonacci', function() {
  describe('generator', function() {
    it('should create a generator for fibonacci numbers', function() {
      let generator = fib.generator();
      assert.equal(generator.next().value, 0)
      assert.equal(generator.next().value, 1)
      assert.equal(generator.next().value, 1)
      assert.equal(generator.next().value, 2)
      assert.equal(generator.next().value, 3)
      assert.equal(generator.next().value, 5)
      assert.equal(generator.next().value, 8)
      assert.equal(generator.next().value, 13)
      assert.equal(generator.next().value, 21)
      assert.equal(generator.next().value, 34)
    });
  });
});

'use strict';
const assert = require('assert');
const circle = require('../src/circle.js');

describe('Circle', function() {
  describe('area', function() {
    it('should correctly calculate the area of a circle', function() {
        let expected = 50.26548245743669
        assert.equal(circle.area(4), expected)
    });
  });
  describe('circumference', function() {
    it('should correctly calculate the circumference of a circle', function() {
        let expected = 62.83185307179586
        assert.equal(circle.circumference(10), expected)
    })
  });
});

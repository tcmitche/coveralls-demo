'use strict';
const assert = require('assert');
const circle = require('../src/circle.js');

describe('Circle', () => {
  describe('area', () => {
    it('should correctly calculate the area of a circle', () => {
        let expected = 50.26548245743669
        assert.equal(circle.area(4), expected)
    });
  });
  describe('circumference', () => {
    it('should correctly calculate the circumference of a circle', () => {
        let expected = 62.83185307179586
        assert.equal(circle.circumference(10), expected)
    })
  });
});

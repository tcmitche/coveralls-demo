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
});

'use strict';
const PI = Math.PI;
const pow = Math.pow;
const circle = require('./circle');

exports.area = function(r) {
  return  4 * circle.area(r);
}

exports.volume = function(r) {
  return (3/4) * PI * pow(r, 3);
}

exports.circumference = circle.circumference

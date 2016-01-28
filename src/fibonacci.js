'use strict';

function* generator() {
  var fn1 = 0;
  var fn2 = 1;
  while (true){
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset){
        fn1 = 0;
        fn2 = 1;
    }
  }
}

function recursive(n) {
  if (n === 1 || n === 0)
    return n;
  else
    return fibonacci(n - 1) + fibonacci(n - 2)
}

exports.generator = generator
exports.recursive = recursive

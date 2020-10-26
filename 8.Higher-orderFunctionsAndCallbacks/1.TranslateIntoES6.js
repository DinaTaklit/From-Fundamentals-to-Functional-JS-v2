// Translate into ES6

// var increment = function(n){ return n + 1; };

// var square = function(n){ return n*n; };

// var doMathSoIDontHaveTo = function(n, func){ return func(n); };

// doMathSoIDontHaveTo(5, square);

// doMathSoIDontHaveTo(4, increment);

const increment = n => { return n + 1; }
const square = n => { return n * n; }
const doMathSoIDontHaveTo = (n, func) => { return func(n); }
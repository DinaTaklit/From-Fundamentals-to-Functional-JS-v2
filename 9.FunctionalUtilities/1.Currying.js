// Exercise: Currying
// Implement curry() that only takes up to 2 arguments
// _.curry(func) {
//     //...
// }

var abc = function(a, b){
    return [a, b];
};

var curried = _.carry(abc);
curried(1)(2)
// => [1, 2]

const curry = (fn) => { //abc
    return (arg) => { //1
        return (arg2) => { //2
            return fn(arg, arg2);
        }
    }
}
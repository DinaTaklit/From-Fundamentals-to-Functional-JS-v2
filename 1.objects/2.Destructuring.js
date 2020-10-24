// 1. Create an obj that looks like this: {'name':'Rusty', 'room':'kitchen', 'weapon':'candlestick'}
// 2. Extract out name and weapon using destructuring

const {name, weapon, room} = {'name':'Rusty', 'room':'kitchen', 'weapon':'candlestick'};
console.log(name);

// Destructuring === Arrays 
var [a, b] = [1, 2];
//=> 1, 2 
console.log(a,b);
// Omit certain values 
var [a, , b] = [1, 2, 3];
console.log(a, b);
// => 1, 3

// Combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b);

// Swap variables easily without temp 
var a = 1, b = 2;
[b,a] = [a,b];
console.log(a, b);
// The code above is equivalent to this:
// var temp = a;
// a = b;
// b = temp;

// Advance deep arrays  => not recomended
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log('a:', a, 'b:', b, 'c:', c, 'd:',c);
// => a: 1 b:2 c: [[3,4], 5] d:6

// Objects: Get a value from a property
var {user: x} = {user: 5};
console.log(x);
// => 5

// Fail-safe 
var {user: x} = {user2: 6};
console.log(x);
// =>undefined

// More values
var {prop: x, prop2:y} = {prop: 5, prop2: 10};
console.log(x,y);
// => 5, 10

// short-hand syntax 
var {prop, prop2} = {prop: 5, prop2:10};
// => 5 10

// Equal to: 
var {prop: prop, prop2: prop2} = {prop:5, prop2: 10};
console.log(prop, prop2);
// => 5 10

// === Potential grammer hiccups
// Ooops: this is does not work: 
// var a, b;
// {a, b} = {a: 1, b:2};
// But this does work 
var a, b; 
({a, b} = {a:1, b:2});
console.log(a,b);
// => 1, 2


// This is due to the grammer in JS.
// Starting with "{" implies a block scope, not an object literal.
// () converts to an expression.

// From Harmony Wiki:
// Note that object literals cannot appear in 
// statement positions, so a plain aboject
// destructuring assignement statement 
// {x} = y must be parethesized either 
// as ({x} = y) or ({x}) = y

// ==== Combined destructuring of objects and arrays
// Combie objects and arrays
var {prop:x, prop2:[,y]} = {prop: 5, prop2: [10, 100]};
console.log(x,y);
// => 5 100

// Nested object Destructuring 

// Deep Objects
var {
  prop:x,
  prop2: {
    prop2: {
      nested: [, , b]
    }
  }
} = { prop: "Hello", prop2: {prop2: {nested:['a', 'b', 'c']}}};
console.log(x, b);
// => Hello, c

// === Combining all to make fun happen 

// All well and good, can we do more? Yes!
// Using as method parameters

var foo = function ({prop:x}){
  console.log(x);
};

foo({invalid: 1});
foo({prop:1});
// => undefined
// => 1

// === Nested advanced examples 

// can we also use with the advanced example 
var foo = function ({
  prop: x,
  prop2: {
    prop2: {
      nested: b
    }
  }
}){
  console.log(x, ...b);
};
foo({prop: 'Hello', prop2: {prop2: {nested: ['a', 'b', 'c']}}});
// => Hello, a, b, c

// === In combination with other ES2015 features.

// Computed property names 
const name1 = 'fieldName';
const computedObject =  { [name1]: name1}; // (where object is {'fieldName':'fieldName'})
const { [name1] : nameValue} = computedObject;
console.log(name1);
// => fieldname

// === Rest and defaults 
var ajax = function({url = 'localhost', port: p=80}, ...data){
  console.log('Url:',url, 'Port:', p, 'Rest:', data);
};

ajax ({url: 'someHost'}, 'additional', 'data', 'hello');
// => Url: someHost Port:80 Rest: ['additional', 'data', 'hello']

ajax({}, 'additional', 'data', 'hello');
// => Url: localhost Port:80 Rest: ['additional', 'data', 'hello']

ajax({});
//  => Url: localhost Port:80 Rest: []


// Does not work du to trying to destructure undefined
// ajax();

// To fix this we need to have default value for parameter in function 
// Note: See the "={}" at the end, saying default empty object if first argument is not provided
var ajax = function({url: url = 'localhost', port: p=80} = {}){
  console.log('Url:',url, 'Port:', p);
};
ajax();
// => 'Url:' 'localhost' 'Port:' 80

ajax({});
// 'Url:' 'localhost' 'Port:' 80

ajax({port: 8080});
// => 'Url:' 'localhost' 'Port:' 8080

ajax({url: 'someHost', port: 8080});
// => 'Url:' 'someHost' 'Port:' 8080


// === Similar to _.pluck
var users = [
  { user: 'Name1'},
  { user: 'Name2'},
  { user: 'Name2'},
  { user: 'Name3'},
];
var names = users.map (({user}) => user);
console.log(names);
// => [ 'Name1', 'Name2', 'Name2', 'Name3' ]    


// === Usage in for .. of loops 
var users = [
  { user: 'Name1'},
  { user: 'Name2', age:2},
  { user: 'Name2'},
  { user: 'Name3', age:4},
];

for (let {user, age = 'DEFAULT AGE'} of users){
  console.log(user, age);
}

// 'Name1' 'DEFAULT AGE'
// 'Name2' 2
// 'Name2' 'DEFAULT AGE'
// 'Name3' 4

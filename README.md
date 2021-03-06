# From Fundamentals to Functional JS, v2

- A deep dive into JavaScript and functional programming techniques
- learn techniques to write professional, modern JavaScript.
- Learn core concepts of JavaScript and applying functional programming techniques to JavaScript.
- Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue.
- Master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!

- **Slides links**:
  - https://slides.com/bgando/f2f-final-day-1
  - https://slides.com/bgando/f2f-final-day-2

## 1.Objects

- We use Dot notation for only strings.
- We use brackets for: string, numbers, variables, weird characters, expressions.

> Why we use Dot then since we can use brackets for everything? =>  To save time.

### Destructuring

- it just makes getting values out of objects and arrays, have less typing.
- Variables Declarations (the patern used here called decoration patern):
  - const {first, second} = {first: 0, second:1}
  - let {first, second} = {first: 0, second:1}
  - var {first, second} = {first: 0, second:1}
- Assignement:
  - {first, second} = {first: 0, second:1}
- Chek more in objects/destructuring

## 2.List Transformation

- check the List Transformation folder

## 3.`forEach()` function

### `_.each()` / `forEach` DEFINED

- Iterates over a **list** of elements, passing the values to a function.
- Each invocation of **iterator**, the function, is called with three arguments: (element, index, list). If **list** is a JavaScript object, **iterator**'s arguments will be (value, key, list).
- `_.each` works for both arrays and objects.
- If we have a variable we should use brackert notation for objects instead of dot notation

```javascript
_.each(
    ['observatory','ballroom', 'library'],
    function(value, index, list){ ... }
);
['observatory','ballroom','library']
.forEach(function(value, index, list){...});
```

```javascript
function CreateSuspectObjects(name){
  return{
    name: name,
    color: name.split(' ')[1],
    speak(){log(`my name is ${name}`);}
  };
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];
_.each(suspects, function(name){
  suspectsList.push(CreateSuspectObjects(name));
});
```

```javascript
_.each = function(list, callback){
    // ... TODO
}
```

## 4.`.map()` Function

- The main diff between map and foreach is that the foreach function does not return anything wherease map always return a new array.

### `_.map()` / `.map()` DEFINED

```javascript
_.map() / .map() DEFINED .map([1,2,3]
```

- http://underscorejs.org/#map
- Produces a new array of values by mapping each value in **list** through a transformation function (**iterator**).
- Each invocation of **iterator** is called with three arguments: (element, index, list). If **list** is a JavaScript object, **iterator**'s arguments will be (value, key, list)

### `_.map` vs `_.each`

```javascript
function CreateSUspectObjects(name){
    return {
        name: name,
        color: name.split(' ')[1],
        speack() {log(`my name is ${this.name}`);}
    };
}
var suspects = ['Miss Scarlet', 'Colonel Mustard'];
// _map function
var suspectsList = _.map(suspects, function(name){
    return CreateSUspectObjects(name);
});

//  _each function
_.each(suspectsList, function(suspect){
    suspects.speak();
});
```

## 5.`.filter()` Function

- Filter is a function that takes an array in a callback. And it is going to return a new array, that only contains the values that return true from the callback. Callback have to return a bolean true of false. If the value is true then save it in the array.
- Once we implement `_.filter` function we should use `_.each` not `_.map` function coz _.map will return an array of same size and this is not waht we want.

## 6.Functions In-Depth

### Anatomy of a Function
![Anatomy of function](assets/../assets/img/6.FunctionsAnatomy.png)

- **return** values are anything that is explicity returned, in this case an ES5 at least, it is explicitly returned with a return statement.
- **side effects** are things that are happening other than returning the value that effects something outside of that function.

> console.log is side effect because you are logging to the console that exists outside of that function, that is side effect. Or if you're changin the value of an object that's in a different scope.

### Arrow Functions

```javascript
var nameImprover = (name, adj) => {
  return `Col ${name} Mc ${adj} pants`;
};

$('body').hide();

myArr.forEach(val => console.log(val));

$('button').on('click', () => { 
  console.log('Don\'t press my buttons!');
});

```

### Projecting

- The projecting is once you take a value out of a data structure and turn it into another data structure

### Spread Operator

```javascript
const createTuple = (a, b, c, d) => {
  return [[a, c],[ b, d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one');
// => [['it', 'could'], ['be', 'anyone']]
```

- with spread operator

```javascript
const createTuple = (a, b, c, ...d) => {
  return [[a, c],[ b, d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one'); 
// => [ [ 'It', 'could' ], [ 'be', [ 'anyone', 'no one' ] ] ]
```

### Arguments Keyword

- The arguments keyword refrences all the arguments as a **pseudo array**.
- A psudeo array is an onkect that looks like an array, but it's actually an object.
- What does that mean? That means that we do not have access to out handy array mehtods lie push, pop, forEach, splice and stuff like that.

```javascript
const createTuple = (a, b, c, d) => {
  console.log(arguments);
    //['It', 'be', 'could', 'anyone','no one']
  return [[a, c],[ b, d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one');
```

```javascript
const createTuple = function(a, b, c, ...d) {
  console.log(arguments);
    //['It', 'be', 'could', 'anyone', 'no one']
  return [[a, c],[ b, d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one');
```

### Default parameters

```javascript
const add = function(a , b = 2) {
   console.log(arguments); //logs [3]
   return a + b;
};
add(3);
```

- Once `add(3)` be invoked console arguments it is only gonna console out 3 for the arguments, in this case where we did not pass two arguments.

> Something to put in mide is that the argument's keyword is only paying attention to the explicit values being passed into the function,
> and if there is something like default value or a spread operator, it is not going to be a saved by arguments keyword.

### ARRAY-LIKE OBJECT

```javascript
const constructArr = function() {
  const arr = Array.prototype.slice.call(arguments); // create and array from an array-like object
  arr.push('the billiards room?'); // push new entery the array
  return arr.join(' '); // join everything in the array separated with space
};
constructArr('was', 'it', 'in');
```

### ARRAY-LIKE OBJECT ES6 version using Array.form method

```javascript
const constructArr = function() {
  debugger;
  const arr = Array.from(arguments); // turning arguments array-like onject into an array using Array.from method
  arr.push('the billiards room?');
  return arr.join(' ');
};
constructArr('was', 'it', 'in');
```

### P.S. FUNCTIONS ARE OBJECTS

> Remember that functions are also objects, and you can add properties to them, so when you see functions like `.call` and things like that, that is because functions are also objects. So `.prototype` and things like that, those are just properties on this object, a special kind of objet that's a function.

```javascript
const add = function(a, b){
  return a + b;
};
add.example = 'testing 123!';
```

## 7.Scope

- Local
- Global
- Nested Scopes
- Precedence
- Block Scope

## 8.HIGHER-ORDER FUNCTIONS AND CALLBACKS

- Higher order function in JavaScript is what enables us to do these functional programming techniques. Because a function in JavaScript is data. And that's not true in all languages that this function can be data. What we mean by saying function is data is that we can pass functions arround. We can **return them without invoking them** and things like that. Just like you would an object, or say some primitive value, like 0 or true. So, really higher order functions and callbacks are the core concept of functional programming.

1. Takes a function as an input (argument)

  ```javascript
  element.addEventListener("change",() => {

  console.log("Our evidence is updated");

  });
    ```

2. Returns a function as the output

  ```javascript
  const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };

  };
  ```

### CALLBACKS

- If condition is true do isTrue(), otherways do isFalse();

```javascript
// Here it will return the whole function coz isTrue is not invoked.
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue : isFalse;
};

ifElse(true,
 () => { console.log(true);},
 () => { console.log(false);}
);
```

```javascript
// Here console.log() will be executed since the function isTrue is invoked.
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

ifElse(true,
 () => { console.log(true);},
 () => { console.log(false);}
);
```

```javascript
// Another ways to write things
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};


const logTrue = () => {console.log(true);};
const logFalse = () => {console.log(false);};

ifElse(true, logTrue, logFalse);
```

### PASSING ARGUMENTS

```javascript
var increment = function(n){ return n + 1; };

var square = function(n){ return n * n; };

var doMathSoIDontHaveTo = function(n, func){ return func(n); };

doMathSoIDontHaveTo(5, square); //25

doMathSoIDontHaveTo(4, increment); //5
```

### 8.HIGHER-ORDER FUNCTIONS AND CALLBACKS => PASSING ARGUMENTS

```javascript
//How do we pass arguments?
const ifElse = (condition, isTrue, isFalse, parameter) => {
  return condition ? isTrue(parameter) : isFalse(parameter);
};
ifElse(true, fn1, fn2, 'HI');
```

```javascript
const ifElse = (condition, isTrue, isFalse, ...args) => {
  console.log(args) //['HI', 'BYE', 'HOLA']
  return condition ? isTrue(...args) : isFalse(...args);
  isTrue('HI', 'BYE', 'HOLA')
};
ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOLA');
```

**How was this done pre-ES6?**

```javascript
const ifElse = (condition, isTrue, isFalse) => {
  const args = [].slice.call(arguments,3) // take what is next the 03 first arguments
  
  return condition ? isTrue.apply(this, args) : isFalse.apply(this, args);
};

const logTrue = (msgs) => { console.log(msgs); };
```

### Functional Utilities

#### Currying

- Currying is when you create a function that later be called multiple times with differet arguments.
- It allows you to break up arguments passed by the number of arguments.

```javascript
// Curry function allows you to call a function up to 03 times with 03 different values.
_.curry(func, [arity=func.length])

// This function expects 03 arguments in order for it to return a value.
var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = _.curry(abc);
curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]
```

#### Composing

- Composing is when you take two functions and combine them essentially.

```javascript
const consider = (name) => {
  return `I think it could be... ${name}`;
};

const exclaim  = (statement) => {
  return `${statement.toUpperCase()}!`;
};

const blame = _.compose(consider, exclaim); // it will compose exlaim under consider, so the order does matter

blame('you');

=> 'I think it could be... YOU!'
```

## Advanced Scope: Closure

```javascript
const myAlert = () => {
  const x = "Help! I think I found a clue!";
  const alerter = () => {
    alert(x);
  };
  alerter();
};

alert();
```

```javascript
const myAlert = () => {
  const x = "Help! I think I found a clue!";
  const alerter = (){
    alert(x);
  };

  setTimeout(alerter, 1000) // this function will be excuted after 1000ms
  console.log('what happens first? this log or the alert?') // THis console will be executed immediatly
};
```

- `funcAlert` This will create a new scope for alerter but the parent scope will remane asame for each exec.
- `funcAlert`, `funcAlert2`: it is retaining a memory of its parent's scope, but it is different than this other function's parent scope, and that's really important concept to remember, because it's kind of the core of how everything sort of fits together in Script.

```javascript
const myAlert = () => {
  const x = "Help! I think I found a clue!";
  let count = 0;
  const alerter = (){
    alert(`${x} ${++count}`);
  };

  return alerter;
};

const funcAlert = myAlert();
  // () =>{
  //   alert(`${x} ${++count}`);
  // };
const funcAlert2 = myAlert();

funcAlert(); // count = 1
funcAlert(); // count = 2

funcAlert2 (); // count =1
```

### Recipe

![Closure Recipe](assets/img/9.Closure.recipe.png)

### Execution

![Closure Exec](assets/img/9.Closure.exec.png)

## Credits

All credits goes for From Fundamentals to Functional JS, v2 front end master course

// write this function in ES5:

// ES6 version
// const add = function(a , b = 2){
//     console.log(arguments); //logs [3]
//     return a + b; 
//  };
//  add(3);

// ES5 version
const add = function(a , b){
    b = b || 2; // or evaluate the first part if it is true it will stop, else check the second part
    console.log(arguments); //logs [3]
    return a + b; 
 };
 add(3);
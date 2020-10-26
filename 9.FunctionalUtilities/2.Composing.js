// Exercise Compose
// Implement your own compose function

// The composed version
const consider = (name) => { 
    return `I think it could be... ${name}`; 
};

const exclaim  = (statement) => { 
return `${statement.toUpperCase()}!`; 
};

const blame = _.compose(consider, exclaim);
blame('you');

// => 'I think it could be... YOU!'

// The implementation

const compose = (fn, fn2) => {
    return (arg) => {
        const result = fn2(arg);
        return fn(result);
    };
};
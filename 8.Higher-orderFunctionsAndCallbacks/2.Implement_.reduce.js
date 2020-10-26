// Implement _.reduce()

const reduce = function (list, cb, inital){
    let memo = initial; //10
    for(let i = 0; i < list.length; i++){
        if (i === 0 && momo === undefined){
            memo = list[0];
        }else {
            memo = cb(list[i], memo);
        }
    }
    return memo;
}

reduce([2,3,5], (v, sum) => v + sum, 0);

reduce([7,9,10], (v, sum) => v + sum);
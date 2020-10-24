const _ = {};

_.map = function(list, callback){
    let storage = []; // create array for storage
    // loopin'
    for (let i =0; i < list.length; i++){
        storage.push(callback(list[i], i, list));
    }
    // return the new array
    return storage;
}

//===================================================
// The new version of map using _each function

// _each function implementation
_.each = function(list, callback){
    if(Array.isArray(list)){
        // loop through the array 
        for(let i =0; i < list.length; i++){
            // call the callbacl with a list item
            callback(list[i], i, list);
        }
    }else{
        // loop through the objec
        for (let key in list){
            // call the callback with a list of item
            callback(list[key], key, list);
        }
    }
    // celebrate     
}

_.map = function(list, callback){
    let storage = []; // create array for storage
    // loopin' use _each
    _.each(list, function(v, i, list){
        storage.push(callback(v, i, list));
    })
    // return the new array
    return storage;
}

_.map([1,2,3], function(val){return val +1;})
// => [2,3,4]

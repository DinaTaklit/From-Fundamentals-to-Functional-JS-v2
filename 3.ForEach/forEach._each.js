// Complete the rest of this function so that it works

const _ = {};
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

_.each(['sally', 'georgie', 'porgie'], function(name, i, list){
    if (list[i + 1]){
        console.log(name, 'is younger than', list[i + 1]);
    } else {
        console.log(name, 'is the oldest');
    }
});
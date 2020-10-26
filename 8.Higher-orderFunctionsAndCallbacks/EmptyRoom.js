// Figure out which room no one claims to be the night of the murder from this data set

// http://jsbin.com/pazixim/edit?js

// The dataset
const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

// Functions to be used
const _ = {};

// _.each function 
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

// _.map  function
_.map = function(list, callback){
    let storage = []; // create array for storage
    // loopin' use _each
    _.each(list, function(v, i, list){
        storage.push(callback(v, i, list));
    })
    // return the new array
    return storage;
}

// _.reduce function

_.reduce = function (list, cb, initial){
    let memo = initial; //10
    for(let i = 0; i < list.length; i++){
        if (i === 0 && memo === undefined){
            memo = list[0];
        }else {
            memo = cb(list[i], memo);
        }
    }
    return memo;
}

const notInRoom = (suspect, memo) =>{
    const emptyRooms = _.reduce(suspect.rooms, (room, memo)=>{
        if(room ===false) memo.push(room)
    },[]);
    return emptyRooms;
}

const notInrooms = _.map(newDevelopment, notInRoom); 
_.intersection(...notInrooms);
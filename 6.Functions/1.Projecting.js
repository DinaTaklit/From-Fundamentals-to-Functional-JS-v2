// Filter and then map this data 
// structure to get the names of 
// the final suspects to send back 
// to the team:

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

_ = {};

// _each function 
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
}

// filter function
_.filter = function(arr, callback){
    // create new array
    const storage=[];
    // loop through arr
    _.each(arr, function(item, i, list){
        if (callback(item, i, list)) {
            storage.push(item);
        }
    });
    // return arr
    return storage;
}

// map function
_.map = function(list, callback){
    let storage = []; // create array for storage
    // loopin' use _each
    _.each(list, function(v, i, list){
        storage.push(callback(v, i, list));
    })
    // return the new array
    return storage;
}

// Filter the data
const suspects = _.filter(videoData, function(suspectObject){
    return suspectObject.present;
});

// map the suspects to get name

const suspects_names = _.map(suspects, suspect =>{
    return suspect.name;
});
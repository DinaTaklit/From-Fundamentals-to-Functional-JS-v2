// filter the list by those who were present, but first we need to write our filter function:

// _.filter(arr, callback) {
//   //...
// }

// Filter the video data by the people who were present on the night of the murder!

_ = {};

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
}

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



// The video data
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


// Filter the data
_.filter(videoData, function(suspectObject){
    return suspectObject.present;
});
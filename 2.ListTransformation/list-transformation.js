const game = {
    'suspects':[
        {
            name: 'Rusty',
            color: 'orange'
        },
        {
            name: 'Miss Scarlet',
            color: 'red'
        }
    ]
}

// Loop through the suspects array of objects using foo
function foo (){
    for (let i = 0; i < game.suspects.length; i++){
        console.log(game.suspects[i]);
    }
}
foo();
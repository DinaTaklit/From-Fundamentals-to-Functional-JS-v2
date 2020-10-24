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

// Loop through the suspects array 
function foo (){
    for (let i = 0; i < game.suspects.length; i++){
        console.log(game.suspects[i]);
    }
}
foo();

// Loop though all the properties of the suspect objects in the suspects array. 
// make them if you think they are guilty
let gameLoop = function(game){
    for (let i = 0; i< game.suspects.length; i++){
        console.log('outerloop');
        for (let key in game.suspects[i]){
            console.log('inner loop');
            if (game.suspects[i][key] === 'Rusty'){
                console.log('Found \'em !');
            }else {
                console.log('next time!');
            }
        }
    }
}
gameLoop(game);

// Destructure this nested data structure into two variables with the strings 'red' and 'orange'

let [red, orange] = [game.suspects[0].color, game.suspects[1].color];
let [{color: firstcolor}, {color: secondcolor}] = game.suspects;


// for (let {color} of game.suspects){
//     console.log(' color: ', color);
// }

// var colors = game.suspects.map (({color}) => color);
// console.log(colors);



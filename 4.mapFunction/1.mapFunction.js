//_.map(list, iterator)
const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function(item){
    return `broker ${item}`;
};
_.map(weapons, makeBroken);

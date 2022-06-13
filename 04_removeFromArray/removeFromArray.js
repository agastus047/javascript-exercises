const removeFromArray = function(...Args) {
    let argArray = Args;
    let myArray = argArray.shift();
    let myArrayNew = myArray.filter(n => !(argArray.includes(n)));
    return myArrayNew;
} 

// Do not edit below this line
module.exports = removeFromArray;

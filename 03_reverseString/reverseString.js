const reverseString = function(word) {
    const newArray = word.split('');
    let newWord = '';
    for (let i = word.length-1; i>=0 ; i--) {
        newWord+= newArray[i];
    }
    return newWord;

};

// Do not edit below this line
module.exports = reverseString;

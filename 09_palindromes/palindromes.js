const palindromes = function (a) {
    a = a.toLowerCase();
    a = a.replace(/[^A-Za-z0-9]/g,"");
    let splitString = a.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return (a === joinArray);
    
};

// Do not edit below this line
module.exports = palindromes;

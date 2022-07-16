const fibonacci = function(a) {
    a = +a;
    if(a<=0 || isNaN(a)) {
        return "OOPS";
    }
    function fib(n) {
        if(n === 1)
            return 1;
        else if(n === 2)
            return 1;
        else 
            return fib(n-2) + fib(n-1);
    }
    return fib(a);
};

// Do not edit below this line
module.exports = fibonacci;

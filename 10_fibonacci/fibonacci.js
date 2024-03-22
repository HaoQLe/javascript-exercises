const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }

    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }

    let prevTermOne = 0;
    let prevTermTwo = 1;
    let currentTerm = 0;

    for (let i = 2; i <= n; i++) {
        currentTerm = prevTermOne + prevTermTwo;
        prevTermOne = prevTermTwo;
        prevTermTwo = currentTerm;
    }

    return currentTerm;
};

// Do not edit below this line
module.exports = fibonacci;

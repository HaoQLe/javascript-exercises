const sumAll = function(start, stop) {
    finalSum = 0

    if (start < 0 || stop < 0) {
        return "ERROR";
    }

    if (typeof(start) != "number" || typeof(stop) != "number") {
        return "ERROR";
    }

    if (start < stop) {
        for (let i = start; i <= stop; i++) {
            finalSum += i;
        }
    } else {
        for (let i = start; i >= stop; i--) {
            finalSum += i;
        }
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

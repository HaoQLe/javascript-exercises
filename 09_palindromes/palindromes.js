const palindromes = function (str) {
    str = str
            .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')  // strip all punctuation
            .toLowerCase()  // lowercase string
            .replace(/\s/g, '');


    let left = 0;
    let right = str.length - 1

    while (left <= right) {
        if (str.charAt(left) != str.charAt(right)) {
            return false;
        }

        left += 1;
        right -= 1;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

const findTheOldest = function(arr) {
    return arr.reduce((oldest, currPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath);

        if (currAge > oldestAge) {
            return currPerson;
        } else {
            return oldest;
        }
    });
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;

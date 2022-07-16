const findTheOldest = function(people) {
    let oldest = people[0];
    let oldestAge = 0;
    return people.reduce((oldest,person) => {
        let age;
        if(!("yearOfDeath" in person)) {
            age = ((new Date()).getFullYear()) - person.yearOfBirth;
        }
        else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if(age > oldestAge) {
            oldest = person;
            oldestAge = age;
        }
        return oldest;
    },oldest);
};

// Do not edit below this line
module.exports = findTheOldest;

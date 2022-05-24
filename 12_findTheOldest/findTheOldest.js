const findTheOldest = function(people) {
  return people.reduce((oldest, current) => {
    let age = (person)=>(!person.yearOfDeath)? 2022 - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
    let oldAge = age(oldest)
    let currAgg = age(current)
    return (oldAge > currAgg)? oldest: current;
  });

};

// Do not edit below this line
module.exports = findTheOldest;

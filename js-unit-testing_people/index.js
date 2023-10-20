export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  for (const person of people) {
    if (person.age > age) {
      return [`${person.firstName} ${person.lastName}`];
    }
  }
  // return people.forOf((person) => person.age > age);
}

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getFullNamesSortedByAge(people) {}

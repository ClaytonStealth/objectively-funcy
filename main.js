// Your code here.


/*
getFirstName()

parameters: 1 = object
{
  firstName:'string',
  lastName: 'string'
}

return firstName
*/

function getFirstName(person) {
  return person.firstName
}

console.log(getFirstName({ firstName: 'Colin', lastName: 'Jaffe' })) // -> 'Colin'
console.log(getFirstName({ firstName: 'Petra', lastName: 'Solano' })) // -> 'Petra'
////////////////////////////////////////////////////////////////////////////////
//  2. getLastName

function getLastName(person) {

  return person.lastName;
}

console.log(getLastName({ firstName: 'Colin', lastName: 'Jaffe' })) // -> 'Colin'
console.log(getLastName({ firstName: 'Petra', lastName: 'Solano' }))
/////////////////////////////////////////////////////////////////////////////////////
// 3. getFullName

function getFullName(person) {

  return `${person.firstName} ${person.lastName}`
}
console.log(getFullName({ firstName: 'Colin', lastName: 'Jaffe' }))
console.log(getFullName({ firstName: 'Petra', lastName: 'Solano' }))
////////////////////////////////////////////////////////////////////////////////
// 4. 
/*
parameters: 2
1st parameters
person = {
  firstName:'string',
  lastName: 'string'
}
newFirstName : string

change firstName of person object to newFirstName

*/

function setFirstName(person, newFirstName) {
  //person['firstName'] = newFirstName;
  person.firstName = newFirstName;
}

let person1 = { firstName: 'Colin', lastName: 'Jaffe' };
let person2 = { firstName: 'Petra', lastName: 'Solano' };

setFirstName(person1, 'Redacted');
setFirstName(person2, 'Anthony');

console.log(person1);
console.log(person2);
//////////////////////////////////////////////////////////////////////////////
// 5. setAge

let person3 = { firstName: 'Colin', lastName: 'Jaffe', age: 39 }
let person4 = { firstName: 'Petra', lastName: 'Solano', age: 29 }

function setAge(person, ageChange) {
  person.age = ageChange;
}
setAge(person3, 45)
setAge(person4, 35)

console.log(person3);
console.log(person4);

//6. giveBirthday
let persons1 = {
  firstName: 'Colin',
  lastName: 'Jaffe',
  age: 39
}
let persons2 = {
  firstName: 'Petra',
  lastName: 'Solano',
  age: 29
}
let persons3 = {
  firstName: 'Baby',
  lastName: 'Jaffe'
}

function giveBirthday(persons) {
  if (persons.age === undefined) {
    persons.age = 1;
  } else persons.age += 1
  return persons
}
giveBirthday(persons1)
giveBirthday(persons2)
giveBirthday(persons3)

//7. marry
const persons4 = { firstName: 'Colin', lastName: 'Jaffe', married: false }
const persons5 = { firstName: 'Petra', lastName: 'Solano', married: false }
function marry(persons4, persons5) {
  persons4.married = true;
  persons5.married = true;

  persons4.spouseName = `${persons5.firstName} ${persons5.lastName}`
  persons5.spouseName = `${persons4.firstName} ${persons4.lastName}`
}
console.log(marry(persons4, persons5))

//8. divorce
const person6 = { firstName: 'Colin', lastName: 'Jaffe', married: false }
const person7 = { firstName: 'Petra', lastName: 'Solano', married: false }
function divorce(person6, person7) {
  person6.married = false;
  person7.married = false;

  delete person6.spouseName
  delete person7.spouseName
}
divorce(person6, person7)


// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}

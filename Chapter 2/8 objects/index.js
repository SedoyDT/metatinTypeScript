var person = { name: "Tom", age: 23 };
console.log(person.name); // Tom
var newPerson; // Свойство age - необязательное
newPerson = { name: "notTonm", age: 23 };
console.log((newPerson.name)); // notTonm
console.log(newPerson.age); // 23
newPerson = { name: "John" };
console.log(newPerson.name);
console.log(newPerson.age);

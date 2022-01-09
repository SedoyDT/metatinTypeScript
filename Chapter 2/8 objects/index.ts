function printUser(user: { name: string; age: number}) {
    console.log(`name: ${user.name} age: ${user.age}`);

    // return {name: "Tom", age: 37};  // Объект может возвращаться из функции
}
let bob = {name: "Bob", age: 44, isMarried: true};
printUser(bob);

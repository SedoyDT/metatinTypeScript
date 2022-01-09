// Кортеж для чтения в качестве результата функции:
function createUser(name:string,age:number) : readonly[string,number] {
    return [name,age]
}

// Кортеж для чтения в качестве параметра функции:
function printUser(user: readonly [string,number]) {
    console.log(`Пользователь: ${user[0]} Возраст: ${user[1]}`)
}
printUser(createUser("Tolya",23))

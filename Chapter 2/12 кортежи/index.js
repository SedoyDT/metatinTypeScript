function createUser(name, age) {
    return [name, age];
}
function printUser(user) {
    console.log("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C: ".concat(user[0], " \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(user[1]));
}
printUser(createUser("Tolya", 23));

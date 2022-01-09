var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.printPerson = function () {
        console.log("\u0418\u043C\u044F: ".concat(this.name, "\u00A0 \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(this.age));
    };
    return Person;
}());

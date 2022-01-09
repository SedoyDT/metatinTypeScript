var User = /** @class */ (function () {
    function User(userName, userAge) {
        this.name = "Dedault name";
        this.name = userName;
        this.age = userAge;
    }
    User.prototype.print = function () {
        console.log("name: ".concat(this.name, " age: ").concat(this.age));
    };
    User.prototype.toString = function () {
        return "".concat(this.name, " ").concat(this.age);
    };
    return User;
}());
var tom = new User("Tolya", 23);
// tom.name = "Tom"; // Тут теперь ошибка т.к свойство readonly
tom.age = 36;
tom.print();
console.log(tom.toString());

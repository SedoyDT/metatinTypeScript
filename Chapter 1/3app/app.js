var User = (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
var tom = new User("Tom1");
console.log("Hello ", tom.name);

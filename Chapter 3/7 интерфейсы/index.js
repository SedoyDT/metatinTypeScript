var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        console.log("\u041C\u0430\u0448\u0438\u043D\u0430 \u0435\u0434\u0435\u0442 \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E ".concat(this.speed, " \u043A\u043C/\u0447"));
    };
    Car.prototype.fill = function () {
        console.log("\u0417\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u043C\u0430\u0448\u0438\u043D\u0443 \u0442\u043E\u043F\u043B\u0438\u0432\u043E\u043C");
    };
    return Car;
}());
var auto = new Car();
auto.speed = 60;
auto.move();
auto.fill();

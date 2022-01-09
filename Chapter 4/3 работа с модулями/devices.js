// Вариант экспорта 1
var Phone = /** @class */ (function () {
    function Phone(n) {
        this.name = n;
    }
    return Phone;
}());
export { Phone };
// Вариант экспорта 1
export function call(phone) {
    console.log("Make a call by ".concat(phone.name));
}
// Вариант экспорта 2
// export {Device, Phone, call};

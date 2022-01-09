// Массив определяется с помощью выражения [] и является строго типизированным.
// То есть изначально массив был содержит строки, то в будущем он сможет работать только со строками
var list = [10, 20, 30];
var colors = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);
var people = ["Tom", "Bob", "Sam"];
function printUsers(users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log(user);
    }
}
function usersToString(users) {
    return users.join(", ");
}
printUsers(people);
console.log(usersToString(people));

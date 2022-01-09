// Массив определяется с помощью выражения [] и является строго типизированным.
// То есть изначально массив был содержит строки, то в будущем он сможет работать только со строками
let list: number[] = [10,20,30];
let colors: string[] = ["red","green","blue"];
console.log(list[0])
console.log(colors[1])

const people: ReadonlyArray<string> = ["Tom", "Bob", "Sam"];

function printUsers(users: readonly string[]) {
    for(const user of users){
        console.log(user);
    }
}

function usersToString(users: ReadonlyArray<string>): String{

    return users.join(", ");
}


printUsers(people);
console.log(usersToString(people));

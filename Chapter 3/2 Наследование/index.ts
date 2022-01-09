class Person {
    name: string;
    age: number;

    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `${this.name}: ${this.age}`
    }

    print(){
        console.log(`Пользователь: ${this.name} возраст: ${this.age}`)
    }
}

class Employee extends Person {

    company: string;
    constructor(name:string,age:number,company:string) {
        super(name,age);
        this.company = company;
    }
    print(): void {
        console.log(`Имя: ${this.name}`);
        console.log(`Работает в компании: ${this.company}`);
    }

}

let Bob: Employee = new Employee("Bob",21,"Google")
Bob.print()

class User {

    readonly name: string = "Dedault name";
    age: number;

   constructor(userName:string,userAge:number) {
        this.name = userName
        this.age = userAge

    }
    print() {
        console.log(`name: ${this.name} age: ${this.age}`)
    }

    toString(): string {
        return `${this.name} ${this.age}`
    }
 }

let tom = new User("Tolya",23);
// tom.name = "Tom";
tom.age = 36;
tom.print()
console.log(tom.toString())

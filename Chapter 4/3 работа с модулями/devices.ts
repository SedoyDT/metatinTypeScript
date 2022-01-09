// Вариант экспорта 1
export
interface Device {
    name: string;
}

// Вариант экспорта 1
export
class Phone implements Device {
    name: string;
    constructor(n: string){
        this.name = n;
    }
}

// Вариант экспорта 1
export
function call(phone: Phone): void {
    console.log(`Make a call by ${phone.name}`)
}
// Вариант экспорта 2
// export {Device, Phone, call};


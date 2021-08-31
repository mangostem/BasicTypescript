// 2-14 静态属性，Setter和Getter

class Person {
    constructor(private _name: string) {
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

const person = new Person("mango");
person.name = "mango lin"
console.log(person.name)


// 同一個instance
class Demo{

    private static instance: Demo;
    private constructor(public name: string){}

    static getInstance() {
        if(!this.instance){
            this.instance = new Demo("mango lin");
        }
        return this.instance;
    }
}

const demo = Demo.getInstance();
console.log(demo.name)

















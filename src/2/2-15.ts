// 2-15 抽象类
// readonly
// class Person1 {
//
//     public readonly name: string;
//
//     constructor() {
//         this.name = "mango";
//     }
// }

// const person1 = new Person1();
// console.log(person1.name);

// 抽象类

abstract class geom {
    abstract getArea(): number;
}

class Circle extends geom {
    getArea() {
        return 123;
    }
}

class Square extends geom {
    getArea() {
        return 123;
    }
}

class Triangle extends geom {
    getArea() {
        return 123;
    }
}










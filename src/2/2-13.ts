//2-13 类中的访问类型和构造器
// class Person {
//     private name = 'mango';
//
//     getName(): string {
//         return this.name;
//     }
//
//     setName(value: string) {
//         this.name = value;
//     }
// }
//
// class Teacher extends Person {
//     sayBye(){
//
//     }
// }
//
// const teacher = new Teacher();
// // console.log(teacher.getTeacherName())
// console.log(teacher.getName())
//
//
//

class Person {
    // 傳統寫法
    // public name = 'dd'
    // constructor(name: string) {
    //     this.name = name;
    // }

    // 簡易寫法
    constructor(public name: string) {
    }
}

class teacher extends Person {
    constructor(public age: number) {
        // 有繼承一定要用super()
        super("mango")
    }
}

const person = new teacher(28);
console.log(person.age)
console.log(person.name)







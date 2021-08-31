class Person {
    private name = 'mango';

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }
}

class Teacher extends Person {
    getTeacherName (){
        return 'lee';
    }

    getName (){
        return super.getName() + ' lee';
    }
}

const teacher = new Teacher();
// console.log(teacher.getTeacherName())
console.log(teacher.getName())

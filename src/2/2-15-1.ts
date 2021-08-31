
// 介面
interface Person {
    name: string;
}

interface Teacher extends Person{
    teacherAge: number;
}

interface Student extends Person{
    studentAge: number;
}

interface Driver extends Person{
    driverAge: number;
}

const teacher = {
    name: 'mango',
    teacherAge: 3
}

const student = {
    name: 'ang',
    age: 10
}

const getUserInfo = (user: Person) =>{
    console.log(user.name);

}

getUserInfo(teacher);


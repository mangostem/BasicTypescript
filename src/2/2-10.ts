// 數組
const arr: (number | string)[] = [1, '2', 3,];
const stringArr: string[] = ['1', '2', '3'];
const undefinedArr: undefined[] = [undefined];

// type alias
type User = { name: string, age: number };

class Teacher {
    name: string;
    age: number;
}

const userArr: User[] = [
    {
        "name": "mango",
        "age": 18
    }
]
const teacherArr: Teacher[] = [
    {
        "name": "mango",
        "age": 18
    }
]

// 元組 tuple 固定
const teacherInfo: [string, string, number] = ['Dell', 'male', 18];
// 應用場景 例如csv
const teacherList: [string, string, number][] = [
    ['name1', 'sex', 0],
    ['name2', 'sex', 0],
    ['name3', 'sex', 0]
]















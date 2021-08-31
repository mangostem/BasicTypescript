// interface 和 type 差異在於
// type可以為基礎類型。
// interface不能，只能為Object或函數。
// interface

interface Person {
    name: string,
    age?: number,
    readonly test?: string, // readonly不可修改
    say(): string

    [propName: string]: any //額外的屬性
}

type Person1 = string;

interface Teacher extends Person {
    teach(): string;
}

interface SayHi {
    (word: string): string;
}

const getPersonName = (person: Person): void => {
    console.log(person.name)
}

const setPersonName = (person: Teacher, name: string): void => {
    person.name = name;
}

const person = {
    name: 'mango',
    sex: 'male',
    say() {
        return 'say hello'
    },
    teach() {
        return 'say hello'
    }
}
// 正常宣告一個person變數，可以多參數
// 但如果以字面量的方式就會有問題
/**
 getPersonName({
    name: 'mango',
    sex: 'male'
})
 */

// 解決上面的問題可在interface加上[propName: string]: any
getPersonName({
    name: 'mango',
    sex: 'male',
    say() {
        return 'say hello'
    }
})
getPersonName(person)
setPersonName(person, 'super man')
getPersonName(person)


class User implements Person {
    name: string;

    say() {
        return "hello";
    }
}

const say: SayHi = (word: string) => {
    return word;
}






























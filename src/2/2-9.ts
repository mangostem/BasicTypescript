// 基礎類型: boolean, number, string, void, undfined, symbol, null
const count = 123;

// 對象類型, {}, Class, function, []
const func = (str: string): number => {
    return parseInt(str);
}

const func1: (str: string) => number = (str) => {
    return parseInt(str);
}

interface Person {
    name: string
}

const rowData = '{"name": "Mango"}'
const newData: Person = JSON.parse(rowData);

let temper: string | number = 123;  
temper = '123';

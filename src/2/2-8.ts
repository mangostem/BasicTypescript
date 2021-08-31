function hello() {
}

const hello1 = function () {
}
const hello2 = (): void => {
    console.log('hello2')
}

hello2();

// never 表示這個函數永遠不可能執行完成
function errorEmitter(): never {
    throw new Error();
    //console 永遠不可能執行完成
    console.log("----")
}

// 承上
function errorEmitter1(): never {
    //console 永遠不可能執行完成
    while (true) {
    }
}

function add({first, second}: { first: number, second: number }): number {
    return first + second;
}

const addResult = add({first: 1, second: 2})

console.log(addResult)












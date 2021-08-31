

const getTotal: () => number = () => {
    return 123;
}
const getTotal1: (obj) => number = (obj) => {
    console.log(obj)
    return 123;
}

console.log(getTotal1('222'))

// 1. Given any array remove duplicates and create a array of unique elements.
// output const outputArray = [1, 9, -1, 22, 10, 2, -2, 11]

const array = [1, 9, -1, 22, 10, 1, 22, 2, 1, -2, -1, 11, 22]

const result = Array.from(new Set(array))

console.log(result)
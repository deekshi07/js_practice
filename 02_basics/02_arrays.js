const marvelHeros= [ 'thor','ironman','spiderman']
const dcHeros = ['superman','flash','batman']

const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)
// console.log(allHeros.join(" "))

const myNewArray = [1,2,3,4,[3,4,5,6,[3,3,5,56],4,5,6,6],5,6,6,7]

console.log(myNewArray.flat(Infinity))
console.log(Array)
console.log(Array.from({name :'deelksjot'}))

console.log(...marvelHeros,...dcHeros)
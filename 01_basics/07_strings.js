const name = 'deekshith';
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

console.log(name[0])
console.log(name[1])

console.log(name.__proto__);

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.indexOf('t'))

const newName = name.substring(0,5)
console.log(newName)

const anotherName = name.slice(0,4)
console.log(anotherName)

const newOne = "     deeks  hith  "

console.log(newOne.trim())


const url = "https//deekshith.com/deekshith%20acharya"
console.log(url.replace('%20','-'))
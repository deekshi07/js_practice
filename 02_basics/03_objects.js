const mySym = Symbol('key1')


const myObject = {
    name : 'deekshith',
    age : 24,
    [mySym]: 'myKey1',
    emial : 'sjdeekshith5@gmail.com',
    'location': 'Bengaluru',
    'full name': 'Deekshith Acharya'
}

// console.log(myObject['location'])
// console.log(myObject['full name'])
// console.log(typeof(myObject[mySym]))


// myObject.age=33

// console.log(myObject)


myObject.greeting = function(){
    console.log(`hello my objects, ${ this["full name"]}`)
}
console.log(myObject.greeting())

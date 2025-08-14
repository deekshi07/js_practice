// stack (primitive), heap(non primitive)

let myName = 'deekshith'

let anotherName = myName
anotherName = 'chai'

console.log(myName)
console.log(anotherName)

let user ={
    email : 'userOne@gmail.com',
    upi : 'user'
}


let newUser = user

newUser.email ='newuser@gmail.com'

console.log(user.email)
console.log(newUser.email)
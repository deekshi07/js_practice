// 01_functions.js - Functions, Rest Parameters & Objects

// Function Declaration vs Expression
function calculateCartPrice(val1, val2, ...remainingItems) {
    // Rest operator gathers arbitrary extra arguments into an array
    return remainingItems;
}

console.log(calculateCartPrice(200, 400, 500, 2000, 150)); // [500, 2000, 150]

// Passing Object to Function
const user = {
    username: "deekshith",
    price: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

// Returning Arrays from Functions
function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue([100, 200, 300])); // 200
